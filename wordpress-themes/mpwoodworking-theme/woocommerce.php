<?php get_header(); ?>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#010101]">
    <?php if ( is_shop() || is_product_category() || is_product_tag() ) : ?>
        <div class="mb-12 border-b border-[#2a2a28] pb-6">
            <span class="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black block mb-2">ECHTE EINZELSTÜCKE</span>
            <h1 class="font-serif text-4xl md:text-6xl font-black uppercase text-[#f8f8f7]"><?php woocommerce_page_title(); ?></h1>
        </div>
    <?php endif; ?>
    
    <div class="woocommerce-container text-xs text-[#a8a8a3]">
        <?php woocommerce_content(); ?>
    </div>
</div>
<?php get_footer(); ?>
