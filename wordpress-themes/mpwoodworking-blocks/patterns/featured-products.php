<?php
/**
 * Title: Frisch aus der Werkstatt
 * Slug: mpwoodworking/featured-products
 * Categories: mpwoodworking, featured
 * Keywords: produkte, shop, unikate, woocommerce
 * Description: Die drei neuesten WooCommerce-Produkte als markengerechtes Produkt-Raster.
 * Viewport Width: 1280
 * Inserter: true
 */
?>
<!-- wp:group {"align":"full","className":"mp-section mp-section--bordered","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mp-section mp-section--bordered"><!-- wp:group {"align":"wide","className":"is-style-mp-section-heading","layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
<div class="wp-block-group alignwide is-style-mp-section-heading"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"className":"mp-kicker"} -->
<p class="mp-kicker"><?php echo esc_html_x( 'Exklusive Einzelstücke', 'Products eyebrow', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":2,"className":"mp-section-title"} -->
<h2 class="wp-block-heading mp-section-title"><?php echo esc_html_x( 'Frisch aus der Werkstatt', 'Products heading', 'mpwoodworking-blocks' ); ?></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->
<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><a href="/shop/"><?php echo esc_html_x( 'Alle Unikate ansehen →', 'Products link', 'mpwoodworking-blocks' ); ?></a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:woocommerce/product-collection {"queryId":41,"query":{"perPage":3,"pages":0,"offset":0,"postType":"product","order":"desc","orderBy":"date","search":"","exclude":[],"inherit":false,"taxQuery":{},"isProductCollectionBlock":true},"tagName":"div","displayLayout":{"type":"flex","columns":3,"shrinkColumns":true},"dimensions":{"widthType":"fill"},"align":"wide","className":"mp-product-grid"} -->
<div class="wp-block-woocommerce-product-collection alignwide mp-product-grid"><!-- wp:woocommerce/product-template -->
<!-- wp:group {"className":"mp-product-card","layout":{"type":"constrained"}} -->
<div class="wp-block-group mp-product-card"><!-- wp:woocommerce/product-image {"showSaleBadge":false,"imageSizing":"thumbnail","isDescendentOfQueryLoop":true,"className":"mp-product-card__image"} /-->
<!-- wp:group {"className":"mp-product-card__body","layout":{"type":"constrained"}} -->
<div class="wp-block-group mp-product-card__body"><!-- wp:woocommerce/product-title {"isLink":true,"isDescendentOfQueryLoop":true,"fontSize":"x-large"} /-->
<!-- wp:woocommerce/product-price {"isDescendentOfQueryLoop":true,"fontSize":"large"} /-->
<!-- wp:woocommerce/product-button {"isDescendentOfQueryLoop":true,"className":"is-style-fill"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
<!-- /wp:woocommerce/product-template -->

<!-- wp:woocommerce/product-collection-no-results -->
<!-- wp:group {"className":"is-style-mp-panel","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-mp-panel"><!-- wp:paragraph {"textColor":"muted"} -->
<p class="has-muted-color has-text-color"><?php echo esc_html_x( 'Noch keine Unikate veröffentlicht. Neue WooCommerce-Produkte erscheinen hier automatisch.', 'Products empty state', 'mpwoodworking-blocks' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- /wp:woocommerce/product-collection-no-results --></div>
<!-- /wp:woocommerce/product-collection --></div>
<!-- /wp:group -->
