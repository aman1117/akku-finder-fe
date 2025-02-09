import { FileUpload } from "@/components/ui/file-upload";
import Gradient from "@/components/ui/gradient";
import { SearchCheck } from "lucide-react";
export default function Home() {
  return (
    // Outer wrapper: full screen with a soft gradient background
    <Gradient>

      <div className="flex min-h-screen items-center justify-center">
        {/* Inner container: white card with a border & some spacing */}
        <div className="w-full max-w-[650px] bg-white border shadow-md  p-8">
          <div className="flex flex-col items-center justify-center">
            {/* Title row */}
            <div className="flex items-center space-x-2 mt-4 mb-2">
              <span className="text-4xl font-extrabold text-black ">Made exclusively for </span>
              <span className="sm:text-4xl font-extrabold text-pink-600 ml-2 inline-block underline decoration-dashed underline-offset-4">
                Aakanksha
              </span>
            </div>

            <div className=" flex items-center " >
              <span className="text-xl text-gray-800">make any pdf / image</span>
              <div className="flex items-center space-x-1 mt-2 mb-2">
                <SearchCheck className="text-blue-900 ml-2" />
                <span className=" text-xl font-bold text-blue-900 ">
                  search enabled
                </span>
              </div>
            </div>

            {/* File upload component area */}
            <div className="m-6 max-w-96 max-h-60">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    </Gradient>
  );
}
