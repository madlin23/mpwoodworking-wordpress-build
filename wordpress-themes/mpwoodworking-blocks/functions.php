<?php
/**
 * MP Woodworking Blocks theme setup.
 *
 * @package MPWoodworkingBlocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Register theme supports and editor styles.
 */
function mpwoodworking_blocks_setup(): void {
	load_theme_textdomain( 'mpwoodworking-blocks', get_template_directory() . '/languages' );

	add_theme_support( 'align-wide' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'woocommerce' );
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );

	add_editor_style( 'assets/css/theme.css' );
	add_editor_style( 'assets/css/source-match.css' );
}
add_action( 'after_setup_theme', 'mpwoodworking_blocks_setup' );

/**
 * Enqueue the small layer of interaction and compatibility CSS that is not suitable
 * for theme.json. WordPress generates the majority of styles from global settings.
 */
function mpwoodworking_blocks_enqueue_assets(): void {
	$theme = wp_get_theme();

	wp_enqueue_style(
		'mpwoodworking-blocks',
		get_theme_file_uri( 'assets/css/theme.css' ),
		array(),
		(string) $theme->get( 'Version' )
	);

	wp_enqueue_style(
		'mpwoodworking-source-match',
		get_theme_file_uri( 'assets/css/source-match.css' ),
		array( 'mpwoodworking-blocks' ),
		(string) $theme->get( 'Version' )
	);

	wp_enqueue_script(
		'mpwoodworking-source-match',
		get_theme_file_uri( 'assets/js/source-match.js' ),
		array(),
		(string) $theme->get( 'Version' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'mpwoodworking_blocks_enqueue_assets' );

/**
 * Add a dedicated pattern category for all project sections.
 */
function mpwoodworking_blocks_register_pattern_category(): void {
	register_block_pattern_category(
		'mpwoodworking',
		array(
			'label'       => __( 'MP Woodworking', 'mpwoodworking-blocks' ),
			'description' => __( 'Wiederverwendbare Sections für Atelier, Projekte und Shop.', 'mpwoodworking-blocks' ),
		)
	);
}
add_action( 'init', 'mpwoodworking_blocks_register_pattern_category' );

/**
 * Register visual variations that editors can apply without custom HTML.
 */
function mpwoodworking_blocks_register_block_styles(): void {
	register_block_style(
		'core/group',
		array(
			'name'  => 'mp-panel',
			'label' => __( 'Werkstatt-Panel', 'mpwoodworking-blocks' ),
		)
	);

	register_block_style(
		'core/group',
		array(
			'name'  => 'mp-section-heading',
			'label' => __( 'Section-Überschrift', 'mpwoodworking-blocks' ),
		)
	);

	register_block_style(
		'core/image',
		array(
			'name'  => 'mp-workshop-image',
			'label' => __( 'Werkstatt-Foto', 'mpwoodworking-blocks' ),
		)
	);

	register_block_style(
		'core/list',
		array(
			'name'  => 'mp-spec-list',
			'label' => __( 'Technische Daten', 'mpwoodworking-blocks' ),
		)
	);

	register_block_style(
		'core/button',
		array(
			'name'  => 'mp-secondary',
			'label' => __( 'Sekundär', 'mpwoodworking-blocks' ),
		)
	);
}
add_action( 'init', 'mpwoodworking_blocks_register_block_styles' );

/**
 * Apply a predictable body class when WooCommerce is active so optional rules stay
 * scoped and the theme remains usable without the plugin.
 *
 * @param string[] $classes Existing body classes.
 * @return string[]
 */
function mpwoodworking_blocks_body_classes( array $classes ): array {
	if ( class_exists( 'WooCommerce' ) ) {
		$classes[] = 'mp-has-woocommerce';
	}

	if ( mpwoodworking_blocks_store_is_guarded() ) {
		$classes[] = 'mp-store-coming-soon';
	}

	return $classes;
}
add_filter( 'body_class', 'mpwoodworking_blocks_body_classes' );

/**
 * Determine whether the public storefront must remain non-purchasable.
 *
 * WooCommerce's "Coming soon" mode protects dedicated shop routes, but product
 * collection blocks can still appear on otherwise public pages. Keep those
 * pages informative without allowing anonymous cart sessions to be created.
 */
function mpwoodworking_blocks_store_is_guarded(): bool {
	if ( ! class_exists( 'WooCommerce' ) ) {
		return false;
	}

	if ( 'yes' !== get_option( 'woocommerce_coming_soon', 'no' ) ) {
		return false;
	}

	return ! current_user_can( 'manage_woocommerce' );
}

/**
 * Disable product purchasing for public visitors while Coming-soon mode is active.
 *
 * @param bool $purchasable Whether WooCommerce considers the product purchasable.
 * @return bool
 */
function mpwoodworking_blocks_guard_product_purchasing( bool $purchasable ): bool {
	if ( mpwoodworking_blocks_store_is_guarded() ) {
		return false;
	}

	return $purchasable;
}
add_filter( 'woocommerce_is_purchasable', 'mpwoodworking_blocks_guard_product_purchasing', PHP_INT_MAX );
add_filter( 'woocommerce_variation_is_purchasable', 'mpwoodworking_blocks_guard_product_purchasing', PHP_INT_MAX );

/**
 * Replace product-block purchase controls with an honest availability status.
 *
 * @param string $block_content Rendered product-button markup.
 * @return string
 */
function mpwoodworking_blocks_guard_product_button( string $block_content ): string {
	if ( ! mpwoodworking_blocks_store_is_guarded() ) {
		return $block_content;
	}

	return sprintf(
		'<p class="mp-product-availability" role="status">%s</p>',
		esc_html__( 'Shop bald verfügbar', 'mpwoodworking-blocks' )
	);
}
add_filter( 'render_block_woocommerce/product-button', 'mpwoodworking_blocks_guard_product_button' );

/**
 * Give the main WooCommerce shop archive a descriptive title while preserving
 * dynamic titles on product-category and attribute archives.
 *
 * @param string $title Current archive title.
 * @return string
 */
function mpwoodworking_blocks_shop_archive_title( string $title ): string {
	if ( function_exists( 'is_shop' ) && is_shop() ) {
		return __( 'Der Unikat-Shop', 'mpwoodworking-blocks' );
	}

	return $title;
}
add_filter( 'get_the_archive_title', 'mpwoodworking_blocks_shop_archive_title' );
