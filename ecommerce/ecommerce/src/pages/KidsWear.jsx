import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// Kids wear products data
const kidsProducts = [
  {
    id: 'kids1',
    title: "Kids Casual T-Shirt",
    description: "Comfortable cotton t-shirt for kids",
    img: "https://images.pexels.com/photos/4611650/pexels-photo-4611650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 14.99,
    color: "Multiple colors",
    category: "Kids"
  },
  {
    id: 'kids2',
    title: "Kids Denim Jeans",
    description: "Durable denim jeans for active kids",
    img: "https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 19.99,
    color: "Blue",
    category: "Kids"
  },
  {
    id: 'kids3',
    title: "Kids Summer Dress",
    description: "Light and colorful summer dress",
    img: "https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 24.99,
    color: "Pink",
    category: "Kids"
  },
  {
    id: 'kids4',
    title: "Kids Sneakers",
    description: "Comfortable and stylish sneakers",
    img: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 29.99,
    color: "White/Blue",
    category: "Kids"
  },
  {
    id: 'kids5',
    title: "Kids Winter Jacket",
    description: "Warm winter jacket for cold days",
    img: "https://images.pexels.com/photos/5691844/pexels-photo-5691844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 39.99,
    color: "Red",
    category: "Kids"
  },
  {
    id: 'kids6',
    title: "Kids School Backpack",
    description: "Durable backpack for school",
    img: "https://images.pexels.com/photos/6347892/pexels-photo-6347892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 22.99,
    color: "Multiple designs",
    category: "Kids"
  }
];

const KidsWear = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-16 lg:pt-0">
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Kids Wear Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
          {kidsProducts.map((item) => (
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

export default KidsWear;
