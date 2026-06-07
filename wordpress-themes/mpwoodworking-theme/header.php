<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    <!-- Tailwind CSS CDN für die einfache Integration des neuen dunkel-kontraststarken Designs -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['"Bebas Neue"', 'cursive'],
                        sans: ['"Roboto Slab"', 'serif'],
                    },
                    colors: {
                        background: '#010101', // Base
                        foreground: '#f8f8f7', // Text
                        accent: '#d40924',     // Accent Rot
                        secondary: '#11110f',  // Surface
                        muted: '#a8a8a3',      // Text Muted
                        border: '#2a2a28',     // Border
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #010101;
            color: #f8f8f7;
        }
        /* WordPress Adminbar Korrektur */
        html { margin-top: 0px !important; }
        * html body { margin-top: 0px !important; }
        @media screen and (max-width: 782px) {
            html { margin-top: 0px !important; }
            * html body { margin-top: 0px !important; }
        }
        /* Ecken-Radius global auf 0 setzen für kantigen Look */
        .rounded-lg, .rounded-md, .rounded-sm, .rounded-none {
            border-radius: 0px !important;
        }
    </style>
    <?php wp_head(); ?>
</head>
<body <?php body_class('min-h-screen flex flex-col font-sans bg-[#010101] text-[#f8f8f7]'); ?>>
    <?php wp_body_open(); ?>
    
    <!-- Obere rote Fugen-Linie -->
    <div class="h-1 bg-accent w-full"></div>

    <!-- Header -->
    <header class="sticky top-0 z-50 bg-[#010101]/90 backdrop-blur-md border-b border-[#2a2a28]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <!-- Logo -->
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex flex-col">
                <span class="font-serif text-2xl md:text-3xl font-black tracking-wider uppercase text-[#f8f8f7]">
                    <?php bloginfo( 'name' ); ?>
                </span>
                <span class="text-[9px] tracking-[0.3em] text-[#d40924] uppercase -mt-1 pl-0.5 font-sans font-bold">
                    <?php bloginfo( 'description' ); ?>
                </span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-10">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'items_wrap' => '%3$s',
                    'fallback_cb' => 'mpwoodworking_default_menu',
                ) );
                ?>
            </nav>

            <!-- Warenkorb & Quick Actions -->
            <div class="flex items-center space-x-4">
                <?php if ( class_exists( 'WooCommerce' ) ) : ?>
                    <a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="relative p-2 hover:bg-[#11110f] transition-colors border border-transparent hover:border-[#2a2a28] text-[#f8f8f7]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375 0 1 1-.75 0 .375 0 0 1 .75 0Zm7.5 0a.375 0 1 1-.75 0 .375 0 0 1 .75 0Z" />
                        </svg>
                        <?php if ( WC()->cart->get_cart_contents_count() > 0 ) : ?>
                            <span class="absolute -top-0.5 -right-0.5 bg-[#d40924] text-[#f8f8f7] text-[10px] font-bold w-4 h-4 flex items-center justify-center">
                                <?php echo WC()->cart->get_cart_contents_count(); ?>
                            </span>
                        <?php endif; ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </header>
    
    <main class="flex-grow">
