"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "login",
    path: "/login",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className="text-black hover:border-b-2 hover:border-accent capitalize font-bold "
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
