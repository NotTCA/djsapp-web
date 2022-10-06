import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaDiscord, FaCopy, FaCheckCircle } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { useEffect, useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  function copy() {
    navigator.clipboard.writeText("npx create-djs-app");
    setClicked(true);
  }

  useEffect(() => {
    setTimeout(() => setClicked(false), 1500);
  }, [clicked]);

  return (
    <>
      <div className="bg-[#090A16] flex flex-col justify-center items-center min-h-screen">
        <div className="animate-in fade-in slide-in-from-bottom duration-1000 flex flex-col justify-center items-center text-center">
          <Image src="/djs.png" width={120} height={120} />
          <h1 className="text-4xl font-bold text-blue-200">
            Create <span className="text-blue-400">DJS</span> App
          </h1>
          <h2 className="mt-1 font-medium text-blue-200">
            The easiest way to start a new{" "}
            <span className="text-blue-400">Discord.js</span> project.
          </h2>
        </div>
        <div className="mt-4 animate-in fade-in slide-in-from-bottom duration-1000">
          <code
            className="px-3 py-2.5 text-base text-white rounded-md cursor-pointer bg-neutral-800 hover:bg-neutral-700 transition-all duration-300"
            onClick={copy}
          >
            npx create-djs-app
            {clicked ? (
              <FaCheckCircle className="inline ml-1" />
            ) : (
              <FaCopy className="inline ml-1" />
            )}
          </code>
        </div>
        <footer className="fixed bottom-5 w-full text-lg text-center text-white">
          <Link href="https://github.com/NotTCA/create-djs-app">
            <a className="hover:text-blue-500 transition-all duration-300">
              GitHub <BsGithub className="inline mr-1" />
            </a>
          </Link>
          <GoDash className="inline mr-1 rotate-90" />
          <Link href="https://discord.js.org">
            <a className="hover:text-blue-500 transition-all duration-300">
              Discord.js <FaDiscord className="inline mr-1" />
            </a>
          </Link>
        </footer>
      </div>
    </>
  );
}
