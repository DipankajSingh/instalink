import Image from "next/image";
import React from "react";

function Post() {
  return (
    <div>
      <div>
        <Image />
        <h1>Dipankaj</h1>
      </div>
      <Image />
      <div>
        <button>
          <Image src={"/icons/heart.svg"} height={28} width={28} alt="like" />
        </button>
        <button>
          <Image
            src={"/icons/comment.svg"}
            height={25}
            width={25}
            alt="comments"
          />
        </button>
        <button>
          <Image
            src={"/icons/save.svg"}
            height={25}
            width={25}
            alt="archive post"
          />
        </button>
      </div>
    </div>
  );
}

export default Post;
