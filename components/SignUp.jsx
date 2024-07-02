"use client";
import { useEffect, useState } from "react";
import { signup } from "@/auth/signup";
import { getCurrentUser } from "@/auth/getCurrentUser";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import GoogleSignIn from "./GoogleSignIn";

const SignUp = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const newUser = await signup(email, password, name);
      if (newUser) {
        await setDoc(doc(db, "users", newUser.uid), {
          displayName: name,
          email: newUser.email,
          uid: newUser.uid,
          avatar: `https://www.gravatar.com/avatar/${newUser.uid}?d=robohash`,
          createdAt: serverTimestamp(),
        });
        setUser(newUser);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      router.push("/");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-md -mt-20">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold border-b-4 border-accent">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Sign Up
            </Button>
          </form>
          <Dialog>
            <DialogTrigger className="w-full bg-blue-300 hover:bg-indigo-600 hover:text-white text-black font-bold py-2 px-4 rounded-lg">
              SignUp with Google
            </DialogTrigger>
            <DialogContent>
              <GoogleSignIn />
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
