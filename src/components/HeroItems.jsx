import React, { useEffectEvent, useState } from "react";
import BannerHome from "./BannerHome";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { FaThList } from "react-icons/fa";
import { categories } from "../assets/dummyData/dummyData";

const HeroItems = () => {
  const [activeCategory, setActiveCategory] = useState(() => {
    return localStorage.getItem("activeCategory" || "All");
  });

  useEffectEvent(() => {
    localStorage.setItem("activeCategory", activeCategory);
  }, [activeCategory]);

  const navigate = useNavigate();
  const { cart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");

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
      </div>
    </div>
  );
};

export default HeroItems;
