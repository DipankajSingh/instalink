import Image from "next/image";
import React from "react";

function AddPosts({ imageUrl = "" }) {
  return (
    <div className="text-black relative flex font-semibold flex-col">
      <div className="flex border-b-2 justify-between px-6 pb-1 pt-6">
        <button className="text-2xl font-extrabold">{"<"}</button>
        <h1 className="text-lg font-semibold">New Post</h1>
        <button className="text-blue-700 text-lg font-semibold">Share</button>
      </div>

      <div className="relative px-3 border-b-2 py-3 gap-3 flex">
        <div className=" relative bg-slate-400 h-[4rem] w-[5rem] overflow-hidden">
          <img src="sn.jpeg" alt="hddbva" />
          {/* <input type="file" accept="image/*" /> */}
        </div>
        <textarea className="w-full resize-none focus:outline-none active:outline-none" placeholder="Write a caption..." name="post descreption"></textarea>
      </div>

        <button className="flex px-4 justify-between py-3 border-b-2">Tag People <span className="text-gray-400">{">"}</span></button>
        <button className="flex px-4 justify-between py-3">Add Location <span className="text-gray-400">{">"}</span></button>
    </div>
  );
}

export default AddPosts;
