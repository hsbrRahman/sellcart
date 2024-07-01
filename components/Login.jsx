"use client";
import { useState, useEffect } from "react";
import { getCurrentUser } from "@/auth/getCurrentUser";
import Link from "next/link";

const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <Link
      href={currentUser ? "/" : "/login"}
      className="text-black hover:border-b-2 hover:border-accent capitalize font-bold"
    >
      {currentUser ? `${currentUser.displayName}` : "Login"}
    </Link>
  );
};

export default Login;
