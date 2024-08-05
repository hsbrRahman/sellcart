import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

const ProductGrid = ({ products }) => {
  return (
    <ScrollArea className="mx-auto h-[90%] w-full border border-accent p-4 bg-slate-300 rounded-xl">
      <p className="font-extrabold text-4xl border-b-2 border-accent bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Featured Products
      </p>

      <ul className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] h-full">
        {products.map((product) => (
          <li
            className="bg-white relative h-full py-6 px-10 rounded-xl flex flex-col justify-start items-start"
            key={product.id}
          >
            <Link href={`/product/${product.id}`} className="relative w-full">
              <div className="relative w-full h-48">
                <Image
                  src={product.thumbnail}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="product-image"
                  className="rounded-xl"
                />
              </div>
              <div className="mt-4 flex flex-col items-start">
                <span className="text-accent text-2xl font-bold">
                  Name: {product.title}
                </span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center">
                  {product.description}
                </h3>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center">
                  Category: {product.category}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-accent">$</span>
                  <p className="text-black text-3xl font-bold">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

export default ProductGrid;
