"use client";
import SignUp from "@/components/SignUp";
import { getCurrentUser } from "@/auth/getCurrentUser";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);
    };

    fetchCurrentUser();
  }, []);

  return (
    <div className="font-bold">
      {currentUser ? (
        <div className="font-bold flex flex-col items-center justify-center">
          <p className="text-4xl mb-4 ">You are already signed in</p>
        </div>
      ) : (
        <SignUp />
      )}
      {currentUser && (
        <div className="mt-4 text-xl text-gray-700 font-bold flex flex-col items-center justify-center">
          <Link href={`/dashboard/${currentUser.uid}`}>
            <Button>Go to dashboard</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
