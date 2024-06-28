import ProductList from "./ProductList";

const ProductsSection = () => {
  return (
    <div className="w-full h-[600px] p-2 flex flex-col lg:flex-col">
      <div className="w-[95%] h-full mx-auto rounded-xl flex gap-1">
        <section className="w-[20%] bg-red-200 h-full rounded-2xl"></section>
        <section className="w-[80%]  h-full flex items-center rounded-2xl">
          <ProductList />
        </section>
      </div>
    </div>
  );
};

export default ProductsSection;
