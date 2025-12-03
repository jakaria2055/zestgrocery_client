import { useState } from "react";
import { FiSearch, FiTruck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { features } from "../assets/dummyData/Dummy";

const BannerHome = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();

    if (trimmedTerm) {
      if (onSearch) {
        const searchWords = trimmedTerm.toLowerCase().split(/\s+/);
        onSearch(searchWords.join(""));
      } else {
        navigate(`/items?search=${encodeURIComponent(trimmedTerm)}`);
      }
      setSearchTerm("");
    }
  };

  return (
    <div className="relative overflow-hidden pt-20 md:pt-24">
      {/* Background with color palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5E9C5]/30 via-[#9ECFD4]/10 to-[#70B2B2]/10 z-0"></div>
      
      {/* Animated floating circles */}
      <div className="hidden lg:block absolute top-10 left-10 w-24 h-24 rounded-full bg-[#9ECFD4]/20 animate-float-slow"></div>
      <div className="hidden xl:block absolute bottom-20 right-20 w-36 h-36 rounded-full bg-[#70B2B2]/20 animate-float-medium"></div>
      <div className="hidden md:block absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-[#016B61]/10 animate-float-fast"></div>
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#E5E9C5]/20 blur-2xl"></div>

      <div className="relative z-10 mt-8 sm:mt-10 lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-[#016B61] to-[#70B2B2] text-white px-4 py-2 rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              <FiTruck className="mr-2 text-lg" />
              <span className="text-sm sm:text-base font-medium">
                Free Delivery On Orders Over $500
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#016B61] mb-4 leading-tight">
              Fresh{" "}
              <span className="relative inline-block">
                <span className="font-serif italic bg-gradient-to-r from-[#70B2B2] to-[#016B61] bg-clip-text text-transparent">
                  Groceries
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#9ECFD4] to-[#70B2B2] rounded-full"></div>
              </span>
              <br className="hidden sm:block" /> Delivered to Your Door
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#70B2B2] mb-8 mx-auto lg:mx-0 max-w-xl leading-relaxed">
              Discover fresh produce, top-quality meats, and pantry essentials—all delivered within 30 minutes.
            </p>

            {/* Search Bar */}
            <form
              onSubmit={handleSubmit}
              className="relative max-w-xl mx-auto lg:mx-0 mb-10 group"
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search for fruits, vegetables, meats, dairy..."
                  className="w-full py-4 px-6 pr-14 rounded-2xl border-2 border-[#9ECFD4] bg-white/90 backdrop-blur-sm focus:outline-none focus:border-[#016B61] focus:ring-4 focus:ring-[#016B61]/20 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-800 placeholder:text-[#70B2B2]/60"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#016B61] to-[#70B2B2] text-white p-3 rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300 shadow-md"
                >
                  <FiSearch className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex flex-col items-center shadow-md border border-[#E5E9C5] hover:shadow-xl hover:border-[#9ECFD4] hover:bg-white hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-2 rounded-full bg-gradient-to-br from-[#E5E9C5] to-[#9ECFD4] text-[#016B61] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <span className="text-[#016B61] font-semibold text-xs sm:text-sm text-center leading-tight">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-20 w-full max-w-md lg:max-w-lg transform transition-all duration-500 hover:scale-[1.02]">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#016B61]/10 to-[#70B2B2]/10 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src="/public/image/Hero_img.jpg"
                  alt="Fresh groceries delivery"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                  <p className="text-white text-sm sm:text-base font-medium">
                    Freshness guaranteed or your money back!
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#9ECFD4] to-[#E5E9C5] opacity-30 -z-10 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-tr from-[#70B2B2] to-[#016B61] opacity-20 -z-10 animate-pulse-medium"></div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-white to-[#E5E9C5] rounded-2xl p-4 shadow-xl border border-[#9ECFD4] hidden lg:block animate-float-card">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#016B61] to-[#70B2B2] flex items-center justify-center">
                    <FiTruck className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-[#016B61] font-bold">30 Min</p>
                    <p className="text-[#70B2B2] text-sm">Delivery Promise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite;
        }
        .animate-float-card {
          animation: float-card 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BannerHome;