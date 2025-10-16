import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        const footerTop = footerElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowScrollTop(footerTop < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-black text-white relative">
      {/* Top separator with gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-8 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {/* Column 1: Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white font-Helix text-center">Techkrate</h2>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-2 space-y-2">
                <li >
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                    About Us
                  </a>
                </li>
                <li >
                  <a href="/blogs" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                    Blogs
                  </a>
                </li>
              
            </ul>
          </div>

          {/* Column 3: Products Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="mt-2 space-y-2">
              {["Moval", "Cars"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="tel:+919990547098" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                  Contact: +91-1203107109
                </a>
              </li>
              <li>
                <a href="tel:+919990547098" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out ml-16">
                  +91-9990547098
                </a>
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                Mail:{" "}
                <a href="mailto:support@techkrate.com" className="hover:text-white transition-colors duration-300 ease-in-out">
                  support@techkrate.com
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="flex mt-4 space-x-4">
              {[
                { icon: () => <FontAwesomeIcon icon={faYoutube} />, href: "https://www.youtube.com/@techkrate4281", label: "YouTube" },
                {
                  icon: () => <FontAwesomeIcon icon={faLinkedinIn} />,
                  href: "https://www.linkedin.com/company/techkrate/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 5: Map */}
          <div className="xl:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
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

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 LURP Technologies Pvt. Ltd., All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button onClick={() => navigate("/addBlog")} className="text-gray-500 hover:text-white transition-colors duration-300 ease-in-out">
              Add Blog
            </button>
            <Link to="/TermsAndConditions" className="hover:text-white transition-colors duration-300 ease-in-out">
              Terms & Conditions
            </Link>
            <Link to="/PrivacyPolicy" className="hover:text-white transition-colors duration-300 ease-in-out">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer