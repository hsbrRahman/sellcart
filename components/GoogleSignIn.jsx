"use client";
import { auth, googleAuthProvider } from "@/firebase/firebase.auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const GoogleSignIn = () => {
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        avatar:
          user.photoURL ||
          `https://www.gravatar.com/avatar/${user.uid}?d=robohash`,
        createdAt: serverTimestamp(),
      });
      // console.log("Google sign-in successful:", user);
      // Handle further operations with user data or navigate to another page
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData?.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error("Google sign-in error:", errorMessage);
    } finally {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-[150px] bg-pink-50">
      <div className="p-6 bg-white rounded-lg shadow-md">
        {/* <h2 className="text-center text-2xl font-bold mb-4">Login</h2> */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full hover:bg-accent bg-blue-500 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
        >
          Sign in with Google <FcGoogle size={"30px"} />
        </button>
        <p className="mt-4 text-center">
          <Link href="/login" className="text-black hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GoogleSignIn;
