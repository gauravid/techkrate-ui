

import React, { useEffect } from "react";


const TermsAndCondition = () => {
  useEffect(() => {
    // Ensure the page always starts from the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-20 text-white bg-black min-h-screen px-6 md:px-16 py-20 space-y-8 font-Helix">
      <h1 className="text-4xl font-bold mb-6">Welcome to Techkrate</h1>
      <p className="text-lg">
        Welcome to Techkrate, your gateway to simplifying the complex. By
        accessing or using our website, software solutions, and SaaS services,
        you agree to be bound by these Terms and Conditions <span className="text-blue-600 font-semibold ">Terms</span>. Please
        read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">
        1. Acceptance of Terms
      </h2>
      <p className="text-lg">
        By accessing, browsing, or using any part of our services, you
        acknowledge that you have read, understood, and agree to be legally
        bound by these Terms. If you do not agree to these Terms, please
        discontinue use of our services immediately.
      </p>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">2. About Our Services</h2>
      <p>Techkrate develops software and SaaS solutions designed to:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Simplify complex business operations</li>
        <li>Empower individuals and businesses in the digital landscape</li>
        <li>Transform intricate problems into clear, actionable tools</li>
        <li>Provide intuitive experiences for users of all expertise levels</li>
      </ul>
      <p>
        We reserve the right to modify, suspend, or discontinue any aspect of
        our services at any time with reasonable notice.
      </p>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">
        3. User Access and Registration
      </h2>
      <h3 className="text-xl font-semibold">Access Creation</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>
          User access is created exclusively by our team for paying customers
          only
        </li>
        <li>
          You must provide accurate, complete, and current information during
          the purchase process
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your login
          credentials once provided
        </li>
        <li>
          You must be at least 18 years old or have legal guardian consent to
          purchase our services
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Access Management</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>
          Service access is granted upon successful payment and completion of
          our onboarding process
        </li>
        <li>
          You are solely responsible for all activities that occur under your
          user access
        </li>
        <li>Notify us immediately of any unauthorized use of your login credentials</li>
        <li>
          Our services operate on a subscription-based model with recurring
          billing cycles
        </li>
        <li>
          Continued access to your services depends on maintaining an active,
          paid subscription
        </li>
      </ul>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">4. Acceptable Use Policy</h2>
      <p>
        You agree <span className="font-semibold  ">NOT</span> to use our services to:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Violate any applicable laws, regulations, or third-party rights</li>
        <li>
          Upload, transmit, or distribute malicious software or harmful content
        </li>
        <li>
          Attempt to gain unauthorized access to our systems or other users'
          accounts
        </li>
        <li>Interfere with or disrupt our services or servers</li>
        <li>Use our services for any illegal, fraudulent, or unauthorized purpose</li>
        <li>
          Reverse engineer, decompile, or attempt to extract source code from
          our software
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">
        5. Intellectual Property Rights
      </h2>
      <h3 className="text-xl font-semibold">Our Rights</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>
          All content, software, designs, and materials are owned by Techkrate or
          our licensors
        </li>
        <li>
          Our trademarks, logos, and brand elements are protected intellectual
          property
        </li>
        <li>
          You may not reproduce, distribute, or create derivative works without
          explicit permission
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Your Rights</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>You retain ownership of any content you create using our services</li>
        <li>
          You grant us a limited license to host, display, and process your
          content as necessary to provide our services
        </li>
        <li>We respect your intellectual property and expect the same courtesy</li>
      </ul>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">6. Privacy and Data Protection</h2>
      <p>
        Your privacy is important to us. Our collection, use, and protection of
        your personal information is governed by our <span className="font-semibold ">Privacy Policy</span>
        , which is incorporated into these Terms by reference. By using our
        services, you consent to our data practices as outlined in the Privacy
        Policy.
      </p>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">
        7. Service Availability and Support
      </h2>
      <h3 className="text-xl font-semibold">Service Levels</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>
          We strive to maintain high service availability but cannot guarantee
          100% uptime
        </li>
        <li>Scheduled maintenance will be communicated in advance when possible</li>
        <li>
          We provide support through designated channels outlined on our website
        </li>
      </ul>

      <h3 className="text-xl font-semibold">No Warranties</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Our services are provided "as is" without warranties of any kind</li>
        <li>
          We do not guarantee that our services will meet all your specific
          requirements
        </li>
        <li>
          We are not liable for any indirect, incidental, or consequential damages
        </li>
      </ul>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">8. Payment Terms and Billing</h2>
      <h3 className="text-xl font-semibold">Subscription Services</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Payment terms are specified in your service agreement or subscription plan</li>
        <li>Fees are non-refundable unless specifically stated otherwise</li>
        <li>We reserve the right to modify pricing with 30 days' notice</li>
      </ul>

      <h3 className="text-xl font-semibold">Late Payments</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Overdue accounts may result in service suspension or termination</li>
        <li>You remain liable for all fees incurred during the service period</li>
      </ul>

      <h2 className=" text-blue-600 font-semibold mt-8 mb-4 text-2xl">
        9. Limitation of Liability
      </h2>
      <h3 className="text-xl font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>
          Techkrate's total liability shall not exceed the amount paid by you for
          our services in the 12 months preceding the claim
        </li>
        <li>
          We are not liable for any indirect, special, incidental, punitive, or
          consequential damages
        </li>
        <li>
          Some jurisdictions do not allow limitation of liability, so these
          limitations may not apply to you
        </li>
      </ul>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Techkrate, its officers,
        directors, employees, and agents from any claims, damages, losses, or
        expenses arising from:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Your use of our services</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any third-party rights</li>
        <li>Any content you submit through our services</li>
      </ul>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">11. Termination</h2>
      <h3 className="text-xl font-semibold">By You</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>
          You may terminate your account at any time by following our account
          closure process
        </li>
        <li>Termination does not relieve you of any payment obligations</li>
      </ul>

      <h3 className="text-xl font-semibold">By Us</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>
          We may terminate or suspend your access immediately for breach of
          these Terms
        </li>
        <li>We may terminate services with 30 days' notice for business reasons</li>
      </ul>

      <h3 className="text-xl font-semibold">Effect of Termination</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Upon termination, your right to use our services ceases immediately</li>
        <li>
          We may retain certain information as required by law or for legitimate
          business purposes
        </li>
      </ul>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">12. Modifications to Terms</h2>
      <p>We reserve the right to modify these Terms at any time. We will:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Notify users of material changes via email or prominent website notice</li>
        <li>Provide at least 30 days' notice for significant changes</li>
        <li>Post the effective date of any modifications</li>
      </ul>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">
        13. Governing Law and Dispute Resolution
      </h2>
      <h3 className="text-xl font-semibold">Governing Law</h3>
      <p>
        These Terms are governed by the laws of <span className="font-semibold">[Your Jurisdiction]</span>, without
        regard to conflict of law principles.
      </p>

      <h3 className="text-xl font-semibold">Dispute Resolution</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>We encourage resolving disputes through direct communication first</li>
        <li>
          Any legal disputes will be resolved through binding arbitration or in
          the courts of Delhi NCR
        </li>
        <li>
          You agree to resolve disputes individually, not as part of a class
          action
        </li>
      </ul>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">14. General Provisions</h2>
      <h3 className="text-xl font-semibold">Severability</h3>
      <p>
        If any provision of these Terms is found invalid or unenforceable, the
        remaining provisions will remain in full force and effect.
      </p>

      <h3 className="text-xl font-semibold">Entire Agreement</h3>
      <p>
        These Terms, along with our Privacy Policy, constitute the entire
        agreement between you and Techkrate.
      </p>

      <h3 className="text-xl font-semibold">No Waiver</h3>
      <p>
        Our failure to enforce any right or provision does not constitute a
        waiver of that right or provision.
      </p>

      <h3 className="text-xl font-semibold">Assignment</h3>
      <p>written consent. We may assign our rights at any time.</p>

      <h2 className="text-blue-600 font-semibold mt-8 mb-4 text-2xl">Contact Information</h2>
      <p>For questions about these Terms and Conditions, please contact us:</p>
      <h3 className="text-xl font-semibold text-blue-600">Techkrate</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>
          <span className="font-semibold">Email: </span> support@techkrate.com
        </li>
        <li>
          <span className="font-semibold" >Phone: </span> +91-1203107109
        </li>
        <li>
          <span className="font-semibold">Address: </span> 416, 2nd Floor, Sector 1, Vasundhara, Delhi NCR
        </li>
      <li>
      <span className="font-semibold">Website: </span>
     <a href="https://techkrate.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline">https://techkrate.com</a>
     </li>
      </ul>

     <p className="text-lg">The future is complex —<span className="font-bold text-blue-600"> Techkrate </span>makes it clear.</p>


      <p className="text-lg">
        These Terms and Conditions are designed to protect both Techkrate and
        our users while fostering innovation and clarity in the digital
        landscape.You may not assign your rights under these Terms without our
      </p>
    </div>
  );
};

export default TermsAndCondition;