<?php get_header(); ?>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#010101]">
    <!-- Back-Link -->
    <a href="<?php echo get_post_type_archive_link('projekt'); ?>" class="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-[#a8a8a3] hover:text-[#f8f8f7] mb-12 font-sans font-bold">
        <span>&larr; Zurück zu den Projekten</span>
    </a>

    <?php while ( have_posts() ) : the_post(); ?>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <!-- Projektbilder & Galerie -->
            <div class="lg:col-span-7 flex flex-col space-y-6">
                <div class="aspect-[16/10] w-full overflow-hidden bg-[#1a1a19] border border-[#2a2a28]">
                    <?php if ( has_post_thumbnail() ) : ?>
                        <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover object-center filter grayscale contrast-110')); ?>
                    <?php else : ?>
                        <div class="w-full h-full bg-[#1a1a19] flex items-center justify-center">
                            <span class="text-xs text-[#a8a8a3]">Kein Projektbild vorhanden</span>
                        </div>
                    <?php endif; ?>
                </div>
                
                <!-- WordPress Galerie Support -->
                <?php 
                $gallery = get_post_gallery( get_the_ID(), false );
                if ( $gallery ) : 
                    $gallery_attachment_ids = explode( ',', $gallery['ids'] );
                ?>
                    <div class="grid grid-cols-2 gap-6">
                        <?php foreach ( $gallery_attachment_ids as $id ) : ?>
                            <div class="aspect-[16/10] overflow-hidden bg-[#1a1a19] border border-[#2a2a28]">
                                <?php echo wp_get_attachment_image( $id, 'large', false, array('class' => 'w-full h-full object-cover object-center filter grayscale contrast-110') ); ?>
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Projekt-Spezifikation (ACF Fields Integration) -->
            <div class="lg:col-span-5 flex flex-col space-y-8">
                <div class="flex flex-col space-y-3">
                    <span class="text-xs tracking-[0.3em] text-[#d40924] uppercase font-bold font-sans">
                        Projektchronik <?php echo get_the_date('Y'); ?>
                    </span>
                    <h1 class="text-4xl md:text-5xl font-serif font-black uppercase leading-tight text-[#f8f8f7]">
                        <?php the_title(); ?>
                    </h1>
                    <div class="h-[1px] bg-[#2a2a28] w-full pt-2"></div>
                </div>

                <div class="flex flex-col space-y-4">
                    <h3 class="text-xs tracking-widest uppercase font-bold text-[#f8f8f7] font-serif">
                        Projektbeschreibung
                    </h3>
                    <div class="prose max-w-none text-xs text-[#a8a8a3] leading-relaxed font-sans font-light">
                        <?php the_content(); ?>
                    </div>
                </div>

                <!-- ACF Meta-Box (Nur anzeigen, wenn ACF aktiv ist und Felder Werte haben) -->
                <?php if ( function_exists('get_field') ) : ?>
                    <div class="bg-[#11110f] p-6 border border-[#2a2a28] flex flex-col space-y-6">
                        <span class="text-xs tracking-widest uppercase font-bold block text-[#f8f8f7] border-b border-[#2a2a28] pb-3 font-serif">
                            Erweiterte Projekt-Details (ACF)
                        </span>

                        <!-- ACF Feld: Holzart Detail -->
                        <?php if ( get_field('holzart_detail') ) : ?>
                            <div class="flex items-start space-x-3">
                                <div class="p-2 bg-[#010101] border border-[#2a2a28] mt-0.5 text-[#d40924]">
                                    <!-- Sparkles Icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 21l-.813-5.096L3 15 8.187 14.187 9 9l.813 5.187L15 15l-5.187.904ZM18.01 5.143 17.25 8.5l-.76-3.357-3.357-.76 3.357-.76.76-3.357.76 3.357 3.357.76-3.357.76ZM21.31 10.31l-.56 2.47-.56-2.47-2.47-.56 2.47-.56.56-2.47.56 2.47 2.47.56-2.47.56Z" />
                                    </svg>
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <span class="text-[10px] tracking-wider uppercase text-[#a8a8a3] font-bold font-sans">Holz-Besonderheiten</span>
                                    <p class="text-xs text-[#f8f8f7] font-sans"><?php the_field('holzart_detail'); ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                        <!-- ACF Feld: Herstellungsdauer -->
                        <?php if ( get_field('herstellungsdauer') ) : ?>
                            <div class="flex items-start space-x-3">
                                <div class="p-2 bg-[#010101] border border-[#2a2a28] mt-0.5 text-[#d40924]">
                                    <!-- Hourglass Icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <span class="text-[10px] tracking-wider uppercase text-[#a8a8a3] font-bold font-sans">Herstellungsdauer</span>
                                    <p class="text-xs text-[#f8f8f7] font-sans"><?php the_field('herstellungsdauer'); ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                        <!-- ACF Feld: Besonderheiten -->
                        <?php if ( get_field('besonderheiten') ) : ?>
                            <div class="flex items-start space-x-3">
                                <div class="p-2 bg-[#010101] border border-[#2a2a28] mt-0.5 text-[#d40924]">
                                    <!-- Hammer Icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A1.5 1.5 0 1 0 19.5 18.75l-5.83-5.83M11.42 15.17l2.42-2.42M11.42 15.17 5.17 8.92A1.5 1.5 0 1 0 2.92 11.17l6.25 6.25M13.84 12.75l2.42-2.42m0 0L21 5.17A1.5 1.5 0 1 0 18.75 2.92l-5.17 5.17m5.17 5.17-2.42 2.42m-9.67-9.67 2.42-2.42m0 0L11.17 2.92A1.5 1.5 0 1 0 8.92 5.17l2.42 2.42" />
                                    </svg>
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <span class="text-[10px] tracking-wider uppercase text-[#a8a8a3] font-bold font-sans">Konstruktive Besonderheiten</span>
                                    <p class="text-xs text-[#f8f8f7] font-sans"><?php the_field('besonderheiten'); ?></p>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    <?php endwhile; ?>
</div>

<?php get_footer(); ?>
