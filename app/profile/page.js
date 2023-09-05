'use client'
import Image from "next/image";
import React from "react";
import ContentTabs from "./ContentTabs";
import ImagePostsPreview from "./ImagePostsPreview";
import ProtectedRoute from "../auth/ProtectedRoute";

function page({
  userId = "_dipankaj",
  userName = "Dipankaj",
  tags = ["coding", "programming", "webdev"],
  profilePic = "/defaults_res/defaultUser.jpg",
}) {
  return (
    <ProtectedRoute showFooter={true}>
      <div className="text-slate-950 px-5 pt-2 h-full w-full bg-white max-w-[480px] relative m-auto">
      <div className="flex pb-3 bg-white">
        <div className="text-lg font-bold">{userId}</div>
        <button className="ml-auto mr-5">
          <Image
            src={"/icons/add-square.svg"}
            height={28}
            width={28}
            alt="add post"
          />
        </button>
        <button className="mr-5">
          <Image
            src={"/icons/line-3.svg"}
            height={28}
            width={28}
            alt="options"
          />
        </button>
      </div>

      <div className="flex justify-start gap-6">
        <div className="border-2 h-20 w-20 overflow-hidden rounded-full">
          <Image src={profilePic} height={85} width={85} alt="profile pic" />
        </div>
        <div className="flex items-center text-sm text-center font-semibold gap-4">
          <p className="flex flex-col">
            <span className="font-bold text-base">2,184</span>
            <span>Posts</span>
          </p>
          <button>
            <h4 className="font-bold text-base">6,588</h4>
            <span>Followers</span>
          </button>
          <button>
            <h4 className="font-bold text-base">180</h4>
            <span>Following</span>
          </button>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-base">{userName}</h1>
        {tags.map((tag) => {
          return (
            <a className="text-blue-700" key={tag} href="#">
              #{tag}{" "}
            </a>
          );
        })}
        <p>Lorem ipsum dolor, nulla voluptatibus placeat excepturi.</p>
      </div>

      <button className="w-full bg-[#dedede] py-2 font-semibold mt-3 rounded-lg">
        Edit Profile
      </button>

      <div className="flex sticky top-12 z-10 bg-white justify-around pt-3 mt-2">
        <ContentTabs />
      </div>

      <div className="mt-3 pt-2 gap-1 overflow-hidden justify-center relative bottom-0 flex flex-wrap">
        <ImagePostsPreview key={1} imageUrl="/defaults_Res/defaultUser.jpg" />
        <ImagePostsPreview key={2} imageUrl="/res/spider.bmp" />
        <ImagePostsPreview key={4} imageUrl="/defaults_Res/defaultUser.jpg" />
        
      </div>
    </div>
    </ProtectedRoute>
  );
}

export default page;
