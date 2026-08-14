# ADL Frontend Case Study

ADL web sitesindeki kategori sayfası baz alınarak hazırlanmış bir frontend çalışmasıdır.

## Demo

Vercel: https://adl-frontend-case-study.vercel.app/

## Proje

Bu çalışmada verilen tasarıma mümkün olduğunca yakın, responsive bir ürün listeleme sayfası oluşturdum.

Sayfada şu bölümler bulunuyor:

- Üst kampanya ve bilgi alanı
- Responsive navbar
- Menü ve dropdown / mega menüler
- Kategori kutucukları
- Ürün listesi
- Ürün görselleri
- Ürün görselleri arasında sağa-sola kaydırma
- Mobilde ürün görselleri arasında parmakla sağa-sola kaydırma
- Responsive tasarım
- Mobil görünüm

## Kullanılan Teknolojiler

- React
- TypeScript
- Vite
- Tailwind CSS

## Proje Yapısı

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── MobileNav.tsx
│   ├── Breadcrumb.tsx
│   ├── CategoryFilter.tsx
│   ├── ProductGrid.tsx
│   └── ProductCard.tsx
│
├── data/
│   └── products.ts
│
├── utils/
│   └── cn.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Çalıştırma

Projeyi klonladıktan sonra bağımlılıkları yükleyin:

```bash
npm install
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

## Build

Production build oluşturmak için:

```bash
npm run build
```

## Not

Ürünler şu aşamada `src/data/products.ts` dosyasındaki statik verilerden geliyor. Projenin frontend case çalışması olması nedeniyle backend veya veritabanı kullanılmadı.

Ürün kartındaki artı butonu şu anda yalnızca arayüzde bulunuyor; herhangi bir işlevi bulunmuyor.

## Lisans

Bu proje frontend case study amacıyla hazırlanmıştır.
