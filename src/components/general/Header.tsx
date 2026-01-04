"use client";

import { scrollToSection } from "@/lib/utils";
import { Heart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or near top
      if (currentScrollY < lastScrollY || currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Hide header when scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-teal-600" />
            <div>
              <h1 className="text-2xl font-bold text-teal-800">ARUMA</h1>
              <p className="text-xs text-gray-600">
                Multi-Speciality Pet Hospital
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-gray-700 hover:text-teal-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-gray-700 hover:text-teal-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-gray-700 hover:text-teal-600"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left py-2 text-gray-700 hover:text-teal-600"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left py-2 text-gray-700 hover:text-teal-600"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-gray-700 hover:text-teal-600"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
