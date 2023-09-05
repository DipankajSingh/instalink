"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

function LoginSignup({ pageTitle = "", whichPage = "" }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // isClicked.current = true;
    console.log("reached here");
  };

  return (
    <div className="h-max min-h-full gap-7 w-screen max-w-[480px] relative bg-white bottom-0 m-auto  flex text-black flex-col py-4 px-4 pt-8">
      <Link className="self-start text-2xl font-extrabold" href={"/"}>
        {"<"}
      </Link>
      <h1 className="text-2xl font-bold font-serif mt-[5%] self-start">
        Welcome <br /> Back{" "}
        <p className="text-gray-400 pl-2 text-lg font-mono font-normal">
          We missed you 😀
        </p>
      </h1>
      <div className="mt-auto flex flex-col gap-4">
        <Wrapper
          stateValue={[userId, setUserId]}
          hintImage="/svgs/id.svg"
          placeholder="User ID"
          altText={"user icon"}
        >
          <input
        onChange={(e) => setUserId(e.target.value)}
        value={userId}
        placeholder="Unique ID"
        className="pl-3 text-lg bg-transparent w-full active:outline-none focus:outline-none"
      />
        </Wrapper>
        <Wrapper
          stateValue={[password, setPassword]}
          hintImage="/svgs/lock.svg"
          placeholder="Password"
          inputType="password"
          altText={"lock icon"}
        >
          <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type={"password"}
        placeholder={"The Strongest Password"}
        className="pl-3 text-lg bg-transparent w-full active:outline-none focus:outline-none"
      />
        </Wrapper>

        <Link href={"forgetPassword"} className=" self-end">
          Forget Password?
        </Link>
        <button
          onClick={() => handleSubmit()}
          className="py-2 rounded-md text-center my-2 text-white font-bold bg-slate-950"
        >
          Log in
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
        href={"/signup"}
        className="border-2 rounded-md  py-2 font-semibold border-slate-950 text-center"
      >
        Sign up
      </Link>
    </div>
  );
}

function Wrapper({
  hintImage = "",
  altText = "",
  iconSize = 25,
  valideted = false,
  children
}) {
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
      {children}
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

export default LoginSignup;
