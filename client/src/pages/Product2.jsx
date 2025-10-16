import  { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const Product2 = () => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    content: false,
    section2: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible({ 
      title: true, 
      content: true,
      section2: true 
    });
  }, []);

  return (
    <>
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 mt-20">
          {/* Left Column */}
          <div 
            className={`transition-all duration-1000 transform
              ${isVisible.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {/* Purple dot */}
            <div className="w-3 h-3 bg-purple-500 rounded-full mb-8" />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
              The Climate Tech Venture Studio
            </h1>
          </div>

          {/* Right Column */}
          <div 
            className={`space-y-8 transition-all duration-1000 delay-300 transform
              ${isVisible.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              The climate crisis is the most pressing challenge of our times.
            </h2>

            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                We need breakthrough solutions to address hard-to-abate emissions, 
                as available technologies only get us halfway.
              </p>

              <p>
                We can&apos;t put all our hopes in classic tech transfer. We need to 
                intentionally create and deploy radical solutions.
              </p>

              <p>
                We partner with scientists, engineers and operators to build deeptech 
                startups that slash emissions, remove carbon from the atmosphere, 
                and create climate resilience.
              </p>

              <p>
                As Founders-in-Residence, they work on "hard climate problems" with 
                us to and build ventures with massive impact potential.
              </p>

              <p>
                We invest in the best teams at pre-seed.
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* Second Section with Reversed Layout */}
      <section className="bg-zinc-900 px-6 py-12 md:py-24">
        <div 
          className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 transition-all duration-1000 transform
            ${isVisible.section2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Left Column (Content) */}
          <div className="space-y-6 text-gray-300 text-lg">
            <p>
              Our approach combines deep technical expertise with startup acceleration.
              We work closely with founders to validate technologies, build strong teams,
              and create scalable business models.
            </p>

            <p>
              We focus on high-impact areas including:
            </p>

            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Carbon capture and storage</li>
              <li>Clean energy solutions</li>
              <li>Industrial decarbonization</li>
              <li>Climate-resilient infrastructure</li>
              <li>Sustainable agriculture</li>
            </ul>

            <p>
              Our portfolio companies receive hands-on support, access to our network
              of industry experts, and the resources they need to scale their impact.
            </p>

          </div>

          {/* Right Column (Heading) */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building the next generation of climate solutions
            </h2>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Product2;