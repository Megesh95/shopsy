import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { CartProvider, useCart } from "./context/CartContext";
import Notification from "./components/Notification/Notification";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import KidsWear from "./pages/KidsWear";
import MensWear from "./pages/MensWear";
import Electronics from "./pages/Electronics";
import TrendingProducts from "./pages/TrendingProducts";
import BestSelling from "./pages/BestSelling";
import AllProducts from "./pages/AllProducts";
import SearchResults from "./pages/SearchResults";

// Wrapper component to use hooks
const AppContent = () => {
  const { notification, setNotification } = useCart();
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <BrowserRouter>
        <Notification 
          notification={notification} 
          onClose={() => setNotification({ show: false, message: '', type: '' })} 
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/kids-wear" element={<KidsWear />} />
          <Route path="/mens-wear" element={<MensWear />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/trending-products" element={<TrendingProducts />} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
