import ProductCarousel from "@/components/ProductCarousel";
import React from "react";

const productPage = () => {
  return (
    <section className=" flex min-h-screen flex-col items-center justify-between p-24 lg:flex-row bg-slate-200">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-0">
          <div>
            <ProductCarousel />
          </div>
          <div className="text-center xl:text-left order-2 xl:order-none xl:inline flex flex-col items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default productPage;
