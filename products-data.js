const PRODUCTS = [
  {
    id: 'bar-code-label-printing-scale',
    title: 'Bar Code Label Printing Scale',
    img: 'images/bar code label printing scale.webp',
    short: 'High-precision weighing scale with built-in barcode and label printing for fast and accurate product identification.',
    specs: ['Built-in barcode and label printer', 'Fast and accurate weighing.', 'Reduces manual labeling errors.','Improves inventory and sales tracking.','Suitable for retail and warehouse operations.'],
    tag: 'Retail Weighing'
  },
  {
    id: 'compac-lab-balances',
    title: 'Compac Lab Balances',
    img: 'images/Compac lab balances.webp',
    short: 'Compact, high-precision laboratory balance designed for accurate weighing in research, educational, and quality-control applications.',
    specs: ['High-accuracy measurement.', 'Compact, space-saving design.', 'Easy-to-read digital display.', 'Fast and reliable weighing results.', 'Suitable for laboratories, schools, and research facilities.'],
    tag: 'Laboratory Weighing'
  },
  {
    id: 'counting-scales',
    title: 'Counting Scales',
    img: 'images/Counting scales.webp',
    short: 'Precision weighing scale designed to quickly count large quantities of identical items by weight, improving efficiency and accuracy.',
    specs: ['Fast and accurate piece counting.', 'Reduces manual counting errors.','Increases productivity and saves time.','Easy-to-read digital display.','Ideal for inventory, packaging, and stock control'],
    tag: 'Counting & Inventory Scales'
  },
  {
    id: 'crane-scales',
    title: 'Crane Scales',
    img: 'images/Crane scales.webp',
    short: 'Heavy-duty hanging scale designed for weighing suspended loads in industrial, construction, and logistics environments.',
    specs: ['High load capacity for heavy items.','Durable and rugged industrial design.','Accurate weighing of suspended loads.', 'Portable and easy to use with cranes or hooks.', 'Clear digital display for easy reading.'],
    tag: 'Industrial Weighing'
  },
  {
    id: 'desktop-scales',
    title: 'Desktop Scales',
    img: 'images/Desktop scales.webp',
    short: 'Compact weighing scale designed for accurate measurement of small to medium items on workstations, counters, or desks.',
    specs: ['High accuracy for everyday weighing tasks.', 'Compact and space-saving design.', 'Easy-to-use interface with digital display.', 'Suitable for retail, office, and light industrial use.', 'Stable platform for consistent measurements.'],
    tag: 'General Weighing'
  },
  {
    id: 'industrial-platform-2-scales',
    title: 'Industrial Platform 2 Scales',
    img: 'images/Industrial platform 2 scales.webp',
    short: 'Heavy-duty platform scale designed for accurate weighing of large, bulky, and industrial materials in warehouses, factories, and logistics operations.',
    specs: ['High-capacity weighing for heavy loads.', 'Durable industrial-grade construction.', 'Large platform for bulky items.', 'Accurate and reliable measurements.', 'Ideal for warehouses, manufacturing, and shipping operations.'],
    tag: 'Industrial Weighing'
  },
  {
    id: 'l0w-profile-scales',
    title: 'Low Profile Scales',
    img: 'images/Low profile scales.webp',
    short: 'Heavy-duty platform scale with a low-height design for easy loading and accurate weighing of pallets, carts, and industrial goods.',
    specs: ['Low-profile platform for easy access and loading.', 'High-capacity and accurate weighing.', 'Durable construction for industrial environments.', 'Suitable for pallets, trolleys, and heavy goods.', 'Improves efficiency in warehouse and logistics operations.'],
    tag: 'Industrial Weighing'
  },
  {
    id: 'micro-balances',
    title: 'Micro Balances',
    img: 'images/Microbalances.webp',
    short: 'Ultra-precision laboratory balance designed for measuring extremely small masses with exceptional accuracy.',
    specs: ['Extremely high weighing precision.', 'Ideal for trace and micro-sample measurements.', 'Stable and reliable results.', 'Advanced digital display and controls.', 'Suitable for research, pharmaceutical, and analytical laboratories.'],
    tag: 'Laboratory Weighing'
  },
  {
    id: 'moisture-analyzer',
    title: 'Moisture Analyzer',
    img: 'images/Moisture analyzer.webp',
    short: 'Precision instrument that quickly determines the moisture content of samples using controlled heating and accurate weighing.',
    specs: ['Fast and accurate moisture analysis.', 'Reduces testing time compared to traditional methods.', 'Easy-to-read digital display.', 'Suitable for quality control and laboratory testing.', 'Ideal for food, pharmaceutical, agricultural, and industrial applications.'],
    tag: 'Laboratory Testing'
  },
  {
    id: 'platform-scales',
    title: 'Platform Scales',
    img: 'images/Platform scales.webp',
    short: 'Versatile heavy-duty scale designed for accurate weighing of large, bulky, and industrial items across a wide range of applications.',
    specs: ['Large weighing platform for bulky goods.', 'High-capacity and accurate measurements.', 'Durable construction for demanding environments.', 'Easy loading and unloading of items.', 'Suitable for warehouses, manufacturing, and logistics operations.'],
    tag: 'Industrial Weighing'
  },
  // 2. Dual-Image Format with Custom Sub-Titles
  {
    id: 'platform-scales',
    title: 'A12 Platform Scales',
    img: {
      isMultiple: true,
      img1: 'images/A12 Platform scale 500 by 450.webp',
      title1: 'A12 Platform scale 500mm by 450mm cap 200kgs',
      img2: 'images/A12 Platform scale 600 by 600.webp',
      title2: 'A12 Platform scale 600mm by 600mm cap 300kgs'
    },
    short: 'Versatile heavy-duty scale designed for accurate weighing of large, bulky, and industrial items across a wide range of applications.',
    specs: ['Large weighing platform for bulky goods.', 'High-capacity and accurate measurements.', 'Durable construction for demanding environments.', 'Easy loading and unloading of items.', 'Suitable for warehouses, manufacturing, and logistics operations.'],
    tag: 'Industrial Weighing'
  },
  {
   id:'platform-scales',
   title: '304 Stainless steel platform scale mounted with LP7510 Indicator',
   img:'images/304 Stainless steel platform scale mounted with LP7510 indicator.webp',
   short: 'Versatile heavy-duty scale designed for accurate weighing of large, bulky, and industrial items across a wide range of applications.',
    specs: ['Large weighing platform for bulky goods.', 'High-capacity and accurate measurements.', 'Durable construction for demanding environments.', 'Easy loading and unloading of items.', 'Suitable for warehouses, manufacturing, and logistics operations.'],
    tag: 'Industrial Weighing'
  },
  {
   id:'platform-scales',
   title: '304 Stainless Steel Platform Scales',
   img: {
      isMultiple: true,
      img1: 'images/304 Stainless steel platforms.webp',
      img2: 'images/304 Stainless steel platforms 2.webp',
   },
   short: 'Versatile heavy-duty scale designed for accurate weighing of large, bulky, and industrial items across a wide range of applications.',
    specs: ['Large weighing platform for bulky goods.', 'High-capacity and accurate measurements.', 'Durable construction for demanding environments.', 'Easy loading and unloading of items.', 'Suitable for warehouses, manufacturing, and logistics operations.'],
    tag: 'Industrial Weighing'
   },
  
  {
    id: 'pallet-scales',
    title: 'Pallet Scales',
    img: 'images/Pallet scales.webp',
    short: 'Heavy-duty weighing scale designed for quick and accurate weighing of palletized goods in warehouses, logistics, and industrial operations.',
    specs: ['Ideal for weighing loaded pallets.', 'High-capacity and accurate measurements.', 'Durable construction for industrial use.', 'Speeds up warehouse and shipping processes.', 'Compatible with forklifts and pallet jacks.'],
    tag: 'Industrial Weighing'
  },
  {
    id: 'precision-balances',
    title: 'Precision Balances',
    img: 'images/Precision balances.webp',
    short: 'High-accuracy balance designed for precise weighing in laboratories, research facilities, and quality-control applications.',
    specs: ['High-precision measurement for accurate results.', 'Fast and reliable weighing performance.', 'Easy-to-read digital display.', 'Suitable for laboratory and industrial quality-control tasks.', 'Durable design for long-term use.'],
    tag: 'Laboratory Weighing'
  },
  {
    id: 'premium-semi-microbalances',
    title: 'Premium Semi-Micro Balances',
    img: 'images/Premium semi microbalances.webp',
    short: 'Advanced high-precision balance designed for ultra-accurate weighing of small samples in research, pharmaceutical, and analytical laboratories.',
    specs: ['Exceptional precision for small sample measurements.', 'High stability and repeatability.', 'Advanced calibration and weighing functions.', 'Ideal for research and quality-control applications.', 'User-friendly digital interface and data management features.'],
    tag: 'Laboratory Weighing'
  },
  {
    id: 'price-computing-scales',
    title: 'Price Computing Scales',
    img: 'images/Price computing scales.webp',
    short: 'Electronic weighing scale that automatically calculates and displays the price of goods based on their weight and unit price.',
    specs: ['Automatic price calculation based on weight.', 'Fast and accurate weighing.', 'Reduces manual pricing errors.', 'Easy-to-read weight, unit price, and total price displays.', 'Ideal for retail stores, supermarkets, and markets.'],
    tag: 'Retail weighing'
  },
  {
    id: 'professional-analytical-balances',
    title: 'Professional Analytical Balances',
    img: 'images/Professional analytical balances.webp',
    short: 'High-precision laboratory balance designed for accurate analytical measurements in research, pharmaceutical, and quality-control applications.',
    specs: ['Exceptional weighing accuracy and sensitivity.', 'Stable and repeatable measurement results.', 'Advanced calibration and weighing functions.', 'Draft shield for protection against air disturbances.', 'Ideal for laboratories, research, and quality-control environments.'],
    tag: 'Laboratory Weighing'
  },
  {
    id: 'smart-data-printer',
    title: 'Smart Data Printer',
    img: 'images/Smart data printer.webp',
    short: 'A printing device designed to seamlessly print weighing data, barcode labels, and detailed reports from connected scales and management systems in real time.',
    specs: ['Direct printing of weighing results and labels.', 'Compatible with multiple weighing systems.', 'Fast and reliable printing performance.', 'Supports data storage and report generation.', 'Ideal for retail, laboratory, and industrial environments.'],
    tag: 'Weighing Accessories'
  },
  {
    id: 'table-top-scales',
    title: 'Table Top Scales',
    img: 'images/Table top scales.webp',
    short: 'Compact digital weighing scale designed for accurate measurement of small to medium items on counters, tables, and workstations in retail and commercial environments.',
    specs: ['High accuracy for everyday weighing tasks.', 'Compact and space-saving design.', 'Easy-to-read digital display.', 'Durable platform for regular use.', 'Quick response and stable readings.'],
    tag: 'Retail Weighing'
  },
  {
    id: 'top-loading-balances',
    title: 'Top Loading Balances',
    img: 'images/Top loading balances.webp',
    short: 'Laboratory balance designed for accurate weighing of samples placed directly on a top-mounted weighing pan for routine lab and industrial use.',
    specs: ['High accuracy for routine laboratory measurements.', 'Fast stabilization and reliable results.', 'Simple top-loading design for easy operation.', 'Compact and durable construction.', 'Suitable for laboratories, schools, and quality control'],
    tag: 'Laboratory Weighing'
  },
  {
    id: 'weghbridge-scales',
    title: 'Weighbridge Scales',
    img: 'images/Weighbridge scales.webp',
    short: 'Heavy-duty weighing system installed at ground level or pit-mounted to measure the weight of full trucks and large vehicles accurately.',
    specs: ['High-capacity weighing for vehicles and loaded trucks.', 'Durable construction for harsh industrial environments.', 'Accurate and reliable weight measurement.', 'Available in pit or surface-mounted designs.', 'Ideal for logistics, transport, and industrial sites.'],
    tag: 'Warehouse & Industrial Equipment'
  },
  {
    id: 'weights',
    title: 'Weights',
    img: 'images/Weights.webp',
    short: 'Calibrated reference weights used for testing, calibrating, and verifying the accuracy of weighing scales in laboratories and industrial environments.',
    specs: ['High accuracy and certified calibration standards.', 'Used for scale testing and verification.', 'Durable and corrosion-resistant materials.', 'Available in different weight classes and sets.', 'Essential for laboratory and industrial quality control.'],
    tag: 'Calibration Equipment'
  },
  {
    id: 'weighing-indicator',
    title: 'LP7510 Weighing Indicator - With RS232',
    img: 'images/Weighing Indicator.webp',
    short: 'Electronic device that receives signals from load cells and displays accurate weight measurements for industrial and commercial weighing systems.',
    specs: [ 'Accurate weight display','Load cell signal processing','Clear LCD or LED display','Suitable for industrial weighing systems','Compatible with platform scales and weighbridges'],
    tag: 'Indicators'
  },
{
  id: 'weighbridge',
  title: 'Weighbridge',
  img: 'images/Weighbridge.webp',
  short: 'Heavy-duty weighing system installed at ground level or pit-mounted to measure the weight of full trucks and large vehicles accurately.',
  specs: ['High-capacity weighing for vehicles and loaded trucks.', 'Durable construction for harsh industrial environments.', 'Accurate and reliable weight measurement.', 'Available in pit or surface-mounted designs.', 'Ideal for logistics, transport, and industrial sites.'],
  tag: 'Warehouse & Industrial Equipment'
  
}
  
];
