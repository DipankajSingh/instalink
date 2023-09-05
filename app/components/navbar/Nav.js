import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav({showNavbar=false}) {
  return (
    <nav className={`sticky bg-white top-0 z-10 ${showNavbar?"flex":"hidden"} justify-between py-2 px-6 max-w-[480px] m-auto border-b-2`}>
      <h1 className=" text-2xl text-black font-extrabold font-appTitle">InstaLink</h1>
      <div className="flex gap-3">
        <button>
          <svg
            width="26px"
            height="26px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="black"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
              fill="#fff"
            />
          </svg>
        </button>
        <Link href={"/chat"}>
          <Image
            src={"/icons/message.svg"}
            height={24}
            width={24}
            alt="messages"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
