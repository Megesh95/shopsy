import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import ProductPreview from "../ProductPreview/ProductPreview";

const ProductsData = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    price: 19.99,
    aosDelay: "0",
    description: "Beautiful ethnic wear for women, perfect for special occasions. Made with high-quality fabric for comfort and style."
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    price: 29.99,
    aosDelay: "200",
    description: "Trendy western wear for the modern woman. Stylish, comfortable, and perfect for casual outings."
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Stylish Sunglasses",
    rating: 4.7,
    color: "Brown",
    price: 12.99,
    aosDelay: "400",
    description: "Fashionable sunglasses with UV protection. Lightweight frame and durable construction for everyday use."
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    price: 24.99,
    aosDelay: "600",
    description: "Comfortable printed t-shirt with unique design. Made from 100% cotton for breathability and comfort."
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    price: 22.99,
    aosDelay: "800",
    description: "Stylish fashion t-shirt with modern design. Perfect for casual wear and easy to match with different outfits."
  },
];

const Products = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const openProductPreview = (product) => {
    setSelectedProduct(product);
  };
  
  const closeProductPreview = () => {
    setSelectedProduct(null);
  };
  
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 dark:text-gray-300">
            Discover our collection of trending products curated for style and comfort.
            Shop the latest fashion items at affordable prices.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="w-full max-w-[280px] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative group h-[280px] overflow-hidden">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    onClick={() => openProductPreview(data)}
                  />
                  <button 
                    onClick={() => addToCart(data)}
                    className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary/90"
                  >
                    <FaCartPlus />
                  </button>
                </div>
                <div className="p-4 cursor-pointer" onClick={() => openProductPreview(data)}>
                  <h3 className="font-semibold text-lg dark:text-white">{data.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{data.color}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="dark:text-gray-300">{data.rating}</span>
                    </div>
                    <span className="font-bold text-primary dark:text-primary">${data.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <Link to="/all-products">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2">
                View All Products
              </button>
            </Link>
          </div>
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

export default Products;
