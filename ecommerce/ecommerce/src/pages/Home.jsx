import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import TopProducts from '../components/TopProducts/TopProducts';
import Banner from '../components/Banner/Banner';
import Subscribe from '../components/Subscribe/Subscribe';
import Testimonials from '../components/Testimonials/Testimonials';
import Popup from '../components/Popup/Popup';

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Home;
