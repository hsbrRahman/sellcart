"use client";
import SignUp from "@/components/SignUp";
import { getCurrentUser } from "@/auth/getCurrentUser";
import { useEffect, useState } from "react";
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
    <div className="text-center font-bold">
      {currentUser ? <p>You are already signed in</p> : <SignUp />}
      <div>{currentUser && currentUser.displayName}</div>
    </div>
  );
};

export default Login;
