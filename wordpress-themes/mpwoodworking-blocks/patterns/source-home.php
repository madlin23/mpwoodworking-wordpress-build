<?php
/**
 * Title: Startseite – Quelllayout
 * Slug: mpwoodworking-blocks/source-home
 * Categories: featured
 * Inserter: no
 */

$mpw_source_images = trailingslashit( get_theme_file_uri( 'assets/images/source-match' ) );
?>
<!-- wp:html -->
<main class="mpw-source-home">
	<section id="home" class="mpw-source-hero" aria-labelledby="mpw-source-hero-title">
		<img class="mpw-source-hero__image" src="<?php echo esc_url( $mpw_source_images . 'hero-workshop.webp' ); ?>" alt="Holzwerkstatt" width="1920" height="1080" fetchpriority="high">
		<div class="mpw-source-hero__overlay" aria-hidden="true"></div>
		<div class="mpw-source-container mpw-source-hero__inner">
			<p class="mpw-source-eyebrow mpw-source-eyebrow--light">Handgefertigt in Berlin</p>
			<h1 id="mpw-source-hero-title">Holzbearbeitung<br><span>aus Leidenschaft.</span></h1>
			<p class="mpw-source-hero__lead">In meiner Werkstatt in Berlin-Köpenick entstehen aus märkischen Edelhölzern einzigartige, handgedrechselte Schalen, Gewürzmühlen und feine Möbel. Jedes Stück ist ein kompromissloses Unikat.</p>
			<div class="mpw-source-actions">
				<a class="mpw-source-button mpw-source-button--primary" href="#shop">Unikate entdecken</a>
				<a class="mpw-source-button mpw-source-button--outline" href="#contact">Kontakt</a>
			</div>
		</div>
		<div class="mpw-source-hero__stats" aria-label="Kennzahlen">
			<div class="mpw-source-container mpw-source-stats-grid">
				<div><strong>100+</strong><span>Handgefertigte Unikate</span></div>
				<div><strong>15+</strong><span>Verschiedene Holzarten</span></div>
				<div><strong>100%</strong><span>Handarbeit</span></div>
				<div><strong>10+</strong><span>Jahre Erfahrung</span></div>
			</div>
		</div>
	</section>

	<section class="mpw-source-values" aria-label="Handwerksversprechen">
		<div class="mpw-source-container mpw-source-values__grid">
			<article><span class="mpw-source-value-icon" aria-hidden="true">01</span><div><h2>100% Handarbeit</h2><p>Jedes Objekt wird von mir persönlich an der Drechselbank oder Werkbank in Berlin geformt. Keine Massenware, kein CNC. Nur reines Handwerk.</p></div></article>
			<article><span class="mpw-source-value-icon" aria-hidden="true">02</span><div><h2>Märkische Edelhölzer</h2><p>Ich verarbeite ausschließlich lokale Hölzer wie Eibe, Nussbaum, Robinie oder gestreifte Buche aus Berlin und Brandenburg mit bekannter Herkunft.</p></div></article>
			<article><span class="mpw-source-value-icon" aria-hidden="true">03</span><div><h2>Für Generationen</h2><p>Durch traditionelle Holzverbindungen und Veredelung mit natürlichen Ölen und Wachsen entstehen widerstandsfähige Erbstücke.</p></div></article>
		</div>
	</section>

	<section id="about" class="mpw-source-section mpw-source-section--dark" aria-labelledby="mpw-source-about-title">
		<div class="mpw-source-container mpw-source-about">
			<div class="mpw-source-about__media">
				<img src="<?php echo esc_url( $mpw_source_images . 'craftsman-working.webp' ); ?>" alt="Handwerker bei der Arbeit" width="1920" height="1440" loading="lazy">
				<div class="mpw-source-experience"><strong>10+</strong><span>Jahre Erfahrung</span></div>
			</div>
			<div class="mpw-source-about__content">
				<p class="mpw-source-eyebrow">Über mich</p>
				<h2 id="mpw-source-about-title">Herzlich willkommen<br><span>auf meiner Website</span></h2>
				<p>Ich bin leidenschaftlicher Holzwerker und beschäftige mich schon seit einiger Zeit mit dem Werkstoff Holz. Hier könnt Ihr euch meine Projekte anschauen und auch einiges von meinen Drechselobjekten.</p>
				<p>Hierbei versuche ich das Besondere aus dem Stück Holz zu zaubern und so noch die Lebendigkeit wirken zu lassen. Jede Maserung, jeder Ast erzählt eine Geschichte – und diese Geschichte möchte ich in meinen Werken bewahren.</p>
				<blockquote>„Haben Sie einen Baum bei sich im Garten stehen, mit dem Sie eine Erinnerung verbindet? Melden Sie sich – vielleicht lässt sich ja noch ein schönes Andenken herstellen."</blockquote>
				<a class="mpw-source-button mpw-source-button--primary" href="#contact">Besuchen Sie das Atelier</a>
			</div>
		</div>
	</section>

	<section id="products" class="mpw-source-section mpw-source-section--raised" aria-labelledby="mpw-source-products-title">
		<div class="mpw-source-container">
			<header class="mpw-source-section-heading">
				<p class="mpw-source-eyebrow">Produktkategorien</p>
				<h2 id="mpw-source-products-title">Meine Holzunikate</h2>
				<p>Entdecken Sie die Vielfalt meiner handgefertigten Holzprodukte – von funktionalen Küchenutensilien bis zu dekorativen Kunstwerken.</p>
			</header>
			<div class="mpw-source-category-grid">
				<article class="mpw-source-category-card"><img src="<?php echo esc_url( $mpw_source_images . 'wooden-bowls.webp' ); ?>" alt="Drechselobjekte" width="1920" height="1280" loading="lazy"><div class="mpw-source-category-card__shade"></div><div class="mpw-source-category-card__content"><span>50+ Objekte</span><h3>Drechselobjekte</h3><p>Schalen, Vasen und dekorative Objekte aus verschiedenen Holzarten.</p></div></article>
				<article class="mpw-source-category-card"><img src="<?php echo esc_url( $mpw_source_images . 'pepper-mills.webp' ); ?>" alt="Gewürzmühlen" width="1440" height="1920" loading="lazy"><div class="mpw-source-category-card__shade"></div><div class="mpw-source-category-card__content"><span>20+ Varianten</span><h3>Gewürzmühlen</h3><p>Handgedrechselte Salz- und Pfeffermühlen aus edlen Hölzern.</p></div></article>
				<article class="mpw-source-category-card"><img src="<?php echo esc_url( $mpw_source_images . 'cutting-board.webp' ); ?>" alt="Schneidebretter" width="1920" height="1440" loading="lazy"><div class="mpw-source-category-card__shade"></div><div class="mpw-source-category-card__content"><span>15+ Designs</span><h3>Schneidebretter</h3><p>Robuste Schneidebretter in Stirnholz- und Langholzausführung.</p></div></article>
			</div>
			<p class="mpw-source-more-categories">Weitere Kategorien: Teelichthalter, Flaschenöffner, Windlichter, Tischdeko und mehr</p>
		</div>
	</section>

	<section id="gallery" class="mpw-source-section mpw-source-section--dark" aria-labelledby="mpw-source-gallery-title">
		<div class="mpw-source-container">
			<header class="mpw-source-section-heading">
				<p class="mpw-source-eyebrow">Galerie</p>
				<h2 id="mpw-source-gallery-title">Einblicke in meine Arbeit</h2>
				<p>Eine Auswahl meiner handgefertigten Holzunikate – jedes Stück erzählt seine eigene Geschichte.</p>
			</header>
			<div class="mpw-source-gallery">
				<img src="<?php echo esc_url( $mpw_source_images . 'wooden-bowls.webp' ); ?>" alt="Holzschalen" width="1920" height="1280" loading="lazy">
				<img src="<?php echo esc_url( $mpw_source_images . 'pepper-mills.webp' ); ?>" alt="Gewürzmühlen" width="1440" height="1920" loading="lazy">
				<img src="<?php echo esc_url( $mpw_source_images . 'cutting-board.webp' ); ?>" alt="Schneidebretter" width="1920" height="1440" loading="lazy">
				<img src="<?php echo esc_url( $mpw_source_images . 'craftsman-working.webp' ); ?>" alt="Handwerksarbeit" width="1920" height="1440" loading="lazy">
				<img class="mpw-source-gallery__large" src="<?php echo esc_url( $mpw_source_images . 'hero-workshop.webp' ); ?>" alt="Werkstatt" width="1920" height="1080" loading="lazy">
				<img src="<?php echo esc_url( $mpw_source_images . 'wooden-bowls.webp' ); ?>" alt="Holzschale Detail" width="1920" height="1280" loading="lazy">
				<img src="<?php echo esc_url( $mpw_source_images . 'pepper-mills.webp' ); ?>" alt="Mühle Detail" width="1440" height="1920" loading="lazy">
			</div>
		</div>
	</section>

	<section id="shop" class="mpw-source-section mpw-source-section--raised" aria-labelledby="mpw-source-shop-title">
		<div class="mpw-source-container">
			<header class="mpw-source-section-heading mpw-source-section-heading--split">
				<div><p class="mpw-source-eyebrow">Exklusive Einzelstücke</p><h2 id="mpw-source-shop-title">Frisch aus der Werkstatt</h2></div>
				<a class="mpw-source-text-link" href="#contact">Alle Unikate ansehen</a>
			</header>
			<div class="mpw-source-shop-grid">
				<article class="mpw-source-product-card"><div class="mpw-source-product-card__media"><img src="<?php echo esc_url( $mpw_source_images . 'pepper-mills.webp' ); ?>" alt="Pfeffermühle Zweierlei" width="1440" height="1920" loading="lazy"><span>Walnuss &amp; Ahorn</span></div><div class="mpw-source-product-card__body"><small>Mühlen</small><h3>Pfeffermühle 'Zweierlei'</h3><p>Walnuss &amp; Ahorn mit Keramikmahlwerk</p><div class="mpw-source-product-card__foot"><strong>89,00 €</strong><a href="#contact">Anfragen</a></div></div></article>
				<article class="mpw-source-product-card"><div class="mpw-source-product-card__media"><img src="<?php echo esc_url( $mpw_source_images . 'wooden-bowls.webp' ); ?>" alt="Naturrandschale Eibe" width="1920" height="1280" loading="lazy"><span>Eibe</span><b>Unikat</b></div><div class="mpw-source-product-card__body"><small>Schalen</small><h3>Naturrandschale Eibe</h3><p>Atemberaubende Schale mit Naturrand</p><div class="mpw-source-product-card__foot"><strong>149,00 €</strong><a href="#contact">Anfragen</a></div></div></article>
				<article class="mpw-source-product-card"><div class="mpw-source-product-card__media"><img src="<?php echo esc_url( $mpw_source_images . 'pepper-mills.webp' ); ?>" alt="Salzmühle Klassik" width="1440" height="1920" loading="lazy"><span>Eiche</span></div><div class="mpw-source-product-card__body"><small>Mühlen</small><h3>Salzmühle 'Klassik'</h3><p>Eiche rustikal mit CrushGrind® Mahlwerk</p><div class="mpw-source-product-card__foot"><strong>79,00 €</strong><a href="#contact">Anfragen</a></div></div></article>
				<article class="mpw-source-product-card"><div class="mpw-source-product-card__media"><img src="<?php echo esc_url( $mpw_source_images . 'wooden-bowls.webp' ); ?>" alt="Unikat-Schale Zwetschge" width="1920" height="1280" loading="lazy"><span>Zwetschge</span></div><div class="mpw-source-product-card__body"><small>Schalen</small><h3>Unikat-Schale Zwetschge</h3><p>Farbintensives Zwetschgenholz, dünnwandig</p><div class="mpw-source-product-card__foot"><strong>129,00 €</strong><a href="#contact">Anfragen</a></div></div></article>
				<article class="mpw-source-product-card"><div class="mpw-source-product-card__media"><img src="<?php echo esc_url( $mpw_source_images . 'cutting-board.webp' ); ?>" alt="Schneidebrett Eiche" width="1920" height="1440" loading="lazy"><span>Eiche</span></div><div class="mpw-source-product-card__body"><small>Bretter</small><h3>Schneidebrett Eiche</h3><p>Stirnholz-Schneidebrett, 40x30cm</p><div class="mpw-source-product-card__foot"><strong>79,00 €</strong><a href="#contact">Anfragen</a></div></div></article>
				<article class="mpw-source-product-card"><div class="mpw-source-product-card__media"><img src="<?php echo esc_url( $mpw_source_images . 'wooden-bowls.webp' ); ?>" alt="Teelichthalter 3er Set" width="1920" height="1280" loading="lazy"><span>Verschiedene</span></div><div class="mpw-source-product-card__body"><small>Deko</small><h3>Teelichthalter 3er Set</h3><p>Rustikale Teelichthalter aus verschiedenen Hölzern</p><div class="mpw-source-product-card__foot"><strong>45,00 €</strong><a href="#contact">Anfragen</a></div></div></article>
			</div>
			<aside class="mpw-source-custom-order"><div><p class="mpw-source-eyebrow">Ihr persönliches Projekt</p><h3>Individuelle Anfertigung</h3><p>Sie haben einen besonderen Wunsch oder möchten ein Unikat aus Ihrem eigenen Holz? Kontaktieren Sie mich für eine individuelle Beratung. Jedes Stück wird nach Ihren Vorstellungen handgefertigt.</p></div><a class="mpw-source-button mpw-source-button--primary" href="#contact">Jetzt anfragen</a></aside>
		</div>
	</section>

	<section id="videos" class="mpw-source-section mpw-source-section--dark" aria-labelledby="mpw-source-videos-title">
		<div class="mpw-source-container">
			<header class="mpw-source-section-heading">
				<p class="mpw-source-eyebrow">Videos</p>
				<h2 id="mpw-source-videos-title">Schauen Sie mir bei der Arbeit zu</h2>
				<p>Auf meinem YouTube-Kanal teile ich meine Leidenschaft für Holzbearbeitung. Erleben Sie den Entstehungsprozess meiner Unikate.</p>
			</header>
			<div class="mpw-source-video-grid">
				<article><a class="mpw-source-video-thumb" href="https://youtube.com/@mpwoodworking" target="_blank" rel="noopener"><img src="<?php echo esc_url( $mpw_source_images . 'craftsman-working.webp' ); ?>" alt="Video: Holzschale drechseln" width="1920" height="1080" loading="lazy"><span class="mpw-source-play" aria-hidden="true"></span><small>12:34</small></a><h3>Holzschale drechseln</h3><p>Vom Rohling zum fertigen Unikat – der komplette Prozess.</p></article>
				<article><a class="mpw-source-video-thumb" href="https://youtube.com/@mpwoodworking" target="_blank" rel="noopener"><img src="<?php echo esc_url( $mpw_source_images . 'pepper-mills.webp' ); ?>" alt="Video: Gewürzmühle aus Walnuss" width="1920" height="1080" loading="lazy"><span class="mpw-source-play" aria-hidden="true"></span><small>18:45</small></a><h3>Gewürzmühle aus Walnuss</h3><p>Schritt für Schritt zur eleganten Pfeffermühle.</p></article>
				<article><a class="mpw-source-video-thumb" href="https://youtube.com/@mpwoodworking" target="_blank" rel="noopener"><img src="<?php echo esc_url( $mpw_source_images . 'hero-workshop.webp' ); ?>" alt="Video: Werkstatt Tour" width="1920" height="1080" loading="lazy"><span class="mpw-source-play" aria-hidden="true"></span><small>8:22</small></a><h3>Werkstatt Tour</h3><p>Meine Drechselbank und wichtigsten Werkzeuge.</p></article>
			</div>
			<p class="mpw-source-center"><a class="mpw-source-button mpw-source-button--outline" href="https://youtube.com/@mpwoodworking" target="_blank" rel="noopener">Zum YouTube-Kanal</a></p>
		</div>
	</section>

	<section id="contact" class="mpw-source-section mpw-source-section--raised" aria-labelledby="mpw-source-contact-title">
		<div class="mpw-source-container">
			<header class="mpw-source-section-heading">
				<p class="mpw-source-eyebrow">Kontakt</p>
				<h2 id="mpw-source-contact-title">Kontaktieren Sie mich</h2>
				<p>Haben Sie Fragen zu meinen Produkten oder möchten Sie ein individuelles Stück anfertigen lassen? Ich freue mich auf Ihre Nachricht!</p>
			</header>
			<div class="mpw-source-contact-grid">
				<form class="mpw-source-contact-form" data-mpw-mail-form>
					<div class="mpw-source-form-row"><label>Name *<input name="name" type="text" placeholder="Ihr Name" autocomplete="name" required></label><label>E-Mail *<input name="email" type="email" placeholder="ihre@email.de" autocomplete="email" required></label></div>
					<div class="mpw-source-form-row"><label>Telefon<input name="phone" type="tel" placeholder="+49 ..." autocomplete="tel"></label><label>Betreff<input name="subject" type="text" placeholder="Produktanfrage"></label></div>
					<label>Nachricht *<textarea name="message" rows="5" placeholder="Ihre Nachricht..." required></textarea></label>
					<p class="mpw-source-form-note">Mit dem Absenden öffnen Sie Ihr E-Mail-Programm. Es erfolgt keine Speicherung auf dieser Website. Hinweise finden Sie in der <a href="/datenschutzerklaerung/">Datenschutzerklärung</a>.</p>
					<button class="mpw-source-button mpw-source-button--primary" type="submit">Nachricht senden</button>
				</form>
				<aside class="mpw-source-contact-details">
					<section><h3>Kontaktdaten</h3><p><a href="tel:+493094047482">+49 30 94047482</a><br><a href="mailto:woodworking.mp@gmail.com">woodworking.mp@gmail.com</a><br>Dahmestraße 59, 12526 Berlin</p></section>
					<section><h3>Öffnungszeiten</h3><p><strong>Atelier &amp; Werkstatt Köpenick</strong><br>Besuche ausschließlich nach Vereinbarung.</p></section>
					<section class="mpw-source-contact-callout"><h3>Besonderer Wunsch?</h3><p>Haben Sie einen Baum bei sich im Garten stehen, mit dem Sie eine Erinnerung verbindet? Dieser Baum ist krank oder muss weichen? Melden Sie sich – vielleicht lässt sich ja noch ein schönes Andenken herstellen!</p><a class="mpw-source-text-link" href="tel:+493094047482">Jetzt anrufen</a></section>
				</aside>
			</div>
		</div>
	</section>
</main>
<!-- /wp:html -->
