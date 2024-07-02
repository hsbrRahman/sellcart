"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { storage } from "@/firebase/firebase.storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { RiLoginBoxLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/auth/getCurrentUser";

const UploadProduct = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUploads, setImageUploads] = useState([]);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    uid: "",
    id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleProduct = async (event) => {
    event.preventDefault();
    setLoading(true);
    await uploadImages();
  };

  const uploadImages = async () => {
    if (imageUploads.length > 0) {
      const uploadPromises = imageUploads.map((image) => {
        const imageRef = ref(
          storage,
          `products/${user.uid}/${image.name + uuidv4().slice(0, 8)}`
        );
        return uploadBytes(imageRef, image)
          .then((snapshot) => getDownloadURL(snapshot.ref))
          .catch((error) => console.error("Error uploading image: ", error));
      });

      try {
        const urls = await Promise.all(uploadPromises);
        await addProductDoc(urls);
      } catch (error) {
        console.error("Error uploading images: ", error);
      } finally {
        setLoading(false);
        setUploadComplete(true);
      }
    }
  };

  const addProductDoc = async (imageUrls) => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        ...productDetails,
        thumbnail: imageUrls[0], // Use the first image as the thumbnail
        images: imageUrls,
        rating: 0,
        reviews: [],
        uid: `${user ? user.uid : ""}`,
      });
      const productRef = doc(db, "products", docRef.id);
      setDoc(productRef, { id: docRef.id }, { merge: true });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (uploadComplete) {
      router.refresh();
    }
  }, [uploadComplete, router]);

  return (
    <Dialog className="">
      <DialogTrigger
        className="w-[240px] p-3 bg-pink-50 text-accent rounded-xl font-semibold text-xl hover:bg-slate-300"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload a product"}
      </DialogTrigger>
      {user ? (
        <DialogContent className="h-[80%] bg-pink-50">
          <DialogHeader>
            <DialogTitle className="text-accent text-4xl text-center border-b-4">
              Product Details:
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleProduct}>
            <div className="space-y-4">
              <Input
                name="title"
                placeholder="Product Name"
                value={productDetails.title}
                onChange={handleInputChange}
                required
              />
              <Input
                name="price"
                type="number"
                placeholder="Price"
                value={productDetails.price}
                onChange={handleInputChange}
                required
              />
              <Input
                name="description"
                placeholder="Description"
                value={productDetails.description}
                onChange={handleInputChange}
                required
              />
              <Input
                name="category"
                placeholder="Category"
                value={productDetails.category}
                onChange={handleInputChange}
                required
              />
              <Input
                name="images"
                type="file"
                onChange={(event) => {
                  setImageUploads(Array.from(event.target.files));
                }}
                multiple
                required
              />
              <Input
                name="stock"
                type="number"
                placeholder="Stock"
                value={productDetails.stock}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-6 bg-slate-200 text-accent rounded-xl font-semibold text-xl hover:bg-white"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload Product"}
            </Button>
          </form>
        </DialogContent>
      ) : (
        <DialogContent className="h-[30%] bg-pink-50">
          <DialogHeader>
            <DialogTitle className="text-accent text-4xl text-center border-b-4">
              No user is logged in
            </DialogTitle>
          </DialogHeader>
          <div className="text-center mt-4">
            <Link href={"/login"}>
              <Button className="bg-blue-500 hover:bg-accent text-white p-4 rounded-xl w-full text-2xl ">
                Log In <RiLoginBoxLine />
              </Button>
            </Link>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default UploadProduct;
