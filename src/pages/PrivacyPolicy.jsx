import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-24 font-sans leading-relaxed">
      {/* Header Section */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Welcome to Techkrate’s Privacy Policy
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          At Techkrate, simplifying complexity includes how we handle your
          privacy. This policy explains how we collect, use, and protect your
          information when you use our software and SaaS solutions.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto space-y-10">
        {/* 1. Information We Collect */}
        <section>
          <h2 className="text-2xl text-blue-500 font-semibold mb-4">
            1. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold mt-6">
            Personal Information You Provide
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <span className="font-semibold text-white">Contact Information:</span> Name, email address, phone number, business address
            </li>
            <li>
              <span className="font-semibold text-white">Billing Information:</span> Payment details, billing address, tax IDs
            </li>
            <li>
              <span className="font-semibold text-white">Business Information:</span> Company name, industry, job title, requirements
            </li>
            <li>
              <span className="font-semibold text-white">Communication Data:</span> Messages, feedback, and support requests
            </li>
            <li>
              <span className="font-semibold text-white">Login Credentials:</span> Username and encrypted password
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">
            Information We Collect Automatically
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <span className="font-semibold text-white">Usage Data:</span> Features used, time spent, actions taken
            </li>
            <li>
              <span className="font-semibold text-white">Technical Information:</span> IP address, browser type, device details
            </li>
            <li>
              <span className="font-semibold text-white">Performance Data:</span> Metrics, error logs, crash reports
            </li>
            <li>
              <span className="font-semibold text-white">Analytics Data:</span> Patterns, feature adoption, usage trends
            </li>
          </ul>
        </section>

        {/* 2. How We Use Information */}
        <section>
          <h2 className="text-2xl text-blue-500 font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-300">
            We use your personal information to provide, improve, and secure our services.
          </p>

          <h3 className="text-xl font-semibold mt-6">Provide Our Services</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Create and manage your service access</li>
            <li>Process payments and maintain billing records</li>
            <li>Provide support and technical assistance</li>
            <li>Monitor service reliability</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Improve Our Services</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Analyze usage to enhance performance</li>
            <li>Develop new features</li>
            <li>Optimize our software through testing</li>
          </ul>
        </section>

        {/* 3. How We Share Information */}
        <section>
          <h2 className="text-2xl text-blue-500 font-semibold mb-4">
            3. How We Share Your Information
          </h2>
          <p className="text-gray-300">
            We respect your privacy and share information only when necessary.
          </p>
          <h3 className="text-xl font-semibold mt-6">Legal Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Comply with laws and regulations</li>
            <li>Respond to valid legal requests</li>
            <li>Prevent fraud or illegal activities</li>
          </ul>
        </section>

        {/* 4. Security */}
        <section>
          <h2 className="text-2xl text-blue-500 font-semibold mb-4">
            4. Data Security and Protection
          </h2>
          <p className="text-gray-300">
            We implement strong measures to safeguard your information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Encryption (in transit and at rest)</li>
            <li>Strict access control and monitoring</li>
            <li>Employee security training</li>
          </ul>
        </section>

        {/* 5. Contact */}
        <section>
          <h2 className="text-2xl text-blue-500 font-semibold mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about this Privacy Policy:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:support@techkrate.com"
                className="text-blue-500 hover:underline"
              >
                support@techkrate.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Phone:</span> +91-1203107109
            </li>
            <li>
              <span className="font-semibold text-white">Address:</span> 416, 2nd
              Floor, Sector 1, Vasundhara, Delhi NCR
            </li>
            <li>
              <span className="font-semibold text-white">Website:</span>{" "}
              <a
                href="https://techkrate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 underline"
              >
                https://techkrate.com
              </a>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer Note */}
      <footer className="max-w-5xl mx-auto text-center mt-16 border-t border-gray-800 pt-8 text-gray-400 text-sm">
        <p>
          The future is complex — <span className="text-blue-500">Techkrate</span> makes it clear.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Techkrate. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
