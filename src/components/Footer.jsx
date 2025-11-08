import { Youtube, Linkedin, Phone, MapPin } from "lucide-react";

export default function Footer({pageType}) {
  const contentPaddingClass = pageType === 'about' 
    ? "px-4 sm:px-6 md:px-8 lg:pl-64 lg:pr-8" 
    : "px-4 sm:px-6 md:px-8 lg:px-12";
    
  const bottomPaddingClass = pageType === 'about' 
    ? "px-4 sm:px-6 md:px-8 lg:pl-64 lg:pr-8" 
    : "px-4 sm:px-6 md:px-8 lg:px-12";
    
  const bgTextShiftClass = pageType === 'about' ? 'lg:translate-x-[100px]' : '';

  return (
    <footer className="bg-[#000000] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 sm:pb-32 md:pb-40 lg:pb-52 text-white/70 relative overflow-hidden">

      {/* Big Translucent TechKrate Text */}
      <h1 className={`absolute left-0 right-0 uppercase bottom-0 translate-x-[-2%] translate-y-[15%] sm:translate-y-[12%] md:translate-y-[10%] lg:translate-y-[12%] text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[12vw] font-black text-white/10 leading-none select-none whitespace-nowrap pointer-events-none text-center ${bgTextShiftClass}`}>
        Techkrate
      </h1> 

      {/* Main Footer Content */}
      <div className={`max-w-7xl mx-auto ${contentPaddingClass} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 pb-8 sm:pb-12 relative z-10`}>
        
        {/* Brand Info */}
        <div className="flex flex-col">
          <h2 className="text-xl sm:text-2xl md:text-3xl hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition font-extrabold mb-2 sm:mb-3">
            Techkrate
          </h2>
          <p className="text-sm text-white/50 mt-2 hidden sm:block">
            Innovation in Motion
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white">Company</h3>
          <ul className="flex flex-col gap-2 text-sm sm:text-base text-white/40">
            <li>
              <a 
                href="/about" 
                className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition inline-block"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/blogs" 
                className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition inline-block"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="flex flex-col">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white">Products</h3>
          <ul className="flex flex-col gap-2 text-sm sm:text-base text-white/40">
            <li>
              <a 
                href="#" 
                className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition inline-block"
              >
                Moval
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition inline-block"
              >
                Cars
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white">Get In Touch</h3>
          <div className="flex flex-col text-white/40 gap-3 text-sm sm:text-base">
            <a 
              href="tel:+911203107109"
              className="flex items-center gap-2 hover:text-[#1d4ed8] transition"
            >
              <Phone className="text-[#1d4ed8] w-4 h-4 flex-shrink-0" /> 
              <span className="break-all">+91-1203107109</span>
            </a>
            <a 
              href="tel:+919990547098"
              className="flex items-center gap-2 hover:text-[#1d4ed8] transition"
            >
              <Phone className="text-[#1d4ed8] w-4 h-4 flex-shrink-0" /> 
              <span className="break-all">+91-9990547098</span>
            </a>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              <a 
                href="https://www.linkedin.com/company/techkrate/" 
                className="hover:text-[#1d4ed8] transition p-2 hover:bg-white/5 rounded-lg" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@techkrate4281" 
                className="hover:text-[#1d4ed8] transition p-2 hover:bg-white/5 rounded-lg" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Our Location */}
        <div className="flex flex-col sm:col-span-2 lg:col-span-1">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white">Our Location</h3>
          <div className="w-full h-40 sm:h-48 md:h-56 lg:h-48 rounded-lg overflow-hidden border border-gray-800 hover:border-[#1d4ed8] transition-colors duration-300 ease-in-out">
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
      <div className={`max-w-7xl mx-auto ${contentPaddingClass}`}>
        <div className="border-t border-white/10 my-6 sm:my-8"></div>
      </div>

      {/* Bottom Section */}
      <div className={`max-w-7xl mx-auto ${bottomPaddingClass} flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white/70 relative z-10 gap-4 md:gap-0`}>
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} LURP Technologies Pvt. Ltd., All rights reserved
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center md:justify-end text-center">
          <a 
            href="/addblog" 
            className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent underline decoration-white hover:decoration-[#1d4ed8] transition"
          >
            Add Blog
          </a>
          <a 
            href="/termsandconditions" 
            className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent underline decoration-white hover:decoration-[#1d4ed8] transition"
          >
            Terms & Conditions
          </a>
          <a 
            href="/privacypolicy" 
            className="hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent underline decoration-white hover:decoration-[#1d4ed8] transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}