import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";

function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    relationship: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
    gsap.fromTo(formRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.6 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
      case "lastName":
      case "companyName":
        if (!value.trim()) error = "This field is required";
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "relationship":
        if (!value) error = "Please select a relationship";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "phoneNumber") {
        validateField(key, formData[key]);
        if (errors[key]) newErrors[key] = errors[key];
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.send("service_xpwqmr5", "template_su4nquv", formData, "bCd9QoG8ARzLhZhrP").then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            companyName: "",
            relationship: "",
            message: "",
          });
          setErrors({});
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("There was an error sending your message. Please try again.");
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1121] text-white flex flex-col">
      <div className="flex-grow mt-16 flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 pt-28 pb-10 md:py-16 space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Contact Info Section */}
        <div className="bg-gradient-to-br from-[#1a237e] to-[#0d47a1] text-white px-6 py-8 sm:px-8 sm:py-10 rounded-2xl w-full lg:w-1/2 max-w-lg shadow-2xl">
          <h2 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
            Get in touch
          </h2>
          <div className="space-y-6 text-sm sm:text-base">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-cyan-400" />
              <p>+91-9990547098</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400" />
              <p>support@techkrate.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-cyan-400" />
              <p>416, Sector 1, Vasundhara, Ghaziabad - 201012 Delhi NCR</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/techkrate/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://www.youtube.com/@techkrate4281" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-[#0B1121]/80 backdrop-blur-sm text-gray-100 px-6 py-8 sm:px-8 sm:py-10 rounded-lg w-full lg:w-2/5 max-w-lg shadow-xl border border-gray-800">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white border-b border-gray-700 outline-none focus:border-cyan-400 px-0 py-2 transition-all duration-300"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 ${
                    formData.firstName ? "-top-6 text-sm text-cyan-400" : "top-2 text-gray-400"
                  }`}
                >
                  First Name
                </label>
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white border-b border-gray-700 outline-none focus:border-cyan-400 px-0 py-2 transition-all duration-300"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 ${
                    formData.lastName ? "-top-6 text-sm text-cyan-400" : "top-2 text-gray-400"
                  }`}
                >
                  Last Name
                </label>
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-700 outline-none focus:border-cyan-400 px-0 py-2 transition-all duration-300"
                required
              />
              <label
                className={`absolute left-0 transition-all duration-300 ${formData.email ? "-top-6 text-sm text-cyan-400" : "top-2 text-gray-400"}`}
              >
                Email
              </label>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-700 outline-none focus:border-cyan-400 px-0 py-2 transition-all duration-300"
              />
              <label
                className={`absolute left-0 transition-all duration-300 ${
                  formData.phoneNumber ? "-top-6 text-sm text-cyan-400" : "top-2 text-gray-400"
                }`}
              >
                Phone Number (Optional)
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-700 outline-none focus:border-cyan-400 px-0 py-2 transition-all duration-300"
                required
              />
              <label
                className={`absolute left-0 transition-all duration-300 ${
                  formData.companyName ? "-top-6 text-sm text-cyan-400" : "top-2 text-gray-400"
                }`}
              >
                Company Name
              </label>
              {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
            </div>
            <div className="relative">
              <label
                className={`absolute left-0 -top-6 text-sm transition-all duration-300 ${formData.relationship ? "text-cyan-400" : "text-gray-400"}`}
              >
                Relationship with Infosys
              </label>
              <select
                name="relationship"
                value={formData.relationship}
                onChange={handleInputChange}
                className=" w-full bg-transparent text-white border-b border-gray-700 outline-none focus:border-cyan-400 px-0 py-2 transition-all duration-300 appearance-none"
                required
              >
                <option value="" disabled className="bg-[#0B1121] text-white">
                  Select - Relationship with Infosys
                </option>
                <option value="Potential Customer" className="bg-[#0B1121] text-white">
                  Potential Customer
                </option>
                <option value="Customer" className="bg-[#0B1121] text-white">
                  Customer
                </option>
                <option value="Financial Analyst" className="bg-[#0B1121] text-white">
                  Financial Analyst
                </option>
                <option value="Industry Analyst" className="bg-[#0B1121] text-white">
                  Industry Analyst
                </option>
                <option value="Investor" className="bg-[#0B1121] text-white">
                  Investor
                </option>
                <option value="Journalist" className="bg-[#0B1121] text-white">
                  Journalist
                </option>
                <option value="Alliance Partner" className="bg-[#0B1121] text-white">
                  Alliance Partner/Potential Alliance Partner
                </option>
                <option value="Academician/Researcher" className="bg-[#0B1121] text-white">
                  Academician/Researcher
                </option>
                <option value="Job Seeker" className="bg-[#0B1121] text-white">
                  Job Seeker
                </option>
                <option value="Others" className="bg-[#0B1121] text-white">
                  Others
                </option>
              </select>
              <div className="pointer-events-none absolute right-0 top-2 text-gray-400">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
              {errors.relationship && <p className="text-red-500 text-xs mt-1">{errors.relationship}</p>}
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-700 outline-none focus:border-cyan-400 px-0 py-2 transition-all duration-300"
                rows="4"
                required
              ></textarea>
              <label
                className={`absolute left-0 transition-all duration-300 ${formData.message ? "-top-6 text-sm text-cyan-400" : "top-2 text-gray-400"}`}
              >
                Message
              </label>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-transparent text-cyan-400 border border-cyan-400 py-2 px-4 rounded hover:bg-cyan-400 hover:text-[#0B1121] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
