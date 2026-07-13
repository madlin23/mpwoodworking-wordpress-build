<?php
/**
 * Redaktionelle Projektfelder im WordPress-Backend.
 *
 * @package MPWoodworkingCore
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class MPW_Admin {
	private const NONCE_ACTION = 'mpw_save_project_details';
	private const NONCE_NAME   = 'mpw_project_details_nonce';

	/**
	 * Registriert Admin-Hooks.
	 */
	public static function init(): void {
		add_action( 'add_meta_boxes_' . MPW_Content::POST_TYPE, array( self::class, 'add_project_meta_box' ) );
		add_action( 'save_post_' . MPW_Content::POST_TYPE, array( self::class, 'save_project_meta' ), 10, 2 );
	}

	/**
	 * Fügt die Projektdetails-Metabox hinzu.
	 */
	public static function add_project_meta_box(): void {
		add_meta_box(
			'mpw-project-details',
			__( 'Projektdetails & Shop-Verknüpfung', 'mpwoodworking-core' ),
			array( self::class, 'render_project_meta_box' ),
			MPW_Content::POST_TYPE,
			'normal',
			'high'
		);
	}

	/**
	 * Rendert die Projektdetails-Metabox.
	 *
	 * @param WP_Post $post Aktuelles Projekt.
	 */
	public static function render_project_meta_box( WP_Post $post ): void {
		wp_nonce_field( self::NONCE_ACTION, self::NONCE_NAME );

		$fields = array(
			'_mpw_project_year'       => __( 'Jahr', 'mpwoodworking-core' ),
			'_mpw_project_duration'   => __( 'Projektdauer', 'mpwoodworking-core' ),
			'_mpw_project_dimensions' => __( 'Maße', 'mpwoodworking-core' ),
			'_mpw_project_location'   => __( 'Ort', 'mpwoodworking-core' ),
		);

		echo '<p>' . esc_html__( 'Diese strukturierten Angaben erscheinen im Projektdetail-Block. Die Holzart wird in der Seitenleiste „Holzarten“ zugeordnet.', 'mpwoodworking-core' ) . '</p>';
		echo '<table class="form-table" role="presentation"><tbody>';

		foreach ( $fields as $key => $label ) {
			$value = (string) get_post_meta( $post->ID, $key, true );
			printf(
				'<tr><th scope="row"><label for="%1$s">%2$s</label></th><td><input class="regular-text" type="text" id="%1$s" name="%1$s" value="%3$s"></td></tr>',
				esc_attr( $key ),
				esc_html( $label ),
				esc_attr( $value )
			);
		}

		$related_ids = MPW_Content::sanitize_id_array( get_post_meta( $post->ID, '_mpw_related_product_ids', true ) );
		printf(
			'<tr><th scope="row"><label for="mpw_related_product_ids">%1$s</label></th><td><input class="regular-text" type="text" id="mpw_related_product_ids" name="mpw_related_product_ids" value="%2$s" inputmode="numeric"><p class="description">%3$s</p></td></tr>',
			esc_html__( 'Verknüpfte Produkt-IDs', 'mpwoodworking-core' ),
			esc_attr( implode( ', ', $related_ids ) ),
			esc_html__( 'WooCommerce-Produkt-IDs durch Kommas trennen, zum Beispiel: 42, 57. Nur veröffentlichte Produkte werden angezeigt.', 'mpwoodworking-core' )
		);

		echo '</tbody></table>';
	}

	/**
	 * Speichert Projektdetails mit Nonce-, Autosave- und Rechteprüfung.
	 *
	 * @param int     $post_id Projekt-ID.
	 * @param WP_Post $post Projektobjekt.
	 */
	public static function save_project_meta( int $post_id, WP_Post $post ): void {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

		if ( wp_is_post_revision( $post_id ) || MPW_Content::POST_TYPE !== $post->post_type ) {
			return;
		}

		$nonce = isset( $_POST[ self::NONCE_NAME ] ) ? sanitize_text_field( wp_unslash( $_POST[ self::NONCE_NAME ] ) ) : '';
		if ( ! wp_verify_nonce( $nonce, self::NONCE_ACTION ) ) {
			return;
		}

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		$text_fields = array(
			'_mpw_project_year',
			'_mpw_project_duration',
			'_mpw_project_dimensions',
			'_mpw_project_location',
		);

		foreach ( $text_fields as $field ) {
			$value = isset( $_POST[ $field ] ) ? sanitize_text_field( wp_unslash( $_POST[ $field ] ) ) : '';
			if ( '' === $value ) {
				delete_post_meta( $post_id, $field );
			} else {
				update_post_meta( $post_id, $field, $value );
			}
		}

		$raw_ids = isset( $_POST['mpw_related_product_ids'] ) ? sanitize_text_field( wp_unslash( $_POST['mpw_related_product_ids'] ) ) : '';
		$ids     = MPW_Content::sanitize_id_array( preg_split( '/\s*,\s*/', $raw_ids, -1, PREG_SPLIT_NO_EMPTY ) );

		if ( empty( $ids ) ) {
			delete_post_meta( $post_id, '_mpw_related_product_ids' );
		} else {
			update_post_meta( $post_id, '_mpw_related_product_ids', $ids );
		}
	}
}
