/**
 * Clientseitige Block-Registrierung für den Editor.
 * Registriert serverseitig gerenderte Blöcke, damit der Editor sie erkennt.
 */
( function () {
	const { registerBlockType } = wp.blocks;
	const { createElement: el } = wp.element;
	const { useBlockProps } = wp.blockEditor;

	// MP Projektdetails
	registerBlockType( 'mpwoodworking/project-details', {
		title: 'MP Projektdetails',
		description: 'Zeigt Jahr, Holzart, Dauer, Maße und Ort des aktuellen Projekts.',
		category: 'widgets',
		icon: 'hammer',
		supports: {
			html: false,
			align: [ 'wide', 'full' ],
		},
		usesContext: [ 'postId', 'postType' ],
		edit: function ( props ) {
			var blockProps = useBlockProps( { className: 'mp-project-details is-style-mp-panel' } );
			return el(
				'div',
				blockProps,
				el( 'p', { className: 'mp-kicker' }, 'Projektdaten' ),
				el( 'p', { style: { opacity: 0.6 } }, 'Projektdetails werden aus den Feldern unterhalb des Editors geladen.' )
			);
		},
		save: function () {
			return null; // Server-side rendered
		},
	} );

	// MP Verknüpfte Produkte
	registerBlockType( 'mpwoodworking/related-products', {
		title: 'MP Verknüpfte Produkte',
		description: 'Zeigt die im Projekt hinterlegten WooCommerce-Produkte.',
		category: 'woocommerce',
		icon: 'products',
		supports: {
			html: false,
			align: [ 'wide', 'full' ],
		},
		usesContext: [ 'postId', 'postType' ],
		edit: function ( props ) {
			var blockProps = useBlockProps( { className: 'mp-related-products' } );
			return el(
				'div',
				blockProps,
				el( 'p', { className: 'mp-kicker' }, 'Verknüpfte Produkte' ),
				el( 'p', { style: { opacity: 0.6 } }, 'Produkte werden aus den Produkt-IDs unterhalb des Editors geladen.' )
			);
		},
		save: function () {
			return null; // Server-side rendered
		},
	} );

	// MP Unikat-Badge
	registerBlockType( 'mpwoodworking/unique-badge', {
		title: 'MP Unikat-Badge',
		description: 'Zeigt ein Unikat-Badge für Produkte an.',
		category: 'widgets',
		icon: 'awards',
		supports: {
			html: false,
		},
		edit: function ( props ) {
			var blockProps = useBlockProps( { className: 'mp-unique-badge' } );
			return el( 'div', blockProps, el( 'span', null, 'UNIKAT' ) );
		},
		save: function () {
			return null;
		},
	} );

	// MP Shop Filters
	registerBlockType( 'mpwoodworking/shop-filters', {
		title: 'MP Shop Filter',
		description: 'Zeigt Filteroptionen für den Shop an.',
		category: 'woocommerce',
		icon: 'filter',
		supports: {
			html: false,
		},
		edit: function ( props ) {
			var blockProps = useBlockProps( { className: 'mp-shop-filters' } );
			return el( 'div', blockProps, el( 'p', { style: { opacity: 0.6 } }, 'Shop-Filter (serverseitig gerendert)' ) );
		},
		save: function () {
			return null;
		},
	} );
} )();
