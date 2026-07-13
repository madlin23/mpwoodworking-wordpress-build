<?php
/**
 * Dynamische MP-Woodworking-Blöcke.
 *
 * @package MPWoodworkingCore
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class MPW_Blocks {
	/**
	 * Registriert den Block-Hook.
	 */
	public static function init(): void {
		add_action( 'init', array( self::class, 'register_blocks' ), 20 );
	}

	/**
	 * Registriert leichtgewichtige dynamische Blöcke ohne Frontend-JavaScript.
	 */
	public static function register_blocks(): void {
		register_block_type(
			'mpwoodworking/project-details',
			array(
				'api_version'     => 3,
				'title'           => __( 'MP Projektdetails', 'mpwoodworking-core' ),
				'description'     => __( 'Zeigt Jahr, Holzart, Dauer, Maße und Ort des aktuellen Projekts.', 'mpwoodworking-core' ),
				'category'        => 'widgets',
				'icon'            => 'hammer',
				'uses_context'    => array( 'postId', 'postType' ),
				'supports'        => array(
					'html'  => false,
					'align' => array( 'wide', 'full' ),
				),
				'render_callback' => array( self::class, 'render_project_details' ),
			)
		);

		register_block_type(
			'mpwoodworking/related-products',
			array(
				'api_version'     => 3,
				'title'           => __( 'MP Verknüpfte Produkte', 'mpwoodworking-core' ),
				'description'     => __( 'Zeigt die im Projekt hinterlegten WooCommerce-Produkte.', 'mpwoodworking-core' ),
				'category'        => 'woocommerce',
				'icon'            => 'products',
				'uses_context'    => array( 'postId', 'postType' ),
				'supports'        => array(
					'html'  => false,
					'align' => array( 'wide', 'full' ),
				),
				'render_callback' => array( self::class, 'render_related_products' ),
			)
		);

		register_block_type(
			'mpwoodworking/unique-badge',
			array(
				'api_version'     => 3,
				'title'           => __( 'MP Unikat-Status', 'mpwoodworking-core' ),
				'description'     => __( 'Kennzeichnet ein WooCommerce-Produkt als verfügbares oder verkauftes Einzelstück.', 'mpwoodworking-core' ),
				'category'        => 'woocommerce',
				'icon'            => 'star-filled',
				'uses_context'    => array( 'postId', 'postType' ),
				'supports'        => array( 'html' => false ),
				'render_callback' => array( self::class, 'render_unique_badge' ),
			)
		);

		register_block_type(
			'mpwoodworking/shop-filters',
			array(
				'api_version'     => 3,
				'title'           => __( 'MP Shopfilter', 'mpwoodworking-core' ),
				'description'     => __( 'Zeigt Produktkategorien, Holzart, Preis und Verfügbarkeit mit den aktuellen WooCommerce-Filterblöcken.', 'mpwoodworking-core' ),
				'category'        => 'woocommerce',
				'icon'            => 'filter',
				'supports'        => array(
					'html'  => false,
					'align' => array( 'wide', 'full' ),
				),
				'render_callback' => array( self::class, 'render_shop_filters' ),
			)
		);
	}

	/**
	 * Ermittelt die Post-ID aus Block-Kontext oder Hauptabfrage.
	 *
	 * @param WP_Block|null $block Blockinstanz.
	 */
	private static function get_context_post_id( ?WP_Block $block ): int {
		if ( $block instanceof WP_Block && isset( $block->context['postId'] ) ) {
			return absint( $block->context['postId'] );
		}

		return absint( get_the_ID() );
	}

	/**
	 * Rendert strukturierte Projektdetails.
	 *
	 * @param array         $attributes Blockattribute.
	 * @param string        $content Gespeicherter Inhalt.
	 * @param WP_Block|null $block Blockinstanz.
	 */
	public static function render_project_details( array $attributes, string $content, ?WP_Block $block = null ): string {
		$post_id = self::get_context_post_id( $block );
		if ( MPW_Content::POST_TYPE !== get_post_type( $post_id ) ) {
			return '';
		}

		$details = array(
			__( 'Jahr', 'mpwoodworking-core' )         => (string) get_post_meta( $post_id, '_mpw_project_year', true ),
			__( 'Projektdauer', 'mpwoodworking-core' ) => (string) get_post_meta( $post_id, '_mpw_project_duration', true ),
			__( 'Maße', 'mpwoodworking-core' )         => (string) get_post_meta( $post_id, '_mpw_project_dimensions', true ),
			__( 'Ort', 'mpwoodworking-core' )          => (string) get_post_meta( $post_id, '_mpw_project_location', true ),
		);
		$terms   = get_the_terms( $post_id, MPW_Content::TAXONOMY );

		if ( ! is_wp_error( $terms ) && ! empty( $terms ) ) {
			$details = array_merge(
				array( __( 'Holzart', 'mpwoodworking-core' ) => implode( ', ', wp_list_pluck( $terms, 'name' ) ) ),
				$details
			);
		}

		$details = array_filter( $details, static fn( string $value ): bool => '' !== trim( $value ) );
		if ( empty( $details ) ) {
			return is_admin()
				? '<div ' . get_block_wrapper_attributes( array( 'class' => 'mp-project-details is-style-mp-panel' ) ) . '><p>' . esc_html__( 'Projektdetails im Feldbereich unter dem Editor ergänzen.', 'mpwoodworking-core' ) . '</p></div>'
				: '';
		}

		$html  = '<aside ' . get_block_wrapper_attributes( array( 'class' => 'mp-project-details is-style-mp-panel' ) ) . '>';
		$html .= '<p class="mp-kicker">' . esc_html__( 'Projektdaten', 'mpwoodworking-core' ) . '</p>';
		$html .= '<h2 class="wp-block-heading">' . esc_html__( 'Auf einen Blick', 'mpwoodworking-core' ) . '</h2>';
		$html .= '<dl class="mp-detail-list">';

		foreach ( $details as $label => $value ) {
			$html .= '<div class="mp-detail-list__item"><dt>' . esc_html( $label ) . '</dt><dd>' . esc_html( $value ) . '</dd></div>';
		}

		$html .= '</dl></aside>';
		return $html;
	}

	/**
	 * Rendert die im Projekt gepflegten WooCommerce-Produkte.
	 *
	 * @param array         $attributes Blockattribute.
	 * @param string        $content Gespeicherter Inhalt.
	 * @param WP_Block|null $block Blockinstanz.
	 */
	public static function render_related_products( array $attributes, string $content, ?WP_Block $block = null ): string {
		$post_id = self::get_context_post_id( $block );
		$ids     = MPW_Content::sanitize_id_array( get_post_meta( $post_id, '_mpw_related_product_ids', true ) );

		if ( ! function_exists( 'wc_get_product' ) || empty( $ids ) ) {
			return is_admin()
				? '<div ' . get_block_wrapper_attributes( array( 'class' => 'mp-related-products is-style-mp-panel' ) ) . '><p>' . esc_html__( 'Verknüpfte, veröffentlichte WooCommerce-Produkte erscheinen hier.', 'mpwoodworking-core' ) . '</p></div>'
				: '';
		}

		$cards = '';
		foreach ( $ids as $product_id ) {
			$product = wc_get_product( $product_id );
			if ( ! $product || 'publish' !== get_post_status( $product_id ) || ! $product->is_visible() ) {
				continue;
			}

			$url   = get_permalink( $product_id );
			$image = $product->get_image( 'woocommerce_thumbnail', array( 'loading' => 'lazy' ) );
			$cards .= '<article class="mp-product-card">';
			$cards .= '<a class="mp-product-card__image" href="' . esc_url( $url ) . '">' . wp_kses_post( $image ) . '</a>';
			$cards .= '<div class="mp-product-card__body">';
			$cards .= '<h3 class="wp-block-heading"><a href="' . esc_url( $url ) . '">' . esc_html( $product->get_name() ) . '</a></h3>';
			$cards .= '<div class="price">' . wp_kses_post( $product->get_price_html() ) . '</div>';
			$cards .= '<a class="wp-element-button" href="' . esc_url( $url ) . '">' . esc_html__( 'Unikat ansehen', 'mpwoodworking-core' ) . '</a>';
			$cards .= '</div></article>';
		}

		if ( '' === $cards ) {
			return '';
		}

		return '<div ' . get_block_wrapper_attributes( array( 'class' => 'mp-related-products' ) ) . '><div class="mp-related-products__grid">' . $cards . '</div></div>';
	}

	/**
	 * Rendert den Unikatstatus des aktuellen WooCommerce-Produkts.
	 *
	 * @param array         $attributes Blockattribute.
	 * @param string        $content Gespeicherter Inhalt.
	 * @param WP_Block|null $block Blockinstanz.
	 */
	public static function render_unique_badge( array $attributes, string $content, ?WP_Block $block = null ): string {
		$product_id = self::get_context_post_id( $block );
		if ( 'yes' !== get_post_meta( $product_id, '_mpw_unique_piece', true ) || ! function_exists( 'wc_get_product' ) ) {
			return '';
		}

		$product = wc_get_product( $product_id );
		if ( ! $product ) {
			return '';
		}

		$is_sold = ! $product->is_in_stock();
		$label   = $is_sold ? __( 'Verkauftes Unikat', 'mpwoodworking-core' ) : __( 'Verfügbares Unikat · nur 1×', 'mpwoodworking-core' );
		$class   = $is_sold ? 'mp-unique-badge is-sold' : 'mp-unique-badge';

		return '<p ' . get_block_wrapper_attributes( array( 'class' => $class ) ) . '>' . esc_html( $label ) . '</p>';
	}

	/**
	 * Rendert aktuelle WooCommerce-Produktfilter mit optionalem Holzart-Attribut.
	 *
	 * Die WooCommerce-Attribut-ID ist installationsabhängig und wird deshalb
	 * erst zur Laufzeit anhand von Slug oder Bezeichnung ermittelt.
	 */
	public static function render_shop_filters(): string {
		if ( ! class_exists( 'WooCommerce' ) || ! function_exists( 'wc_get_attribute_taxonomies' ) ) {
			return is_admin()
				? '<div ' . get_block_wrapper_attributes( array( 'class' => 'mp-shop-filters is-style-mp-panel' ) ) . '><p>' . esc_html__( 'WooCommerce aktivieren, um die Shopfilter anzuzeigen.', 'mpwoodworking-core' ) . '</p></div>'
				: '';
		}

		$wood_attribute_id = 0;
		foreach ( wc_get_attribute_taxonomies() as $attribute ) {
			$name  = isset( $attribute->attribute_name ) ? sanitize_title( (string) $attribute->attribute_name ) : '';
			$label = isset( $attribute->attribute_label ) ? sanitize_title( (string) $attribute->attribute_label ) : '';
			if ( in_array( $name, array( 'holz', 'holzart' ), true ) || in_array( $label, array( 'holz', 'holzart' ), true ) ) {
				$wood_attribute_id = isset( $attribute->attribute_id ) ? absint( $attribute->attribute_id ) : 0;
				break;
			}
		}

		$heading_style = '{"spacing":{"margin":{"bottom":"0.625rem","top":"0"}}}';
		$markup        = '<!-- wp:woocommerce/product-filters {"showFilterDrawer":true,"className":"mp-shop-filters"} -->'
			. '<div class="wp-block-woocommerce-product-filters wc-block-product-filters mp-shop-filters">'
			. '<!-- wp:woocommerce/product-filter-active -->'
			. '<div class="wp-block-woocommerce-product-filter-active">'
			. '<!-- wp:woocommerce/product-filter-removable-chips {"lock":{"remove":true}} -->'
			. '<div class="wp-block-woocommerce-product-filter-removable-chips wc-block-product-filter-removable-chips"></div>'
			. '<!-- /wp:woocommerce/product-filter-removable-chips -->'
			. '</div><!-- /wp:woocommerce/product-filter-active -->'
			. '<!-- wp:woocommerce/product-filter-taxonomy {"taxonomy":"product_cat","sortOrder":"name-asc"} -->'
			. '<div class="wp-block-woocommerce-product-filter-taxonomy">'
			. '<!-- wp:heading {"level":3,"style":' . $heading_style . '} --><h3 class="wp-block-heading">Kategorien</h3><!-- /wp:heading -->'
			. '<!-- wp:woocommerce/product-filter-checkbox-list {"lock":{"remove":true}} -->'
			. '<div class="wp-block-woocommerce-product-filter-checkbox-list wc-block-product-filter-checkbox-list"></div>'
			. '<!-- /wp:woocommerce/product-filter-checkbox-list -->'
			. '</div><!-- /wp:woocommerce/product-filter-taxonomy -->';

		if ( $wood_attribute_id > 0 ) {
			$markup .= '<!-- wp:woocommerce/product-filter-attribute {"attributeId":' . $wood_attribute_id . ',"sortOrder":"name-asc"} -->'
				. '<div class="wp-block-woocommerce-product-filter-attribute">'
				. '<!-- wp:heading {"level":3,"style":' . $heading_style . '} --><h3 class="wp-block-heading">Holzart</h3><!-- /wp:heading -->'
				. '<!-- wp:woocommerce/product-filter-checkbox-list {"lock":{"remove":true}} -->'
				. '<div class="wp-block-woocommerce-product-filter-checkbox-list wc-block-product-filter-checkbox-list"></div>'
				. '<!-- /wp:woocommerce/product-filter-checkbox-list -->'
				. '</div><!-- /wp:woocommerce/product-filter-attribute -->';
		}

		$markup .= '<!-- wp:woocommerce/product-filter-price -->'
			. '<div class="wp-block-woocommerce-product-filter-price">'
			. '<!-- wp:heading {"level":3,"style":' . $heading_style . '} --><h3 class="wp-block-heading">Preis</h3><!-- /wp:heading -->'
			. '<!-- wp:woocommerce/product-filter-price-slider {"lock":{"remove":true}} /-->'
			. '</div><!-- /wp:woocommerce/product-filter-price -->'
			. '<!-- wp:woocommerce/product-filter-status -->'
			. '<div class="wp-block-woocommerce-product-filter-status">'
			. '<!-- wp:heading {"level":3,"style":' . $heading_style . '} --><h3 class="wp-block-heading">Verfügbarkeit</h3><!-- /wp:heading -->'
			. '<!-- wp:woocommerce/product-filter-checkbox-list {"lock":{"remove":true}} -->'
			. '<div class="wp-block-woocommerce-product-filter-checkbox-list wc-block-product-filter-checkbox-list"></div>'
			. '<!-- /wp:woocommerce/product-filter-checkbox-list -->'
			. '</div><!-- /wp:woocommerce/product-filter-status -->'
			. '</div><!-- /wp:woocommerce/product-filters -->';

		return '<section ' . get_block_wrapper_attributes( array( 'class' => 'mp-shop-filter-shell alignwide' ) ) . '><h2 class="screen-reader-text">' . esc_html__( 'Shop filtern', 'mpwoodworking-core' ) . '</h2>' . do_blocks( $markup ) . '</section>';
	}
}
