import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Caraousel = () => {
  const settings = {
    dots: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1.5, // Default for mobile
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller devices
        settings: {
          slidesToShow: 1.5, // 1.5 slides visible for tablets
        },
      },
      {
        breakpoint: 1024, // For desktop
        settings: {
          slidesToShow: 2, // 2 slides visible for desktops
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="w-full m-auto custom-slider p-2 bg-gray-300/90 py-6">
      <div>
        <img src={banner1} alt="Banner 1" className=" m-auto w-max md:px-3" />
      </div>
      <div>
        <img src={banner2} alt="Banner 2" className="m-auto md:px-3" />
      </div>
      <div>
        <img src={banner3} alt="Banner 3" className=" m-auto md:px-3" />
      </div>
      <div>
        <img src={banner4} alt="Banner 4" className="m-auto md:px-3" />
      </div>
    </Slider>
  );
};

export default Caraousel;
