import React from "react";
import Image from "next/image";
function ImagePostsPreview({ imageUrl = "", postDescription = "" }) {
  return (
    <div className="relative h-24 w-24 overflow-hidden">
      <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        src={imageUrl}
        style={{ objectFit: "cover" }}
        fill={true}
        alt={postDescription}
      />
    </div>
  );
}

export default ImagePostsPreview;
