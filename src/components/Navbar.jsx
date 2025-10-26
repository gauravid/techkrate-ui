import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { gsap } from "gsap"
import logo from "../assets/image/logo.svg"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const navbarRef = useRef(null)
  const linksRef = useRef([])
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Animate sidebar on load
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
  }, [])

  // Hover underline effect
  useEffect(() => {
    linksRef.current.forEach((link, index) => {
      if (!link) return
      const underline = link.querySelector(".underline")
      gsap.set(underline, { scaleX: 0, transformOrigin: "left" })

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.inOut" })
        setHoveredLink(index)
      })

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.inOut" })
        setHoveredLink(null)
      })
    })
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <>
      {/* LEFT VERTICAL SIDEBAR */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 h-full w-[250px] bg-black text-white flex flex-col justify-between py-8 px-6 z-50"
      >
        {/* TOP: Logo */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center space-x-3 mb-12">
            <img src={logo} alt="Logo" className="w-10 h-auto" />
            <span className="text-xl font-bold tracking-wide">Techkrate</span>
          </Link>

          {/* NAV LINKS (centered vertically) */}
          <div className="flex flex-col justify-center h-[70vh] space-y-4 text-sm font-medium w-full">
            <Link
              to="/"
              ref={(el) => (linksRef.current[0] = el)}
              className="relative group"
            >
              <span>Home</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            <Link
              to="/about"
              ref={(el) => (linksRef.current[1] = el)}
              className="relative group"
            >
              <span>About Us</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            {/* Products Heading */}
            <span className="text-xs text-gray-400 uppercase mt-4 mb-2 tracking-wide">
              Our Products
            </span>

            {/* Products Links directly on navbar */}
            <Link
              to="/product/moval"
              ref={(el) => (linksRef.current[2] = el)}
              className="relative group"
            >
              <span>Moval</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            <Link
              to="/product/cars"
              ref={(el) => (linksRef.current[3] = el)}
              className="relative group"
            >
              <span>CARS</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            <Link
              to="/blogs"
              ref={(el) => (linksRef.current[4] = el)}
              className="relative group"
            >
              <span>Blogs</span>
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </Link>

            {/* Connect Link with hover underline */}
            {location.pathname !== "/contact" && (
              <Link
                to="/contact"
                ref={(el) => (linksRef.current[5] = el)}
                className="relative group"
              >
                <span>Connect with Us</span>
                <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
              </Link>
            )}
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white p-2 focus:outline-none self-end mt-8"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-start justify-center p-10 space-y-6 text-white z-40 md:hidden">
          <Link to="/" className="text-3xl" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about" className="text-3xl" onClick={toggleMobileMenu}>About Us</Link>
          <Link to="/product/moval" className="text-3xl" onClick={toggleMobileMenu}>Moval</Link>
          <Link to="/product/cars" className="text-3xl" onClick={toggleMobileMenu}>CARS</Link>
          <Link to="/blogs" className="text-3xl" onClick={toggleMobileMenu}>Blogs</Link>
          <Link to="/contact" className="text-3xl" onClick={toggleMobileMenu}>Connect With Us</Link>
        </div>
      )}
    </>
  )
}

export default Navbar
