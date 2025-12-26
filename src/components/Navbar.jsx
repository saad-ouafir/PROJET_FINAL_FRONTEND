import { useState } from "react";
import { FiSun, FiMoon, FiGlobe, FiMenu, FiX } from "react-icons/fi";
import threadoria_white from "../assets/thredoria_white.png";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme("light");

  return (
    <>
      <nav className="border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <div className="w-28 mr-3 flex items-center justify-center">
                  <img
                    src={threadoria_white}
                    alt="Threadoria Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
                title="Change Language"
              >
                <FiGlobe className="w-4 h-4" />
                <span className="text-sm font-medium">EN</span>
              </button>

              <button
                className="p-2 text-gray-700 hover:text-blue-600 transition"
                title="Toggle Dark Mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FiSun className="w-5 h-5" />
                ) : (
                  <FiMoon className="w-5 h-5" />
                )}
              </button>

              {false ? (
                <a
                  href="/"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                  Logout
                </a>
              ) : (
                <div className="flex space-x-2">
                  <a
                    href="/auth/login"
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 transition"
                  >
                    Login
                  </a>
                  <a
                    href="/auth"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Register
                  </a>
                </div>
              )}
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button className="p-2 text-gray-700">
                <FiGlobe className="w-4 h-4" />
              </button>

              <button className="p-2 text-gray-700">
                {theme === "dark" ? (
                  <FiSun
                    className="w-5 h-5"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <FiMoon
                    className="w-5 h-5"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </button>

              <button className="p-2 text-gray-700">
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a
                  to="/"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {t("navbar.home")}
                </a>
                <a
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {t("navbar.about")}
                </a>
                <a
                  to="/services"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {t("navbar.services")}
                </a>
                <a
                  to="/freelancers"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {t("navbar.freelancers")}
                </a>

                <div className="pt-3 border-t border-gray-200">
                  {isAuth ? (
                    <a
                      to="/dashboard"
                      className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-center"
                    >
                      {t("navbar.dashboard")}
                    </a>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <a
                        to="/login"
                        className="block text-gray-700 hover:text-blue-600 px-4 py-2 transition text-center"
                      >
                        {t("navbar.login")}
                      </a>
                      <a
                        to="/register"
                        className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-center"
                      >
                        {t("navbar.register")}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
