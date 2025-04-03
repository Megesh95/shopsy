import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// Mens wear products data
const mensProducts = [
  {
    id: 'mens1',
    title: "Men's Casual Shirt",
    description: "Comfortable cotton casual shirt",
    img: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 29.99,
    color: "Blue",
    category: "Men"
  },
  {
    id: 'mens2',
    title: "Men's Slim Fit Jeans",
    description: "Classic slim fit denim jeans",
    img: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 34.99,
    color: "Dark Blue",
    category: "Men"
  },
  {
    id: 'mens3',
    title: "Men's Formal Suit",
    description: "Elegant formal suit for special occasions",
    img: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 149.99,
    color: "Black",
    category: "Men"
  },
  {
    id: 'mens4',
    title: "Men's Sports Shoes",
    description: "Comfortable athletic shoes for sports",
    img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 59.99,
    color: "Gray/Red",
    category: "Men"
  },
  {
    id: 'mens5',
    title: "Men's Winter Jacket",
    description: "Warm and stylish winter jacket",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 79.99,
    color: "Brown",
    category: "Men"
  },
  {
    id: 'mens6',
    title: "Men's Leather Watch",
    description: "Classic leather strap watch",
    img: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 89.99,
    color: "Brown/Silver",
    category: "Men"
  }
];

const MensWear = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-16 lg:pt-0">
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Men's Wear Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
          {mensProducts.map((item) => (
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

export default MensWear;
