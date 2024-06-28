import UploadProduct from "@/components/UploadProduct";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div className="w-screen h-screen p-2">
      <section className="container w-[90%] mx-auto h-[85%] flex flex-col lg:flex-row gap-1">
        <div className="h-full w-[30%] rounded-xl">
          <div className="m-auto w-[90%] h-[90%] flex flex-col justify-center items-center">
            <div className="bg-indigo-100 w-[50%] h-[32%] rounded-full">
              user avatar/photo
            </div>
            <div className="w-full">
              <p className="text-lg">Change avatar/photo</p>
              <Input type="file" />
            </div>
          </div>
        </div>
        <div className="h-full w-[70%] rounded-xl flex flex-col">
          <div className="h-[10%]">
            <UploadProduct />
          </div>
          <div className="w-full h-[90%] bg-yellow-500">
            scroll-list of products
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
