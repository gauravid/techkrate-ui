

import { useEffect } from "react";

const PrivacyPolicy = () => {

  useEffect(() => {
    // Ensure the page always starts from the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-20 text-white bg-black min-h-screen px-6 md:px-16 py-20 space-y-8 font-sans">
      <h1 className="text-4xl font-extrabold mb-6 font-helix">Welcome to Techkrate's Privacy Policy</h1>
      <p className="text-lg">
       At Techkrate, we believe that simplifying the complex extends to how we handle your privacy. This Privacy Policy explains how we collect, use, protect, and share your personal information when you use our software and SaaS solutions.
      </p>
      <p className="text-lg mt-4">Your
        <span className="font-bold text-blue-600 text-xl"> privacy </span> matters to us. We are committed to being transparent about our data practices and giving you control over your information.
      </p>
      <h2 className="text-2xl text-blue-600  font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <h3 className="text-xl font-semibold">
        Personal Information You Provide
      </h3>
      <p className="text-lg">When you purchase our services or interact with us, we may collect:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li><span className="font-semibold ">Contact Information:</span> Name, email address, phone number, business address</li>
        <li><span className="font-semibold ">Billing Information:</span> Payment details, billing address, tax identification numbers</li>
        <li><span className="font-semibold ">Business Information:</span>  Company name, industry, job title, business requirements</li>
        <li><span className="font-semibold ">Communication Data:</span> Messages, feedback, and support requests you send to us</li>
        <li><span className="font-semibold ">Login Credentials:</span> Username and encrypted password for service access</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8">Information We Collect Automatically</h3>
      <p className="text-lg">When you use our services, we automatically collect:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
         <li><span className="font-semibold ">Usage Data:</span> Features used, time spent, actions taken within our software</li>
         <li><span className="font-semibold ">Technical Information:</span> IP address, browser type, device information, operating system</li>
         <li><span className="font-semibold ">Performance Data:</span> System performance metrics, error logs, crash reports</li>
         <li><span className="font-semibold ">Analytics Data:</span> User interaction patterns, feature adoption, service utilization</li>
     </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="text-lg">
        We use your personal information to:
      </p>

      <h3 className="text-xl font-semibold mt-6">Provide Our Services</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Create and manage your service access</li>
        <li>Process payments and maintain billing records</li>
        <li>Deliver software solutions and SaaS services</li>
        <li>Provide technical support and customer service</li>
        <li>Monitor service performance and reliability</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Improve Our Services</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Analyze usage patterns to enhance functionality</li>
        <li>Develop new features and capabilities</li>
        <li>Conduct research and analytics</li>
        <li>Test and optimize our software performance</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Communicate With You</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Send service updates and important notifications</li>
        <li>Respond to your inquiries and support requests</li>
        <li>Share relevant product information and updates</li>
        <li>Provide onboarding and training materials</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Business Operations</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Comply with legal obligations and regulations</li>
        <li>Prevent fraud and ensure service security</li>
        <li>Protect our rights and enforce our Terms and Conditions</li>
        <li>Conduct business analysis and planning</li>
      </ul>
      
      <h2>3. How We Share Your Information</h2>
      <p>We respect your privacy and limit information sharing to these specific circumstances:</p>
      <h3 className=" text-xl font-semibold mt-6 ">Legal Requirements</h3>
      <p className="text-lg">
       We may disclose information when required to:
      </p>
     
     <ul className="list-disc list-inside space-y-2 text-lg">
      <li>Comply with applicable laws and regulations</li>
      <li>Respond to valid legal requests and court orders</li>
      <li>Protect our rights, property, and safety</li>
      <li>Prevent fraud or illegal activities</li>
     </ul>

     <h3 className="text-xl font-semibold mt-6">With Your Consent</h3>
     <p className="text-lg">We may share information for other purposes with your explicit consent.</p>

     <h2 className="text-2xl text-blue-600 font-semibold mt-8 mb-4">4. Data Security and Protection</h2>
     <h3 className="text-xl font-semibold">Security Measures</h3>
     <p className="text-lg">We implement industry-standard security measures to protect your information:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li><span className=" font-semibold">Encryption:</span> Data encrypted in transit and at rest</li>
        <li><span className="  font-semibold">Access Controls:</span> Strict access limitations and authentication requirements</li>
        <li><span className=" font-semibold">Regular Monitoring:</span> Continuous security monitoring and threat detection</li>
        <li><span className=" font-semibold">Secure Infrastructure:</span> Protected servers and network security protocols</li>
        <li><span className=" font-semibold">Employee Training:</span> Regular security awareness and privacy training</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Data Breach Response</h3>
      <p className="text-lg">In the unlikely event of a data breach, we will:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Immediately investigate and contain the incident</li>
        <li>Notify affected users within 72 hours when required</li>
        <li>Cooperate with relevant authorities as necessary</li>
        <li>Take steps to prevent future occurrences</li>
      </ul>

      <h2 className="text-2xl text-blue-600 font-semibold mt-8 mb-4">5. Data Retention and Deletion</h2>
      <h3 className="text-xl font-semibold">Retention Period</h3>
      <p className="text-lg">We retain your personal information for as long as:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Your subscription remains active</li>
        <li>Required to provide our services</li>
        <li>Necessary to comply with legal obligations</li>
        <li>Needed to resolve disputes or enforce agreements</li>
      </ul>


      <h3 className="text-xl font-semibold mt-6">Data Deletion</h3>
      <p className="text-lg">You can request deletion of your personal information by contacting us. We will:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Delete your data within 30 days of a valid request</li>
        <li>Retain certain information if required by law</li>
        <li>Provide confirmation once deletion is complete</li>
      </ul>
        
      <h2 className="text-2xl text-blue-600 font-semibold mt-8 mb-4">6. Your Privacy Rights</h2>
      <h3 className="text-xl font-semibold">Access and Control</h3>
      <p className="text-lg">You have the right to:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
       <li><span className="font-semibold ">Access:</span> Request a copy of the personal information we hold about you</li>
       <li><span className="font-semibold  ">Correction:</span> Update or correct inaccurate personal information</li>
       <li><span className="font-semibold  ">Deletion:</span> Request deletion of your personal information</li>
       <li><span className="font-semibold ">Portability:</span> Receive your data in a structured, machine-readable format</li>
       <li><span className="font-semibold ">Objection:</span> Object to certain uses of your personal information</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">How to Exercise Your Rights</h3>
      <p className="text-lg">To exercise any of these rights, contact us at <a href="mailto:support@techkrate.com" className="text-blue-600 hover:underline">support@techkrate.com</a>. We will respond to your request within 30 days.</p>

      <h2 className="text-2xl text-blue-600 font-semibold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
      <h3 className="text-xl font-semibold">What We Use</h3>
      <p className="text-lg">Our website and services may use:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li><span className="font-semibold ">Essential Cookies:</span> Required for basic functionality</li>
        <li><span className="font-semibold ">Analytics Cookies:</span> To understand how you use our services</li>
        <li><span className="font-semibold  ">Performance Cookies:</span> To improve service performance and reliability</li>
      </ul>


      <h3 className="text-xl font-semibold mt-6">Your Choices</h3>
      <p className="text-lg">You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect service functionality.</p>

      <h2 className="text-2xl text-blue-600 font-semibold mt-8 mb-4">8. Updates to This Privacy Policy</h2>
      <p className="text-lg">We may update this Privacy Policy from time to time to reflect:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Changes in our data practices</li>
        <li>Updates to applicable laws and regulations</li>
        <li>Improvements to our services</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Notification of Changes</h3>
      <p className="text-lg">We will notify you of material changes by:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Email notification to your registered address</li>
        <li>Prominent notice on our website</li>
        <li>In-app notifications when you next access our services</li>
      </ul> 

      <p className="text-lg mt-6">Your continued use of our services after changes constitutes acceptance of the updated Privacy Policy.</p>  

      <h2 className="text-2xl text-blue-600 font-semibold mt-8 mb-4 ">9. Third-Party Services</h2>
      <p className="text-lg">Our services may integrate with third-party applications and services. This Privacy Policy does not apply to third-party services. We encourage you to review the privacy policies of any third-party services you use in connection with our software.</p>

      <h2 className="text-2xl text-blue-600 font-semibold mt-8 mb-4">10. Contact Us</h2>
      <p className="text-lg">If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>

      <h3 className="text-xl font-semibold">Techkrate Privacy Team</h3>
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

      <h3 className="text-xl font-semibold">Techkrate Privacy Team</h3>
        
      <h2 className="text-2xl text-blue-600 font-semibold mt-8 mb-4">Governing Law</h2>
      <p className="text-lg">This Privacy Policy is governed by the laws of Delhi NCR. Any disputes related to privacy matters will be resolved in accordance with our Terms and Conditions.</p>

      <p className="text-lg">The future is complex —<span className="font-bold text-blue-600"> Techkrate </span>makes it clear.</p>

      <p className="text-lg">At Techkrate, we're committed to making privacy as clear and straightforward as our software solutions. We believe that understanding how your data is handled should never be complex.</p>
    </div>
  );
};

export default PrivacyPolicy;