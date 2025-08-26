// src/pages/HomePage.jsx
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Products from "../components/Products";
import ThirdSection from "../components/ThirdSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
