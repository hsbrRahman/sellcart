import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

export const getProducts = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return docs;
};
