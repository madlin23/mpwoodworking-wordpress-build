<?php get_header(); ?>
<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#010101]">
    <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('relative pl-6'); ?>>
            <!-- Feine vertikale grüne Linie links neben dem Post-Header -->
            <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-[#008b1d] opacity-40"></div>

            <header class="mb-10">
                <h1 class="font-serif text-4xl md:text-6xl font-black uppercase leading-tight mb-4 text-[#f8f8f7] flex items-center gap-2">
                    <?php the_title(); ?>
                    <span class="w-2 h-2 rounded-full bg-[#008b1d] inline-block shadow-[0_0_6px_#008b1d]"></span>
                </h1>
                <div class="text-xs tracking-widest uppercase text-[#d40924] font-bold flex items-center gap-1.5">
                    <?php echo get_the_date(); ?>
                    <span class="w-1 h-1 rounded-full bg-[#008b1d] inline-block shadow-[0_0_4px_#008b1d]"></span>
                </div>
            </header>
            <?php if ( has_post_thumbnail() ) : ?>
                <div class="aspect-[16/10] overflow-hidden mb-10 bg-[#1a1a19] border border-[#2a2a28] hover:border-[#008b1d]/30 transition-colors">
                    <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover filter grayscale contrast-110')); ?>
                </div>
            <?php endif; ?>
            <div class="prose max-w-none font-sans text-xs md:text-sm text-[#a8a8a3] leading-relaxed space-y-6 font-light">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; ?>
</div>
<?php get_footer(); ?>
