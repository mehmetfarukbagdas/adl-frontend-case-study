import { useState } from "react";
import MobileNav from "./MobileNav";

type DropdownName = "sale" | "categories" | "mertAslan" | "outlet";

interface MegaMenuProps {
  categories: string[];
  images: string[];
  imageAlt: string;
  secondColumn?: string[];
  width?: string;
}

const saleCategories = ["Elbise", "Bluz", "Gömlek", "Tişört", "Atlet", "Ceket", "Yelek", "Etek", "Şort", "Pantolon", "Tulum", "Ayakkabı", "Çanta"];
const mainCategories = ["Tümü", "Elbise", "Bluz", "Gömlek", "Tişört", "Atlet", "Ceket", "Yelek", "Etek", "Şort", "Pantolon", "Tulum", "Dış Giyim"];
const collectionCategories = ["Özel Koleksiyonlar", "Beachwear", "Mert Aslan", "NightZoom", "Moda Tutkusu", "Nature Love", "Denim", "Takımlar", "Online Özel", "TOÇEV x adL", "Hediye Kartı"];
const mertAslanCategories = ["Tümü", "Elbise", "Bluz", "Gömlek", "Pantolon", "Etek", "Ceket", "Tulum", "Trençkot", "Aksesuar"];
const outletCategories = ["Tümü", "Elbise", "Bluz", "Gömlek", "Atlet", "Ceket", "Yelek", "Pantolon", "Etek", "Şort", "Tulum", "Dış Giyim", "Kazak"];

const MegaMenu = ({
  categories,
  images,
  imageAlt,
  secondColumn,
  width = "w-[800px] lg:w-[950px] xl:w-[1050px]",
}: MegaMenuProps) => (
  <div className={`absolute left-0 top-full ${width} bg-white shadow-2xl border-t border-gray-100 flex py-8 pl-6 md:pl-8 lg:pl-12 pr-0 z-50 max-h-[calc(100vh-100px)] overflow-y-auto menu-scroll`}>
    <div className="w-[180px] lg:w-[200px] shrink-0 flex flex-col justify-between py-1">
      {categories.map((category) => (
        <a href="/" key={category} className="block text-[15px] font-normal text-gray-900 transition hover:text-black">
          {category}
        </a>
      ))}
    </div>
    {secondColumn && (
      <div className="w-[180px] shrink-0 flex flex-col justify-between py-1 ml-4">
        {secondColumn.map((category) => (
          <a href="/" key={category} className="block text-[15px] font-normal text-gray-900 transition hover:text-black">
            {category}
          </a>
        ))}
      </div>
    )}
    <div className="flex-1 flex flex-col gap-0 ml-8 lg:ml-16">
      {images.map((image, index) => (
        <div key={image} className="group relative h-[200px] w-full overflow-hidden bg-gray-100 lg:h-[240px]">
          <img src={image} alt={`${imageAlt} ${index + 1}`} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        </div>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);

  const dropdowns: Record<DropdownName, React.ReactNode> = {
    sale: <MegaMenu categories={saleCategories} images={["/images/Bu-yu-k-yaz-indirimi-navigasyon-alan-1.jpg", "/images/Bu-yu-k-yaz-indirimi-navigasyon-alan-2.jpg", "/images/Bu-yu-k-yaz-indirimi-navigasyon-alan-3.jpg"]} imageAlt="Büyük Yaz İndirimi" />,
    categories: <MegaMenu categories={mainCategories} secondColumn={collectionCategories} images={["/images/2206-Navigasyon-Alan-.jpg", "/images/2206-Navigasyon-Alan-3.jpg", "/images/2206-Navigasyon-Alan-2.jpg"]} imageAlt="Kategori" width="w-[900px] lg:w-[1050px] xl:w-[1150px]" />,
    mertAslan: <MegaMenu categories={mertAslanCategories} images={["/images/2206-Navigasyon-Alan-MA3.jpg", "/images/0506-Navigasyon-adL-Aksesuar.jpg.jpeg", "/images/2206-Navigasyon-Alan-MA.jpg"]} imageAlt="Mert Aslan" />,
    outlet: <MegaMenu categories={outletCategories} images={["/images/Outlet-navigasyon-alan-1.jpg", "/images/Outlet-navigasyon-alan-2.jpg", "/images/Outlet-navigasyon-alan-3.jpg"]} imageAlt="Outlet" />,
  };

  const toggleDropdown = (name: DropdownName) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="hidden md:block">
        <div className="relative flex items-center justify-between bg-black px-6 py-3.5 text-[13px] font-medium text-white lg:px-12">
          <div className="flex-1" />
          <span className="absolute left-1/2 -translate-x-1/2 text-center tracking-wide">
            3500 TL üzeri ücretsiz kargo
          </span>
          <div className="flex flex-1 items-center justify-end gap-6">
            <a href="/" className="transition">Hediye Kartı</a>
            <a href="/" className="transition">Sipariş Takibi</a>
            <a href="/" className="flex items-center gap-1.5 transition">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Mağazalar
            </a>
            <a href="/" className="transition">Yardım ve İletişim</a>
          </div>
        </div>

        <div className="relative flex items-center justify-between px-6 py-3 md:px-8 lg:px-12">
          <nav className="flex flex-1 items-center gap-6 whitespace-nowrap text-[15px] font-normal text-gray-900 lg:gap-8">
            <div className="static" onMouseEnter={() => setOpenDropdown("sale")} onMouseLeave={() => setOpenDropdown(null)}>
              <button type="button" onClick={() => toggleDropdown("sale")} className="flex items-center gap-1 py-2 text-red-600 cursor-pointer">
                Büyük Yaz İndirimi
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openDropdown === "sale" && dropdowns.sale}
            </div>
            <a href="/" className="py-2 transition">Yeniler</a>
            <div className="static" onMouseEnter={() => setOpenDropdown("categories")} onMouseLeave={() => setOpenDropdown(null)}>
              <button type="button" onClick={() => toggleDropdown("categories")} className="flex items-center gap-1 py-2 transition cursor-pointer">
                Kategoriler
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openDropdown === "categories" && dropdowns.categories}
            </div>
            <div className="static" onMouseEnter={() => setOpenDropdown("mertAslan")} onMouseLeave={() => setOpenDropdown(null)}>
              <button type="button" onClick={() => toggleDropdown("mertAslan")} className="flex items-center gap-1 py-2 transition cursor-pointer">
                Mert Aslan
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openDropdown === "mertAslan" && dropdowns.mertAslan}
            </div>
            <a href="/" className="py-2 transition">NightZoom</a>
            <div className="static" onMouseEnter={() => setOpenDropdown("outlet")} onMouseLeave={() => setOpenDropdown(null)}>
              <button type="button" onClick={() => toggleDropdown("outlet")} className="flex items-center gap-1 py-2 transition cursor-pointer">
                Outlet
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openDropdown === "outlet" && dropdowns.outlet}
            </div>
          </nav>

          <div className="flex shrink-0 justify-center px-4">
            <a href="/" className="select-none text-4xl font-black tracking-tight text-black" style={{ fontFamily: "Georgia, serif", letterSpacing: "-2px" }}>
              adL
            </a>
          </div>

          <div className="flex flex-1 items-center justify-end gap-4 text-gray-800">
            <button type="button" aria-label="Arama" className="cursor-pointer transition hover:text-black">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" /></svg>
            </button>
            <button type="button" aria-label="Hesap" className="cursor-pointer transition hover:text-black">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /></svg>
            </button>
            <button type="button" aria-label="Favoriler" className="cursor-pointer transition hover:text-black">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3.5L5 21V5z" /></svg>
            </button>
            <button type="button" aria-label="Sepet" className="cursor-pointer transition hover:text-black">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" /></svg>
            </button>
          </div>
        </div>
      </div>

      <MobileNav />
    </header>
  );
};

export default Navbar;