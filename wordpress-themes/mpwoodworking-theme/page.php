<?php get_header(); ?>
<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#010101]">
    <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="mb-10">
                <h1 class="font-serif text-4xl md:text-6xl font-black uppercase leading-tight text-[#f8f8f7]"><?php the_title(); ?></h1>
            </header>
            <div class="prose max-w-none font-sans text-xs md:text-sm text-[#a8a8a3] leading-relaxed space-y-6 font-light">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; ?>
</div>
<?php get_footer(); ?>
