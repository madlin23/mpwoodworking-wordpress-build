<?php get_header(); ?>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#010101]">
    <?php if ( have_posts() ) : ?>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <?php while ( have_posts() ) : the_post(); ?>
                <article <?php post_class('border border-[#2a2a28] p-6 bg-[#11110f]'); ?>>
                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="aspect-[16/10] overflow-hidden mb-6 bg-[#1a1a19] border border-[#2a2a28]">
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500')); ?>
                        </div>
                    <?php endif; ?>
                    <h2 class="font-serif text-3xl font-black uppercase mb-3 text-[#f8f8f7]">
                        <a href="<?php the_permalink(); ?>" class="hover:text-[#d40924] transition-colors"><?php the_title(); ?></a>
                    </h2>
                    <div class="text-xs text-[#a8a8a3] mb-4 font-sans font-bold"><?php echo get_the_date(); ?></div>
                    <div class="text-xs text-[#a8a8a3] leading-relaxed mb-6 font-sans font-light"><?php the_excerpt(); ?></div>
                    <a href="<?php the_permalink(); ?>" class="text-xs tracking-wider uppercase font-bold text-[#f8f8f7] hover:text-[#d40924] flex items-center space-x-1 font-sans">
                        <span>Weiterlesen</span>
                        <span>&rarr;</span>
                    </a>
                </article>
            <?php endwhile; ?>
        </div>
        <div class="mt-12">
            <?php the_posts_navigation(); ?>
        </div>
    <?php else : ?>
        <p class="text-center text-[#a8a8a3] font-sans text-xs">Keine Beiträge gefunden.</p>
    <?php endif; ?>
</div>
<?php get_footer(); ?>
