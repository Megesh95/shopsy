import React, { useState } from "react";
import Img1 from "../assets/women/women.png";
import Img2 from "../assets/women/women2.jpg";
import Img3 from "../assets/women/women3.jpg";
import Img4 from "../assets/women/women4.jpg";
import Img5 from "../assets/shirt/shirt.png";
import Img6 from "../assets/shirt/shirt2.png";
import Img7 from "../assets/shirt/shirt3.png";
// Using available images instead of missing kids images
import Img8 from "../assets/women/women2.jpg";
import Img9 from "../assets/women/women3.jpg";
import Img10 from "../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus, FaFilter } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import ProductPreview from "../components/ProductPreview/ProductPreview";

// Combined product data from all categories
const AllProductsData = [
  // Women's products
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    price: 19.99,
    category: "Women",
    description: "Beautiful ethnic wear for women, perfect for special occasions. Made with high-quality fabric for comfort and style."
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    price: 29.99,
    category: "Women",
    description: "Trendy western wear for the modern woman. Stylish, comfortable, and perfect for casual outings."
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    price: 12.99,
    category: "Accessories",
    description: "Fashionable goggles with UV protection. Lightweight frame and durable construction for everyday use."
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    price: 24.99,
    category: "Women",
    description: "Comfortable printed t-shirt with unique design. Made from 100% cotton for breathability and comfort."
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    price: 22.99,
    category: "Women",
    description: "Stylish fashion t-shirt with modern design. Perfect for casual wear and easy to match with different outfits."
  },
  // Men's products
  {
    id: 6,
    img: Img5,
    title: "Casual Wear",
    price: 34.99,
    color: "Blue",
    rating: 4.8,
    category: "Men",
    description: "Premium casual wear shirt made with breathable fabric. Perfect for everyday use with a comfortable fit and stylish design."
  },
  {
    id: 7,
    img: Img6,
    title: "Printed Shirt",
    price: 39.99,
    color: "Black",
    rating: 4.9,
    category: "Men",
    description: "Stylish printed shirt with unique patterns. Made from high-quality materials that ensure durability and comfort throughout the day."
  },
  {
    id: 8,
    img: Img7,
    title: "Formal Shirt",
    price: 45.99,
    color: "White",
    rating: 4.7,
    category: "Men",
    description: "Elegant formal shirt designed for both comfort and style. Features a modern cut and premium fabric that drapes beautifully."
  },
  // Kids products (using available images)
  {
    id: 9,
    img: Img8,
    title: "Kids Casual",
    price: 19.99,
    color: "Multicolor",
    rating: 4.6,
    category: "Kids",
    description: "Comfortable and durable casual wear for kids. Made with soft materials that are gentle on the skin and easy to wash."
  },
  {
    id: 10,
    img: Img9,
    title: "Kids Party Wear",
    price: 29.99,
    color: "Blue",
    rating: 4.8,
    category: "Kids",
    description: "Adorable party wear for special occasions. Designed with attention to detail and comfort for your little ones."
  },
  {
    id: 11,
    img: Img10,
    title: "Kids Summer Outfit",
    price: 24.99,
    color: "Yellow",
    rating: 4.7,
    category: "Kids",
    description: "Lightweight summer outfit for kids. Breathable fabric keeps them cool and comfortable during hot weather."
  },
];

const AllProducts = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: "All",
    sortBy: "default"
  });
  
  const openProductPreview = (product) => {
    setSelectedProduct(product);
  };
  
  const closeProductPreview = () => {
    setSelectedProduct(null);
  };

  // Filter and sort products
  const filteredProducts = AllProductsData.filter(product => {
    // Category filter
    if (filters.category !== "All" && product.category !== filters.category) {
      return false;
    }
    
    // Price range filter
    if (filters.priceRange === "0-20" && (product.price < 0 || product.price > 20)) {
      return false;
    } else if (filters.priceRange === "20-40" && (product.price < 20 || product.price > 40)) {
      return false;
    } else if (filters.priceRange === "40+" && product.price < 40) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    // Sort products
    if (filters.sortBy === "price-low-high") {
      return a.price - b.price;
    } else if (filters.sortBy === "price-high-low") {
      return b.price - a.price;
    } else if (filters.sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });
  
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Browse Our Collection
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            All Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our complete range of high-quality products designed for style, comfort, and durability.
          </p>
        </div>
        
        {/* Filters section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <FaFilter className="text-primary" />
            <span className="font-medium">Filters:</span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* Category filter */}
            <select 
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="All">All Categories</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
              <option value="Accessories">Accessories</option>
            </select>
            
            {/* Price range filter */}
            <select 
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1"
              value={filters.priceRange}
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
            >
              <option value="All">All Prices</option>
              <option value="0-20">$0 - $20</option>
              <option value="20-40">$20 - $40</option>
              <option value="40+">$40+</option>
            </select>
            
            {/* Sort by filter */}
            <select 
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1"
              value={filters.sortBy}
              onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
            >
              <option value="default">Default Sorting</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
        
        {/* Products grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
            {filteredProducts.map((data) => (
              <div
                key={data.id}
                className="space-y-3 max-w-[220px] w-full"
              >
                <div className="relative group">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[220px] w-full object-cover rounded-md cursor-pointer"
                    onClick={() => openProductPreview(data)}
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-md">
                    {data.category}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(data);
                    }}
                    className="absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaCartPlus />
                  </button>
                </div>
                <div className="cursor-pointer" onClick={() => openProductPreview(data)}>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                    <span className="font-bold">${data.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No products found message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">No products match your filters. Please try different criteria.</p>
            </div>
          )}
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

export default AllProducts;
