import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// Best selling products data
const bestSellingProducts = [
  {
    id: 'best1',
    title: "Premium Wireless Earbuds",
    description: "High-quality sound with noise cancellation",
    img: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 129.99,
    color: "Black",
    category: "Electronics"
  },
  {
    id: 'best2',
    title: "Smart Fitness Watch",
    description: "Track your health and fitness goals",
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 199.99,
    color: "Black/Silver",
    category: "Electronics"
  },
  {
    id: 'best3',
    title: "Designer Handbag",
    description: "Elegant and spacious designer handbag",
    img: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 249.99,
    color: "Brown",
    category: "Fashion"
  },
  {
    id: 'best4',
    title: "Premium Coffee Maker",
    description: "Barista-quality coffee at home",
    img: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 179.99,
    color: "Silver",
    category: "Kitchen"
  },
  {
    id: 'best5',
    title: "Luxury Watch",
    description: "Elegant timepiece with premium craftsmanship",
    img: "https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 499.99,
    color: "Gold/Brown",
    category: "Fashion"
  },
  {
    id: 'best6',
    title: "Smartphone Gimbal",
    description: "Professional-grade video stabilization",
    img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 89.99,
    color: "Black",
    category: "Electronics"
  }
];

const BestSelling = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-16 lg:pt-0">
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Best Selling Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
          {bestSellingProducts.map((item) => (
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

export default BestSelling;
