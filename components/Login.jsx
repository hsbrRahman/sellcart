"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { signout } from "@/auth/signout";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/auth/getCurrentUser";

const Login = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    try {
      signout();
      setUser(null);
      setMenuOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      {user ? (
        <DropdownMenuTrigger>
          <Button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="outline-none font-bold bg-pink-40 hover:bg-accent/30 text-black capitalize text-2xl"
          >
            {user.displayName}
          </Button>
        </DropdownMenuTrigger>
      ) : (
        <Link
          href="/login"
          className="text-black hover:border-b-2 hover:border-accent capitalize font-bold"
        >
          Login/SignUp
        </Link>
      )}
      <DropdownMenuContent className="bg-pink-50">
        {user && (
          <DropdownMenuItem>
            <Link href={`/dashboard/${user.uid}`}>
              <Button className="w-full">Dashboard</Button>
            </Link>
          </DropdownMenuItem>
        )}
        {user && (
          <DropdownMenuItem>
            <Button onClick={handleSignOut} className="w-full">
              Logout
            </Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Login;
