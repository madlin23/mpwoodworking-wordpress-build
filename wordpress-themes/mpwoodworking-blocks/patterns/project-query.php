<?php
/**
 * Title: Projekt-Highlights
 * Slug: mpwoodworking/project-query
 * Categories: mpwoodworking, posts
 * Keywords: projekte, query, chronik, maßanfertigung
 * Description: Zeigt die neuesten Projekte als native WordPress-Abfrage mit zwei Karten.
 * Viewport Width: 1280
 * Inserter: true
 */
?>
<!-- wp:group {"align":"full","className":"mp-section mp-section--bordered","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mp-section mp-section--bordered"><!-- wp:group {"align":"wide","className":"is-style-mp-section-heading","layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
<div class="wp-block-group alignwide is-style-mp-section-heading"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"className":"mp-kicker"} -->
<p class="mp-kicker"><?php echo esc_html_x( 'Handwerks-Chronik', 'Projects eyebrow', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2,"className":"mp-section-title"} -->
<h2 class="wp-block-heading mp-section-title"><?php echo esc_html_x( 'Maßanfertigungen & Projekte', 'Projects heading', 'mpwoodworking-blocks' ); ?></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><a href="/projekte/"><?php echo esc_html_x( 'Alle Projekte ansehen →', 'Projects link', 'mpwoodworking-blocks' ); ?></a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:query {"queryId":21,"query":{"perPage":2,"pages":0,"offset":0,"postType":"projekt","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"align":"wide","className":"mp-project-grid"} -->
<div class="wp-block-query alignwide mp-project-grid"><!-- wp:post-template {"layout":{"type":"grid","columnCount":2}} -->
<!-- wp:group {"className":"mp-project-card","layout":{"type":"constrained"}} -->
<div class="wp-block-group mp-project-card"><!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/10","align":"wide"} /-->

<!-- wp:group {"className":"mp-project-card__body","layout":{"type":"constrained"}} -->
<div class="wp-block-group mp-project-card__body"><!-- wp:post-terms {"term":"holzart","textColor":"lime","fontSize":"small"} /-->
<!-- wp:post-title {"isLink":true,"fontSize":"x-large"} /-->
<!-- wp:post-excerpt {"moreText":"Entstehungsgeschichte →","showMoreOnNewLine":true,"excerptLength":20,"textColor":"muted","fontSize":"small"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:group {"className":"is-style-mp-panel","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-mp-panel"><!-- wp:paragraph {"textColor":"muted"} -->
<p class="has-muted-color has-text-color"><?php echo esc_html_x( 'Noch keine Projekte veröffentlicht. Legen Sie im WordPress-Backend den ersten Projekteintrag an.', 'Projects empty state', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->
