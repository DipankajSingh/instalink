import Image from "next/image";
import React from "react";

function ProfileList({ preview = false }) {
  return (
    <div>
      <Image
        src={
          "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
        }
        height={25}
        width={25}
        alt="search icon"
      />
      <div>
        <span>_dipankaj</span>
        <span>Dipankaj</span>
      </div>
      {preview ? (
        <button>
          <Image
            src={"/icons/cross.svg"}
            height={32}
            width={32}
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
