import Image from "next/image";
import Link from "next/link";

const Product = ({ thumbnail, title, description, category, price, id }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className=" h-full rounded-xl flex">
        <div className="w-[25%] relative">
          <Image src={thumbnail} alt="product-image" fill />
        </div>
        <div className="w-[75%] font-semibold">
          <div className="w-full h-full flex flex-col">
            <p className="text-2xl">{title}</p>
            <p className="text-lg"> {description}</p>
            <p className="text-md">Category: {category}</p>
            <p className="text-lg text-green-800 ">$ {price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
