import Image from "next/image";
import React from "react";

function Post({
  postImageUrl = "/res/spider.bmp",
  userName = "",
  userId = "",
  profilePic = "/defaults_res/defaultUser.jpg",
  postDescription=""
}) {
  return (
    <div className="relative text-black border-b-2">
      <div className="flex p-2 items-center gap-3">
        <Image
          className="border h-14 w-14 cursor-pointer rounded-full"
          height={40}
          width={40}
          alt="profile picture"
          src={profilePic}
        />
        <button className="font-semibold">{userName}</button>
        <button className=" ml-auto">
          {" "}
          <Image
            src={"/icons/threeDots.svg"}
            height={25}
            width={25}
            alt="posts options"
          />
        </button>
      </div>
      <div className="relative h-[55vh] bg-[#e7ebf4]">
        <Image
          className=" object-contain"
          fill="true"
          alt="Image Post"
          src={postImageUrl}
        />
      </div>
      <div>
        <div className="flex p-2 pb-0 gap-2">
          <button>
            <Image src={"/icons/heart.svg"} height={28} width={28} alt="like" />
          </button>
          <button>
            <Image
              src={"/icons/comment.svg"}
              height={32}
              width={32}
              alt="comments"
            />
          </button>
          <button className=" ml-auto">
            <Image
              src={"/icons/save.svg"}
              height={34}
              width={34}
              alt="archive post"
            />
          </button>
        </div>

        <div className="px-3 flex flex-col items-start">
          <button className=" font-bold">
            <span className=" font-normal">Liked by </span>Ankit{" "}
            <span className=" font-normal">and </span>5455 others
          </button>
          <p>
            <span className=" font-bold">{userId} </span>{postDescription}</p>
          <button className="mt-1 text-gray-500">view all 485 comments</button>
          <span className=" uppercase text-gray-500 text-xs my-1">
            2 december
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
