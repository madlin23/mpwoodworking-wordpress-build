<?php get_header(); ?>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#010101]">
    <?php if ( is_shop() || is_product_category() || is_product_tag() ) : ?>
        <div class="mb-12 border-b border-[#2a2a28] pb-6 relative pl-4">
            <!-- Feine grüne Linie links neben der WooCommerce-Kategorie -->
            <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-[#a3e635]"></div>
            
            <span class="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black block mb-2">ECHTE EINZELSTÜCKE</span>
            <h1 class="font-serif text-4xl md:text-6xl font-black uppercase text-[#f8f8f7] flex items-center gap-2">
                <?php woocommerce_page_title(); ?>
                <span class="w-2 h-2 rounded-full bg-[#a3e635] inline-block shadow-[0_0_6px_#a3e635]"></span>
            </h1>
        </div>
    <?php endif; ?>
    
    <div class="woocommerce-container text-xs text-[#a8a8a3]">
        <?php woocommerce_content(); ?>
    </div>
</div>
<?php get_footer(); ?>
