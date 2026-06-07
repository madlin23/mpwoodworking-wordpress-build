<?php
/**
 * MP Woodworking Child Theme Functions
 */

function mpwoodworking_child_enqueue_styles() {
    // Parent-Theme Stylesheet laden
    wp_enqueue_style( 'mpwoodworking-parent-style', get_template_directory_uri() . '/style.css' );
    
    // Child-Theme Stylesheet laden
    wp_enqueue_style( 'mpwoodworking-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'mpwoodworking-parent-style' ),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'mpwoodworking_child_enqueue_styles' );
