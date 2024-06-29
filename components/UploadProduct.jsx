"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const UploadProduct = () => {
  const [loading, setLoading] = useState(false);

  const AddProductDoc = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "products"), {
        id: "",
        title: "Ada",
        description: "Lovelace",
        category: 1815,
        thumbnail: "...",
        rating: 4.23,
        stock: 5,
        images: ["...", "...", "..."],
        brand: "Essence",
        reviews: [
          {
            rating: 2,
            comment: "Very unhappy with my purchase!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "John Doe",
            reviewerEmail: "john.doe@x.dummyjson.com",
          },
        ],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={AddProductDoc}
      className="w-[240px] bg-pink-50 text-accent rounded-xl font-semibold text-xl hover:bg-slate-300"
      disabled={loading}
    >
      {loading ? "Uploading..." : "Upload a product"}
    </Button>
  );
};

export default UploadProduct;
