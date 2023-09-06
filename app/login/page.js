"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { loginUser } from "../auth/handleLogin";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login_URL } from "../components/apiRoutes";
import { login } from "../data/authSlice";

function Login() {
  const router=useRouter()
  const dispatch=useDispatch()
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)

  useEffect(()=>{
      if (isLoggedIn) {
        router.push("/feed")
      }
  })

  const [userId, setUserId] = useState("_dipankaj");
  const [password, setPassword] = useState("motu patalu");
  const [showWarnId, setShowWarnId] = useState(false);
  const [showWarnPassword, setShowWarnPassword] = useState(false);

  const handleSubmit =async () => {
    if (userId==="") {
      setShowWarnId(true);
      return
    }
    if (password==="") {
      setShowWarnPassword(true);
      return
    }

   try {
    const response=await fetch(login_URL)

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const token = await response.json();
    router.push("/feed")
    dispatch(login())
   } catch (error) {
    console.log(error)
   }

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
        <div className={`relative flex border-b-2 border-green-600 py-2 `}>
          <Image
            src={"/svgs/id.svg"}
            height={25}
            width={25}
            alt={"id"}
            className="relative "
          />
          <input
            onChange={(e) => {
              setShowWarnId(false);
              setUserId(e.target.value);
            }}
            value={userId}
            type={"text"}
            placeholder={"Enter ID"}
            className="pl-3 text-lg bg-transparent w-full active:outline-none focus:outline-none"
          />
          {showWarnId ? (
            <span className="absolute text-red-600 right-0">Required</span>
          ) : (
            ""
          )}
        </div>
        <div className={`relative flex border-b-2 border-slate-950 py-2 `}>
          <Image
            src={"/svgs/lock.svg"}
            height={25}
            width={25}
            alt={"lock"}
            className="relative "
          />
          <input
            onChange={(e) => {
              setShowWarnPassword(false);
              setPassword(e.target.value);
            }}
            value={password}
            type={"password"}
            placeholder={"The Strongest Password"}
            className="pl-3 text-lg bg-transparent w-full active:outline-none focus:outline-none"
          />
          {showWarnPassword ? (
            <span className="absolute text-red-600 right-0">Required</span>
          ) : (
            ""
          )}
        </div>

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

export default Login;
