'use client'
import Image from "next/image";
import React, { useRef } from "react";
import ProtectedRoute from "../auth/ProtectedRoute";
import { useRouter } from "next/navigation";

function page({ imageUrl = "" }) {
  const inputFileRef = useRef(null);
  const previewRef = useRef(null);
  const cameraIconRef = useRef(null);
  const router=useRouter()
  const handleFileSelect = () => {
    inputFileRef.current.click();
  };

  const handleOnChange = () => {
    try {
      previewRef.current.src = URL.createObjectURL(
        inputFileRef.current.files[0]
      );
      previewRef.current.alt = inputFileRef.current.files[0].name;
      cameraIconRef.current.remove();
      previewRef.current.classList.remove("hidden");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="text-black flex font-semibold flex-col h-full w-full bg-white max-w-[480px] relative m-auto">
      <div className="flex border-b-2 justify-between px-6 pb-1 pt-6">
        <button onClick={()=>router.back()} className="text-md text-rose-600 font-semibold">Cancel</button>
        <h1 className="text-lg font-semibold">New Post</h1>
        <button className="text-blue-700 text-lg font-semibold">Share</button>
      </div>

      <div className="relative px-3 border-b-2 py-3 gap-3 flex">
        <div
          onClick={handleFileSelect}
          className=" cursor-pointer grid place-items-center relative bg-slate-100 h-[4rem] w-[5rem] overflow-hidden"
        >
          <img
            ref={previewRef}
            className="hidden"
            src="#"
            alt="uploaded image"
          />
          <input
            onChange={() => handleOnChange()}
            ref={inputFileRef}
            className="absolute hidden"
            type="file"
            accept="image/*"
          />
          <Image
            ref={cameraIconRef}
            src={"/icons/camera.svg"}
            height={50}
            width={50}
            alt="camera icon"
          />
        </div>
        <textarea
          className="w-full resize-none focus:outline-none active:outline-none"
          placeholder="Write a caption..."
          name="post descreption"
        ></textarea>
      </div>

      <button className="flex px-4 justify-between py-3 border-b-2">
        Tag People <span className="text-gray-400">{">"}</span>
      </button>
      <button className="flex px-4 justify-between py-3">
        Add Location <span className="text-gray-400">{">"}</span>
      </button>
    </div>
    </ProtectedRoute>
  );
}

export default page;
