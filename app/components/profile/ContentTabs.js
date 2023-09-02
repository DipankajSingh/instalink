import React, { useState } from "react";
import Image from "next/image";

function ContentTabs() {
  const [filterTab, setFilterTab] = useState("post");

  return (
    <>
      <button
        onClick={() => setFilterTab("post")}
        className={`text-black grid place-items-center pb-4 w-full border-b-2 font-semibold ${
          filterTab === "post" ? "border-b-black border-b-2" : "border-b-2"
        }`}
      >
        <Image src={"/icons/grid.svg"} height={25} width={25} alt="all posts" />
      </button>
      <button
        onClick={() => setFilterTab("reel")}
        className={`text-black grid place-items-center pb-4 w-full border-b-2 font-semibold ${
          filterTab === "reel" ? "border-b-black border-b-2" : "border-b-2"
        }`}
      >
        <Image
          src={"/icons/play.svg"}
          height={25}
          width={25}
          alt="video posts"
        />
      </button>
      <button
        onClick={() => setFilterTab("tag")}
        className={`text-black pb-4 w-full grid place-items-center border-b-2 font-semibold ${
          filterTab === "tag" ? "border-b-black border-b-2" : "border-b-2"
        }`}
      >
        <Image
          src={"/icons/tag-user.svg"}
          height={25}
          width={25}
          alt="tagged in"
        />
      </button>
    </>
  );
}

export default ContentTabs;
