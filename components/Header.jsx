import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ProductSearch from "./ProductSearch";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-black bg-pink-200/20">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            SellMart<span className="text-accent">.</span>
          </h1>
        </Link>
        <ProductSearch />
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Cart />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
