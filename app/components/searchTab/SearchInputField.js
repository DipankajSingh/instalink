import React, { useState } from "react";
import Image from "next/image";

function SearchInputField() {
    const [inputValue,setInputValue]=useState("")
  return (
    <>
      <input
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
        className="bg-transparent active:outline-none focus:outline-none w-full px-1 font-semibold py-2.5 placeholder:text-gray-500"
        placeholder="Search"
        type="text"
      />
      {inputValue!==""?<button onClick={()=>setInputValue("")} className="">
        <Image
          src={"/icons/cross.svg"}
          height={32}
          width={32}
          alt="search icon"
        />
      </button>:""}
    </>
  );
}

export default SearchInputField;
