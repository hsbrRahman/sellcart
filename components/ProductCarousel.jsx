"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./styles.css";

const ProductCarousel = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="w-[600px] h-[600px] text-black relative">
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2 w-full h-full"
        >
          {product.images.map((image, index) => {
            return (
              <SwiperSlide
                key={index}
                className="text-center font-medium flex justify-center align-center"
              >
                <div className="block w-full h-full object-cover bg-cover bg-center">
                  <Image src={image} fill={true} alt="image" />
                </div>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide >
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            2
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            3
          </SwiperSlide> */}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper box-border px-2 py-0 h-[20%]"
        >
          {product.images.map((image, index) => {
            return (
              <SwiperSlide
                key={index}
                className="text-center font-medium flex justify-center align-center"
              >
                <div className="block w-full h-full object-cover bg-cover bg-center">
                  <Image src={image} fill={true} alt="image" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default ProductCarousel;
