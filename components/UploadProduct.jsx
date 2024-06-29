"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { storage } from "@/firebase/firebase.storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { v4 as uuidv4 } from "uuid";

const UploadProduct = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    images: "",
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
    await uploadImage();
    close();
  };

  const uploadImage = async () => {
    if (imageUpload != null) {
      const imageRef = ref(
        storage,
        `products/${params.id}/${imageUpload.name + uuidv4().slice(0, 8)}`
      );
      try {
        const snapshot = await uploadBytes(imageRef, imageUpload);
        const url = await getDownloadURL(snapshot.ref);
        setImageUrl(url);
        await AddProductDoc(url);
      } catch (error) {
        console.error("Error uploading image: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const AddProductDoc = async (imageUrl) => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        ...productDetails,
        thumbnail: imageUrl,
        images: productDetails.images.split(",").map((img) => img.trim()), // Split images by comma and trim whitespace
        rating: 0,
        reviews: [],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Dialog className="">
      <DialogTrigger
        className="w-[240px] p-3 bg-pink-50 text-accent rounded-xl font-semibold text-xl hover:bg-slate-300"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload a product"}
      </DialogTrigger>
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
              name="thumbnail"
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
              required
            />
            {/* <Input
              name="images"
              placeholder="More Images (comma separated URLs)"
              value={productDetails.images}
              onChange={handleInputChange}
            /> */}
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
    </Dialog>
  );
};

export default UploadProduct;
