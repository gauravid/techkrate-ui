import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { gsap } from "gsap"
import logo from "../assets/image/logo.svg"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const navbarRef = useRef(null)
  const linksRef = useRef([])
  const mobileMenuRef = useRef(null)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Animate sidebar on load (desktop only)
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      gsap.fromTo(
        navbarRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
    }
  }, [])

  // Hover underline effect (desktop only)
  useEffect(() => {
    if (window.innerWidth < 1024) return

    linksRef.current.forEach((link, index) => {
      if (!link) return
      const underline = link.querySelector(".underline")
      if (!underline) return
      
      gsap.set(underline, { scaleX: 0, transformOrigin: "left" })

      const handleMouseEnter = () => {
        gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.inOut" })
        setHoveredLink(index)
      }

      const handleMouseLeave = () => {
        gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.inOut" })
        setHoveredLink(null)
      }

      link.addEventListener("mouseenter", handleMouseEnter)
      link.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter)
        link.removeEventListener("mouseleave", handleMouseLeave)
      }
    })
  }, [])

  // Animate mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      )
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* ========== MOBILE HEADER (< 1024px) ========== */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-lg">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img src={logo} alt="Logo" className="w-8 h-auto sm:w-10" />
            <span className="text-lg sm:text-xl font-bold tracking-wide">Techkrate</span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ========== MOBILE MENU OVERLAY ========== */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={toggleMobileMenu}
          />
          
          {/* Slide-in Menu */}
          <div
            ref={mobileMenuRef}
            className="lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black text-white z-50 overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <span className="text-lg font-bold">Menu</span>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8 space-y-1">
                <Link
                  to="/"
                  className="block py-3 px-4 text-lg hover:bg-white/10 rounded-lg transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block py-3 px-4 text-lg hover:bg-white/10 rounded-lg transition-colors"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>

                {/* Products Section */}
                <div className="pt-4">
                  <span className="block px-4 text-xs text-gray-400 uppercase tracking-wide mb-2">
                    Our Products
                  </span>
                  <Link
                    to="/product/moval"
                    className="block py-3 px-4 text-lg hover:bg-white/10 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Moval
                  </Link>
                  <Link
                    to="/product/cars"
                    className="block py-3 px-4 text-lg hover:bg-white/10 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    CARS
                  </Link>
                </div>

                <Link
                  to="/blogs"
                  className="block py-3 px-4 text-lg hover:bg-white/10 rounded-lg transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Blogs
                </Link>

                {location.pathname !== "/contact" && (
                  <Link
                    to="/contact"
                    className="block py-3 px-4 text-lg font-medium bg-white text-black hover:bg-gray-200 rounded-lg transition-colors mt-4"
                    onClick={toggleMobileMenu}
                  >
                    Connect with Us
                  </Link>
                )}
              </nav>

              {/* Footer */}
              <div className="px-6 py-6 border-t border-white/10">
                <p className="text-xs text-gray-400 text-center">
                  © {new Date().getFullYear()} Techkrate
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ========== DESKTOP SIDEBAR (>= 1024px) ========== */}
      <nav
        ref={navbarRef}
        className="hidden lg:flex fixed top-0 left-0 h-full w-[220px] xl:w-[250px] bg-black text-white flex-col justify-between py-6 xl:py-8 px-5 xl:px-6 z-50 shadow-xl"
      >
        {/* TOP: Logo */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center space-x-3 mb-10 xl:mb-12">
            <img src={logo} alt="Logo" className="w-9 xl:w-10 h-auto" />
            <span className="text-lg xl:text-xl font-bold tracking-wide">Techkrate</span>
          </Link>

          {/* NAV LINKS (centered vertically) */}
          <div className="flex flex-col justify-center h-[70vh] space-y-3 xl:space-y-4 text-sm font-medium w-full">
            <Link
              to="/"
              ref={(el) => (linksRef.current[0] = el)}
              className="relative group py-1 hover:text-gray-300 transition-colors"
            >
              <span>Home</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            <Link
              to="/about"
              ref={(el) => (linksRef.current[1] = el)}
              className="relative group py-1 hover:text-gray-300 transition-colors"
            >
              <span>About Us</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            {/* Products Heading */}
            <span className="text-xs text-gray-400 uppercase mt-4 mb-2 tracking-wide">
              Our Products
            </span>

            <Link
              to="/product/moval"
              ref={(el) => (linksRef.current[2] = el)}
              className="relative group py-1 hover:text-gray-300 transition-colors"
            >
              <span>Moval</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            <Link
              to="/product/cars"
              ref={(el) => (linksRef.current[3] = el)}
              className="relative group py-1 hover:text-gray-300 transition-colors"
            >
              <span>CARS</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            <Link
              to="/blogs"
              ref={(el) => (linksRef.current[4] = el)}
              className="relative group py-1 hover:text-gray-300 transition-colors"
            >
              <span>Blogs</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            {location.pathname !== "/contact" && (
              <Link
                to="/contact"
                ref={(el) => (linksRef.current[5] = el)}
                className="relative group py-1 hover:text-gray-300 transition-colors"
              >
                <span>Connect with Us</span>
                <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-auto">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Techkrate</p>
        </div>
      </nav>
    </>
  )
}

export default Navbar