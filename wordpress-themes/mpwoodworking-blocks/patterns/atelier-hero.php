<?php
/**
 * Title: Atelier-Hero
 * Slug: mpwoodworking/atelier-hero
 * Categories: mpwoodworking, featured
 * Keywords: hero, atelier, startseite, woodworking
 * Description: Plakativer Startseiten-Hero mit Markenbotschaft und zwei Handlungsaufforderungen.
 * Viewport Width: 1440
 * Inserter: true
 */
?>
<!-- wp:group {"align":"full","className":"mp-hero","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mp-hero"><!-- wp:group {"align":"wide","className":"mp-hero__inner","layout":{"type":"constrained","justifyContent":"center"}} -->
<div class="wp-block-group alignwide mp-hero__inner"><!-- wp:paragraph {"align":"center","className":"mp-eyebrow"} -->
<p class="has-text-align-center mp-eyebrow"><?php echo esc_html_x( 'Manufaktur für Holzobjekte', 'Hero eyebrow', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","level":1,"className":"mp-hero__title"} -->
<h1 class="wp-block-heading has-text-align-center mp-hero__title"><?php echo wp_kses_post( _x( 'Die Seele des Holzes,<br><strong>in Form gedreht.</strong>', 'Hero heading', 'mpwoodworking-blocks' ) ); ?></h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","className":"mp-hero__copy"} -->
<p class="has-text-align-center mp-hero__copy"><?php echo esc_html_x( 'In meiner Werkstatt in Berlin-Köpenick entstehen aus märkischen Edelhölzern einzigartige, handgedrechselte Schalen, Gewürzmühlen und feine Möbel. Jedes Stück ist ein kompromissloses Unikat mit rauem, edlem Charakter.', 'Hero copy', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"className":"mp-hero__actions","layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons mp-hero__actions"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/shop/"><?php echo esc_html_x( 'Unikate entdecken', 'Hero button', 'mpwoodworking-blocks' ); ?></a></div>
<!-- /wp:button -->

<!-- wp:button {"className":"is-style-mp-secondary"} -->
<div class="wp-block-button is-style-mp-secondary"><a class="wp-block-button__link wp-element-button" href="/kontakt/"><?php echo esc_html_x( 'Maßanfertigungen', 'Hero button', 'mpwoodworking-blocks' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
