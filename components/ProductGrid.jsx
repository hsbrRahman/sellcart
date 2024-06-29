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
    price: "650.99",
    uid: "",
    description: "A luxurious table",
  },
  {
    id: 3,
    name: "wardrobe",
    price: "1250.34",
    uid: "",
    description: "A luxurious wardrobe",
  },
  {
    id: 4,
    name: "wardrobe",
    price: "1250.34",
    uid: "",
    description: "A luxurious wardrobe",
  },
  {
    id: 5,
    name: "wardrobe",
    price: "1250.34",
    uid: "",
    description: "A luxurious wardrobe",
  },
  {
    id: 6,
    name: "wardrobe",
    price: "1250.34",
    uid: "",
    description: "A luxurious wardrobe",
  },
  {
    id: 7,
    name: "wardrobe",
    price: "1250.34",
    uid: "",
    description: "A luxurious wardrobe",
  },
  {
    id: 8,
    name: "wardrobe",
    price: "1250.34",
    uid: "",
    description: "A luxurious wardrobe",
  },
  {
    id: 9,
    name: "wardrobe",
    price: "1250.34",
    uid: "",
    description: "A luxurious wardrobe",
  },
];
const ProductGrid = () => {
  return (
    <ScrollArea className="mx-auto h-[500px] border border-accent p-4 bg-slate-300 rounded-xl">
      <p className="font-extrabold text-4xl border-b-2 border-accent bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Featured Products
      </p>

      <ul className="pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
        {products.map((product, index) => {
          return (
            <li
              key={index}
              className="bg-white h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent text-2xl font-bold">
                {product.name}
              </span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                {product.description}
              </h3>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-accent">$</span>
                <p className="text-black">{product.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  );
};

export default ProductGrid;
