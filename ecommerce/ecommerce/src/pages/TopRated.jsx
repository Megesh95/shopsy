import React from 'react';
import TopProducts from '../components/TopProducts/TopProducts';
import Banner from '../components/Banner/Banner';

const TopRated = () => {
  return (
    <div className="pt-16 lg:pt-0">
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Top Rated Products</h1>
        <TopProducts />
        <Banner />
      </div>
    </div>
  );
};

export default TopRated;
