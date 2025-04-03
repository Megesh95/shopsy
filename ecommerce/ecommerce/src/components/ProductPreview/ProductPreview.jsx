import React from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const ProductPreview = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-accent p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FaTimes />
        </button>
        
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <img 
              src={product.img} 
              alt={product.title} 
              className="max-h-[400px] object-contain"
            />
          </div>
          
          {/* Product Details */}
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              {product.rating && (
                <div className="flex items-center mr-4">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{product.rating}</span>
                </div>
              )}
              {product.color && (
                <div className="text-gray-600 dark:text-gray-300">
                  Color: <span className="font-medium">{product.color}</span>
                </div>
              )}
            </div>
            
            <div className="text-2xl font-bold text-primary mb-4">
              ${product.price}
            </div>
            
            {product.description ? (
              <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
            ) : (
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This premium quality {product.title.toLowerCase()} is perfect for any occasion. 
                Made with high-quality materials, it offers both comfort and style.
              </p>
            )}
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                <li>Premium quality material</li>
                <li>Comfortable fit</li>
                <li>Durable and long-lasting</li>
                <li>Easy to maintain</li>
              </ul>
            </div>
            
            <button 
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <FaCartPlus /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
