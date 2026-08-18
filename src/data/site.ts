export const COMPANY = {
  name: 'Ruban Trading PLC',
  tagline: 'Bridging Global Markets with Integrity',
  email: 'info@rubantrading.com',
  phone: '+251 911 240 165',
  whatsapp: '+251 911 240 165',
  address: 'Lebu, Nifas Silk, Mertule Maryam Bld., Addis Ababa, Ethiopia',
  poBox: 'P.O. Box 1000, Addis Ababa',
  founded: 2021,
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Import', to: '/import' },
  { label: 'Export', to: '/export' },
  { label: 'Contact', to: '/contact' },
];

export const IMAGES = {
  heroSoybean: 'https://images.pexels.com/photos/13821931/pexels-photo-13821931.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroHarvest: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccIkz60Q0wx5AcBqP6JGbhNbuXj7ZiUYIuEwK8CSNCx6WNGxHs07C5rs&s=10',
  cargoShip: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1920',
  cargoPort: 'https://images.pexels.com/photos/29899416/pexels-photo-29899416.jpeg?auto=compress&cs=tinysrgb&w=1920',
  machinery: 'https://cdn.globalso.com/fotmamill/Coconut-Oil-Production-Line1.jpg',
  machineryTanks: 'https://images.pexels.com/photos/7598915/pexels-photo-7598915.jpeg?auto=compress&cs=tinysrgb&w=1920',
  machineryPipes: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR409fmwUU8Xqfed-6bHciyRpJ60Z0G-CfhGhK1USnbXZwBgogxdq_Mywte&s=10',
  pulses: 'https://images.pexels.com/photos/4224254/pexels-photo-4224254.jpeg?auto=compress&cs=tinysrgb&w=1920',
  lentils: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBG0NH_HPIGDAa9XXAINjQuIp02n8Og9anoyCa22nXccZYgQC4iZNfPPA&s=10',
  soybeans: 'https://images.pexels.com/photos/273838/pexels-photo-273838.jpeg?auto=compress&cs=tinysrgb&w=1920',
  soybeanMeal: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrF2kEJ-7DVKfhnkAujUU3u0NNhgzu-SwLERnpR8TFRA&s=10',
  soybeanClose: 'https://images.pexels.com/photos/31226914/pexels-photo-31226914.jpeg?auto=compress&cs=tinysrgb&w=1920',
  grainMarket: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=1920',
  desiChickpea: 'https://negadrasgt.com/wp-content/uploads/2023/05/Desi-chickpeas-5.jpg',
  greenMung: 'https://www.hajuta.com/wp-content/uploads/2023/07/GREEN-MUNG-BEANS-8.jpg',
  kidneyPea: 'https://nazrawitrading.com/wp-content/uploads/2021/01/redkidneybeans-1.jpg',
  favaBeans: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkX9Alu-w0TWKt342dAekX7CSdVD-9ritMgPdKiYLl3koKEun0lub-pmE&s=10'
};

export const STATS = [
  { value: 10, suffix: '+', label: 'Countries Served' },
  { value: 1000, suffix: 'MT', label: 'Annual Export Volume' },
  { value: 5, suffix: '+', label: 'Years of Trade' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

export const EXPORT_PRODUCTS = [
  {
    name: 'Organic Soybean Meal',
    slug: 'organic-soybean',
    description:
      'Premium certified-organic soybeans Meal grown without synthetic inputs, ideal for food-grade and feed-grade applications across health-conscious global markets.',
    image: IMAGES.soybeans,
    specs: [
      { label: 'Moisture', value: '13% max' },
      { label: 'Impurities', value: '1% max' },
      { label: 'Split', value: '2% max' },
      { label: 'Certification', value: 'EU Organic / USDA NOP' },
    ],
    tags: ['Food-grade', 'Certified Organic', 'Non-GMO'],
  },
  {
    name: 'Non-GMO Soybean',
    slug: 'non-gmo-soybean',
    description:
      'High-protein soybean meal produced from identity-preserved non-GMO soybeans — a preferred ingredient for livestock feed, aquaculture, and specialty animal nutrition.',
    image: IMAGES.soybeanMeal,
    specs: [
      { label: 'Protein', value: '46% min' },
      { label: 'Moisture', value: '12% max' },
      { label: 'Fat', value: '1.5% min' },
      { label: 'Certification', value: 'Non-GMO IP' },
    ],
    tags: ['High-protein', 'Identity Preserved', 'Feed-grade'],
  },
  {
    name: 'Desi chickpeas',
    slug: 'Desi chickpeas',
    description:
      'A small, dark brown or reddish-brown seeds with a rough coat and high nutritional value. Sourced from optimal growing regions, this premium legume variety is highly valued for its robust flavor, angular shape, and thick outer hull.',
    image: IMAGES.desiChickpea,
    specs: [
      { label: 'Moisture', value: '12% max' },
      { label: 'Split', value: '2% max' },
      { label: 'Impurity', value: '1.5% max' },
      {label: 'color', value: 'Uniform light-to-medium brown natural color, characteristic of the desi variety.'},
      { label: 'Certification', value: 'Non-GMO IP / Organic certificates' },
    ],
    tags: ['High Hydration Yield', 'High-protein', 'Excellent skin integrity'],
  },
  {
    name: 'Green Mung',
    slug: 'Green Mung',
    description:
      'Our premium-grade green mung beans (Vigna radiata) are hand-selected and precision-processed via advanced optical Sortex machinery to guarantee an exceptional purity level. Featuring a vibrant, uniform green shine, low moisture content (max 12%), and minimal admixture',
    image: IMAGES.greenMung,
    specs: [
      { label: 'Moisture', value: '12% max' },
      { label: 'Size', value: '3-5% max' },
      { label: 'Impurity', value: '1% max' },
      {label: 'Damaged Grains', value: '1% max'},
      { label: 'Certification', value: 'Non-GMO IP / Organic certificates' },
    ],
    tags: ['sortex-clean', 'highest-purity', 'organic-premium'],
  },
  {
    name: 'Premium Red Kidney Beans',
    slug: 'Premium Red Kidney Beans',
    description:
      'Export-grade, Sortex-cleaned red kidney beans featuring uniform bold sizing, rich color, and high purity — an ideal selection for premium canning, packaging, and international food manufacturing.',
    image: IMAGES.kidneyPea,
    specs: [
      { label: 'Purity', value: '99% min' },
    { label: 'Moisture', value: '13% max' },
    { label: 'Defective Grains', value: '1.0% max' },
    { label: 'Admixture', value: '0.5% max' },
      { label: 'Certification', value: 'Non-GMO IP / Organic certificates' },
    ],
    tags: ['Sortex Cleaned', 'Food-grade', 'Bold Selection'],
  },
  {
  name: 'Premium Fava Beans',
  slug: 'premium-fava-beans',
  description:
    'Triple-cleaned, high-protein fava beans selected for superior color uniformity, excellent texture, and high purity — ideal for canning, milling, and traditional culinary markets worldwide.',
  image: IMAGES.favaBeans,
  specs: [
    { label: 'Purity', value: '99% min' },
    { label: 'Moisture', value: '14% max' },
    { label: 'Imperfect Grains', value: '2.0% max' },
    { label: 'Admixture', value: '0% max' },
  ],
  tags: ['Machine Cleaned', 'Food-grade', 'High-Protein'],
},
  {
    name: 'Pulses',
    slug: 'pulses',
    description:
      'A diverse portfolio of lentils, chickpeas, beans, and peas — cleaned, sorted, and packed to meet the exacting standards of buyers across the Middle East, Asia, and Europe.',
    image: IMAGES.lentils,
    specs: [
      { label: 'Varieties', value: 'Red, Green, Chickpea' },
      { label: 'Grade', value: 'Grade A / FAQ' },
      { label: 'Packing', value: '25/50 kg PP bags' },
      { label: 'Sortex', value: 'Machine-cleaned' },
    ],
    tags: ['Sortex-cleaned', 'Food-grade', 'Multiple varieties'],
  },
  {
    name: 'Oilseeds',
    slug: 'oilseeds',
    description:
      'Sesame, Niger seed, and groundnut — sourced directly from smallholder cooperatives and processed through a rigorous quality chain to preserve oil content and purity.',
    image: IMAGES.grainMarket,
    specs: [
      { label: 'Sesame', value: 'Whitish / Mixed' },
      { label: 'Oil content', value: '50% min' },
      { label: 'FFA', value: '2% max' },
      { label: 'Packing', value: '50 kg / 1 MT bags' },
    ],
    tags: ['Hulled & Natural', 'Cold-press grade', 'Direct from source'],
  },
];

export const IMPORT_CATEGORIES = [
  {
    title: 'Cleaning Section',
    description:
      'A specialized legume and nut cleaning section uses specific physical sizing and weight adjustments to handle large, heavy, and fragile seeds. Because these crops are prone to splitting and often bring in heavy field dirt, the cleaning section prioritizes gentle seed handling while aggressively removing large pods, stems, stones, and dust. It cleans seeds like',
    icon: 'Factory',
    image: IMAGES.machinery,
    points: ['soybeans', 'chickpeas', 'peanuts', 'kidney beans'],
  },
  {
    title: 'Extruder',
    description:
      'Our extruder uses intense mechanical friction and high pressure to flash-cook raw ingredients up to 150°C. This rapid heating ruptures intracellular oil cells, boosting oil extraction efficiency while cutting downstream pressing energy by 30%. It also deactivates harmful anti-nutritional enzymes, making the resulting protein meal highly digestible for livestock.',
    icon: 'Tractor',
    image: IMAGES.heroHarvest,
    points: ['Single/Twin-Screw Extruders', 'High/Low-Shear Extruders', 'Dry/Wet Extruders'],
  },
  {
    title: 'Press / Expeller',
    description:
      'we supply commercial oil expellers and mechanical screw presses engineered specifically for high-yield, continuous agricultural processing. These heavy-duty machines use pure thermomechanical pressure to squeeze crude oil out of a wide range of oilseeds, nuts, and legumes without relying on chemical solvents.',
    icon: 'Package',
    image: IMAGES.machineryTanks,
    points: ['Single/Twin-Screw Expellers','Cold/Hot Presses', 'Hydraulic Presses'],
  },
];

export const VALUES = [
  {
    title: 'Integrity First',
    description:
      'Every shipment, every contract, every handshake is built on transparency and trust. We do what we say.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Quality Without Compromise',
    description:
      'Rigorous sourcing, inspection, and certification standards ensure our products meet the most demanding global specifications.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Global Network',
    description:
      'From origin to destination, our logistics partners and market intelligence span six continents.',
    icon: 'Globe2',
  },
  {
    title: 'Sustainable Sourcing',
    description:
      'We work directly with farming cooperatives to promote regenerative agriculture and fair, traceable supply chains.',
    icon: 'Sprout',
  },
];

export const SUPPLY_CHAIN = [
  { step: '01', title: 'Sourcing', description: 'Direct relationships with cooperatives and certified producers at origin.' },
  { step: '02', title: 'Quality Control', description: 'Pre-shipment inspection, lab testing, and third-party certification.' },
  { step: '03', title: 'Processing & Packing', description: 'Cleaning, sorting, and packing in food-grade facilities to buyer specs.' },
  { step: '04', title: 'Logistics', description: 'FCL container shipping, multimodal transport, and full documentation.' },
  { step: '05', title: 'Delivery', description: 'Door-to-door or port-to-port delivery with real-time tracking.' },
];

export const MARKETS = [
  'Asia', 'Middle East', 'Europe', 'Africa', 'North America', 'Australia',
];
