import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import ProductPreview from "../ProductPreview/ProductPreview";

const ProductsData = [
  {
    id: 6,
    img: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Casual Wear",
    price: 34.99,
    color: "Blue",
    rating: 4.8,
    description:
      "Premium casual wear shirt made with breathable fabric. Perfect for everyday use with a comfortable fit and stylish design.",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Printed Shirt",
    price: 39.99,
    color: "Black",
    rating: 4.9,
    description:
      "Stylish printed shirt with unique patterns. Made from high-quality materials that ensure durability and comfort throughout the day.",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women's Blouse",
    price: 29.99,
    color: "White",
    rating: 4.7,
    description:
      "Elegant women's blouse designed for both comfort and style. Features a modern cut and premium fabric that drapes beautifully.",
  },
];

const TopProducts = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const openProductPreview = (product) => {
    setSelectedProduct(product);
  };
  
  const closeProductPreview = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-14">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 dark:text-gray-300">
            Our best-selling products with the highest customer ratings.
            Quality items that have consistently impressed our shoppers.
          </p>
        </div>
        
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="w-full max-w-[280px] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              key={data.id}
              onClick={() => openProductPreview(data)}
            >
              <div className="h-[280px] overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold dark:text-white mt-2">{data.title}</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mt-1">
                  {data.description}
                </p>
                <div className="flex items-center justify-center mt-4">
                  <button
                    className="bg-primary hover:bg-primary/90 transition-colors duration-300 text-white py-2 px-4 rounded-full flex items-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the parent onClick
                      addToCart(data);
                    }}
                  >
                    <FaCartPlus /> Add to Cart
                  </button>
                </div>
                <div className="mt-3">
                  <p className="text-xl font-bold text-primary dark:text-primary">${data.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Product Preview Modal */}
      {selectedProduct && (
        <ProductPreview 
          product={selectedProduct} 
          onClose={closeProductPreview} 
        />
      )}
    </div>
  );
};

export default TopProducts;
