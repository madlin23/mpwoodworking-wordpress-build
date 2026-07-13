<?php
/**
 * Projekt-Inhaltstypen und Metadaten.
 *
 * @package MPWoodworkingCore
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class MPW_Content {
	public const POST_TYPE = 'projekt';
	public const TAXONOMY  = 'holzart';

	/**
	 * Registriert WordPress-Hooks.
	 */
	public static function init(): void {
		add_action( 'init', array( self::class, 'register_content_types' ) );
		add_action( 'init', array( self::class, 'register_meta' ) );
	}

	/**
	 * Registriert den Projekt-CPT und die Holzarten-Taxonomie.
	 */
	public static function register_content_types(): void {
		register_post_type(
			self::POST_TYPE,
			array(
				'labels'              => array(
					'name'                  => __( 'Projekte', 'mpwoodworking-core' ),
					'singular_name'         => __( 'Projekt', 'mpwoodworking-core' ),
					'add_new_item'          => __( 'Neues Projekt anlegen', 'mpwoodworking-core' ),
					'edit_item'             => __( 'Projekt bearbeiten', 'mpwoodworking-core' ),
					'new_item'              => __( 'Neues Projekt', 'mpwoodworking-core' ),
					'view_item'             => __( 'Projekt ansehen', 'mpwoodworking-core' ),
					'search_items'          => __( 'Projekte durchsuchen', 'mpwoodworking-core' ),
					'not_found'             => __( 'Keine Projekte gefunden.', 'mpwoodworking-core' ),
					'not_found_in_trash'    => __( 'Keine Projekte im Papierkorb gefunden.', 'mpwoodworking-core' ),
					'all_items'             => __( 'Alle Projekte', 'mpwoodworking-core' ),
					'archives'              => __( 'Projektarchiv', 'mpwoodworking-core' ),
					'featured_image'        => __( 'Projekt-Titelbild', 'mpwoodworking-core' ),
					'set_featured_image'    => __( 'Projekt-Titelbild festlegen', 'mpwoodworking-core' ),
					'remove_featured_image' => __( 'Projekt-Titelbild entfernen', 'mpwoodworking-core' ),
				),
				'public'              => true,
				'show_in_rest'        => true,
				'menu_icon'           => 'dashicons-hammer',
				'has_archive'         => 'projekte',
				'rewrite'             => array(
					'slug'       => 'projekte',
					'with_front' => false,
				),
				'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions', 'custom-fields' ),
				'template_lock'       => false,
				'menu_position'       => 21,
				'show_in_nav_menus'   => true,
				'publicly_queryable'  => true,
				'exclude_from_search' => false,
			),
		);

		register_taxonomy(
			self::TAXONOMY,
			array( self::POST_TYPE ),
			array(
				'labels'            => array(
					'name'          => __( 'Holzarten', 'mpwoodworking-core' ),
					'singular_name' => __( 'Holzart', 'mpwoodworking-core' ),
					'add_new_item'  => __( 'Neue Holzart hinzufügen', 'mpwoodworking-core' ),
					'edit_item'     => __( 'Holzart bearbeiten', 'mpwoodworking-core' ),
					'search_items'  => __( 'Holzarten durchsuchen', 'mpwoodworking-core' ),
					'all_items'     => __( 'Alle Holzarten', 'mpwoodworking-core' ),
				),
				'public'            => true,
				'hierarchical'      => false,
				'show_in_rest'      => true,
				'show_admin_column' => true,
				'rewrite'           => array(
					'slug'       => 'holzart',
					'with_front' => false,
				),
			),
		);
	}

	/**
	 * Registriert strukturierte Projektfelder für Editor und REST-API.
	 */
	public static function register_meta(): void {
		$text_fields = array(
			'_mpw_project_year',
			'_mpw_project_duration',
			'_mpw_project_dimensions',
			'_mpw_project_location',
		);

		foreach ( $text_fields as $field ) {
			register_post_meta(
				self::POST_TYPE,
				$field,
				array(
					'type'              => 'string',
					'single'            => true,
					'default'           => '',
					'show_in_rest'      => true,
					'sanitize_callback' => 'sanitize_text_field',
					'auth_callback'     => static function (): bool {
						return current_user_can( 'edit_posts' );
					},
				)
			);
		}

		register_post_meta(
			self::POST_TYPE,
			'_mpw_related_product_ids',
			array(
				'type'              => 'array',
				'single'            => true,
				'default'           => array(),
				'show_in_rest'      => array(
					'schema' => array(
						'type'  => 'array',
						'items' => array( 'type' => 'integer' ),
					),
				),
				'sanitize_callback' => array( self::class, 'sanitize_id_array' ),
				'auth_callback'     => static function (): bool {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}

	/**
	 * Bereinigt eine Liste von Post-IDs.
	 *
	 * @param mixed $value Rohwert.
	 * @return int[]
	 */
	public static function sanitize_id_array( mixed $value ): array {
		if ( ! is_array( $value ) ) {
			return array();
		}

		$ids = array_map( 'absint', $value );
		$ids = array_filter( $ids );

		return array_values( array_unique( $ids ) );
	}
}
