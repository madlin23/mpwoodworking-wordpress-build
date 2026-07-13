<?php
/**
 * Plugin Name: MP Woodworking Core
 * Description: Dauerhafte Geschäftslogik für Projekte, Holzarten, Unikat-Produkte und dynamische Projektblöcke.
 * Version: 1.0.1
 * Author: MP Woodworking
 * Text Domain: mpwoodworking-core
 * Requires at least: 6.6
 * Requires PHP: 8.1
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'MPW_CORE_VERSION', '1.0.1' );
define( 'MPW_CORE_FILE', __FILE__ );
define( 'MPW_CORE_DIR', plugin_dir_path( __FILE__ ) );

require_once MPW_CORE_DIR . 'includes/class-mpw-content.php';
require_once MPW_CORE_DIR . 'includes/class-mpw-admin.php';
require_once MPW_CORE_DIR . 'includes/class-mpw-blocks.php';
require_once MPW_CORE_DIR . 'includes/class-mpw-woocommerce.php';

/**
 * Startet die Plugin-Komponenten nach dem Laden aller Plugins.
 */
function mpw_core_boot(): void {
	MPW_Content::init();
	MPW_Admin::init();
	MPW_Blocks::init();
	MPW_WooCommerce::init();
}
add_action( 'plugins_loaded', 'mpw_core_boot' );

/**
 * Schreibt die Rewrite-Regeln bei Aktivierung einmalig neu.
 */
function mpw_core_activate(): void {
	MPW_Content::register_content_types();
	flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'mpw_core_activate' );

/**
 * Entfernt Rewrite-Regeln sauber bei Deaktivierung; Inhalte bleiben erhalten.
 */
function mpw_core_deactivate(): void {
	flush_rewrite_rules();
}
register_deactivation_hook( __FILE__, 'mpw_core_deactivate' );
