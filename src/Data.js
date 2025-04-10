const data = [
  {
    id: 1,
    name: "Hundai Creata",
    discription: "CarOne",
    mileage: "17.4-21.8km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Hyundai Creta is a bold and dynamic SUV that redefines comfort and performance. With its striking design, spacious interiors, and cutting-edge features, the Creta stands out on every road. It offers a smooth driving experience, advanced safety technology, and efficient mileage, making it the perfect companion for urban and long-distance travel alike. Whether you're cruising through city streets or exploring offbeat trails, the Creta delivers style, power, and reliability in one refined package."
  },
  {
    id: 2,
    name: "Mahindra Scorpio",
    discription: "CarTwo",
    mileage: "18.5-22.8km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Mahindra Scorpio is a rugged and powerful SUV designed for those who crave adventure and dominance on the road. Known for its bold stance, muscular build, and commanding presence, the Scorpio combines off-road capability with urban comfort. Its high ground clearance, robust engine, and feature-rich cabin make it perfect for both city commutes and challenging terrains. With advanced safety features and a strong road presence, the Scorpio remains a top choice for SUV enthusiasts across India."
  },
  {
    id: 3,
    name: "Tata Punch",
    discription: "CarThree",
    mileage: "17.4-20.8km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/39015/punch-exterior-right-front-three-quarter-56.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Tata Punch is a bold and compact SUV that delivers the perfect blend of style, performance, and practicality. Designed with Tata’s Impact 2.0 design language, it boasts a striking front grille, muscular stance, and high ground clearance, giving it a strong SUV presence despite its compact size. Built on Tata's ALFA architecture, the Punch offers superior safety, with a 5-star Global NCAP crash test rating."
  },
  {
    id: 4,
    name: "Maruti Suzuki Swift",
    discription: "CarFour",
    mileage: "17.5-20.5km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Maruti Suzuki Swift is a sporty, fuel-efficient hatchback that blends performance with practicality. Known for its sleek design, peppy engine, and agile handling, the Swift is perfect for urban commuters and young drivers looking for excitement behind the wheel. Its bold front grille, LED headlamps, and dynamic curves give it a modern, energetic vibe. Inside, it offers a smartly laid-out cabin with ample space, touchscreen infotainment, and essential safety features. Backed by Maruti’s trusted reliability and great mileage, the Swift continues to be a top choice in the hatchback segment."
  },
  {
    id: 5,
    name: "Kia Sonet",
    discription: "CarFive",
    mileage: "17.4-21.8km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/174423/sonet-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Kia Sonet is a bold and compact SUV that redefines style and substance in its segment. With its aggressive front grille, LED DRLs, and sporty silhouette, the Sonet stands out effortlessly on the road. Inside, it boasts a premium cabin loaded with features like a 10.25-inch touchscreen infotainment system, ventilated seats, sunroof, wireless charging, and connected car tech. Whether you choose the peppy petrol or the torquey diesel engine, the Sonet delivers a balanced ride with excellent mileage and driving comfort. It's the perfect mix of urban flair and rugged capability."
  },
  {
    id: 6,
    name: "Volkswogan Virtus",
    discription: "CarSix",
    mileage: "15.4-19.8km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Volkswagen Virtus is a premium mid-size sedan that combines German engineering with sleek, modern design. With its clean lines, LED lighting, and signature wide stance, the Virtus exudes sophistication and sporty elegance. Under the hood, it offers powerful TSI petrol engines paired with smooth manual or DSG automatic transmissions, delivering a thrilling yet refined driving experience. Inside, the cabin features a spacious layout with a fully digital cockpit, a 10-inch touchscreen infotainment system, wireless Android Auto/Apple CarPlay, and top-notch build quality."
  },
  {
    id: 7,
    name: "Toyata Innova Crysta",
    discription: "Carseven",
    mileage: "17.4-21.8km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Toyota Innova Crysta is the epitome of comfort, reliability, and performance in the MPV segment. With its bold front grille, chrome accents, and projector headlamps, the Crysta makes a strong first impression. Under the hood, it features robust diesel and petrol engine options, tuned for smooth power delivery and long-distance efficiency. Step inside and you're greeted by a luxurious cabin with plush seating for 7 or 8 passengers, ambient lighting, rear AC vents, and a touchscreen infotainment system with navigation."
  },
  {
    id: 8,
    name: "Honda Amaze",
    discription: "CarEight",
    mileage: "16.0-20.0km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/184377/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Honda Amaze is a compact sedan that perfectly blends elegance, efficiency, and everyday practicality. With its bold chrome front grille, sleek LED DRLs, and sculpted body lines, the Amaze stands out with a modern and premium look. It offers a refined driving experience powered by smooth petrol and diesel engine options paired with manual or CVT transmissions. Inside, the Amaze pampers you with a spacious, dual-tone cabin, touchscreen infotainment system with Apple CarPlay & Android Auto, automatic climate control, and generous boot space. "
  },
  {
    id: 9,
    name: "Renault Triber",
    discription: "CarNine",
    mileage: "17.4-21.8km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/141119/triber-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Renault Triber is a smart and spacious 7-seater MPV designed for families who love to travel together. With its flexible modular seating, you can switch between 5, 6, or 7-seat configurations in seconds — giving you freedom to carry people, luggage, or both. Its bold stance, projector headlamps, and signature front grille give it a striking road presence. Powered by a fuel-efficient 1.0L petrol engine, the Triber delivers a smooth city and highway drive. Inside, enjoy a premium dual-tone cabin, an 8-inch touchscreen with Android Auto & Apple CarPlay, keyless entry, push-start, and rear AC vents for all three rows."
  },
  {
    id: 10,
    name: "Nissan Magnite",
    discription: "CarTen",
    mileage: "17.4-21.8km/I",
    image:
      "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/173325/magnite-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Nissan Magnite is a bold, compact SUV that blends style, space, and performance in one sleek package. With its aggressive front grille, LED DRLs, and sculpted body, the Magnite commands attention on every road. Under the hood, it offers a powerful and efficient 1.0L turbocharged petrol engine for a thrilling yet fuel-conscious drive. Step inside to experience a spacious cabin with premium finishes, an 8-inch touchscreen infotainment system with wireless Android Auto and Apple CarPlay, and a fully digital instrument cluster."
  },
  {
    id: 11,
    name: "TATA Tigor",
    discription: "CarEleven",
    mileage: "17.4-21.8km/I",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tigor-exterior-right-front-three-quarter-21.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The TATA Tigor is a compact sedan that brings together elegance, efficiency, and modern features at an unbeatable value. Its stylish coupe-like design, signature LED DRLs, and bold front grille give it a distinct road presence. Powered by a refined 1.2L Revotron petrol engine, the Tigor ensures a smooth and fuel-efficient drive, whether in the city or on highways. Inside, the cabin is thoughtfully designed with a 7-inch touchscreen infotainment system by Harman, Android Auto & Apple CarPlay, premium upholstery, and ample boot space. "
  },
  {
    id: 12,
    name: "Mahindra Thar Roxx",
    discription: "CarTwelve",
    mileage: "17.4-21.8km/I",
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/124839/thar-roxx-exterior-right-front-three-quarter-24.jpeg?isig=0&q=80",
    price: 10000,
    Quantity: "20",
    Info:"The Mahindra Thar Roxx is the ultimate expression of off-road freedom blended with aggressive style. Built for thrill-seekers and adventure lovers, the Thar Roxx packs a powerful mHawk diesel or mStallion petrol engine under its muscular hood, delivering exceptional performance on any terrain. Its distinctive blacked-out elements, chunky all-terrain tires, and bold 'Roxx' badging give it a fierce stance that demands attention. Inside, it maintains the classic Thar spirit with a rugged, yet tech-savvy cabin—featuring a touchscreen infotainment system, washable interiors, and roof-mounted speakers. With 4x4 capability, high ground clearance, and robust safety features, the Thar Roxx isn’t just a car—it’s a lifestyle statement made for the wild."
  },
];

export default data;
