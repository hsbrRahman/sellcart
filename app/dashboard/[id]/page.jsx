import ProductList from "@/components/ProductList";
import UploadProduct from "@/components/UploadProduct";
import { Input } from "@/components/ui/input";

const page = ({ params }) => {
  return (
    <div className="w-screen h-screen p-2">
      <section className="container bg-red-100 w-[90%] mx-auto h-[85%] flex flex-col justify-center items-center md:flex-row gap-1">
        <div className="h-[50%] md:h-full w-full md:w-[30%] rounded-xl bg-yellow-100">
          <div className="m-auto w-[90%] h-[90%] flex md:flex-col justify-center items-center">
            <div className="bg-indigo-100 w-[50%] h-[100%] md:w-[50%] md:h-[15%] rounded-full">
              user avatar/photo
            </div>
            <div className="w-full">
              <p className="text-lg">Change avatar/photo</p>
              <Input type="file" />
            </div>
          </div>
        </div>
        <div className="h-full w-[70%] rounded-xl flex flex-col items-center lg:items-start justify-center gap-4 bg-blue-200">
          <div className="h-[10%]">
            <UploadProduct params={params} />
          </div>
          <div className="w-full max-h-[400px] ">
            <ProductList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
