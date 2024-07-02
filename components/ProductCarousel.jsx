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

const ProductCarousel = () => {
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
          <SwiperSlide className="text-center font-medium flex justify-center align-center">
            <div className="block w-full h-full object-cover bg-cover bg-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/sellmart-5f2b4.appspot.com/o/products%2F8GHPOVr28xQ3ZeYnIBlWUPQLIUJ3%2FUntitled.jpgb5d36174?alt=media&token=d2a93c56-a8a3-4613-9118-ac5277996309"
                fill={true}
                alt="image"
              />
            </div>
            {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
          </SwiperSlide>

          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
            2
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
            3
          </SwiperSlide>
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
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
            88
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
            77
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default ProductCarousel;
