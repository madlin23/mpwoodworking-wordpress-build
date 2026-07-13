<?php
/**
 * WooCommerce-Integration für echte Einzelstücke.
 *
 * @package MPWoodworkingCore
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class MPW_WooCommerce {
	private const UNIQUE_META = '_mpw_unique_piece';

	/**
	 * Registriert Hooks unabhängig davon, ob WooCommerce bereits aktiv ist.
	 */
	public static function init(): void {
		add_action( 'before_woocommerce_init', array( self::class, 'declare_hpos_compatibility' ) );
		add_action( 'init', array( self::class, 'register_product_meta' ) );

		if ( ! class_exists( 'WooCommerce' ) ) {
			return;
		}

		add_action( 'woocommerce_product_options_inventory_product_data', array( self::class, 'render_unique_field' ) );
		add_action( 'woocommerce_admin_process_product_object', array( self::class, 'save_unique_field' ) );
		add_filter( 'woocommerce_quantity_input_max', array( self::class, 'limit_quantity_max' ), 10, 2 );
		add_filter( 'woocommerce_quantity_input_min', array( self::class, 'limit_quantity_min' ), 10, 2 );
		add_filter( 'woocommerce_add_to_cart_validation', array( self::class, 'validate_unique_add_to_cart' ), 10, 6 );
		add_filter( 'woocommerce_get_availability_text', array( self::class, 'filter_availability_text' ), 10, 2 );
	}

	/**
	 * Meldet Kompatibilität mit WooCommerce HPOS.
	 */
	public static function declare_hpos_compatibility(): void {
		if ( class_exists( '\\Automattic\\WooCommerce\\Utilities\\FeaturesUtil' ) ) {
			\Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility( 'custom_order_tables', MPW_CORE_FILE, true );
		}
	}

	/**
	 * Registriert das Unikat-Metafeld für REST und Editor.
	 */
	public static function register_product_meta(): void {
		register_post_meta(
			'product',
			self::UNIQUE_META,
			array(
				'type'              => 'string',
				'single'            => true,
				'default'           => 'no',
				'show_in_rest'      => true,
				'sanitize_callback' => static function ( mixed $value ): string {
					return 'yes' === $value ? 'yes' : 'no';
				},
				'auth_callback'     => static function (): bool {
					return current_user_can( 'edit_products' );
				},
			)
		);
	}

	/**
	 * Fügt das Unikat-Feld in den Inventarbereich der Produktbearbeitung ein.
	 */
	public static function render_unique_field(): void {
		woocommerce_wp_checkbox(
			array(
				'id'          => self::UNIQUE_META,
				'label'       => __( 'MP Unikat', 'mpwoodworking-core' ),
				'description' => __( 'Als echtes Einzelstück behandeln: Bestand maximal 1, einzeln verkauft, keine Nachbestellungen.', 'mpwoodworking-core' ),
				'desc_tip'    => true,
			)
		);
	}

	/**
	 * Speichert die Unikat-Einstellung und setzt sichere Lagerregeln.
	 *
	 * @param WC_Product $product Produktobjekt.
	 */
	public static function save_unique_field( WC_Product $product ): void {
		$is_unique = isset( $_POST[ self::UNIQUE_META ] ) ? 'yes' : 'no';
		$product->update_meta_data( self::UNIQUE_META, $is_unique );

		if ( 'yes' !== $is_unique ) {
			return;
		}

		$product->set_sold_individually( true );
		$product->set_manage_stock( true );
		$product->set_backorders( 'no' );

		if ( null === $product->get_stock_quantity( 'edit' ) && 'instock' === $product->get_stock_status( 'edit' ) ) {
			$product->set_stock_quantity( 1 );
		}

		if ( null !== $product->get_stock_quantity( 'edit' ) && $product->get_stock_quantity( 'edit' ) > 1 ) {
			$product->set_stock_quantity( 1 );
		}
	}

	/**
	 * Prüft, ob ein Produkt als MP-Unikat markiert ist.
	 */
	private static function is_unique_product( int $product_id ): bool {
		return 'yes' === get_post_meta( $product_id, self::UNIQUE_META, true );
	}

	/**
	 * Begrenzt die maximal auswählbare Anzahl auf eins.
	 *
	 * @param float|int  $max Maximalwert.
	 * @param WC_Product $product Produkt.
	 * @return float|int
	 */
	public static function limit_quantity_max( float|int $max, WC_Product $product ): float|int {
		return self::is_unique_product( $product->get_id() ) ? 1 : $max;
	}

	/**
	 * Setzt die Mindestmenge eines verfügbaren Unikats auf eins.
	 *
	 * @param float|int  $min Mindestwert.
	 * @param WC_Product $product Produkt.
	 * @return float|int
	 */
	public static function limit_quantity_min( float|int $min, WC_Product $product ): float|int {
		return self::is_unique_product( $product->get_id() ) ? 1 : $min;
	}

	/**
	 * Verhindert Mengen über eins und doppelte Unikate im Warenkorb.
	 *
	 * @param bool  $passed Bisheriger Prüfstatus.
	 * @param int   $product_id Produkt-ID.
	 * @param int   $quantity Gewünschte Menge.
	 * @param int   $variation_id Varianten-ID.
	 * @param array $variations Variantenwerte.
	 * @param array $cart_item_data Warenkorbdaten.
	 */
	public static function validate_unique_add_to_cart(
		bool $passed,
		int $product_id,
		int $quantity,
		int $variation_id = 0,
		array $variations = array(),
		array $cart_item_data = array()
	): bool {
		unset( $variations, $cart_item_data );
		$check_id = $variation_id > 0 ? $variation_id : $product_id;
		$is_unique = self::is_unique_product( $check_id ) || ( $variation_id > 0 && self::is_unique_product( $product_id ) );

		if ( ! $is_unique ) {
			return $passed;
		}

		if ( $quantity > 1 ) {
			wc_add_notice( __( 'Dieses Unikat ist nur einmal verfügbar.', 'mpwoodworking-core' ), 'error' );
			return false;
		}

		if ( WC()->cart ) {
			foreach ( WC()->cart->get_cart() as $cart_item ) {
				$cart_product_id   = isset( $cart_item['product_id'] ) ? absint( $cart_item['product_id'] ) : 0;
				$cart_variation_id = isset( $cart_item['variation_id'] ) ? absint( $cart_item['variation_id'] ) : 0;
				if ( $product_id === $cart_product_id && $variation_id === $cart_variation_id ) {
					wc_add_notice( __( 'Dieses Unikat befindet sich bereits im Warenkorb.', 'mpwoodworking-core' ), 'error' );
					return false;
				}
			}
		}

		return $passed;
	}

	/**
	 * Präzisiert die Lageranzeige für Unikate.
	 *
	 * @param string     $availability Aktueller Text.
	 * @param WC_Product $product Produkt.
	 */
	public static function filter_availability_text( string $availability, WC_Product $product ): string {
		if ( ! self::is_unique_product( $product->get_id() ) ) {
			return $availability;
		}

		// Der dynamische Block `mpwoodworking/unique-badge` ist die einzige sichtbare
		// Statusquelle im Produkt-Template. Der WooCommerce-Kaufblock bleibt dadurch
		// frei von einer zweiten, identischen Verfügbarkeitszeile.
		return '';
	}
}
