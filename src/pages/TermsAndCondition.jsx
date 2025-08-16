import  { useEffect } from "react";

const TermsAndCondition = () => {

  useEffect(() => {
    // Ensure the page always starts from the top
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="my-20 text-white bg-black min-h-screen px-6 md:px-16 py-20 space-y-8">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-lg">
        Welcome to the website of LURP Technologies Pvt. Ltd. By accessing or using our site, you agree to the following terms and conditions. Please
        read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="text-lg">
        By using this website, you accept these Terms and Conditions. If you do not agree, please refrain from using our site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of the Website</h2>
      <p className="text-lg">You agree to use the website for lawful purposes only.</p>
      <p className="text-lg">You must not engage in activities that disrupt or harm the website or its users.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
      <p className="text-lg">
        All content on this website, including text, images, logos, and software, is the property of LURP Technologies Pvt. Ltd. or its licensors.
        Unauthorized use is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Contributions</h2>
      <p className="text-lg">Any content you submit to the site, such as comments or reviews, must not violate the rights of others.</p>
      <p className="text-lg">By submitting content, you grant us a non-exclusive, royalty-free license to use it.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimers</h2>
      <p className="text-lg">The website is provided "as is" without warranties of any kind.</p>
      <p className="text-lg">We do not guarantee the accuracy or completeness of the content.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
      <p className="text-lg">LURP Technologies Pvt. Ltd. is not liable for any damages resulting from your use of the website.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
      <p className="text-lg">
      These terms are governed by the laws of India. Any disputes will be resolved in the courts of Delhi, National Capital Territory (NCT) of Delhi.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
      <p className="text-lg">We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
      <p className="text-lg">
        If you have any questions, contact us at{" "}
        <a href="mailto:[support@techkrate.com]" style={{ color: "white", textDecoration: "underline" }}>
          support@techkrate.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsAndCondition;
