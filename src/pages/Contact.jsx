


// "use client";

// import { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { gsap } from "gsap";
// import emailjs from "@emailjs/browser";
// import bgVid from "/bgVid.mp4"; // Path to your video

// function Contact() {
//   const titleRef = useRef(null);
//   const formRef = useRef(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     companyName: "",
//     relationship: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
 


//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
//       if (formRef.current) {
//         gsap.fromTo(formRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.6 });
//       }
//     });
//     return () => ctx.revert();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const namePattern = /^[A-Za-z\s]+$/;
//     const phonePattern = /^[0-9]{10}$/;

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "First name is required";
//     } else if (!namePattern.test(formData.firstName.trim())) {
//       newErrors.firstName = "First name must contain only letters";
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last name is required";
//     } else if (!namePattern.test(formData.lastName.trim())) {
//       newErrors.lastName = "Last name must contain only letters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
//       newErrors.email = "Invalid email format";
//     }

//     if (formData.phoneNumber.trim()) {
//       if (!phonePattern.test(formData.phoneNumber.trim())) {
//         newErrors.phoneNumber = "Phone number must be 10 digits";
//       }
//     }

//     if (!formData.companyName.trim()) {
//       newErrors.companyName = "Company name is required";
//     }


//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID").then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert( "Message Sent Successfully! Thank you for contacting us. We've received your inquiry, and our team will review it shortly. You can expect a response from us within 24 hours. If you need immediate assistance, please call us at +91-9990547098.");
//           setFormData({
//             firstName: "",
//             lastName: "",
//             email: "",
//             phoneNumber: "",
//             companyName: "",
//             message: "",
//           });
//           setErrors({});
//         },
//         (error) => {
//           console.error("Error sending email:", error);
//           alert("There was an error sending your message. Please try again.");
//         }
//       );
//     }
//   };

//   return (
//     <div className="relative flex justify-center items-center min-h-screen text-white overflow-hidden pt-24 lg:pt-32">
//       <video
//         className="fixed top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src={bgVid} type="video/mp4" />
//       </video>

//       <main className="relative z-10 flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-16 space-y-10 lg:space-y-0 lg:space-x-12">
//         <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white p-8 sm:p-10 rounded-2xl w-full lg:w-2/5 max-w-lg shadow-2xl">
//           <h2 ref={titleRef} className="text-3xl font-thin sm:text-4xl font-Montserrat mb-8 text-white">
//             Get In Touch
//           </h2>
//           <div className="space-y-6 text-base">
//             <div className="flex items-center space-x-4">
//               <FontAwesomeIcon icon={faPhone} className="text-[#1d4ed8] w-5" />
//               <p>+91-9990547098</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <FontAwesomeIcon icon={faPhone} className="text-[#1d4ed8] w-5" />
//               <p>+91-1203107109</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <FontAwesomeIcon icon={faEnvelope} className="text-[#1d4ed8] w-5" />
//               <p>support@techkrate.com</p>
//             </div>
//             <div className="flex items-start space-x-4">
//               <FontAwesomeIcon icon={faLocationDot} className="text-[#1d4ed8] w-5 mt-1" />
//               <p>416, Sector 1, Vasundhara, Ghaziabad - 201012 Delhi NCR</p>
//             </div>
//             <div className="flex space-x-5 pt-4">
//               <a href="https://www.linkedin.com/company/techkrate/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1d4ed8] transition-colors">
//                 <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
//               </a>
//               <a href="https://www.youtube.com/@techkrate4281" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1d4ed8] transition-colors">
//                 <FontAwesomeIcon icon={faYoutube} size="lg" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="bg-black/40 backdrop-blur-md text-gray-100 p-8 sm:p-10 rounded-2xl w-full lg:w-3/5 max-w-2xl shadow-2xl border border-white/10">
//           <form ref={formRef} onSubmit={sendEmail} className="space-y-6" noValidate action="" >
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className={`peer w-full bg-transparent text-white border-b-2 ${errors.firstName ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//                   required
//                 />
//                 <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.firstName ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                   First Name *
//                 </label>
//                 {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
//               </div>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className={`peer w-full bg-transparent text-white border-b-2 ${errors.lastName ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//                   required
//                 />
//                 <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.lastName ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                   Last Name *
//                 </label>
//                 {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
//               </div>
//             </div>

//             <div className="relative pt-2">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className={`peer w-full bg-transparent text-white border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//                 required
//               />
//               <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.email ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                 Email *
//               </label>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             <div className="relative pt-2">
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleInputChange}
//                 className={`peer w-full bg-transparent text-white border-b-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//               />
//               <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.phoneNumber ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                 Phone Number (Optional)
//               </label>
//               {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
//             </div>

//             <div className="relative pt-2">
//               <input
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleInputChange}
//                 className={`peer w-full bg-transparent text-white border-b-2 ${errors.companyName ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//                 required
//               />
//               <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.companyName ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                 Company Name *
//               </label>
//               {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
//             </div>

//             <div className="relative pt-2">
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 className={`peer w-full bg-transparent text-white border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300 resize-none`}
//                 rows="3"
//                 required
//               ></textarea>
//               <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.message ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                 Message *
//               </label>
//               {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[#1d4ed8] text-black font-bold py-3 px-4 rounded-lg hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:ring-opacity-50"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Contact;


// "use client";

// import { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { gsap } from "gsap";
// import emailjs from "@emailjs/browser";
// import bgVid from "/bgVid.mp4"; // Path to your video

// function Contact() {
//   const titleRef = useRef(null);
//   const formRef = useRef(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     companyName: "",
//     relationship: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});

//   // NEW: State for OTP verification
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [isEmailVerified, setIsEmailVerified] = useState(false);
//   const [otpError, setOtpError] = useState("");

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
//       if (formRef.current) {
//         gsap.fromTo(formRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.6 });
//       }
//     });
//     return () => ctx.revert();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const namePattern = /^[A-Za-z\s]+$/;
//     const phonePattern = /^[0-9]{10}$/;

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "First name is required";
//     } else if (!namePattern.test(formData.firstName.trim())) {
//       newErrors.firstName = "First name must contain only letters";
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last name is required";
//     } else if (!namePattern.test(formData.lastName.trim())) {
//       newErrors.lastName = "Last name must contain only letters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
//       newErrors.email = "Invalid email format";
//     } else if (!isEmailVerified) { // NEW: Check for email verification
//       newErrors.email = "Email must be verified";
//     }

//     if (formData.phoneNumber.trim()) {
//       if (!phonePattern.test(formData.phoneNumber.trim())) {
//         newErrors.phoneNumber = "Phone number must be 10 digits";
//       }
//     }

//     if (!formData.companyName.trim()) {
//       newErrors.companyName = "Company name is required";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
  
//   // NEW: Function to open the pop-up and send OTP
//   const handleVerifyClick = async () => {
//     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email.trim())) {
//       setErrors({ ...errors, email: "Please enter a valid email to verify." });
//       return;
//     }

//     // Simulate OTP generation and sending
//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(newOtp);
//     setOtp(""); // Reset OTP input
//     setOtpError(""); // Reset error message
//     setIsPopupVisible(true);

//     try {
//       // Use your existing emailjs service to send the OTP
//       await emailjs.send(
//         "YOUR_SERVICE_ID",
//         "YOUR_OTP_TEMPLATE_ID", // You'll need a new template for OTP
//         {
//           to_email: formData.email,
//           otp: newOtp,
//         },
//         "YOUR_USER_ID"
//       );
//       alert(`OTP sent to ${formData.email}. (For demo, OTP is: ${newOtp})`);
//     } catch (error) {
//       console.error("Error sending OTP email:", error);
//       alert("Failed to send OTP. Please try again.");
//       setIsPopupVisible(false);
//     }
//   };

//   // NEW: Function to handle OTP verification
//   const handleOtpSubmit = (e) => {
//     e.preventDefault();
//     if (otp === generatedOtp) {
//       setIsEmailVerified(true);
//       setIsPopupVisible(false);
//       setOtpError("");
//       alert("Email verified successfully!");
//     } else {
//       setOtpError("Invalid OTP. Please try again.");
//     }
//   };


//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID").then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert( "Message Sent Successfully! Thank you for contacting us. We've received your inquiry, and our team will review it shortly. You can expect a response from us within 24 hours. If you need immediate assistance, please call us at +91-9990547098.");
//           setFormData({
//             firstName: "",
//             lastName: "",
//             email: "",
//             phoneNumber: "",
//             companyName: "",
//             message: "",
//           });
//           setErrors({});
//           setIsEmailVerified(false); // Reset verification state
//         },
//         (error) => {
//           console.error("Error sending email:", error);
//           alert("There was an error sending your message. Please try again.");
//         }
//       );
//     }
//   };

//   return (
//     <div className="relative flex justify-center items-center min-h-screen text-white overflow-hidden pt-24 lg:pt-32">
//       <video
//         className="fixed top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src={bgVid} type="video/mp4" />
//       </video>

//       <main className="relative z-10 flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-16 space-y-10 lg:space-y-0 lg:space-x-12">
//         <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white p-8 sm:p-10 rounded-2xl w-full lg:w-2/5 max-w-lg shadow-2xl">
//           <h2 ref={titleRef} className="text-3xl font-thin sm:text-4xl font-Montserrat mb-8 text-white">
//             Get In Touch
//           </h2>
//           <div className="space-y-6 text-base">
//             <div className="flex items-center space-x-4">
//               <FontAwesomeIcon icon={faPhone} className="text-[#1d4ed8] w-5" />
//               <p>+91-9990547098</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <FontAwesomeIcon icon={faPhone} className="text-[#1d4ed8] w-5" />
//               <p>+91-1203107109</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <FontAwesomeIcon icon={faEnvelope} className="text-[#1d4ed8] w-5" />
//               <p>support@techkrate.com</p>
//             </div>
//             <div className="flex items-start space-x-4">
//               <FontAwesomeIcon icon={faLocationDot} className="text-[#1d4ed8] w-5 mt-1" />
//               <p>416, Sector 1, Vasundhara, Ghaziabad - 201012 Delhi NCR</p>
//             </div>
//             <div className="flex space-x-5 pt-4">
//               <a href="https://www.linkedin.com/company/techkrate/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1d4ed8] transition-colors">
//                 <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
//               </a>
//               <a href="https://www.youtube.com/@techkrate4281" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1d4ed8] transition-colors">
//                 <FontAwesomeIcon icon={faYoutube} size="lg" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="bg-black/40 backdrop-blur-md text-gray-100 p-8 sm:p-10 rounded-2xl w-full lg:w-3/5 max-w-2xl shadow-2xl border border-white/10">
//           <form ref={formRef} onSubmit={sendEmail} className="space-y-6" noValidate action="" >
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className={`peer w-full bg-transparent text-white border-b-2 ${errors.firstName ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//                   required
//                 />
//                 <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.firstName ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                   First Name *
//                 </label>
//                 {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
//               </div>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className={`peer w-full bg-transparent text-white border-b-2 ${errors.lastName ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//                   required
//                 />
//                 <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.lastName ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                   Last Name *
//                 </label>
//                 {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
//               </div>
//             </div>

//             {/* MODIFIED: Email input with a button */}
//             <div className="relative pt-2">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`peer w-full bg-transparent text-white border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={handleVerifyClick}
//                   disabled={isEmailVerified}
//                   className={`flex-shrink-0 text-xs font-bold py-1 px-3 rounded-md transition-colors duration-300
//                     ${isEmailVerified
//                       ? "bg-green-600 text-white cursor-not-allowed"
//                       : "bg-[#1d4ed8] text-white hover:bg-opacity-80"
//                     }`}
//                 >
//                   {isEmailVerified ? "Verified ✅" : "Verify"}
//                 </button>
//               </div>
//               <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.email ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                 Email *
//               </label>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             <div className="relative pt-2">
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleInputChange}
//                 className={`peer w-full bg-transparent text-white border-b-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//               />
//               <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.phoneNumber ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                 Phone Number (Optional)
//               </label>
//               {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
//             </div>

//             <div className="relative pt-2">
//               <input
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleInputChange}
//                 className={`peer w-full bg-transparent text-white border-b-2 ${errors.companyName ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
//                 required
//               />
//               <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.companyName ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                 Company Name *
//               </label>
//               {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
//             </div>

//             <div className="relative pt-2">
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 className={`peer w-full bg-transparent text-white border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300 resize-none`}
//                 rows="3"
//                 required
//               ></textarea>
//               <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.message ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
//                 Message *
//               </label>
//               {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[#1d4ed8] text-black font-bold py-3 px-4 rounded-lg hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:ring-opacity-50"
//               disabled={!isEmailVerified} // NEW: Disable if email is not verified
//             >
//               Send Message
//             </button>
//             {!isEmailVerified && (
//               <p className="text-sm text-white text-center mt-2">Please verify your email to submit the form.</p>
//             )}
//           </form>
//         </div>
//       </main>

//       {/* NEW: OTP Pop-up Component */}
//       {isPopupVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className="bg-black/80 text-white p-8 rounded-lg shadow-2xl border border-white/10 w-full max-w-sm m-4 animate-slide-in">
//             <h3 className="text-xl font-bold mb-4">Verify Your Email</h3>
//             <p className="text-sm text-gray-300 mb-6">
//               Enter the 6-digit code sent to **{formData.email}**.
//             </p>
//             <form onSubmit={handleOtpSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 maxLength="6"
//                 className="w-full text-center tracking-[1rem] bg-gray-700/50 border-b-2 border-gray-600 focus:border-[#1d4ed8] outline-none py-2 rounded-md"
//               />
//               {otpError && <p className="text-red-400 text-xs mt-1">{otpError}</p>}
//               <div className="flex gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsPopupVisible(false)}
//                   className="w-full px-4 py-2 rounded-lg text-white bg-gray-600 hover:bg-gray-700 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 rounded-lg bg-[#1d4ed8] hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] transition-all"
//                 >
//                   Verify
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Contact;

"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import bgVid from "/bgVid.mp4"; // Path to your video

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

  // State for OTP verification
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
      if (formRef.current) {
        gsap.fromTo(formRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.6 });
      }
    });
    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[A-Za-z\s]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!namePattern.test(formData.firstName.trim())) {
      newErrors.firstName = "First name must contain only letters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!namePattern.test(formData.lastName.trim())) {
      newErrors.lastName = "Last name must contain only letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (formData.phoneNumber.trim()) {
      if (!phonePattern.test(formData.phoneNumber.trim())) {
        newErrors.phoneNumber = "Phone number must be 10 digits";
      }
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleVerifyClick = async () => {
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      setErrors({ ...errors, email: "Please enter a valid email to verify." });
      return;
    }

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setOtp("");
    setOtpError("");
    setIsPopupVisible(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_OTP_TEMPLATE_ID",
        {
          to_email: formData.email,
          otp: newOtp,
        },
        "YOUR_USER_ID"
      );
      alert(`OTP sent to ${formData.email}. (For demo, OTP is: ${newOtp})`);
    } catch (error) {
      console.error("Error sending OTP email:", error);
      alert("Failed to send OTP. Please try again.");
      setIsPopupVisible(false);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      setIsEmailVerified(true);
      setIsPopupVisible(false);
      setOtpError("");
      alert("Email verified successfully!");
    } else {
      setOtpError("Invalid OTP. Please try again.");
    }
  };


  const sendEmail = (e) => {
    e.preventDefault();
    
    // Check if the form is valid and the email is verified
    if (validateForm()) {
      if (!isEmailVerified) {
        alert("Please verify your email address before submitting the form.");
        return;
      }

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID").then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert( "Message Sent Successfully! Thank you for contacting us. We've received your inquiry, and our team will review it shortly. You can expect a response from us within 24 hours. If you need immediate assistance, please call us at +91-9990547098.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            companyName: "",
            message: "",
          });
          setErrors({});
          setIsEmailVerified(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("There was an error sending your message. Please try again.");
        }
      );
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen text-white overflow-hidden pt-24 lg:pt-32">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVid} type="video/mp4" />
      </video>

      <main className="relative z-10 flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-16 space-y-10 lg:space-y-0 lg:space-x-12">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white p-8 sm:p-10 rounded-2xl w-full lg:w-2/5 max-w-lg shadow-2xl">
          <h2 ref={titleRef} className="text-3xl font-thin sm:text-4xl font-Montserrat mb-8 text-white">
            Get In Touch
          </h2>
          <div className="space-y-6 text-base">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-[#1d4ed8] w-5" />
              <p>+91-9990547098</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-[#1d4ed8] w-5" />
              <p>+91-1203107109</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#1d4ed8] w-5" />
              <p>support@techkrate.com</p>
            </div>
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#1d4ed8] w-5 mt-1" />
              <p>416, Sector 1, Vasundhara, Ghaziabad - 201012 Delhi NCR</p>
            </div>
            <div className="flex space-x-5 pt-4">
              <a href="https://www.linkedin.com/company/techkrate/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1d4ed8] transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
              <a href="https://www.youtube.com/@techkrate4281" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1d4ed8] transition-colors">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md text-gray-100 p-8 sm:p-10 rounded-2xl w-full lg:w-3/5 max-w-2xl shadow-2xl border border-white/10">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6" noValidate action="" >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`peer w-full bg-transparent text-white border-b-2 ${errors.firstName ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
                  required
                />
                <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.firstName ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
                  First Name *
                </label>
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`peer w-full bg-transparent text-white border-b-2 ${errors.lastName ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
                  required
                />
                <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.lastName ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
                  Last Name *
                </label>
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="relative pt-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`peer w-full bg-transparent text-white border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
                  required
                />
                <button
                  type="button"
                  onClick={handleVerifyClick}
                  disabled={isEmailVerified}
                  className={`flex-shrink-0 font-Helix text-sm font-bold py-1 px-3 rounded-md transition-colors duration-300
                    ${isEmailVerified
                      ? "bg-green-600 text-white cursor-not-allowed"
                      : "bg-[#1d4ed8] text-black hover:bg-opacity-80 hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition-all duration-300"
                    }`}
                >
                  {isEmailVerified ? "Verified ✅" : "Verify"}
                </button>
              </div>
              <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.email ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
                Email *
              </label>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="relative pt-2">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`peer w-full bg-transparent text-white border-b-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
              />
              <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.phoneNumber ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
                Phone Number (Optional)
              </label>
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>

            <div className="relative pt-2">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className={`peer w-full bg-transparent text-white border-b-2 ${errors.companyName ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300`}
                required
              />
              <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.companyName ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
                Company Name *
              </label>
              {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
            </div>

            <div className="relative pt-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`peer w-full bg-transparent text-white border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-600'} focus:border-[#1d4ed8] outline-none px-1 py-2 transition-colors duration-300 resize-none`}
                rows="3"
                required
              ></textarea>
              <label className={`absolute left-1 transition-all duration-300 pointer-events-none ${formData.message ? "-top-5 text-xs text-[#1d4ed8]" : "top-2 text-gray-400 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1d4ed8]"}`}>
                Message *
              </label>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#1d4ed8] text-black font-bold py-3 px-4 rounded-lg hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] hover:bg-clip-text hover:text-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-black/80 text-white p-8 rounded-lg shadow-2xl border border-white/10 w-full max-w-sm m-4 animate-slide-in">
            <h3 className="text-xl font-bold mb-4">Verify Your Email</h3>
            <p className="text-md text-gray-300 mb-6">
              Enter the 6-digit code sent to **{formData.email}**.
            </p>
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                className="w-full text-center tracking-[1rem] bg-gray-700/50 border-b-2 border-gray-600 focus:border-[#1d4ed8] outline-none py-2 rounded-md"
              />
              {otpError && <p className="text-red-400 text-xs mt-1">{otpError}</p>}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsPopupVisible(false)}
                  className="w-full px-4 py-2 rounded-lg text-white bg-gray-600 hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full text-white font-Helix px-4 py-2 rounded-lg bg-[#1d4ed8] hover:bg-gradient-to-tl from-[#0e1f7d] via-[#1d4ed8] to-[#4f33b1] transition-all "
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;