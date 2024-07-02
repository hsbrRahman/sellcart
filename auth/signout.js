import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.auth";

export const signout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.error(error);
    });
};
