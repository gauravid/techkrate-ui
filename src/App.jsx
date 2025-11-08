import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Products from "./components/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Login from "./components/Login";
import AddBlog from "./pages/Addblog";
import BlogDetail from "./pages/BlogDetail";
import Navbar from "./components/Navbar";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndCondition";
import LoadingScreen from "./pages/LoadingScreen";

// 🎞️ Page transition animation
const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a quick loading delay (like checking auth/session)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // slightly smoother 0.4s transition
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <Navbar />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/product/moval" element={<Product1 />} />
          <Route path="/product/cars" element={<Product2 />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/addblog"
            element={
              isAuthenticated ? <AddBlog /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
