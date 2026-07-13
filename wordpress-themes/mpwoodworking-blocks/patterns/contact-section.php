<?php
/**
 * Title: Kontakt und Atelier-Anfrage
 * Slug: mpwoodworking/contact-section
 * Categories: mpwoodworking, contact
 * Keywords: kontakt, atelier, anfrage, e-mail
 * Description: Zweispaltige Kontakt-Section mit Kontaktdaten und datensparsamer E-Mail-Projektanfrage.
 * Viewport Width: 1280
 * Inserter: true
 */
?>
<!-- wp:group {"align":"full","className":"mp-section mp-section--bordered","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mp-section mp-section--bordered"><!-- wp:columns {"align":"wide","className":"mp-split","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|70"}}}} -->
<div class="wp-block-columns alignwide mp-split"><!-- wp:column {"width":"42%"} -->
<div class="wp-block-column" style="flex-basis:42%"><!-- wp:group {"className":"is-style-mp-section-heading","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-mp-section-heading"><!-- wp:paragraph {"className":"mp-kicker"} -->
<p class="mp-kicker"><?php echo esc_html_x( 'Direkt aus der Werkstatt', 'Contact eyebrow', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2,"className":"mp-section-title"} -->
<h2 class="wp-block-heading mp-section-title"><?php echo esc_html_x( 'Lassen Sie uns über Holz sprechen.', 'Contact heading', 'mpwoodworking-blocks' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"mp-lead"} -->
<p class="mp-lead"><?php echo esc_html_x( 'Beschreiben Sie kurz Ihr Vorhaben, das gewünschte Holz und – falls bereits bekannt – Maße oder Verwendungszweck. Ich melde mich persönlich zurück.', 'Contact copy', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-mp-spec-list"} -->
<ul class="is-style-mp-spec-list"><li><?php echo wp_kses_post( _x( '<strong>Ort</strong> Berlin-Köpenick', 'Contact location', 'mpwoodworking-blocks' ) ); ?></li><li><?php echo wp_kses_post( _x( '<strong>E-Mail</strong> <a href="mailto:hallo@mp-woodworking.de">hallo@mp-woodworking.de</a>', 'Contact email', 'mpwoodworking-blocks' ) ); ?></li><li><?php echo wp_kses_post( _x( '<strong>Antwortzeit</strong> In der Regel 2–3 Werktage', 'Contact response time', 'mpwoodworking-blocks' ) ); ?></li></ul>
<!-- /wp:list --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"58%"} -->
<div class="wp-block-column" style="flex-basis:58%"><!-- wp:group {"className":"is-style-mp-panel","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-mp-panel"><!-- wp:heading {"level":3,"fontSize":"x-large"} -->
	<h3 class="wp-block-heading has-x-large-font-size"><?php echo esc_html_x( 'Projekt per E-Mail anfragen', 'Contact email heading', 'mpwoodworking-blocks' ); ?></h3>
	<!-- /wp:heading -->

	<!-- wp:paragraph {"textColor":"muted","fontSize":"small"} -->
	<p class="has-muted-color has-text-color has-small-font-size"><?php echo esc_html_x( 'Senden Sie Ihre Anfrage direkt an das Atelier. Hilfreich sind eine kurze Beschreibung, gewünschte Holzart, ungefähre Maße und – falls vorhanden – Fotos oder Skizzen.', 'Contact email copy', 'mpwoodworking-blocks' ); ?></p>
	<!-- /wp:paragraph -->

	<!-- wp:buttons -->
	<div class="wp-block-buttons"><!-- wp:button -->
	<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="mailto:hallo@mp-woodworking.de?subject=Projektanfrage%20an%20MP%20Woodworking"><?php echo esc_html_x( 'E-Mail vorbereiten', 'Contact email button', 'mpwoodworking-blocks' ); ?></a></div>
	<!-- /wp:button --></div>
	<!-- /wp:buttons -->

	<!-- wp:separator {"className":"mp-rule"} -->
	<hr class="wp-block-separator has-alpha-channel-opacity mp-rule"/>
	<!-- /wp:separator -->

	<!-- wp:paragraph {"textColor":"muted","fontSize":"small"} -->
	<p class="has-muted-color has-text-color has-small-font-size"><?php echo wp_kses_post( _x( 'Beim Klick öffnet sich Ihr E-Mail-Programm. Diese Website speichert dabei keine Formulardaten. Weitere Informationen finden Sie im <a href="/datenschutz/">Datenschutz</a>.', 'Contact email privacy note', 'mpwoodworking-blocks' ) ); ?></p>
	<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->
