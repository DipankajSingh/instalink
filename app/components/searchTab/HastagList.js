import Image from "next/image";
import React from "react";

function HasTagList({ preview = true }) {
  return (
    <div className="relative px-5 py-0.5 cursor-pointer hover:bg-slate-50 flex items-center gap-3 mb-3 justify-start ">
      <div className="relative rounded-full border border-gray-400 grid place-items-center text-4xl font-semibold overflow-hidden h-16 w-16">#</div>
      <div className="flex text-sm flex-col">
        <span className="font-semibold">#coding</span>
        <span className="text-gray-400">8m posts</span>
      </div>
      {preview ? (
        <button className="ml-auto">
          <Image
            src={"/icons/cross.svg"}
            height={25}
            width={25}
            alt="search icon.j"
          />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default HasTagList;
