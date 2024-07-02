"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import Image from "next/image";

const HomeCarousel = ({ products }) => {
  // const router = useRouter();
  // const handleProductClick = (productId) => {
  //   router.push(`/product/${productId}`);
  // };
  return (
    <div className="w-[500px] h-[500px] text-black relative">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {products.map((product) => {
          return (
            <SwiperSlide
              key={product.id}
              className="text-center font-medium flex justify-center align-center"
            >
              <div className="block w-full h-full object-cover">
                <Image src={product.thumbnail} fill alt="product-image" />
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide className="text-center font-medium flex justify-center align-center">
          2
        </SwiperSlide>
        <SwiperSlide className="text-center font-medium flex justify-center align-center">
          3
        </SwiperSlide>
        <SwiperSlide className="text-center font-medium flex justify-center align-center">
          4
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
