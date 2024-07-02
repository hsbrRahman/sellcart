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
import Product from "./Product";

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
          setProducts(productsList);
        }
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchUserAndProducts();
  }, []);

  return (
    <ScrollArea className="mx-auto h-full border-2  hover:border-accent p-2  rounded-xl">
      <ul className="flex flex-col gap-1 ">
        {products.length > 0 ? (
          products.map((product, i) => {
            return (
              <li key={product.id} className="h-[120px] bg-slate-200">
                <Product {...products[i]} />
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
