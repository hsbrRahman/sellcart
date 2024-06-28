import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TbBasketSearch } from "react-icons/tb";

const ProductSearch = () => {
  return (
    <div className="w-[50%] focus:outline-none flex items-center gap-2">
      <Input type="input" placeholder="Search for products..." />
      <Button
        type="submit"
        className="rounded-full text-3xl  bg-[#e5e4ec] hover:bg-black"
      >
        <TbBasketSearch color="#00b4d8" />
      </Button>
    </div>
  );
};

export default ProductSearch;
