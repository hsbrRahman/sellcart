import ProductCarousel from "@/components/ProductCarousel";
import { getProducts } from "@/lib/getProducts";
import React from "react";

const productPage = async ({ params }) => {
  const product = await getProducts("products", params.id);
  return (
    <section className=" flex min-h-screen flex-col items-center justify-between p-24 lg:flex-row bg-slate-200">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-0">
          <div>
            <ProductCarousel product={product} />
          </div>
          <div className="text-center xl:text-left order-2 xl:order-none xl:inline flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <div className="text-xl font-semibold mb-4">${product.price}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default productPage;
