const categories = [
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
  "Yeni Trençkot",
];

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="w-full">
      <div className="sleek-scrollbar flex w-full gap-2.5 overflow-x-auto border-b border-gray-200 px-6 pb-[14px] md:px-8 lg:px-12">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            aria-pressed={selected === category}
            className={`shrink-0 cursor-pointer rounded-none border border-gray-200 bg-white px-6 py-[10px] text-[14px] font-normal transition focus:outline-none lg:px-8 ${
              selected === category ? "text-black" : "text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;