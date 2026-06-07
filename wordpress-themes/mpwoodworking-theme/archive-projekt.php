<?php get_header(); ?>

<!-- Projekte Header -->
<section class="bg-[#11110f] border-b border-[#2a2a28] py-16 relative">
    <!-- Feine grüne Akzentlinie am Header-Boden -->
    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-[#a3e635]/30" />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl flex flex-col space-y-4 relative pl-4">
            <!-- Feine grüne vertikale Linie links neben der Hauptüberschrift -->
            <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-[#a3e635]" />
            
            <span class="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black">
                WERKSTATT-CHRONIK
            </span>
            <h1 class="text-4xl md:text-6xl font-serif font-black uppercase text-[#f8f8f7]">Projekte & Maßanfertigungen</h1>
            <p class="text-xs md:text-sm text-[#a8a8a3] leading-relaxed font-sans font-light">
                Neben meinen regelmäßigen Drechselarbeiten realisiere ich anspruchsvolle Möbelprojekte und maßgeschneiderte Unikate auf Kundenwunsch. Entdecken Sie hier die Entstehungsgeschichten und technischen Details ausgewählter Arbeiten.
            </p>
        </div>
    </div>
</section>

<!-- Projekte Main -->
<section class="py-20 bg-[#010101]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php if ( have_posts() ) : ?>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <?php while ( have_posts() ) : the_post(); ?>
                    <div class="group flex flex-col space-y-4 border border-[#2a2a28] p-4 bg-[#11110f] hover:border-[#a3e635]/40 transition-colors relative">
                        <!-- Feiner grüner Glimm-Streifen über dem Projekt-Panel im Hover -->
                        <div class="absolute top-0 left-4 right-4 h-[1px] bg-[#a3e635]/0 group-hover:bg-[#a3e635]/30 transition-colors" />
                        
                        <div class="aspect-[16/10] w-full overflow-hidden bg-[#1a1a19] border border-[#2a2a28] relative">
                            <?php if ( has_post_thumbnail() ) : ?>
                                <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700')); ?>
                            <?php else : ?>
                                <div class="w-full h-full bg-[#1a1a19] flex items-center justify-center">
                                    <span class="text-xs text-[#a8a8a3]">Kein Projektbild</span>
                                </div>
                            <?php endif; ?>
                            <span class="absolute top-4 left-4 bg-[#010101] text-[#f8f8f7] text-[10px] tracking-widest uppercase px-3 py-1 border border-[#2a2a28] font-bold flex items-center gap-1.5">
                                Projekt <?php echo get_the_date('Y'); ?>
                                <span class="w-1 h-1 rounded-full bg-[#a3e635] inline-block shadow-[0_0_4px_#a3e635]"></span>
                            </span>
                        </div>
                        <div class="flex flex-col space-y-2 pt-2">
                            <h3 class="font-serif text-2xl font-black uppercase text-[#f8f8f7] group-hover:text-[#a3e635] transition-colors">
                                <?php the_title(); ?>
                            </h3>
                            <div class="flex flex-col space-y-1 text-xs text-[#a8a8a3] font-sans">
                                <?php if ( function_exists('get_field') && get_field('holzart_detail') ) : ?>
                                    <span class="font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                                        Holzart: <span class="font-light text-[#f8f8f7]"><?php the_field('holzart_detail'); ?></span>
                                        <span class="w-1 h-1 rounded-full bg-[#a3e635]/40 inline-block"></span>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>
                        <div class="text-xs text-[#a8a8a3] leading-relaxed line-clamp-3 font-sans font-light">
                            <?php the_excerpt(); ?>
                        </div>
                        <div class="pt-2">
                            <a href="<?php the_permalink(); ?>">
                                <span class="text-xs tracking-wider uppercase font-bold text-[#f8f8f7] group-hover:text-[#a3e635] flex items-center space-x-1 font-sans">
                                    <span>Projektdetails & Entstehung</span>
                                    <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </span>
                            </a>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
            <div class="mt-12">
                <?php the_posts_navigation(); ?>
            </div>
        <?php else : ?>
            <p class="text-center text-[#a8a8a3] font-sans text-xs py-12">Noch keine Projekte in der Chronik eingetragen.</p>
        <?php endif; ?>
    </div>
</section>

<?php get_footer(); ?>
