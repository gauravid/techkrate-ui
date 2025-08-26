
import { FaYoutube, FaLinkedinIn, FaPhone } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#000000] pt-20 pb-52 font-Helix text-white/70 font-heading relative overflow-hidden">

      {/* Big Translucent TechKrate Text */}
      <h1 className="absolute left-0 right-0 uppercase font-weight bottom-0 translate-x-[-2%] translate-y-[12%] text-[20vw] md:text-[18.5vw] font-900 text-white/10 leading-none select-none whitespace-nowrap pointer-events-none text-center">
        TechKrate
      </h1> 

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 relative z-10">

        {/* Brand Info */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-Helix hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition font-extrabold mb-2">
            TechKrate
          </h2>
        </div>

        {/* Company Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-3">Company</h3>
          <ul className="flex flex-col gap-2 text-white/40">
            <li><a href="#" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition">About Us</a></li>
            <li><a href="#" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition">Blogs</a></li>
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
          
          {/* get in touch */}
          <div>
          <h3 className="text-lg font-bold mb-3 ">Get In Touch</h3>
          <div className="flex flex-col text-white/40 gap-4">
            <p className="flex items-center gap-2">
              <FaPhone className="text-[#1d4ed8] " /> +91-1203107109
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-[#1d4ed8]" /> +91-9990547098
            </p>

            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/company/techkrate/" className="hover:text-[#1d4ed8] transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-[#1d4ed8]  transition"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-3">Our Location</h3>
          <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-800 hover:border-white transition-colors duration-300 ease-in-out">
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

    

      {/* This new div is the line that appears below the main content */}
      <div className="max-w-7xl mx-auto border-spacing-0 border-white/10 mt-10"></div>
      
      {/* Bottom Strips */}
      {/* This section has been modified to be positioned absolute at the bottom of the footer */}
      <div className="w-full bottom-3 underline px-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 relative z-10">
        <p> © {new Date().getFullYear()} LURP Technologies Pvt. Ltd., All rights reserved</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="/addblog" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent underline decoration-white hover:decoration-[#1d4ed8] transition">Add Blog</a>
          <a href="/TermsAndConditions" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent underline decoration-white hover:decoration-[#1d4ed8] transition">Terms & Conditions</a>
          <a href="/PrivacyPolicy" className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent underline decoration-white hover:decoration-[#1d4ed8] transition">Privacy Policy</a>
        </div>
      </div>
      
    </footer>
  );
}


