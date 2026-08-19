<?php get_header(); ?>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#010101]">
    <?php if ( have_posts() ) : ?>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <?php while ( have_posts() ) : the_post(); ?>
                <article <?php post_class('border border-[#2a2a28] hover:border-[#008b1d]/30 transition-colors p-6 bg-[#11110f] relative'); ?>>
                    <!-- Grüner Akzentpunkt oben rechts -->
                    <div class="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#008b1d] shadow-[0_0_4px_#008b1d]"></div>
                    
                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="aspect-[16/10] overflow-hidden mb-6 bg-[#1a1a19] border border-[#2a2a28]">
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500')); ?>
                        </div>
                    <?php endif; ?>
                    <h2 class="font-serif text-3xl font-black uppercase mb-3 text-[#f8f8f7]">
                        <a href="<?php the_permalink(); ?>" class="hover:text-[#008b1d] transition-colors"><?php the_title(); ?></a>
                    </h2>
                    <div class="text-xs text-[#a8a8a3] mb-4 font-sans font-bold flex items-center gap-1.5">
                        <?php echo get_the_date(); ?>
                        <span class="w-1 h-1 rounded-full bg-[#008b1d]/40 inline-block"></span>
                    </div>
                    <div class="text-xs text-[#a8a8a3] leading-relaxed mb-6 font-sans font-light"><?php the_excerpt(); ?></div>
                    <a href="<?php the_permalink(); ?>" class="text-xs tracking-wider uppercase font-bold text-[#f8f8f7] hover:text-[#008b1d] flex items-center space-x-1 font-sans group">
                        <span>Weiterlesen</span>
                        <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
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
