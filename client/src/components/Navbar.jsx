import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import logo from "../assets/image/logo.svg"
import NavbarBG from "../assets/image/NavbarBG.avif"
import { ArrowRight, Menu, X } from "lucide-react"

const Navbar = () => {
  const navbarRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])
  const buttonRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power2.out" } })

    tl.fromTo(
      [logoRef.current, ...linksRef.current, buttonRef.current],
      { y: -30, opacity: 0 },
      { y: 0, delay: 0.3, opacity: 1, stagger: 0.07 },
    )

    linksRef.current.forEach((link, index) => {
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setIsVisible(visible)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  useEffect(() => {
    gsap.to(navbarRef.current, {
      y: isVisible ? 0 : -100,
      duration: 0.3,
      ease: "power2.inOut",
    })
  }, [isVisible])

  useEffect(() => {
    linksRef.current.forEach((link, index) => {
      if (index !== hoveredLink) {
        gsap.to(link, { opacity: hoveredLink !== null ? 0.2 : 1, duration: 0.3 })
      } else {
        gsap.to(link, { opacity: 1, duration: 0.3 })
      }
    })
  }, [hoveredLink])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    const menu = mobileMenuRef.current
    if (!isMobileMenuOpen) {
      gsap.to(menu, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "auto",
      })
    } else {
      gsap.to(menu, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: "none",
      })
    }
  }

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 w-full bg-transparent text-white px-4 md:px-14 pb-4 pt-6 flex justify-between items-center z-50 font-Helix transition-all duration-300"
      >
        <div ref={logoRef} className="text-2xl font-bold flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="w-16 md:w-20 h-auto" />
            <span className="overflow-hidden inline-block">Techkrate</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-16 text-center text-[15px] relative">
          <Link
            to="/"
            ref={(el) => (linksRef.current[0] = el)}
            className="relative group text-white overflow-hidden"
            onMouseEnter={() => setHoveredLink(0)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span>Home</span>
            <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
          </Link>
          <Link
            to="/about"
            ref={(el) => (linksRef.current[1] = el)}
            className="relative group text-white overflow-hidden"
            onMouseEnter={() => setHoveredLink(1)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span>About us</span>
            <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
          </Link>
          <div
            className="relative text-white cursor-pointer group"
            ref={(el) => (linksRef.current[2] = el)}
            onMouseEnter={() => setHoveredLink(2)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span className="relative inline-block">
              Products
              <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>

            <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-black text-white p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg">
              <button className="block py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
                Moval
              </button>
              <button className="block py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
                CARS
              </button>
            </div>
          </div>
          <Link
            to="/blogs"
            ref={(el) => (linksRef.current[3] = el)}
            className="relative group text-white overflow-hidden"
            onMouseEnter={() => setHoveredLink(3)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span>Blogs</span>
            <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
          </Link>
        </div>

        {/* Desktop Connect Button */}
        <Link
          to="/contact"
          ref={buttonRef}
          className="hidden md:inline-block connect-btn p-3 bg-white rounded-full text-black transition-all duration-50 hover:bg-black group overflow-hidden hover:border-white border-2 hover:text-white"
        >
          <div className="flex items-center space-x-1.5 font-semibold text-sm">
            <span className="group-hover:text-white transition-all duration-300 inline-block">Connect with Us</span>
            <ArrowRight
              className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
              aria-hidden="true"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-black bg-opacity-95 flex pt-28 pl-5 z-40 opacity-0 scale-95 pointer-events-none transition-all duration-300 md:hidden"
        style={{
          backgroundImage: `url(${NavbarBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col space-y-8 font-medium">
          <Link to="/" className="text-white text-3xl" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link to="/about" className="text-white text-3xl" onClick={toggleMobileMenu}>
            About Us
          </Link>
          <div className="relative group">
            <span className="text-white text-3xl cursor-pointer">Products</span>
            <div className="mt-4 space-y-4">
              <Link to="/product1" className="block text-white text-1xl" onClick={toggleMobileMenu}>
                Moval
              </Link>
              <Link to="/product2" className="block text-white text-1xl" onClick={toggleMobileMenu}>
                CARS
              </Link>
            </div>
          </div>
          <Link to="/blogs" className="text-white text-3xl" onClick={toggleMobileMenu}>
            Blogs
          </Link>
          <Link to="/contact" className="text-white text-3xl" onClick={toggleMobileMenu}>
            Connect With Us
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar

