import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaCheck,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../components/Logout";
import { form, p } from "framer-motion/client";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("authToken"))
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      setIsAuthenticated(Boolean(localStorage.getItem("authToken")));
    };
    window.addEventListener("authStateChanged", handler);
    return () => window.removeEventListener("authStateChanged", handler);
  }, []);

  if (isAuthenticated) {
    return <Logout />;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.remember) {
      setError("You must agree to term & conditions.");
      return;
    }

    //Token
    const token = "mock_token";
    const userData = {
      email: formData.email,
      token,
      timeStamp: new Date().toISOString(),
    };
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(userData));

    setError("");
    setShowToast(true);

    window.dispatchEvent(new Event("authStateChanged"));

    setTimeout(() => {
      navigate("/");
    });
  };

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-4">
      <Link
        to={"/"}
        className={
          "absolute top-4 left-4 mt-19 flex items-center text-white hover:text-emerald-400 z-20"
        }
      >
        <FaArrowLeft className="mr-2" />
        LogIn Page
      </Link>

      {/* Toast Show */}
      {showToast && (
        <div className="fixed top-16 right-6 bg-green-600 text-black inline-flex items-center px-4 py-2 rounded-lg shadow-lg z-50">
          <FaCheck className="mr-2" />
          Login Successful.
        </div>
      )}

      {/* Login Form */}
      <div className="mt-29 md:mt-24 lg:mt-0 sm:max-w-xs md:max-w-md lg:max-w-sm bg-gray-900 bg-opacity-80 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-6 rounded-2xl border border-green-700/30 shadow-lg flex-shrink-0">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-800 rounded-full flex items-center justify-center">
              <FaUser className="text-xl sm:text-3xl text-emerald-400" />
            </div>
          </div>
        </div>
        <h2 className="text-center text-lg sm:text-xl font-semibold text-white mb-4">
          Welcome back!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* EMAIL */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full pl-10 pr-3 py-2.5 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full pl-10 pr-10 py-2.5 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="mr-2 h-4 w-4 cursor-pointer text-green-500 bg-gray-800 border-gray-600 rounded focus:ring-green-500"
                required
              />
              Remember Me!
            </label>

            <Link to="#" className="text-green-400 hover:underline">
              Fogot?
            </Link>
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-black font-medium rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-white mt-6">
          Don't have an account?{' '}
          <Link to={"/signup"} className="text-green-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
