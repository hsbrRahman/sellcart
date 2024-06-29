import { ScrollArea } from "./ui/scroll-area";

const products = [
  {
    id: 1,
    name: "chair",
    price: "50.34",
    uid: "",
    description: "A luxurious chair",
  },
  {
    id: 2,
    name: "table",
    price: "500.34",
    uid: "",
    description: "A table",
  },
  {
    id: 3,
    name: "table",
    price: "500.34",
    uid: "",
    description: "A table",
  },
  {
    id: 4,
    name: "table",
    price: "500.34",
    uid: "",
    description: "A table",
  },
  {
    id: 5,
    name: "table",
    price: "500.34",
    uid: "",
    description: "A table",
  },
];

const ProductList = () => {
  return (
    <ScrollArea className="mx-auto h-full border border-accent p-2 bg-slate-300 rounded-xl">
      <ul className="flex flex-col gap-1">
        {products.map((product, index) => {
          return (
            <li key={index} className="h-[100px]">
              <div className=" h-full rounded-xl flex">
                <div className="w-[25%] bg-red-300">image</div>
                <div className="w-[75%] bg-teal-400">
                  <div className="w-full h-full flex flex-col">
                    <p className="text-2xl">{product.name}</p>
                    <p className="text-lg">{product.description}</p>
                    <p className="text-md">{product.price}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  );
};

export default ProductList;
