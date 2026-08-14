import { useState } from "react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  const [saved, setSaved] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [touchX, setTouchX] = useState(0);
  
  const images = product.images?.length ? product.images : [product.image];

  const prevImg = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (images.length > 1) {
      setImgIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    }
  };

  const nextImg = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (images.length > 1) {
      setImgIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].screenX;
    if (touchX - endX > 50) nextImg();
    if (touchX - endX < -50) prevImg();
  };

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="relative overflow-hidden bg-gray-100 aspect-[3/4]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[imgIndex]}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {hovered && images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 flex w-full pointer-events-none z-10">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-[2.5px] flex-1 transition-all duration-300 ${
                  i === imgIndex ? "bg-black" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        )}

        {images.length > 1 && (
          <div
            className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}
          >
            <button
              onClick={prevImg}
              className="bg-white/80 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center shadow text-gray-700 hover:text-black transition cursor-pointer z-20"
              aria-label="Önceki görsel"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImg}
              className="bg-white/80 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center shadow text-gray-700 hover:text-black transition cursor-pointer z-20"
              aria-label="Sonraki görsel"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {!compact && (
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2.5 z-20">
            <button
              className="w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow transition text-gray-700 hover:text-black cursor-pointer"
              aria-label="Sepete ekle"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14M5 12h14" />
              </svg>
            </button>

            <button
              className={`w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow transition cursor-pointer ${saved ? "text-black" : "text-gray-400 hover:text-black"}`}
              aria-label="Favorilere ekle"
              onClick={(e) => {
                e.stopPropagation();
                setSaved(!saved);
              }}
            >
              <svg
                className="w-4 h-4"
                fill={saved ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="mt-2 px-0.5">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm text-gray-900 font-medium leading-snug line-clamp-2 flex-1">
            {product.name}
          </p>
          {product.extraColors && (
            <span className="text-xs text-gray-500 shrink-0 whitespace-nowrap mt-0.5">
              +{product.extraColors} 
            </span>
          )}
        </div>
        <p className="text-sm text-gray-800 mt-1 font-medium">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;