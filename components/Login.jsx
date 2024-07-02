"use client";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { signout } from "@/auth/signout";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase.auth";

const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signout(); // Ensure signout completes before proceeding
      setCurrentUser(null);
      setMenuOpen(false);
      router.refresh();
      router.push("/"); // Redirect to home page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      {currentUser ? (
        <DropdownMenuTrigger onClick={() => setMenuOpen(!menuOpen)}>
          {currentUser.displayName}
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
        {currentUser && (
          <DropdownMenuItem>
            <Link href={`/dashboard/${currentUser.uid}`}>
              <Button className="w-full">Dashboard</Button>
            </Link>
          </DropdownMenuItem>
        )}

        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem>
          <Button onClick={handleSignOut} className="w-full">
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Login;
