import React from "react";
import Image from "next/image";


function InputField(
    {hintImage = "",
    inputType="text",
    altText = "",
    iconSize = 25,
    placeholder='',
    valideted = false}
  ) {
    return (
      <div className={`relative flex border-b-[3px] ${valideted?" border-green-600":"border-white"} py-2 `}>
        <Image
          src={hintImage}
          height={iconSize}
          width={iconSize}
          alt={altText}
          className="relative "
        />
        <input type={inputType} placeholder={placeholder} className="pl-3 text-lg bg-transparent w-full active:outline-none focus:outline-none" />
        <Image
          src={"/svgs/done.svg"}
          height={iconSize}
          width={iconSize}
          alt="done"
          className={!valideted?"hidden":""}
        />
      </div>
    );
  }

  export default InputField