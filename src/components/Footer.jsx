import { FaYoutube, FaLinkedinIn, FaPhone } from "react-icons/fa";

export default function Footer({pageType}) {
  const contentPaddingClass = pageType === 'about' 
    ? "pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-64 lg:pr-6" 
    : "px-4 sm:px-6 md:px-6";
    
  const bottomPaddingClass = pageType === 'about' 
    ? "pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-64 lg:pr-6" 
    : "px-4 sm:px-6";
    
  // This variable holds the class to shift the text on the 'about' page.
  // Using 250px to match the sidebar width and push the text entirely out of the sidebar area.
  const bgTextShiftClass = pageType === 'about' ? 'lg:translate-x-[100px]' : '';

  return (
    <footer className="bg-[#000000] pt-10 md:pt-20 pb-20 md:pb-52 font-Helix text-white/70 font-heading relative overflow-hidden">

      {/* Big Translucent TechKrate Text - ***FIX APPLIED HERE*** */}
      {/* We are using template literals to inject the conditional bgTextShiftClass */}
      <h1 className={`absolute left-0 right-0 uppercase font-weight bottom-0 translate-x-[-2%] translate-y-[8%] md:translate-y-[12%] text-[10vw] sm:text-[12vw] md:text-[14vw] lg:text-[12vw] font-900 text-white/10 leading-none select-none whitespace-nowrap pointer-events-none text-center ${bgTextShiftClass}`}>
        Techkrate
      </h1> 

      {/* Main Footer Content - USING DYNAMIC CLASS */}
      <div className={`max-w-7xl mx-auto ${contentPaddingClass} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 pb-12 relative z-10`}>
        {/* ... (rest of the footer content) ... */}
        
        {/* Brand Info */}
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-Helix hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition font-extrabold mb-2">
            Techkrate
          </h2>
        </div>

        {/* Company Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-3">Company</h3>
          <ul className="flex flex-col gap-2 text-white/40">
            <li><a href="/about" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition">About Us</a></li>
            <li><a href="/blogs" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition">Blogs</a></li>
          </ul>
        </div>

        {/* Products */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-3">Products</h3>
          <ul className="flex flex-col gap-2 text-white/40 mb-6">
            <li><a href="#" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition">Moval</a></li>
            <li><a href="#" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition">Cars</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-3">Get In Touch</h3>
          <div className="flex flex-col text-white/40 gap-4">
            <p className="flex items-center gap-2">
              <FaPhone className="text-[#1d4ed8]" /> +91-1203107109
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-[#1d4ed8]" /> +91-9990547098
            </p>
            <div className="flex gap-4 mt-2">
              <a 
                href="https://www.linkedin.com/company/techkrate/" 
                className="hover:text-[#1d4ed8] transition" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://www.youtube.com/@techkrate4281" 
                className="hover:text-[#1d4ed8] transition" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Our Location */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-3">Our Location</h3>
          <div className="w-full h-48 sm:h-60 md:h-48 rounded-lg overflow-hidden border border-gray-800 hover:border-white transition-colors duration-300 ease-in-out">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.002060346923!2d77.36605417511863!3d28.659656975649895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfaa2966d969d%3A0x4ccc339bfb64f56a!2sSG%20Estates%20-%20SG%20Alpha%20Tower%2C%20Vasundhara!5e0!3m2!1sen!2sin!4v1737911576814!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Moval Office Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto border-spacing-0 border-white/10 mt-6 sm:mt-10"></div>

      {/* Bottom Strips - USING DYNAMIC CLASS */}
      <div className={`w-full bottom-3 underline ${bottomPaddingClass} flex flex-col md:flex-row justify-between items-center text-xs text-white/70 relative z-10 gap-3 sm:gap-0 py-4`}>
        <p className="text-center md:text-left">© {new Date().getFullYear()} LURP Technologies Pvt. Ltd., All rights reserved</p>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
          <a href="/addblog" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent underline decoration-white hover:decoration-[#1d4ed8] transition">Add Blog</a>
          <a href="/termsandconditions" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent underline decoration-white hover:decoration-[#1d4ed8] transition">Terms & Conditions</a>
          <a href="/privacypolicy" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent underline decoration-white hover:decoration-[#1d4ed8] transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}