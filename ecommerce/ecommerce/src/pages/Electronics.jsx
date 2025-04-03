import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// Electronics products data
const electronicsProducts = [
  {
    id: 'elec1',
    title: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones",
    img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 99.99,
    color: "Black",
    category: "Electronics"
  },
  {
    id: 'elec2',
    title: "Smartphone",
    description: "Latest model with high-resolution camera",
    img: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 699.99,
    color: "Space Gray",
    category: "Electronics"
  },
  {
    id: 'elec3',
    title: "Smart Watch",
    description: "Fitness and health tracking smartwatch",
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 149.99,
    color: "Silver",
    category: "Electronics"
  },
  {
    id: 'elec4',
    title: "Wireless Earbuds",
    description: "True wireless earbuds with charging case",
    img: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 79.99,
    color: "White",
    category: "Electronics"
  },
  {
    id: 'elec5',
    title: "Digital Camera",
    description: "High-resolution digital camera for photography",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 449.99,
    color: "Black",
    category: "Electronics"
  },
  {
    id: 'elec6',
    title: "Bluetooth Speaker",
    description: "Portable waterproof bluetooth speaker",
    img: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 59.99,
    color: "Blue",
    category: "Electronics"
  }
];

const Electronics = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-16 lg:pt-0">
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Electronics Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
          {electronicsProducts.map((item) => (
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

export default Electronics;
