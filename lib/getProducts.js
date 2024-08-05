import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

export const getProducts = async (collectionName, docID = null) => {
  if (docID) {
    const docSnapshot = await getDoc(
      doc(collection(db, collectionName), docID)
    );
    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      return null;
    }
  } else {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return docs;
  }
};
