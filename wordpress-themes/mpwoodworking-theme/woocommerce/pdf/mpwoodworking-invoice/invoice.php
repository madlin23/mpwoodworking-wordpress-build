<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>

<?php do_action( 'wpo_wcpdf_before_document', $this->get_type(), $this->order ); ?>

<!-- Header -->
<table class="head">
    <tr>
        <td class="logo">
            <?php
            if ( $this->has_header_logo() ) {
                $this->header_logo();
            } else {
                echo '<h1>MP WOODWORKING<span class="accent">•</span></h1>';
                echo '<p class="tagline">Handwerk &amp; Massivholz</p>';
            }
            ?>
        </td>
        <td class="shop-info">
            <strong>MP Woodworking</strong><br>
            Marco Paul<br>
            Köpenicker Landstraße 140<br>
            12437 Berlin<br>
            <a href="mailto:atelier@mpwoodworking.de">atelier@mpwoodworking.de</a><br>
            www.mpwoodworking.de
        </td>
    </tr>
</table>

<!-- Dokumententitel & Meta -->
<table class="document-type-header">
    <tr>
        <td class="document-type-label">
            RECHNUNG
        </td>
        <td class="document-meta">
            <table>
                <tr>
                    <td><strong>Rechnungsnummer:</strong></td>
                    <td><?php $this->invoice_number(); ?></td>
                </tr>
                <tr>
                    <td><strong>Rechnungsdatum:</strong></td>
                    <td><?php $this->invoice_date(); ?></td>
                </tr>
                <tr>
                    <td><strong>Bestellnummer:</strong></td>
                    <td><?php $this->order_number(); ?></td>
                </tr>
                <tr>
                    <td><strong>Bestelldatum:</strong></td>
                    <td><?php $this->order_date(); ?></td>
                </tr>
                <?php if ( $this->get_payment_method() ) : ?>
                <tr>
                    <td><strong>Zahlungsart:</strong></td>
                    <td><?php $this->payment_method(); ?></td>
                </tr>
                <?php endif; ?>
            </table>
        </td>
    </tr>
</table>

<!-- Adressen -->
<table class="addresses">
    <tr>
        <td class="address billing-address">
            <h3>Rechnungsempfänger</h3>
            <address>
                <?php $this->billing_address(); ?>
                <?php if ( isset($this->settings['display_email']) ) { ?>
                    <div class="billing-email"><?php $this->billing_email(); ?></div>
                <?php } ?>
                <?php if ( isset($this->settings['display_phone']) ) { ?>
                    <div class="billing-phone"><?php $this->billing_phone(); ?></div>
                <?php } ?>
            </address>
        </td>
        <td class="address shipping-address">
            <?php if ( $this->needs_shipping_address() ) : ?>
                <h3>Lieferadresse</h3>
                <address>
                    <?php $this->shipping_address(); ?>
                </address>
            <?php endif; ?>
        </td>
    </tr>
</table>

<!-- Produkttabelle -->
<table class="order-details">
    <thead>
        <tr>
            <th class="product">Unikat / Artikel</th>
            <th class="price">Einzelpreis</th>
            <th class="qty">Anzahl</th>
            <th class="price">Gesamtpreis</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ( $this->get_order_items() as $item_id => $item ) : ?>
            <tr class="product-row">
                <td class="product">
                    <span class="item-name"><?php echo $item['name']; ?></span>
                    <?php do_action( 'wpo_wcpdf_before_item_meta', $this->get_type(), $item, $this->order  ); ?>
                    <span class="item-meta"><?php echo $item['meta']; ?></span>
                    <dl class="meta">
                        <?php if ( ! empty( $item['sku'] ) ) : ?><dt class="sku">SKU:</dt><dd class="sku"><?php echo $item['sku']; ?></dd><?php endif; ?>
                        <?php if ( ! empty( $item['weight'] ) ) : ?><dt class="weight">Gewicht:</dt><dd class="weight"><?php echo $item['weight']; ?><?php echo esc_attr( get_option('woocommerce_weight_unit') ); ?></dd><?php endif; ?>
                    </dl>
                    <?php do_action( 'wpo_wcpdf_after_item_meta', $this->get_type(), $item, $this->order  ); ?>
                </td>
                <td class="price"><?php echo $item['single_price']; ?></td>
                <td class="qty"><?php echo $item['quantity']; ?></td>
                <td class="price"><?php echo $item['price']; ?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<!-- Zusammenfassung / Totals -->
<table class="totals-table">
    <tr>
        <td class="totals-spacer"></td>
        <td class="totals-wrapper">
            <table class="totals">
                <?php foreach ( $this->get_order_totals() as $key => $total ) : ?>
                    <tr class="<?php echo $key; ?> <?php echo ($key == 'order_total') ? 'grand-total' : ''; ?>">
                        <td class="total-row-label"><?php echo $total['label']; ?></td>
                        <td class="total-row-value"><?php echo $total['value']; ?></td>
                    </tr>
                <?php endforeach; ?>
            </table>
        </td>
    </tr>
</table>

<!-- Hinweise & Zahlungsinformationen -->
<table class="notes-and-payment">
    <tr>
        <td class="notes-and-payment-cell">
            <h4>Zahlungshinweise &amp; Manufaktur-Garantie</h4>
            <p style="margin: 0 0 10px 0;">
                Vielen Dank für Ihren Einkauf bei MP Woodworking! Da es sich bei unseren Objekten um handgedrechselte Unikate handelt, erhalten Sie hiermit ein echtes Stück märkische Natur. Jedes Werkstück wird mit biologischen Ölen und Wachsen veredelt.
            </p>
            <p style="margin: 0;">
                <strong>Kleinunternehmerregelung:</strong> Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen. Bitte überweisen Sie den Rechnungsbetrag innerhalb von 7 Tagen unter Angabe der Bestellnummer auf unser Bankkonto.
            </p>
        </td>
    </tr>
</table>

<div id="footer">
    MP Woodworking • Inhaber: Marco Paul • Köpenicker Landstraße 140, 12437 Berlin • Steuernummer: 36/468/01152
</div>

<?php do_action( 'wpo_wcpdf_after_document', $this->get_type(), $this->order ); ?>
