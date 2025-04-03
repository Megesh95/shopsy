import { useState } from "react";
import PropTypes from 'prop-types';
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Upto 50% off on all Men's Wear",
    description:
      "Discover our premium collection of men's fashion with amazing discounts. Limited time offer on selected items.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "30% off on all Women's Wear",
    description:
      "Explore our latest collection of women's fashion with exclusive discounts. Trendy styles for every occasion.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "70% off on All Products Sale",
    description:
      "Biggest sale of the season! Limited time offers on our entire collection. Don't miss out on these amazing deals.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-900 flex justify-center items-center dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[1]"></div>
      
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data, index) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm dark:text-gray-300"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity duration-200 text-white py-2 px-6 rounded-full"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
                
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt={`Slide ${index + 1}`}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-cover rounded-lg mx-auto shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        {/* Slider indicators */}
        <div className="flex justify-center gap-3 mt-6 sm:hidden">
          {ImageList.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  handleOrderPopup: PropTypes.func
};

export default Hero;
