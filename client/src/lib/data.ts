// Strukturierte Daten für MP Woodworking auf Basis der echten WXR/XML-Exportanalyse

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  salePrice?: number;
  sku: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  categories: string[];
  woodType: string;
  dimensions: string;
  weight: string;
  surface: string;
  stock: number;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  year: string;
  woodType: string;
  dimensions: string;
  surface: string;
  description: string;
  image: string;
  gallery: string[];
  acfFields: {
    holzart_detail: string;
    herstellungsdauer: string;
    besonderheiten: string;
  };
}

export interface WoodType {
  name: string;
  slug: string;
  scientificName: string;
  color: string;
  hardness: string;
  origin: string;
  description: string;
  features: string[];
}

// Echte Produkte aus der XML-Datei mit gültigen Cloud-Storage-Bildern
export const products: Product[] = [
  {
    id: 1,
    title: "Pfeffermühle 'Zweierlei' (Walnuss & Ahorn)",
    slug: "pfeffermuehle-zweierlei",
    price: 89.00,
    sku: "PM-ZW-01",
    shortDescription: "Handgedrechselte Pfeffermühle mit markantem Kontrast aus dunklem Walnussholz und hellem Bergahorn. Ausgestattet mit einem stufenlos verstellbaren Keramikmahlwerk.",
    description: "Diese exklusive Pfeffermühle vereint traditionelle Drechselkunst mit modernem, kontrastreichem Design. Der Korpus besteht aus edlem, dunklem Walnussholz aus Berlin-Köpenick, während Kopf und Fuß aus feinstem, hellem Bergahorn gefertigt sind. Jedes Stück ist ein Unikat mit einzigartiger Maserung. Das hochwertige Keramikmahlwerk ist langlebig, korrosionsfrei und eignet sich hervorragend für Pfeffer, Meersalz und getrocknete Kräuter.",
    image: "/manus-storage/product_muehle_c3739d10.png",
    gallery: [
      "/manus-storage/product_muehle_c3739d10.png"
    ],
    categories: ["Mühlen", "Küchenhelfer"],
    woodType: "Walnuss & Ahorn",
    dimensions: "Höhe: 22 cm, Durchmesser: 5.5 cm",
    weight: "ca. 320g",
    surface: "Lebensmittelecht geölt (Walnussöl) und fein poliert",
    stock: 3
  },
  {
    id: 2,
    title: "Naturrandschale aus Eibe (Eibe-Maser)",
    slug: "naturrandschale-eibe",
    price: 149.00,
    sku: "NS-EB-04",
    shortDescription: "Atemberaubende Naturrandschale gedrechselt aus dem seltenen Holz der Eibe. Faszinierendes Farbspiel aus leuchtend orangefarbenem Kernholz und hellem Splintholz.",
    description: "Ein echtes Kunstwerk der Natur. Diese Schale wurde mit der natürlichen Rinde (Naturrand) aus einem massiven Eibenstamm gedrechselt. Eibenholz gehört zu den edelsten, härtesten und seltensten Hölzern Europas. Die Schale zeigt den charakteristischen, dramatischen Kontrast zwischen dem warmen, orange-roten Kernholz und dem hellen, cremefarbenen Splintholz. Perfekt als Solitär-Objekt oder edle Obstschale.",
    image: "/manus-storage/product_schale_2c1c6821.png",
    gallery: [
      "/manus-storage/product_schale_2c1c6821.png"
    ],
    categories: ["Schalen", "Wohnaccessoires"],
    woodType: "Eibe",
    dimensions: "Durchmesser: ca. 24 cm, Höhe: 11 cm",
    weight: "ca. 450g",
    surface: "Mehrfach mit biologischem Hartwachsöl versiegelt, seidenmatt",
    stock: 1
  },
  {
    id: 3,
    title: "Salzmühle 'Klassik' (Eiche rustikal)",
    slug: "salzmuehle-klassik-eiche",
    price: 79.00,
    sku: "SM-EI-02",
    shortDescription: "Robuste Salzmühle aus märkischer Eiche mit ausdrucksstarkem Astanteil. Langlebiges dänisches CrushGrind® Mahlwerk.",
    description: "Diese klassische Salzmühle ist für Generationen gebaut. Gefertigt aus massiver märkischer Eiche, besticht sie durch ihre rustikale Maserung mit natürlichen Rissen und Astansätzen, die stabilisiert wurden. Das dänische CrushGrind® Keramikmahlwerk bietet überragende Mahlleistung und lässt sich über ein Rädchen an der Unterseite perfekt justieren.",
    image: "/manus-storage/product_muehle_c3739d10.png",
    gallery: [],
    categories: ["Mühlen", "Küchenhelfer"],
    woodType: "Eiche",
    dimensions: "Höhe: 20 cm, Durchmesser: 6 cm",
    weight: "ca. 350g",
    surface: "Lebensmittelecht geölt, wasserabweisend",
    stock: 5
  },
  {
    id: 4,
    title: "Unikat-Schale aus Zwetschge",
    slug: "unikat-schale-zwetschge",
    price: 129.00,
    sku: "US-ZW-03",
    shortDescription: "Elegante, flache Schale aus dem farbintensiven Holz des Zwetschgenbaums (Pflaume). Samtige Haptik.",
    description: "Zwetschgenholz (auch als Pflaumenholz bekannt) fasziniert durch seine violetten, rötlichen und tiefbraunen Farbstreifen. Diese Schale wurde besonders dünnwandig ausgedreht, wodurch sie eine feine Eleganz erhält. Sie eignet sich hervorragend zur Aufbewahrung von Schmuck, Schlüsseln oder als reines Dekorationsobjekt auf einem Sideboard.",
    image: "/manus-storage/product_schale_2c1c6821.png",
    gallery: [],
    categories: ["Schalen", "Wohnaccessoires"],
    woodType: "Zwetschge (Pflaume)",
    dimensions: "Durchmesser: 18 cm, Höhe: 5 cm",
    weight: "ca. 210g",
    surface: "Naturöl-Wachs-Finish, hochglanzpoliert",
    stock: 2
  }
];

// Echte Projekte aus der XML-Datei mit gültigen Cloud-Storage-Bildern
export const projects: Project[] = [
  {
    id: 101,
    title: "Eibenholz-Schale 'Naturrand'",
    slug: "eibenholz-schale-naturrand",
    year: "2026",
    woodType: "Eibe (Taxus baccata)",
    dimensions: "Ø 26 cm, Höhe 12 cm",
    surface: "Hartwachsöl seidenmatt",
    description: "Dieses Projekt zeigt die Entstehung einer skulpturalen Schale aus einem 120 Jahre alten Eibenstamm aus Berlin-Köpenick. Die besondere Herausforderung lag im Erhalt des extrem dünnen, rissgefährdeten Splintholzes am Naturrand. Durch extrem langsame Trocknung und präzises Drechseln im nassen Zustand konnte dieses meisterhafte Unikat stabilisiert werden.",
    image: "/manus-storage/product_schale_2c1c6821.png",
    gallery: [
      "/manus-storage/product_schale_2c1c6821.png"
    ],
    acfFields: {
      holzart_detail: "Lokale Eibe (Berlin-Köpenick), extrem dichte Jahresringe.",
      herstellungsdauer: "ca. 14 Stunden reine Drechsel- und Schleifarbeit (ohne Trocknungszeit).",
      besonderheiten: "Erhalt der natürlichen Baumrinde am oberen Schalenrand."
    }
  },
  {
    id: 102,
    title: "Walnuss-Esstisch 'Köpenick'",
    slug: "walnuss-esstisch-koepenick",
    year: "2025",
    woodType: "Walnuss (Juglans regia)",
    dimensions: "220 cm x 95 cm, Height 76 cm",
    surface: "Naturöl-Finish, wasserabweisend",
    description: "Ein massiver Esstisch aus zwei spiegelbildlich gefügten Bohlen (Bookmatch) eines Berliner Walnussbaums. Die natürlichen Baumkanten wurden geschält, gebürstet und geschliffen, um ihren organischen Charakter zu bewahren. Getragen wird die schwere Tischplatte von einem handgeschmiedeten, minimalistischen Rohstahl-Gestell.",
    image: "/manus-storage/hero_atelier_0f82348e.png",
    gallery: [],
    acfFields: {
      holzart_detail: "Berliner Walnuss mit wildem Kern und wunderschönen Astwirbeln.",
      herstellungsdauer: "ca. 45 Arbeitsstunden über einen Zeitraum von 3 Monaten.",
      besonderheiten: "Baumkanten im Originalzustand, Astlöcher mit transparentem Epoxidharz stabilisiert."
    }
  },
  {
    id: 103,
    title: "Serie 'Zweierlei' Pfeffermühlen",
    slug: "serie-zweierlei-muehlen",
    year: "2026",
    woodType: "Walnuss, Ahorn, Kirsche, Zwetschge",
    dimensions: "Höhe 22 cm",
    surface: "Lebensmittelechtes Walnussöl",
    description: "Die Mühlen-Serie 'Zweierlei' entstand aus dem Wunsch, haptisch und visuell kontrastierende Hölzer im Drechselhandwerk miteinander zu verbinden. Durch präzise Zapfenverbindungen werden Kopf, Korpus und Fuß aus unterschiedlichen Holzarten verleimt und anschließend in einem Stück in Form gedreht.",
    image: "/manus-storage/product_muehle_c3739d10.png",
    gallery: [
      "/manus-storage/product_muehle_c3739d10.png"
    ],
    acfFields: {
      holzart_detail: "Kombinationen aus märkischem Ahorn (hell) und Berliner Walnuss (dunkel).",
      herstellungsdauer: "ca. 4 Stunden pro Mühle.",
      besonderheiten: "Nahtlose Übergänge zwischen den Holzsegmenten, dänisches Qualitätsmahlwerk."
    }
  }
];

// Holzarten-Lexikon für MP Woodworking
export const woodTypes: WoodType[] = [
  {
    name: "Eibe",
    slug: "eibe",
    scientificName: "Taxus baccata",
    color: "Goldgelb bis rötlich-orange, dunkelt zu warmem Braun nach.",
    hardness: "Sehr hart und schwer (eines der härtesten Nadelhölzer).",
    origin: "Heimisch, oft aus alten Parkanlagen oder Friedhöfen (da im Wald geschützt).",
    description: "Die Eibe liefert ein Holz von außergewöhnlicher Schönheit und technischer Qualität. Es ist extrem elastisch, zäh und dauerhaft. Im Drechselhandwerk ist es wegen seines lebhaften Farbspiels zwischen dem leuchtenden Kernholz und dem hellen Splintholz hochbegehrt.",
    features: ["Extrem feine Jahresringe", "Ausgeprägte Zähigkeit", "Hervorragend polierbar", "Sehr selten und wertvoll"]
  },
  {
    name: "Walnuss",
    slug: "walnuss",
    scientificName: "Juglans regia",
    color: "Mittel- bis dunkelbraun, oft mit violettem Schimmer und dunklen Adern.",
    hardness: "Mittelschwer bis hart, sehr formstabil.",
    origin: "Regional (Berlin-Brandenburg), meist aus Privatgärten oder Alleen.",
    description: "Walnussholz gilt als eines der edelsten heimischen Laubhölzer. Seine lebendige, oft wolkenartige Maserung und die tiefe, dunkle Farbgebung verleihen jedem  Objekt eine exklusive und warme Ausstrahlung. Es lässt sich hervorragend bearbeiten und besitzt eine wunderbar glatte Oberfläche nach dem Schliff.",
    features: ["Edle, dunkle Färbung", "Lebendige, wolkige Maserung", "Sehr formstabil", "Angenehmer, nussiger Duft bei der Bearbeitung"]
  },
  {
    name: "Zwetschge (Pflaume)",
    slug: "zwetschge",
    scientificName: "Prunus domestica",
    color: "Violett-rötlich bis tiefbraun, sehr farbintensiv.",
    hardness: "Sehr hart, dicht und spröde.",
    origin: "Lokale Obstgärten im Berliner Umland.",
    description: "Zwetschgenholz ist ein echter Geheimtipp unter Holzkünstlern. Es besitzt eine unnachahmliche Farbtiefe mit violetten Streifen, die unter Lichteinfluss wunderschön reifen. Da der Stamm meist dünn und rissig ist, erfordert die Bearbeitung extrem viel Geduld und handwerkliches Geschick.",
    features: ["Einzigartiges violett-rotes Farbspiel", "Extrem feine, dichte Holzstruktur", "Wunderschöner, seidiger Glanz", "Sehr anspruchsvoll in der Trocknung"]
  },
  {
    name: "Eiche",
    slug: "eiche",
    scientificName: "Quercus robur",
    color: "Gelbbraun bis mittelbraun, markante Spiegel (Markstrahlen).",
    hardness: "Sehr hart, schwer und extrem witterungsbeständig.",
    origin: "Märkische Forstwirtschaft (Brandenburg).",
    description: "Die Eiche ist der Inbegriff von Beständigkeit und Kraft. Ihr Holz ist grobporig, aber extrem widerstandsfähig. Bei MP Woodworking wird besonders darauf geachtet, Eichenholz mit charaktervollen Astansätzen oder Rissen ('Eiche rustikal') zu verwenden, um den wilden Naturcharakter zu betonen.",
    features: ["Unerreichte Langlebigkeit", "Ausgeprägte, fühlbare Porenstruktur", "Gerbsäurehaltig (wirkt natürlich antibakteriell)", "Klassisches, zeitloses Handwerksholz"]
  }
];
