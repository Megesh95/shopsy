import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// Trending products data
const trendingProducts = [
  {
    id: 'trend1',
    title: "Smart Home Speaker",
    description: "Voice-controlled smart home assistant",
    img: "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 89.99,
    color: "Black",
    category: "Electronics"
  },
  {
    id: 'trend2',
    title: "Fitness Tracker",
    description: "Advanced health and fitness tracking",
    img: "https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 49.99,
    color: "Black/Red",
    category: "Electronics"
  },
  {
    id: 'trend3',
    title: "Sustainable Water Bottle",
    description: "Eco-friendly insulated water bottle",
    img: "https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 24.99,
    color: "Multiple colors",
    category: "Lifestyle"
  },
  {
    id: 'trend4',
    title: "Wireless Charging Pad",
    description: "Fast wireless charging for compatible devices",
    img: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 29.99,
    color: "White",
    category: "Electronics"
  },
  {
    id: 'trend5',
    title: "Minimalist Backpack",
    description: "Stylish and functional everyday backpack",
    img: "https://images.pexels.com/photos/1545499/pexels-photo-1545499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 59.99,
    color: "Gray",
    category: "Fashion"
  },
  {
    id: 'trend6',
    title: "Portable Blender",
    description: "USB rechargeable portable blender",
    img: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 34.99,
    color: "Blue",
    category: "Kitchen"
  }
];

const TrendingProducts = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-16 lg:pt-0">
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Trending Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
          {trendingProducts.map((item) => (
            <div 
              key={item.id}
              className="group max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-1">{item.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-primary hover:bg-primary/80 text-white py-1 px-4 rounded-full flex items-center gap-2"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
