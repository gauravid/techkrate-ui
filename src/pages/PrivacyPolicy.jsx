import { useEffect } from "react";

const PrivacyPolicy = () => {

  useEffect(() => {
    // Ensure the page always starts from the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-20 text-white bg-black min-h-screen px-6 md:px-16 py-20 space-y-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg">
        At LURP Technologies Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
        your information when you visit our website. Please read this policy carefully to understand our views and practices 
        regarding your personal data.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <p className="text-lg">
        We may collect information about you in various ways, including:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Personal Data: Name, email address, phone number, and any other information you voluntarily provide.</li>
        <li>Usage Data: Information about how you use our website, including your IP address, browser type, and operating system.</li>
        <li>Cookies: Data stored on your device to enhance your browsing experience.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <p className="text-lg">
        We use the information we collect to:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Provide and maintain our website.</li>
        <li>Respond to your inquiries and support requests.</li>
        <li>Analyze website usage to improve performance and user experience.</li>
        <li>Send you promotional communications (only if you opt-in).</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
      <p className="text-lg">
        We do not sell or share your personal information with third parties, except as required by law or when necessary to provide our services 
        (e.g., with service providers bound by confidentiality agreements).
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
      <p className="text-lg">
        You have the right to access, update, and delete your personal information. If you wish to exercise these rights, please contact us at &nbsp;
        <a href="mailto:[support@techkrate.com]" style={{ color: "white", textDecoration: "underline" }}>
          support@techkrate.com
        </a>
        
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
      <p className="text-lg">
        We may update this Privacy Policy from time to time. Changes will be posted on this page, and we encourage you to review it periodically.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="text-lg">
        If you have any questions about this Privacy Policy, please contact us at support@techkrate.com .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
