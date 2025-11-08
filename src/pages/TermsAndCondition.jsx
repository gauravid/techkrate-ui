import React, { useEffect } from "react";

const TermsAndCondition = () => {
  useEffect(() => {
    // Always scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-Helix px-5 sm:px-8 md:px-16 py-20 mt-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Welcome to <span className="text-blue-600">Techkrate</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Welcome to Techkrate, your gateway to simplifying the complex. By
            accessing or using our website, software solutions, and SaaS
            services, you agree to be bound by these{" "}
            <span className="text-blue-600 font-semibold">Terms</span>. Please
            read them carefully.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10 leading-relaxed text-gray-300 text-base sm:text-lg">
          {/* 1 */}
          <section>
            <h2 className="text-blue-600 text-2xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or using any part of our services, you
              acknowledge that you have read, understood, and agree to be legally
              bound by these Terms. If you do not agree, please discontinue use
              immediately.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-blue-600 text-2xl font-semibold mb-3">
              2. About Our Services
            </h2>
            <p>Techkrate develops software and SaaS solutions designed to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Simplify complex business operations</li>
              <li>Empower individuals and businesses in the digital landscape</li>
              <li>Transform intricate problems into clear, actionable tools</li>
              <li>Provide intuitive experiences for all expertise levels</li>
            </ul>
            <p className="mt-2">
              We reserve the right to modify, suspend, or discontinue any aspect
              of our services at any time with reasonable notice.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-blue-600 text-2xl font-semibold mb-3">
              3. User Access and Registration
            </h2>
            <h3 className="text-xl font-semibold text-white">Access Creation</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Access is created exclusively for paying customers</li>
              <li>Provide accurate and current information during purchase</li>
              <li>Maintain confidentiality of your credentials</li>
              <li>Must be 18+ or have guardian consent</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-4">
              Access Management
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Access begins upon successful payment</li>
              <li>You are responsible for all account activities</li>
              <li>Report unauthorized access immediately</li>
              <li>Subscriptions renew based on your plan</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-blue-600 text-2xl font-semibold mb-3">
              4. Acceptable Use Policy
            </h2>
            <p>
              You agree <span className="font-semibold">NOT</span> to use our
              services to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Violate any applicable laws or rights</li>
              <li>Upload malicious or harmful content</li>
              <li>Gain unauthorized system access</li>
              <li>Disrupt or interfere with services</li>
              <li>Use for illegal or fraudulent purposes</li>
              <li>Reverse engineer or decompile software</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-blue-600 text-2xl font-semibold mb-3">
              5. Intellectual Property Rights
            </h2>
            <h3 className="text-xl font-semibold text-white">Our Rights</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>All content and designs are owned by Techkrate</li>
              <li>Logos and brand elements are protected</li>
              <li>Reproduction or distribution requires permission</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-4">Your Rights</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>You own content you create</li>
              <li>
                You grant us a limited license to host and process it for
                services
              </li>
              <li>We respect your intellectual property rights</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-blue-600 text-2xl font-semibold mb-3">
              6. Privacy and Data Protection
            </h2>
            <p>
              Your data is governed by our{" "}
              <span className="font-semibold">Privacy Policy</span>. By using
              our services, you consent to the practices described therein.
            </p>
          </section>

          {/* Continue same style for sections 7–14 */}
          <section>
            <h2 className="text-blue-600 text-2xl font-semibold mb-3">
              7–14. Other Terms
            </h2>
            <p>
              Includes Service Availability, Payment Terms, Liability, and
              Dispute Resolution as per our original Terms.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-blue-600 text-2xl font-semibold mb-3">
              Contact Information
            </h2>
            <h3 className="text-xl font-semibold text-white">Techkrate</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                support@techkrate.com
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +91-1203107109
              </li>
              <li>
                <span className="font-semibold">Address:</span> 416, 2nd Floor,
                Sector 1, Vasundhara, Delhi NCR
              </li>
              <li>
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://techkrate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  https://techkrate.com
                </a>
              </li>
            </ul>
            <p className="mt-4 text-gray-300 text-lg">
              The future is complex —{" "}
              <span className="font-bold text-blue-600">Techkrate</span> makes it
              clear.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
