import { useState, useMemo } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

type GridView = 1 | 2 | 3 | 4;

const gridCols: Record<GridView, string> = {
  1: "grid-cols-1 md:grid-cols-2",
  2: "grid-cols-2 md:grid-cols-3",
  3: "grid-cols-2 md:grid-cols-4",
  4: "grid-cols-4",
};

const GridViewButtons = ({
  gridView,
  onChange,
  views,
}: {
  gridView: GridView;
  onChange: (view: GridView) => void;
  views: GridView[];
}) => (
  <div className="flex items-center gap-3">
    {views.includes(1) && (
      <button onClick={() => onChange(1)} className="text-black transition cursor-pointer focus:outline-none hover:opacity-70" aria-label="1">
        <svg className="w-5 h-5" fill={gridView === 1 ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" /></svg>
      </button>
    )}
    {views.includes(2) && (
      <button onClick={() => onChange(2)} className="text-black transition cursor-pointer focus:outline-none hover:opacity-70" aria-label="2">
        <svg className="w-5 h-5" fill={gridView === 2 ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect x="4" y="4" width="6.5" height="16" /><rect x="13.5" y="4" width="6.5" height="16" /></svg>
      </button>
    )}
    {views.includes(3) && (
      <button onClick={() => onChange(3)} className="text-black transition cursor-pointer focus:outline-none hover:opacity-70" aria-label="3">
        <svg className="w-5 h-5" fill={gridView === 3 ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect x="4" y="4" width="6.5" height="6.5" /><rect x="4" y="13.5" width="6.5" height="6.5" /><rect x="13.5" y="4" width="6.5" height="16" /></svg>
      </button>
    )}
    {views.includes(4) && (
      <button onClick={() => onChange(4)} className="text-black transition cursor-pointer focus:outline-none hover:opacity-70" aria-label="4">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" opacity={gridView === 4 ? 1 : 0.45}>
          <rect x="3" y="3" width="3.5" height="3.5" rx="0.5" />
          <rect x="10.25" y="3" width="3.5" height="3.5" rx="0.5" />
          <rect x="17.5" y="3" width="3.5" height="3.5" rx="0.5" />
          <rect x="3" y="10.25" width="3.5" height="3.5" rx="0.5" />
          <rect x="10.25" y="10.25" width="3.5" height="3.5" rx="0.5" />
          <rect x="17.5" y="10.25" width="3.5" height="3.5" rx="0.5" />
          <rect x="3" y="17.5" width="3.5" height="3.5" rx="0.5" />
          <rect x="10.25" y="17.5" width="3.5" height="3.5" rx="0.5" />
          <rect x="17.5" y="17.5" width="3.5" height="3.5" rx="0.5" />
        </svg>
      </button>
    )}
  </div>
);

const FilterSortBar = ({
  gridView,
  onGridViewChange,
  views,
}: {
  gridView: GridView;
  onGridViewChange: (view: GridView) => void;
  views: GridView[];
}) => (
  <div className="flex w-full items-center justify-between">
    <button className="text-[13px] font-medium text-black transition cursor-pointer hover:opacity-70">
      Filtreler &amp; Sıralama
    </button>
    <GridViewButtons gridView={gridView} onChange={onGridViewChange} views={views} />
  </div>
);

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [gridView, setGridView] = useState<GridView>(4);

  const filtered = useMemo(() => {
    if (selectedCategory === "Tümü") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="w-full pt-2 pb-8">
      <div className="mb-5 px-6 md:mb-6 md:px-8 lg:px-12">
        <div className="hidden items-center justify-between gap-4 md:flex">
          <h1 className="text-[22px] font-normal tracking-tight text-gray-900">
            Yeniler{" "}
            <span className="ml-0.5 text-[15px] text-gray-400">({filtered.length}) sonuç</span>
          </h1>
          <FilterSortBar gridView={gridView} onGridViewChange={setGridView} views={[1, 2, 3, 4]} />
        </div>

        <div className="md:hidden">
          <h1 className="text-[19px] font-normal tracking-tight text-gray-900">
            Yeniler{" "}
            <span className="ml-0.5 text-[13px] text-gray-400">({filtered.length}) sonuç</span>
          </h1>
          <div className="mt-3">
            <FilterSortBar gridView={gridView} onGridViewChange={setGridView} views={[1, 2, 4]} />
          </div>
        </div>
      </div>

      <div className="mb-5 w-full">
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      </div>

      <div className={`grid ${gridCols[gridView]} gap-x-[2px] gap-y-10`}>
        {filtered.map((product, index) => (
          <div 
            key={product.id}
            className={
              gridView === 3 && index === 0 
                ? "md:col-span-2 md:row-span-2" 
                : "" 
            }
          >
            <ProductCard product={product} compact={gridView === 4} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-8">
        <button className="px-10 py-3 border border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition rounded-sm cursor-pointer">
          Daha Fazla Göster
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;