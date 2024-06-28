"use client";
import { Button } from "./ui/button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const UploadProduct = () => {
  const AddDoc = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <Button className="w-[240px] bg-pink-50 text-accent rounded-xl font-semibold text-xl hover:bg-slate-300">
        Upload a product
      </Button>
    </div>
  );
};

export default UploadProduct;
