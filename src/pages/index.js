import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={'flex min-h-screen flex-col items-center justify-between px-44 py-24'}
    >
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
      </div> */}


		  <div className="grid text-center w-full h-[650px] mb-0  text-black
	   bg-white rounded-xl">
       
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Recently Generated Reports
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        

       
       


      </div>
    </main>
  );
}
