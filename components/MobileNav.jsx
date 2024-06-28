"use client";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Cart from "./Cart";

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
  const pathname = usePathname();
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
          {links.map((link, index) => {
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={link.path}
                  key={index}
                  className=" hover:border-b-4 border-accent
                  capitalize font-semibold hover:text-slate-600"
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
          <Cart />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
