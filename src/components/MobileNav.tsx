import { useState } from "react";

type DropdownName = "sale" | "categories" | "mertAslan" | "outlet";

const saleCategories = [
  "Elbise", "Bluz", "Gömlek", "Tişört", "Atlet", "Ceket", 
  "Yelek", "Etek", "Şort", "Pantolon", "Tulum", "Ayakkabı", "Çanta"
];

const mainCategories = [
  "Tümü", "Elbise", "Bluz", "Gömlek", "Tişört", "Atlet", 
  "Ceket", "Yelek", "Etek", "Şort", "Pantolon", "Tulum", "Dış Giyim"
];

const mertAslanCategories = [
  "Tümü", "Elbise", "Bluz", "Gömlek", "Pantolon", 
  "Etek", "Ceket", "Tulum", "Trençkot", "Aksesuar"
];

const outletCategories = [
  "Tümü", "Elbise", "Bluz", "Gömlek", "Atlet", "Ceket", 
  "Yelek", "Pantolon", "Etek", "Şort", "Tulum", "Dış Giyim", "Kazak"
];

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownName | null>(null);

  const toggleMobile = (name: DropdownName) => {
    setMobileExpanded((current) => (current === name ? null : name));
  };

  return (
    <div className="w-full bg-white md:hidden">
      <div className="flex items-center justify-center bg-black py-2.5 text-[12px] font-medium text-white">
        <span className="text-center tracking-wide">3500 TL üzeri ücretsiz kargo</span>
      </div>

      <div className="relative flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <div className="flex flex-1">
          <button
            type="button"
            className="cursor-pointer text-black"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menüyü aç/kapat"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8h18M3 16h18" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex shrink-0 justify-center px-4">
          <a
            href="/"
            className="select-none text-4xl font-black tracking-tight text-black"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "-2px" }}
          >
            adL
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end gap-5 text-gray-800">
          <button type="button" aria-label="Arama" className="cursor-pointer transition hover:text-black">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>
          
          <button type="button" aria-label="Sepet" className="cursor-pointer transition hover:text-black">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 z-40 flex h-[calc(100vh-100px)] w-full flex-col overflow-y-auto bg-white">
          <div className="flex flex-col gap-7 px-6 py-8 text-[19px] font-normal text-black">
            <button type="button" onClick={() => toggleMobile("sale")} className="flex w-full items-center justify-between text-left text-[#e3352f]">
              <span>Büyük Yaz İndirimi</span>
              <svg className={`h-4 w-4 transition-transform ${mobileExpanded === "sale" ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
            {mobileExpanded === "sale" && (
              <div className="flex flex-col gap-4 pl-2 text-[15px]">
                {saleCategories.map((cat) => ( <a key={cat} href="/" className="text-gray-500">{cat}</a> ))}
              </div>
            )}

            <a href="/" className="block">Yeniler</a>

            <button type="button" onClick={() => toggleMobile("categories")} className="flex w-full items-center justify-between text-left">
              <span>Kategoriler</span>
              <svg className={`h-4 w-4 transition-transform ${mobileExpanded === "categories" ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
            {mobileExpanded === "categories" && (
              <div className="flex flex-col gap-4 pl-2 text-[15px]">
                {mainCategories.map((cat) => ( <a key={cat} href="/" className="text-gray-500">{cat}</a> ))}
              </div>
            )}

            <button type="button" onClick={() => toggleMobile("mertAslan")} className="flex w-full items-center justify-between text-left">
              <span>Mert Aslan</span>
              <svg className={`h-4 w-4 transition-transform ${mobileExpanded === "mertAslan" ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
            {mobileExpanded === "mertAslan" && (
              <div className="flex flex-col gap-4 pl-2 text-[15px]">
                {mertAslanCategories.map((cat) => ( <a key={cat} href="/" className="text-gray-500">{cat}</a> ))}
              </div>
            )}

            <a href="/" className="block">NightZoom</a>

            <button type="button" onClick={() => toggleMobile("outlet")} className="flex w-full items-center justify-between text-left">
              <span>Outlet</span>
              <svg className={`h-4 w-4 transition-transform ${mobileExpanded === "outlet" ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
            {mobileExpanded === "outlet" && (
              <div className="flex flex-col gap-4 pl-2 text-[15px]">
                {outletCategories.map((cat) => ( <a key={cat} href="/" className="text-gray-500">{cat}</a> ))}
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-4 px-6 text-[15px] font-normal text-black">
            <a href="/">Hediye Kartı</a>
            <a href="/">Sipariş Takibi</a>
            <a href="/" className="flex w-[105px] items-center justify-between">
              <span>Mağazalar</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
            </a>
            <a href="/">Yardım ve İletişim</a>
          </div>

          <div className="mt-auto flex items-center justify-between px-6 py-12">
            <button className="flex items-center gap-3 bg-black px-5 py-3 text-[14px] font-medium text-white">
              Giriş Yap/Üye Ol
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /></svg>
            </button>
            <button className="flex items-center gap-1.5 text-[15px] font-normal">
              Türkçe
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;