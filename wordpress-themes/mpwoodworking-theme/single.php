<?php get_header(); ?>
<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#010101]">
    <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="mb-10">
                <h1 class="font-serif text-4xl md:text-6xl font-black uppercase leading-tight mb-4 text-[#f8f8f7]"><?php the_title(); ?></h1>
                <div class="text-xs tracking-widest uppercase text-[#d40924] font-bold"><?php echo get_the_date(); ?></div>
            </header>
            <?php if ( has_post_thumbnail() ) : ?>
                <div class="aspect-[16/10] overflow-hidden mb-10 bg-[#1a1a19] border border-[#2a2a28]">
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
