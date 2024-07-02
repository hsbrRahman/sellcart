"use client";
import {
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { ScrollArea } from "./ui/scroll-area";
import { db } from "@/firebase/firebase.config";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/auth/getCurrentUser";

const ProductList = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUserAndProducts = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        console.log("Current User:", currentUser);
        if (currentUser) {
          const productsRef = collection(db, "products");
          const q = query(productsRef, where("uid", "==", currentUser.uid));
          const querySnapshot = await getDocs(q);
          console.log("Query Snapshot:", querySnapshot);
          const productsList = [];
          querySnapshot.forEach((doc) => {
            productsList.push({
              id: doc.id,
              ...doc.data(),
              createdAt: serverTimestamp,
            });
          });
          console.log("Products List:", productsList);
          setProducts(productsList);
        }
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchUserAndProducts();
  }, []);

  return (
    <ScrollArea className="mx-auto h-full border border-accent p-2 bg-slate-300 rounded-xl">
      <ul className="flex flex-col gap-1 ">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <li key={product.id} className="h-[100px]">
                <div className=" h-full rounded-xl flex">
                  <div className="w-[25%] bg-red-300">image</div>
                  <div className="w-[75%] bg-teal-400">
                    <div className="w-full h-full flex flex-col">
                      <p className="text-2xl">{product.name}</p>
                      <p className="text-lg">{product.description}</p>
                      <p className="text-md">{product.category}</p>
                      <p className="text-xl text-accent">{product.price}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <p className="text-3xl text-black">You have no uploaded products!!</p>
        )}
      </ul>
    </ScrollArea>
  );
};

export default ProductList;
