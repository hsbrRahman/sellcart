import HomeCarousel from "@/components/HomeCarousel";
import ProductsSection from "@/components/ProductsSection";
import { getProducts } from "@/lib/getProducts";
export default async function Home() {
  const products = await getProducts("products");
  return (
    <main className="flex flex-col min-h-screen w-full">
      <section className=" flex min-h-screen flex-col items-center justify-between p-24 lg:flex-row bg-slate-200">
        <div className="container mx-auto -mt-20 ">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-0">
            <div className="text-center xl:text-left order-2 xl:order-none xl:inline flex flex-col items-center justify-center">
              <div
                className="text-4xl font-semibold w-full flex flex-col 
            items-center xl:inline"
              >
                <h1>Discover.</h1>
                <h1 className="text-accent text-5xl font-bold"> Shop.</h1>
                <h1 className="">Repeat.</h1>
                <h1 className="">One stop for all your shopping!</h1>
              </div>
            </div>
            <div>
              <HomeCarousel products={[...products]} />
            </div>
          </div>
        </div>
      </section>
      <ProductsSection products={[...products]} />
    </main>
  );
}
