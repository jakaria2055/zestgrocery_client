import React, { useEffectEvent, useState } from "react";
import BannerHome from "./BannerHome";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { FaMinus, FaPlus, FaShoppingCart, FaThList } from "react-icons/fa";
import { categories, products } from "../assets/dummyData/dummyData";

const HeroItems = () => {
  const [activeCategory, setActiveCategory] = useState(() => {
    return localStorage.getItem("activeCategory" || "All");
  });

  useEffectEvent(() => {
    localStorage.setItem("activeCategory", activeCategory);
  }, [activeCategory]);

  const navigate = useNavigate();
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <BannerHome onSearch={handleSearch} />

      <div className="flex flex-col lg:flex-row flex-1">
        <aside className="hidden lg:flex w-64 rounded-r-3xl bg-gradient-to-b from-emerald-600 to-emerald-800 text-white p-4 shadow-2xl flex-col">
          <div className="text-center mb-8 mt-4">
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
              className="text-4xl font-bold tracking-tighter"
            >
              Fresh Cart
            </h1>
            <div className="w-32 h-1 bg-emerald-400 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-emerald-700">
            <ul className="space-y-3">
              {sidebarCategories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => {
                      setActiveCategory(category.value || category.name);
                      setSearchTerm("");
                    }}
                    className={`w-full cursor-pointer flex items-center p-4 rounded-xl transition-transform transform hover:scale-105 ${
                      activeCategory === (category.value || category.name) &&
                      !searchTerm
                        ? "bg-white text-emerald-700 font-bold shadow-lg"
                        : "bg-emerald-700 hover:bg-emerald-500"
                    }`}
                  >
                    <div className="bg-emerald-500 p-3 rounded-full">
                      {category.icon}
                    </div>
                    <span className="ml-4 text-lg">{category.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Mobile Category */}
          <div className="lg:hidden mb-6 overflow-x-auto">
            <div className="flex space-x-4">
              {sidebarCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.value || cat.name);
                    setSearchTerm("");
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full border-2 transition-colors ${
                    activeCategory === (cat.value || cat.name) && !searchTerm
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-emerald-700 border-emerald-300"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search Result */}
          {searchTerm && (
            <div className="text-center mb-6 bg-white rounded-xl p-4 shadow-sm max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <span className="text-emerald-700 font-medium">
                  Seacrh Result For:{" "}
                  <span className="font-bold">"{searchTerm}"</span>
                </span>

                <button
                  onClick={() => setSearchTerm("")}
                  className="ml-4 text-emerald-500 hover:text-shadow-emerald-700 p-1 rounded-full transition-colors"
                >
                  <span className="text-sm bg-emerald-100 px-2 py-1 rounded-full">
                    Clear
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Section Title */}
          <div className="text-center mb-6">
            <h2
              className="text-3xl font-bold text-emerald-700 capitalize mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {searchTerm
                ? "Search Results"
                : activeCategory === "All"
                ? "Featured Products"
                : `Best ${activeCategory}`}
            </h2>
            <div className="w-32 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {searchedProducts.length > 0 ? (
              searchedProducts.map((product) => {
                const qty = getQuantity(product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 border border-gray-100 transform hover:-translate-y-1"
                  >
                    <div className="w-full h-40 sm:h-52 bg-gray-100 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full object-cover transition-transform duration-300"
                        onError={(e) => {
                          e.target.onError == null;
                          e.target.parentNode.innerHTML = `
                        <div className='flex items-center justify-center w-full h-full bg-gray-200>
                        <span className='text-gray-500 text-sm>No Image</span>
                        </div>`;
                        }}
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-800 text-center mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <p className="text-emerald-600 font-bold text-xl">
                            ${product.price.toFixed(2)}
                          </p>
                          <span className="text-gray-500 text-sm line-through">
                            ${(product.price * 1.2).toFixed(2)}
                          </span>
                        </div>

                        {/* Add Controls */}
                        {qty === 0 ? (
                          <button
                            onClick={() => handleIncrease(product)}
                            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white cursor-pointer px-4 py-2 rounded-full flex items-center transition-shadow shadow-md hover:shadow-lg"
                          >
                            <FaShoppingCart className="mr-2" />
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleDecrease(product)}
                              className="p-2 cursor-pointer bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200"
                            >
                              <FaMinus />
                            </button>
                            <span className="font-bold">{qty}</span>
                            <button
                              onClick={() => handleIncrease(product)}
                              className="p-2 cursor-pointer bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200"
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
              <div className="col-span-full text-center py-12">
                <div className="text-emerald-600 font-medium text-xl mb-4">
                  No Products Found
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeroItems;
