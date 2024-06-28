import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnPbZsK_ug9d86vkHnNcC252zAPgt4no0",
  authDomain: "sellmart-5f2b4.firebaseapp.com",
  projectId: "sellmart-5f2b4",
  storageBucket: "sellmart-5f2b4.appspot.com",
  messagingSenderId: "40844148719",
  appId: "1:40844148719:web:a974a586e44c38ea43001a",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
