<?php
/**
 * Title: Ateliergeschichte – Marco Paul
 * Slug: mpwoodworking/atelier-story
 * Categories: mpwoodworking, about
 * Keywords: atelier, marco, portrait, geschichte
 * Description: Zweispaltige Über-uns-Section mit Porträt-Slot, Zitat und Kontakt-CTA.
 * Viewport Width: 1280
 * Inserter: true
 */
?>
<!-- wp:group {"align":"full","className":"mp-section mp-section--bordered","backgroundColor":"surface","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mp-section mp-section--bordered has-surface-background-color has-background"><!-- wp:columns {"align":"wide","verticalAlignment":"center","className":"mp-split","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|70"}}}} -->
<div class="wp-block-columns alignwide are-vertically-aligned-center mp-split"><!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:group {"className":"mp-media-placeholder","layout":{"type":"constrained"}} -->
<div class="wp-block-group mp-media-placeholder"></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:group {"className":"is-style-mp-section-heading","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-mp-section-heading"><!-- wp:paragraph {"className":"mp-kicker"} -->
<p class="mp-kicker"><?php echo esc_html_x( 'Der Kopf dahinter', 'Atelier eyebrow', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2,"className":"mp-section-title"} -->
<h2 class="wp-block-heading mp-section-title"><?php echo esc_html_x( 'Marco Paul', 'Atelier heading', 'mpwoodworking-blocks' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph {"textColor":"muted"} -->
<p class="has-muted-color has-text-color"><?php echo esc_html_x( 'Holz ist kein toter Werkstoff. Es arbeitet, atmet und besitzt ein Gedächtnis. Risse, Verwachsungen und die Färbung der Jahresringe bestimmen die finale Form. Ich zwinge dem Holz kein Design auf – ich helfe ihm, seine innere Schönheit zu offenbaren.', 'Atelier quote', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph {"textColor":"muted","fontSize":"small"} -->
<p class="has-muted-color has-text-color has-small-font-size"><?php echo esc_html_x( 'In meiner Werkstatt in Berlin-Köpenick arbeite ich mit traditionellen Werkzeugen und viel Geduld. Jedes fertige Werkstück ist das Ergebnis stundenlanger Konzentration, scharfer Eisen und feinsten Schleifstaubs.', 'Atelier copy', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/kontakt/"><?php echo esc_html_x( 'Besuchen Sie das Atelier', 'Atelier button', 'mpwoodworking-blocks' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->
