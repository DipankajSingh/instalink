import Image from "next/image";
import React from "react";

function ProfileList({ preview = true }) {
  return (
    <div className="relative cursor-pointer hover:bg-slate-50 px-5 py-0.5 flex items-center gap-3 mb-3 justify-start ">
      <div className="relative rounded-full overflow-hidden h-16 w-16">
        <Image
          className=" "
          src={"/res/spider.bmp"}
          fill={true}
          alt="search icon"
        />
      </div>
      <div className="flex text-sm flex-col">
        <span className="font-semibold">_dipankaj</span>
        <span className="text-gray-400">Dipankaj</span>
        {/* show followed by */}
        <p className="text-gray-400">
          Followed by ak and 135 others
        </p>
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

export default ProfileList;
