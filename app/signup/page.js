"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Signup({ whichPage = "" }) {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // isClicked.current = true;
    console.log("reached here");
    console.log(userId, userName, password);
  };

  return (
    <div className="h-max min-h-full gap-7 w-screen max-w-[480px] relative bg-white bottom-0 m-auto  flex text-black flex-col py-4 px-4 pt-8">
      <Link className="self-start text-2xl font-extrabold" href={"/"}>
        {"<"}
      </Link>
      <h1 className="text-2xl font-bold font-serif mt-[5%] self-start">
        Create Account{" "}
        <p className="font-normal text-lg text-gray-400 pl-2 font-serif">
          You're about to rock!! 🤘
        </p>
      </h1>
      
        <div autoComplete="off" className="mt-auto flex flex-col gap-4">
          <InputField
            stateValue={[userName, setUserName]}
            hintImage="/svgs/userLogin.svg"
            placeholder="User name"
            altText={"id icon"}
          ></InputField>

          <InputField
            stateValue={[userId, setUserId]}
            hintImage="/svgs/id.svg"
            placeholder="Choose an ID"
            inputType="text"
            altText={"user icon"}
          ></InputField>

          <InputField
            stateValue={[password, setPassword]}
            hintImage="/svgs/lock.svg"
            placeholder="Password"
            inputType="password"
            altText={"lock icon"}
          ></InputField>
          <button
            type="submit"
            className="py-2 rounded-md text-center mt-2 text-white font-bold bg-slate-950"
          >
            Sign up
          </button>
        </div>
     
      <span
        className="
      text-center
      w-full 
      relative
      after:content-['']
      after:h-0.5
      grid
       place-items-center
      after:w-[45%]
      after:bg-gray-300
      after:absolute
      before:content-['']
      before:h-0.5
      before:w-[45%]
      before:bg-gray-300
      before:absolute
       before:left-0
       after:right-0
       text-gray-500
       font-mono
      "
      >
        Or
      </span>
      <Link
        href={ "/login"}
        className="border-2 rounded-md  py-2 font-semibold border-slate-950 text-center"
      >
        Log in
      </Link>
    </div>
  );
}

function InputField({
  hintImage = "",
  inputType = "text",
  altText = "",
  iconSize = 25,
  placeholder = "",
  valideted = false,
  stateValue,
}) {
  const [input, setInput] = stateValue;
  const [showHint, setShowHint] = useState(false);
  const showHintHandler = () => {
    setShowHint(true);
  };

  return (
    <div
      className={`relative flex border-b-2 ${
        valideted ? " border-green-600" : "border-slate-950"
      } py-2 `}
    >
      <Image
        src={hintImage}
        height={iconSize}
        width={iconSize}
        alt={altText}
        className="relative "
      />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type={inputType}
        placeholder={placeholder}
        className="pl-3 text-lg bg-transparent w-full active:outline-none focus:outline-none"
      />
      <Image
        src={"/svgs/done.svg"}
        height={iconSize}
        width={iconSize}
        alt="done"
        className={!valideted ? "hidden" : ""}
      />
      {showHint ? (
        <span className="absolute right-0">this field is requared</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Signup;
