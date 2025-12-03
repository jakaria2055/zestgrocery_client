import React, { useEffect, useState, useCallback } from "react";
import BannerHome from "./BannerHome";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import {
  FaChevronRight,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaThList,
  FaArrowUp,
} from "react-icons/fa";
import { categories, products } from "../assets/dummyData/dummyData";

const HeroItems = () => {
  const [activeCategory, setActiveCategory] = useState(() => {
    return localStorage.getItem("activeCategory") || "All";
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    localStorage.setItem("activeCategory", activeCategory);
  }, [activeCategory]);

  const navigate = useNavigate();
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => setIsScrolling(false), 500);
  }, []);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Search Feature
  const productMatchesSearch = (product, term) => {
    if (!term) return true;
    const cleanTerm = term.trim().toLowerCase();
    const searchWords = cleanTerm.split(/\s+/);
    return searchWords.every((word) =>
      product.name.toLowerCase().includes(word)
    );
  };

  // Search in All Products
  const searchedProducts = searchTerm
    ? products.filter((product) => productMatchesSearch(product, searchTerm))
    : activeCategory === "All"
    ? products
    : products.filter((product) => product.category === activeCategory);

  const getQuantity = (productId) => {
    const item = cart.find((ci) => ci.id === productId);
    return item ? item.quantity : 0;
  };

  const handleIncrease = (product) => addToCart(product, 1);
  const handleDecrease = (product) => {
    const qty = getQuantity(product.id);
    if (qty > 1) updateQuantity(product.id, qty - 1);
    else removeFromCart(product.id);
  };

  const redirectToItemPage = () => {
    navigate("/items", { state: { category: activeCategory } });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const sidebarCategories = [
    {
      name: "All Items",
      icon: <FaThList className="text-lg" />,
      value: "All",
    },
    ...categories,
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#E5E9C5]/10 to-[#9ECFD4]/5 relative">
      <BannerHome onSearch={handleSearch} />

      <div className="flex flex-col lg:flex-row flex-1 px-4 md:px-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-72 xl:w-80 rounded-2xl bg-gradient-to-b from-[#016B61] via-[#016B61]/90 to-[#70B2B2] text-white p-6 shadow-2xl flex-col ml-4 my-6 transform transition-all duration-300 hover:shadow-3xl">
          <div className="text-center mb-10 mt-4">
            <h1
              className="text-3xl xl:text-4xl font-bold tracking-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(to right, #FFFFFF, #E5E9C5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Fresh Cart
            </h1>
            <div className="w-40 h-1.5 bg-gradient-to-r from-[#9ECFD4] to-[#E5E9C5] mx-auto rounded-full shadow-md"></div>
            <p className="text-[#E5E9C5]/80 text-sm mt-4 font-medium tracking-wide">
              Browse by category
            </p>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <ul className="space-y-3">
              {sidebarCategories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => {
                      setActiveCategory(category.value || category.name);
                      setSearchTerm("");
                    }}
                    className={`w-full cursor-pointer flex items-center p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                      activeCategory === (category.value || category.name) &&
                      !searchTerm
                        ? "bg-gradient-to-r from-[#E5E9C5] to-[#9ECFD4] text-[#016B61] font-semibold shadow-lg scale-[1.02] ring-2 ring-white/30"
                        : "bg-[#016B61]/30 hover:bg-[#016B61]/50 hover:shadow-md backdrop-blur-sm"
                    }`}
                  >
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <div
                      className={`relative z-10 flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                        activeCategory === (category.value || category.name) &&
                        !searchTerm
                          ? "bg-[#016B61] text-[#E5E9C5] shadow-md"
                          : "bg-[#70B2B2] text-white group-hover:bg-[#9ECFD4] group-hover:scale-110"
                      }`}
                    >
                      {category.icon}
                    </div>
                    
                    {/* Category Name */}
                    <span className="relative z-10 ml-4 text-lg font-medium tracking-wide">
                      {category.name}
                    </span>
                    
                    {/* Active Indicator */}
                    {activeCategory === (category.value || category.name) &&
                    !searchTerm && (
                      <div className="relative z-10 ml-auto w-2.5 h-2.5 rounded-full bg-[#016B61] animate-pulse shadow-sm"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">Total Categories</span>
              <span className="px-3 py-1 bg-[#016B61]/40 text-white rounded-full font-semibold backdrop-blur-sm">
                {sidebarCategories.length}
              </span>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Mobile Category */}
          <div className="lg:hidden mb-6 overflow-x-auto pb-3">
            <div className="flex space-x-3 min-w-max px-2">
              {sidebarCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.value || cat.name);
                    setSearchTerm("");
                  }}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-full border transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                    activeCategory === (cat.value || cat.name) && !searchTerm
                      ? "bg-gradient-to-r from-[#016B61] to-[#70B2B2] text-white border-transparent shadow-md font-semibold"
                      : "bg-white text-[#016B61] border-[#9ECFD4] hover:bg-[#E5E9C5]/30"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search Result */}
          {searchTerm && (
            <div className="text-center mb-8 bg-gradient-to-r from-white to-[#E5E9C5]/20 rounded-2xl p-5 shadow-md border border-[#9ECFD4]/30 max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <span className="text-[#016B61] font-medium text-lg">
                  Search Results For:{" "}
                  <span className="font-bold bg-gradient-to-r from-[#016B61] to-[#70B2B2] bg-clip-text text-transparent">
                    "{searchTerm}"
                  </span>
                </span>
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-4 py-1.5 bg-gradient-to-r from-[#9ECFD4] to-[#70B2B2] text-white rounded-full hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-sm font-medium"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}

          {/* Section Title */}
          <div className="text-center mb-8 md:mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(to right, #016B61, #70B2B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {searchTerm
                ? "Search Results"
                : activeCategory === "All"
                ? "Featured Products"
                : `Best ${activeCategory}`}
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#9ECFD4] to-[#70B2B2] mx-auto rounded-full mb-6"></div>
            <p className="text-[#70B2B2] text-lg max-w-2xl mx-auto">
              {searchTerm
                ? "Find exactly what you're looking for"
                : "Fresh products delivered to your doorstep"}
            </p>
          </div>

          {/* Product Grid - Optimized Card Height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {searchedProducts.length > 0 ? (
              searchedProducts.map((product) => {
                const qty = getQuantity(product.id);
                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E5E9C5] transform hover:-translate-y-2 relative flex flex-col h-[340px] md:h-[360px]"
                  >
                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-[#016B61] to-[#70B2B2] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-md">
                      20% OFF
                    </div>
                    
                    {/* Product Image - Compact */}
                    <div className="w-full h-40 bg-gradient-to-br from-[#E5E9C5]/20 to-[#9ECFD4]/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.parentNode.innerHTML = `
                            <div class="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-[#E5E9C5] to-[#9ECFD4]">
                              <span class="text-[#016B61] text-sm font-medium">No Image</span>
                            </div>`;
                        }}
                      />
                    </div>

                    {/* Product Details - Compact */}
                    <div className="p-4 md:p-5 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="font-bold text-base md:text-lg text-[#016B61] mb-2 line-clamp-2 group-hover:text-[#70B2B2] transition-colors duration-300 leading-tight">
                          {product.name}
                        </h3>
                        
                        {/* Category Tag */}
                        <div className="inline-block bg-[#E5E9C5] text-[#016B61] text-xs font-medium px-2 py-1 rounded-full mb-3">
                          {product.category}
                        </div>
                      </div>

                      {/* Price & Controls Section */}
                      <div className="flex justify-between items-center mt-auto">
                        <div>
                          <p className="text-[#016B61] font-bold text-lg md:text-xl">
                            ${product.price.toFixed(2)}
                          </p>
                          <span className="text-[#70B2B2] text-xs line-through">
                            ${(product.price * 1.2).toFixed(2)}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        {qty === 0 ? (
                          <button
                            onClick={() => handleIncrease(product)}
                            className="bg-gradient-to-r from-[#016B61] to-[#70B2B2] hover:from-[#015951] hover:to-[#5C9C9C] text-white cursor-pointer px-4 py-2 rounded-full flex items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group/btn text-sm md:text-base"
                          >
                            <FaShoppingCart className="mr-2 text-sm group-hover/btn:scale-110 transition-transform duration-300" />
                            <span className="font-semibold">Add</span>
                          </button>
                        ) : (
                          <div className="flex items-center space-x-2 bg-gradient-to-r from-[#E5E9C5] to-[#9ECFD4] p-1 rounded-full shadow-md">
                            <button
                              onClick={() => handleDecrease(product)}
                              className="p-1.5 cursor-pointer bg-white text-[#016B61] rounded-full hover:bg-[#016B61] hover:text-white transition-all duration-300 shadow-sm text-xs"
                            >
                              <FaMinus />
                            </button>
                            <span className="font-bold text-[#016B61] min-w-[20px] text-center text-sm">
                              {qty}
                            </span>
                            <button
                              onClick={() => handleIncrease(product)}
                              className="p-1.5 cursor-pointer bg-white text-[#016B61] rounded-full hover:bg-[#016B61] hover:text-white transition-all duration-300 shadow-sm text-xs"
                            >
                              <FaPlus />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-16 px-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#E5E9C5] to-[#9ECFD4] mb-6 shadow-lg">
                  <FaShoppingCart className="text-3xl text-[#016B61]" />
                </div>
                <div className="text-2xl font-bold text-[#016B61] mb-4">
                  No Products Found
                </div>
                <p className="text-[#70B2B2] text-lg mb-8 max-w-md mx-auto">
                  Try searching with different keywords or browse our categories
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="bg-gradient-to-r from-[#016B61] to-[#70B2B2] hover:from-[#015951] hover:to-[#5C9C9C] text-white cursor-pointer px-8 py-3.5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center text-lg"
                >
                  Clear Search & Browse All
                </button>
              </div>
            )}
          </div>

          {/* View All Button */}
          {!searchTerm && searchedProducts.length > 0 && (
            <div className="text-center mb-12">
              <button
                onClick={redirectToItemPage}
                className="group bg-gradient-to-r from-[#016B61] to-[#70B2B2] hover:from-[#015951] hover:to-[#5C9C9C] text-white cursor-pointer px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 inline-flex items-center text-lg"
              >
                View All {activeCategory === "All" ? "Products" : activeCategory}
                <FaChevronRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 md:right-8 md:bottom-8 z-50 p-3 md:p-4 rounded-full shadow-2xl transition-all duration-500 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        } ${
          isScrolling
            ? "bg-gradient-to-br from-[#016B61] to-[#70B2B2] scale-95"
            : "bg-gradient-to-br from-[#016B61] to-[#70B2B2] hover:from-[#015951] hover:to-[#5C9C9C] hover:scale-110"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className={`text-white text-lg md:text-xl transition-transform duration-300 ${isScrolling ? "animate-bounce" : ""}`} />
        <span className="sr-only">Scroll to top</span>
      </button>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(1, 107, 97, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #70B2B2, #9ECFD4);
          border-radius: 10px;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroItems;