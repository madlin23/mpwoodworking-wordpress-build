<?php
/**
 * Title: Kontaktformular und Kontaktdaten
 * Slug: mpwoodworking/contact-section
 * Categories: mpwoodworking, contact
 * Keywords: kontakt, formular, atelier, anfrage, e-mail
 * Description: Responsive Kontakt-Section mit datensparsamer E-Mail-Anfrage, Kontaktdaten und Werkstatthinweisen.
 * Viewport Width: 1280
 * Inserter: true
 */
?>
<!-- wp:html -->
<section class="mpw-source-section mpw-source-section--raised mpw-contact-page" aria-labelledby="mpw-contact-title">
	<div class="mpw-source-container">
		<header class="mpw-source-section-heading">
			<p class="mpw-source-eyebrow"><?php echo esc_html_x( 'Kontakt', 'Contact eyebrow', 'mpwoodworking-blocks' ); ?></p>
			<h1 id="mpw-contact-title"><?php echo esc_html_x( 'Kontaktieren Sie mich', 'Contact page heading', 'mpwoodworking-blocks' ); ?></h1>
			<p><?php echo esc_html_x( 'Haben Sie Fragen zu meinen Produkten oder möchten Sie ein individuelles Stück anfertigen lassen? Ich freue mich auf Ihre Nachricht!', 'Contact page introduction', 'mpwoodworking-blocks' ); ?></p>
		</header>

		<div class="mpw-source-contact-grid">
			<form
				class="mpw-source-contact-form"
				data-mpw-mail-form
				data-recipient="<?php echo esc_attr( 'info@mp-woodworking.de' ); ?>"
				action="mailto:<?php echo esc_attr( 'info@mp-woodworking.de' ); ?>"
				method="post"
				enctype="text/plain"
				aria-label="<?php echo esc_attr_x( 'Kontaktformular', 'Contact form accessible name', 'mpwoodworking-blocks' ); ?>"
				aria-describedby="mpw-contact-form-note mpw-contact-form-status"
			>
				<div class="mpw-source-form-row">
					<label for="mpw-contact-name">
						<?php echo esc_html_x( 'Name', 'Contact form label', 'mpwoodworking-blocks' ); ?>
						<span aria-hidden="true"> *</span><span class="screen-reader-text"> <?php echo esc_html_x( '(Pflichtfeld)', 'Required field note', 'mpwoodworking-blocks' ); ?></span>
						<input id="mpw-contact-name" name="name" type="text" placeholder="<?php echo esc_attr_x( 'Ihr Name', 'Contact form placeholder', 'mpwoodworking-blocks' ); ?>" autocomplete="name" maxlength="120" required>
					</label>
					<label for="mpw-contact-email">
						<?php echo esc_html_x( 'E-Mail', 'Contact form label', 'mpwoodworking-blocks' ); ?>
						<span aria-hidden="true"> *</span><span class="screen-reader-text"> <?php echo esc_html_x( '(Pflichtfeld)', 'Required field note', 'mpwoodworking-blocks' ); ?></span>
						<input id="mpw-contact-email" name="email" type="email" placeholder="<?php echo esc_attr_x( 'ihre@email.de', 'Contact form placeholder', 'mpwoodworking-blocks' ); ?>" autocomplete="email" maxlength="254" required>
					</label>
				</div>

				<div class="mpw-source-form-row">
					<label for="mpw-contact-phone">
						<?php echo esc_html_x( 'Telefon', 'Contact form label', 'mpwoodworking-blocks' ); ?>
						<input id="mpw-contact-phone" name="phone" type="tel" placeholder="<?php echo esc_attr_x( '+49 ...', 'Contact form placeholder', 'mpwoodworking-blocks' ); ?>" autocomplete="tel" maxlength="50">
					</label>
					<label for="mpw-contact-subject">
						<?php echo esc_html_x( 'Betreff', 'Contact form label', 'mpwoodworking-blocks' ); ?>
						<input id="mpw-contact-subject" name="subject" type="text" placeholder="<?php echo esc_attr_x( 'Produktanfrage', 'Contact form placeholder', 'mpwoodworking-blocks' ); ?>" maxlength="160">
					</label>
				</div>

				<label for="mpw-contact-message">
					<?php echo esc_html_x( 'Nachricht', 'Contact form label', 'mpwoodworking-blocks' ); ?>
					<span aria-hidden="true"> *</span><span class="screen-reader-text"> <?php echo esc_html_x( '(Pflichtfeld)', 'Required field note', 'mpwoodworking-blocks' ); ?></span>
					<textarea id="mpw-contact-message" name="message" rows="5" placeholder="<?php echo esc_attr_x( 'Ihre Nachricht...', 'Contact form placeholder', 'mpwoodworking-blocks' ); ?>" maxlength="1500" required></textarea>
				</label>

				<p id="mpw-contact-form-note" class="mpw-source-form-note">
					<?php echo wp_kses_post( _x( 'Mit dem Absenden öffnen Sie Ihr E-Mail-Programm. Es erfolgt keine Speicherung auf dieser Website. Hinweise finden Sie in der <a href="/datenschutz/">Datenschutzerklärung</a>.', 'Contact form privacy note', 'mpwoodworking-blocks' ) ); ?>
				</p>
				<p id="mpw-contact-form-status" class="mpw-source-form-status" role="status" aria-live="polite"></p>
				<button class="mpw-source-button mpw-source-button--primary" type="submit"><?php echo esc_html_x( 'Nachricht senden', 'Contact form submit button', 'mpwoodworking-blocks' ); ?></button>
			</form>

			<aside class="mpw-source-contact-details" aria-label="<?php echo esc_attr_x( 'Weitere Kontaktinformationen', 'Contact details accessible name', 'mpwoodworking-blocks' ); ?>">
				<section>
					<h2><?php echo esc_html_x( 'Kontaktdaten', 'Contact details heading', 'mpwoodworking-blocks' ); ?></h2>
					<address>
						<a href="tel:+493094047482">+49 30 94047482</a><br>
						<a href="mailto:info@mp-woodworking.de">info@mp-woodworking.de</a><br>
						<?php echo esc_html_x( 'Dahmestraße 59, 12526 Berlin', 'Contact postal address', 'mpwoodworking-blocks' ); ?>
					</address>
				</section>

				<section>
					<h2><?php echo esc_html_x( 'Öffnungszeiten', 'Opening hours heading', 'mpwoodworking-blocks' ); ?></h2>
					<p><strong><?php echo esc_html_x( 'Werkstatt Bohnsdorf', 'Workshop location', 'mpwoodworking-blocks' ); ?></strong><br><?php echo esc_html_x( 'Besuche ausschließlich nach Vereinbarung.', 'Opening hours note', 'mpwoodworking-blocks' ); ?></p>
				</section>

				<section class="mpw-source-contact-callout">
					<h2><?php echo esc_html_x( 'Besonderer Wunsch?', 'Special request heading', 'mpwoodworking-blocks' ); ?></h2>
					<p><?php echo esc_html_x( 'Haben Sie einen Baum bei sich im Garten stehen, mit dem Sie eine Erinnerung verbindet? Dieser Baum ist krank oder muss weichen? Melden Sie sich – vielleicht lässt sich ja noch ein schönes Andenken herstellen!', 'Special request copy', 'mpwoodworking-blocks' ); ?></p>
					<a class="mpw-source-text-link" href="tel:+493094047482"><?php echo esc_html_x( 'Jetzt anrufen', 'Phone call link', 'mpwoodworking-blocks' ); ?></a>
				</section>
			</aside>
		</div>
	</div>
</section>
<!-- /wp:html -->
