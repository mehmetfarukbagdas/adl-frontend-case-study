export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  extraColors?: number;
  category: string;
  isNew?: boolean;
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Bej HASIR ÇANTA",
    price: "2.999,95 TL",
    image: "/images/12146926000_011_1.jpg",
    category: "Yeni Çanta",
    isNew: true,
    images: [
      "/images/12146926000_011_1.jpg",
      "/images/12146926000_011_2.jpg",
      "/images/12146926000_011_3.jpg",
      "/images/12146926000_011_4.jpg",
    ]
  },
  {
    id: 2,
    name: "Bej Pencere Detaylı Te...",
    price: "4.999,95 TL",
    image: "/images/12446265000_011_1.jpg",
    extraColors: 1,
    category: "Yeni Elbise",
    isNew: true,
    images: [
      "/images/12446265000_011_1.jpg",
      "/images/12446265000_011_2.jpg",
      "/images/12446265000_011_3.jpg",
      "/images/12446265000_011_4.jpg"
    ]
  },
  {
    id: 3,
    name: "Bej Plise Detaylı Elbise",
    price: "5.999,95 TL",
    image: "/images/12446505000_011_1.jpg", 
    extraColors: 3,
    category: "Yeni Elbise",
    isNew: true,
    images: [
      "/images/12446505000_011_1.jpg",
      "/images/12446505000_011_2.jpg",
      "/images/12446505000_011_3.jpg",
      "/images/12446505000_011_4.jpg"
    ]
  },
  {
    id: 4,
    name: "Bej Kolsuz Büzgü Detaylı Ceket...",
    price: "5.999,95 TL",
    image: "/images/12446759000_111_1.jpg",
    category: "Yeni Ceket",
    isNew: true,
    images: [
      "/images/12446759000_111_1.jpg",
      "/images/12446759000_111_2.jpg",
      "/images/12446759000_111_3.jpg",
      "/images/12446759000_111_4.jpg"
    ]
  },
  {
    id: 5,
    name: "Sarı Çanta",
    price: "3.499,95 TL",
    image: "/images/12146129000_773_1.jpg",
    extraColors: 2,
    category: "Yeni Çanta",
    isNew: true,
    images: [
      "/images/12146129000_773_1.jpg",
      "/images/12146129000_773_2.jpg",
      "/images/12146129000_773_3.jpg",
      "/images/12146129000_773_4.jpg"
    ]
  },
  {
    id: 6,
    name: "Kemik Korsaj Detaylı...",
    price: "4.999,95 TL",
    image: "/images/12446775000_019_1.jpg",
    extraColors: 1,
    category: "Yeni Bluz",
    isNew: true,
    images: [
      "/images/12446775000_019_1.jpg",
      "/images/12446775000_019_2.jpg",
      "/images/12446775000_019_3.jpg",
      "/images/12446775000_019_4.jpg"
    ]
  },
  {
    id: 7,
    name: "Kemik Desenli Şal",
    price: "699,95 TL",
    image: "/images/12846973000_219_1.jpg",
    extraColors: 8,
    category: "Yeni Aksesuar",
    isNew: true,
    images: [
      "/images/12846973000_219_1.jpg",
      "/images/12846973000_219_2.jpg",
      "/images/12846973000_219_3.jpg"
    ]
  },
  {
    id: 8,
    name: "Bej Önden Fermuarlı Cep Detay...",
    price: "2.999,95 TL",
    image: "/images/11846224000_111_1.jpg",
    category: "Yeni Ceket",
    isNew: true,
    images: [
      "/images/11846224000_111_1.jpg",
      "/images/11846224000_111_2.jpg",
      "/images/11846224000_111_3.jpg",
      "/images/11846224000_111_4.jpg"
    ]
  },
  {
    id: 9,
    name: "Beyaz V Yaka Atlet",
    price: "999,95 TL",
    image: "/images/10246870000_002_1.jpg",
    extraColors: 1,
    category: "Yeni Tişört", 
    images: [
      "/images/10246870000_002_1.jpg",
      "/images/10246870000_002_2.jpg",
      "/images/10246870000_002_3.jpg",
      "/images/10246870000_002_4.jpg"
    ]
  },
  {
    id: 10,
    name: "Mavi Desenli Şal",
    price: "699,95 TL",
    image: "/images/12846973000_215_1.jpg",
    extraColors: 8,
    category: "Yeni Aksesuar",
    isNew: true,
    images: [
      "/images/12846973000_215_1.jpg",
      "/images/12846973000_215_2.jpg",
      "/images/12846973000_215_3.jpg",
    ]
  },
  {
    id: 11,
    name: "Lacivert Kollu Lastikli...",
    price: "2.999,95 TL",
    image: "/images/11546270000_018_1.jpg",
    extraColors: 1,
    category: "Yeni Bluz",
    isNew: true,
    images: [
      "/images/11546270000_018_1.jpg",
      "/images/11546270000_018_2.jpg",
      "/images/11546270000_018_3.jpg",
      "/images/11546270000_018_4.jpg"
    ]
  },
  {
    id: 12,
    name: "Lacivert Geniş Paça...",
    price: "2.999,95 TL",
    image: "/images/15346271000_018_1.jpg",
    extraColors: 1,
    category: "Yeni Pantolon",
    isNew: true,
    images: [
      "/images/15346271000_018_1.jpg",
      "/images/15346271000_018_2.jpg",
      "/images/15346271000_018_3.jpg",
      "/images/15346271000_018_4.jpg"
    ]
  }
];

export const categories = [
  "Tümü",
  "Yeni Elbise",
  "Yeni Pantolon",
  "Yeni Tulum",
  "Yeni Bluz",
  "Yeni Tişört",
  "Yeni Etek",
  "Yeni Şort",
  "Yeni Ceket",
  "Yeni Hırka",
  "Yeni Plaj Giyim",
  "Yeni Çanta",
  "Yeni Ayakkabı",
  "Yeni Aksesuar",
  "Yeni Gömlek",
  "Yeni Atlet",
  "Yeni Yelek",
  "Yeni Trençkot"
];