import { FaYoutube, FaLinkedinIn, FaPhone } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#000000] pt-20 pb-52 font-Helix text-white/70 font-heading uppercase relative overflow-hidden">

      {/* Big Translucent TechKrate Text */}
      <h1 className="absolute left-0 right-0 bottom-0 translate-x-[-2%] translate-y-[12%] text-[20vw] md:text-[18.5vw] font-extrabold text-white/10 leading-none select-none whitespace-nowrap pointer-events-none text-center">
        TechKrate
      </h1> 

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-anton hover:text-cyan-500 font-extrabold mb-2">
            TechKrate<sup>©</sup>
          </h2>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Company</h3>
          <ul className="flex flex-col gap-2 text-white/40">
            <li><a href="#" className="hover:text-cyan-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-cyan-500 transition">Blogs</a></li>
          </ul>
        </div>

        {/* Products*/}
        <div>
          <h3 className="text-lg font-bold mb-3">Products</h3>
          <ul className="flex flex-col gap-2 text-white/40 mb-6">
            <li><a href="#" className="hover:text-cyan-500 transition">Moval</a></li>
            <li><a href="#" className="hover:text-cyan-500 transition">Cars</a></li>
          </ul>

          <h3 className="text-lg font-bold mb-3 text-white">Get In Touch</h3>

          <div className="flex flex-col text-white/40 gap-4">
            {/* Phone Numbers */}
            <p className="flex items-center gap-2">
              <FaPhone className="text-cyan-500 " /> +91-1203107109
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-cyan-500" /> +91-9990547098
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/company/techkrate/" className="hover:text-cyan-500 transition">
                <FaLinkedinIn  />
              </a>
              <a href="#" className="hover:text-cyan-500 transition"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-3">Subscribe</h3>
          <div className="flex items-center bg-black border border-gray-500 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 bg-[#F5F5DC] text-black outline-none placeholder-gray-500"
            />
            <button className="text-[#F5F5DC] bg-black px-4 py-2 hover:bg-cyan-500 transition">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 pt-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 relative z-10">
        <p>&copy; {new Date().getFullYear()} TechKrate. All Rights Reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-cyan-500 transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
