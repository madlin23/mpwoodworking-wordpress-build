    </main>

    <!-- Footer -->
    <footer class="bg-[#11110f] text-[#f8f8f7] mt-20 border-t border-[#2a2a28] hover:border-t-[#a3e635]/20 transition-colors relative">
        {/* Feiner grüner Glimm-Streifen über dem Footer */}
        <div class="absolute top-0 left-0 w-full h-[1px] bg-[#a3e635]/10" />
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
            <!-- Spalte 1: Brand -->
            <div class="flex flex-col space-y-4">
                <span class="font-serif text-3xl font-black tracking-wider uppercase text-[#f8f8f7]">
                    <?php bloginfo( 'name' ); ?>
                </span>
                <p class="text-xs text-[#a8a8a3] leading-relaxed max-w-xs font-light">
                    Handgedrechselte Unikate und maßgefertigte Massivholzmöbel aus märkischen Edelhölzern. Jedes Stück erzählt seine eigene Geschichte.
                </p>
                <div class="flex items-center space-x-2 text-[10px] tracking-widest text-[#d40924] uppercase pt-2 font-bold group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-[#d40924] group-hover:text-[#a3e635] transition-colors">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span>Berlin-Köpenick</span>
                    <span class="w-1 h-1 rounded-full bg-[#a3e635] inline-block shadow-[0_0_4px_#a3e635]"></span>
                </div>
            </div>

            <!-- Spalte 2: Navigation -->
            <div class="flex flex-col space-y-3">
                <span class="text-xs tracking-[0.2em] text-[#a8a8a3] uppercase font-bold font-serif flex items-center gap-1.5">
                    Navigation
                    <span class="w-1 h-1 rounded-full bg-[#a3e635]/40 inline-block"></span>
                </span>
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'items_wrap' => '%3$s',
                    'fallback_cb' => 'mpwoodworking_default_menu_footer',
                ) );
                ?>
            </div>

            <!-- Spalte 3: Werkstatt -->
            <div class="flex flex-col space-y-3">
                <span class="text-xs tracking-[0.2em] text-[#a8a8a3] uppercase font-bold font-serif flex items-center gap-1.5">
                    Werkstatt
                    <span class="w-1 h-1 rounded-full bg-[#a3e635]/40 inline-block"></span>
                </span>
                <p class="text-xs text-[#a8a8a3] leading-relaxed font-light">
                    Nach Vereinbarung (Köpenick)<br />
                    Marco Paul<br />
                    E-Mail: info@mpwoodworking.de
                </p>
                <span class="text-xs text-[#d40924] font-bold flex items-center gap-1.5">
                    * Besuche bitte vorab anmelden.
                    <span class="w-1 h-1 rounded-full bg-[#a3e635] inline-block shadow-[0_0_4px_#a3e635]"></span>
                </span>
            </div>

            <!-- Spalte 4: Rechtliches -->
            <div class="flex flex-col space-y-3">
                <span class="text-xs tracking-[0.2em] text-[#a8a8a3] uppercase font-bold font-serif flex items-center gap-1.5">
                    Rechtliches
                    <span class="w-1 h-1 rounded-full bg-[#a3e635]/40 inline-block"></span>
                </span>
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'footer-legal',
                    'container' => false,
                    'items_wrap' => '%3$s',
                    'fallback_cb' => 'mpwoodworking_default_legal_menu',
                ) );
                ?>
            </div>
        </div>

        <!-- Unterer Footer -->
        <div class="border-t border-[#2a2a28] py-6 bg-[#010101]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-[#a8a8a3] space-y-4 md:space-y-0 font-bold uppercase tracking-wider">
                <span>
                    &copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. Alle Rechte vorbehalten.
                </span>
                <div class="flex items-center space-x-1">
                    <span>Handgefertigt mit Stolz in Berlin-Köpenick</span>
                    <span class="w-1.5 h-1.5 rounded-full bg-[#a3e635] inline-block shadow-[0_0_4px_#a3e635]"></span>
                </div>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
