import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Cart from "./Cart";
import Login from "./Login";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "login",
    path: "/login",
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl ">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                SellMart <span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          <SheetClose asChild>
            <Login />
          </SheetClose>

          <Cart />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
