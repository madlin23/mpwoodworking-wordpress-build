<?php
/**
 * MP Woodworking Custom Theme Functions
 */

if ( ! function_exists( 'mpwoodworking_setup' ) ) :
    function mpwoodworking_setup() {
        // Support für Beitragsbilder (Featured Images)
        add_theme_support( 'post-thumbnails' );

        // Support für automatischen Title-Tag
        add_theme_support( 'title-tag' );

        // Support für HTML5 Markup
        add_theme_support( 'html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        ) );

        // Support für WooCommerce
        add_theme_support( 'woocommerce' );
        add_theme_support( 'wc-product-gallery-zoom' );
        add_theme_support( 'wc-product-gallery-lightbox' );
        add_theme_support( 'wc-product-gallery-slider' );

        // Navigationsmenüs registrieren
        register_nav_menus( array(
            'primary' => esc_html__( 'Hauptnavigation', 'mpwoodworking' ),
            'footer-legal' => esc_html__( 'Rechtliches (Footer)', 'mpwoodworking' ),
        ) );
    }
endif;
add_action( 'after_setup_theme', 'mpwoodworking_setup' );

/**
 * Custom Post Type "projekt" registrieren
 */
function mpwoodworking_register_cpt_projekt() {
    $labels = array(
        'name'                  => _x( 'Projekte', 'Post Type General Name', 'mpwoodworking' ),
        'singular_name'         => _x( 'Projekt', 'Post Type Singular Name', 'mpwoodworking' ),
        'menu_name'             => __( 'Projekte (Chronik)', 'mpwoodworking' ),
        'name_admin_bar'        => __( 'Projekt', 'mpwoodworking' ),
        'archives'              => __( 'Projekt-Archiv', 'mpwoodworking' ),
        'attributes'            => __( 'Projekt-Attribute', 'mpwoodworking' ),
        'parent_item_colon'     => __( 'Eltern-Projekt:', 'mpwoodworking' ),
        'all_items'             => __( 'Alle Projekte', 'mpwoodworking' ),
        'add_new_item'          => __( 'Neues Projekt hinzufügen', 'mpwoodworking' ),
        'add_new'               => __( 'Neu hinzufügen', 'mpwoodworking' ),
        'new_item'              => __( 'Neues Projekt', 'mpwoodworking' ),
        'edit_item'             => __( 'Projekt bearbeiten', 'mpwoodworking' ),
        'update_item'           => __( 'Projekt aktualisieren', 'mpwoodworking' ),
        'view_item'             => __( 'Projekt ansehen', 'mpwoodworking' ),
        'view_items'            => __( 'Projekte ansehen', 'mpwoodworking' ),
        'search_items'          => __( 'Projekt suchen', 'mpwoodworking' ),
        'not_found'             => __( 'Keine Projekte gefunden', 'mpwoodworking' ),
        'not_found_in_trash'    => __( 'Keine Projekte im Papierkorb gefunden', 'mpwoodworking' ),
        'featured_image'        => __( 'Projektbild (Vorschau)', 'mpwoodworking' ),
        'set_featured_image'    => __( 'Projektbild festlegen', 'mpwoodworking' ),
        'remove_featured_image' => __( 'Projektbild entfernen', 'mpwoodworking' ),
        'use_featured_image'    => __( 'Als Projektbild verwenden', 'mpwoodworking' ),
        'insert_into_item'      => __( 'In Projekt einfügen', 'mpwoodworking' ),
        'uploaded_to_this_item' => __( 'Zu diesem Projekt hochgeladen', 'mpwoodworking' ),
        'items_list'            => __( 'Projektliste', 'mpwoodworking' ),
        'items_list_navigation' => __( 'Projektliste Navigation', 'mpwoodworking' ),
        'filter_items_list'     => __( 'Projektliste filtern', 'mpwoodworking' ),
    );
    $args = array(
        'label'                 => __( 'Projekt', 'mpwoodworking' ),
        'description'           => __( 'Besondere Projekte und Maßanfertigungen von MP Woodworking', 'mpwoodworking' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-hammer', // Handwerker-Hammer Icon im Adminbereich
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
        'show_in_rest'          => true, // Aktiviert den Gutenberg-Editor
    );
    register_post_type( 'projekt', $args );
}
add_action( 'init', 'mpwoodworking_register_cpt_projekt', 0 );

/**
 * Gutenberg Block-Patterns registrieren
 */
function mpwoodworking_register_block_patterns() {
    // Kategorie für MP Woodworking Patterns registrieren
    register_block_pattern_category(
        'mpwoodworking',
        array( 'label' => __( 'MP Woodworking', 'mpwoodworking' ) )
    );

    // Pattern 1: Handwerkliche Werte-Karten (3 Spalten)
    register_block_pattern(
        'mpwoodworking/werte-karten',
        array(
            'title'       => __( 'Handwerkliche Werte-Karten', 'mpwoodworking' ),
            'description' => _x( 'Drei dunkle Spalten mit Werten und Symbolen im Handwerks-Look.', 'Block pattern description', 'mpwoodworking' ),
            'categories'  => array( 'mpwoodworking' ),
            'content'     => '<!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"2rem","left":"2rem"}}},"backgroundColor":"black"} -->
<div class="wp-block-columns has-black-background-color has-background" style="margin-top:0;margin-bottom:0;padding:3rem 2rem"><!-- wp:column {"style":{"border":{"width":"1px","style":"solid","color":"#2a2a28"},"spacing":{"padding":{"top":"2rem","bottom":"2rem","left":"2rem","right":"2rem"}}},"backgroundColor":"surface"} -->
<div class="wp-block-column has-surface-background-color has-background" style="border-style:solid;border-width:1px;border-color:#2a2a28;padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:2rem"><!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"700"}},"textColor":"text","fontSize":"large"} -->
<h3 class="wp-block-heading has-text-color has-large-font-size" style="font-style:normal;font-weight:700;color:#f8f8f7;font-family:\'Bebas Neue\',sans-serif;letter-spacing:0.1em;text-transform:uppercase">100% HANDARBEIT</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.6"}},"textColor":"text-muted","fontSize":"small"} -->
<p class="has-text-muted-color has-text-color has-small-font-size" style="line-height:1.6;color:#a8a8a3;font-family:\'Roboto Slab\',serif">Jedes Objekt wird von mir persönlich an der Drechselbank oder Werkbank in Berlin geformt. Keine Massenware, kein CNC. Nur reines Handwerk.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"border":{"width":"1px","style":"solid","color":"#2a2a28"},"spacing":{"padding":{"top":"2rem","bottom":"2rem","left":"2rem","right":"2rem"}}},"backgroundColor":"surface"} -->
<div class="wp-block-column has-surface-background-color has-background" style="border-style:solid;border-width:1px;border-color:#2a2a28;padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:2rem"><!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"700"}},"textColor":"text","fontSize":"large"} -->
<h3 class="wp-block-heading has-text-color has-large-font-size" style="font-style:normal;font-weight:700;color:#f8f8f7;font-family:\'Bebas Neue\',sans-serif;letter-spacing:0.1em;text-transform:uppercase">MÄRKISCHE EDELHÖLZER</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.6"}},"textColor":"text-muted","fontSize":"small"} -->
<p class="has-text-muted-color has-text-color has-small-font-size" style="line-height:1.6;color:#a8a8a3;font-family:\'Roboto Slab\',serif">Ich verarbeite ausschließlich lokale Hölzer wie Eibe, Nussbaum, Robinie oder gestreifte Buche aus Berlin und Brandenburg mit bekannter Herkunft.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"border":{"width":"1px","style":"solid","color":"#2a2a28"},"spacing":{"padding":{"top":"2rem","bottom":"2rem","left":"2rem","right":"2rem"}}},"backgroundColor":"surface"} -->
<div class="wp-block-column has-surface-background-color has-background" style="border-style:solid;border-width:1px;border-color:#2a2a28;padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:2rem"><!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"700"}},"textColor":"text","fontSize":"large"} -->
<h3 class="wp-block-heading has-text-color has-large-font-size" style="font-style:normal;font-weight:700;color:#f8f8f7;font-family:\'Bebas Neue\',sans-serif;letter-spacing:0.1em;text-transform:uppercase">FÜR GENERATIONEN</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.6"}},"textColor":"text-muted","fontSize":"small"} -->
<p class="has-text-muted-color has-text-color has-small-font-size" style="line-height:1.6;color:#a8a8a3;font-family:\'Roboto Slab\',serif">Durch traditionelle Holzverbindungen und Veredelung mit natürlichen Ölen und Wachsen entstehen widerstandsfähige Erbstücke.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->',
        )
    );

    // Pattern 2: Premium CTA Banner (Rot, kontraststark)
    register_block_pattern(
        'mpwoodworking/premium-cta',
        array(
            'title'       => __( 'Premium Handwerks-CTA', 'mpwoodworking' ),
            'description' => _x( 'Ein auffälliger, dunkelroter Banner mit Button für Anfragen oder Shop-Verweise.', 'Block pattern description', 'mpwoodworking' ),
            'categories'  => array( 'mpwoodworking' ),
            'content'     => '<!-- wp:group {"style":{"spacing":{"padding":{"top":"4rem","bottom":"4rem","left":"2rem","right":"2rem"}}},"backgroundColor":"black","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-black-background-color has-background" style="padding-top:4rem;padding-right:2rem;padding-bottom:4rem;padding-left:2rem;border:1px solid #2a2a28"><!-- wp:heading {"textAlign":"center","level":2,"style":{"typography":{"fontWeight":"900"}},"textColor":"text","fontSize":"xx-large"} -->
<h2 class="wp-block-heading align-center has-text-color has-xx-large-font-size" style="font-weight:900;color:#f8f8f7;font-family:\'Bebas Neue\',sans-serif;letter-spacing:0.05em;text-transform:uppercase">LUST AUF EIN UNIKAT NACH MASS?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"lineHeight":"1.6"}},"textColor":"text-muted"} -->
<p class="has-text-align-center has-text-muted-color has-text-color" style="line-height:1.6;color:#a8a8a3;font-family:\'Roboto Slab\',serif;max-w:600px;margin-left:auto;margin-right:auto">Haben Sie eine genaue Vorstellung von Ihrem Wunschobjekt oder suchen Sie ein besonderes Geschenk? Lassen Sie uns gemeinsam Ihr Projekt aus märkischem Edelholz realisieren.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"border":{"radius":"0px"}},"backgroundColor":"accent","textColor":"text"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-accent-background-color has-background" style="border-radius:0px;color:#f8f8f7;background-color:#d40924;font-family:\'Roboto Slab\',serif;font-weight:bold;text-transform:uppercase;letter-spacing:0.1em;padding:1rem 2rem">PROJEKT ANFRAGEN</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->',
        )
    );
}
add_action( 'init', 'mpwoodworking_register_block_patterns' );

/**
 * Standard-Menü Fallbacks für die Vorschau ohne WordPress-Datenbank
 */
function mpwoodworking_default_menu() {
    $menu_items = array(
        'Atelier' => home_url('/'),
        'Unikat-Shop' => home_url('/shop/'),
        'Projekte' => home_url('/projekt/'),
        'Holzarten' => home_url('/holzarten/'),
        'Kontakt' => home_url('/kontakt/'),
    );
    foreach ( $menu_items as $name => $url ) {
        echo '<a href="' . esc_url($url) . '" class="font-serif text-lg tracking-widest uppercase py-1 transition-colors hover:text-[#d40924] text-[#f8f8f7] font-bold">' . esc_html($name) . '</a>';
    }
}

function mpwoodworking_default_menu_footer() {
    $menu_items = array(
        'Atelier' => home_url('/'),
        'Unikat-Shop' => home_url('/shop/'),
        'Projekte' => home_url('/projekt/'),
        'Holzarten' => home_url('/holzarten/'),
        'Kontakt' => home_url('/kontakt/'),
    );
    foreach ( $menu_items as $name => $url ) {
        echo '<a href="' . esc_url($url) . '" class="text-xs text-[#a8a8a3] hover:text-[#d40924] transition-colors font-light font-sans">' . esc_html($name) . '</a>';
    }
}

function mpwoodworking_default_legal_menu() {
    $menu_items = array(
        'Impressum' => home_url('/impressum/'),
        'Datenschutzerklärung' => home_url('/datenschutz/'),
        'Widerrufsbelehrung' => home_url('/widerruf/'),
        'AGB' => home_url('/agb/'),
    );
    foreach ( $menu_items as $name => $url ) {
        echo '<a href="' . esc_url($url) . '" class="text-xs text-[#a8a8a3] hover:text-[#d40924] transition-colors font-light font-sans">' . esc_html($name) . '</a>';
    }
}

/**
 * Automatisches Anlegen der ACF-Felder bei Aktivierung (falls ACF aktiv ist)
 */
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
    'key' => 'group_projekt_details',
    'title' => 'Projekt-Details (Handwerk)',
    'fields' => array(
        array(
            'key' => 'field_holzart_detail',
            'label' => 'Holz-Besonderheiten',
            'name' => 'holzart_detail',
            'type' => 'text',
            'instructions' => 'Genaue botanische Bezeichnung oder Details zum Fundort des Holzes (z.B. Eibe aus Berlin-Köpenick, 120 Jahre alt).',
            'required' => 1,
            'placeholder' => 'z.B. Lokale Eibe (Berlin-Köpenick), extrem dichte Jahresringe.',
        ),
        array(
            'key' => 'field_herstellungsdauer',
            'label' => 'Herstellungsdauer',
            'name' => 'herstellungsdauer',
            'type' => 'text',
            'instructions' => 'Wie viel reine Arbeitszeit wurde für dieses Werkstück benötigt?',
            'required' => 0,
            'placeholder' => 'z.B. ca. 14 Stunden reine Drechsel- und Schleifarbeit.',
        ),
        array(
            'key' => 'field_besonderheiten',
            'label' => 'Konstruktive Besonderheiten',
            'name' => 'besonderheiten',
            'type' => 'textarea',
            'instructions' => 'Besondere handwerkliche Kniffe, Werkzeuge oder Stabilisierungsmaßnahmen.',
            'required' => 0,
            'placeholder' => 'z.B. Erhalt der natürlichen Baumrinde am oberen Schalenrand, Risse mit Walnuss-Inlays stabilisiert.',
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'projekt',
            ),
        ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => true,
    'description' => 'Erweiterte Metadaten für das MP Woodworking Projekt-Portfolio',
));

endif;
