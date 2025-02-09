import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[200px] mb-2">
          <span className="font-bold text-2xl sm:text-3xl text-pink-800">
            Made exclusively for Akku
          </span>
        </div>
        <div>
          <span className="text-xl  text-pink-400">
            Make any pdf search enabled
          </span>
        </div>


      </div>
    </div >
  );
}
