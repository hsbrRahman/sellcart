import ProductGrid from "./ProductGrid";

const ProductsSection = () => {
  return (
    <div className="w-full h-[600px] p-2">
      <div className="w-[95%] h-full mx-auto rounded-xl flex flex-col justify-center lg:flex-row gap-1">
        <section className="w-full lg:w-[20%] bg-red-200 h-full rounded-2xl"></section>
        <section className="w-full lg:w-[80%] h-full flex items-center rounded-2xl">
          <ProductGrid />
        </section>
      </div>
    </div>
  );
};

export default ProductsSection;
