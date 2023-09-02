import Link from "next/link";
import React from "react";
import InputField from "./InputField";

function LoginSignup({ pageTitle = "", whichPage = "" }) {
  return (
    <div className="h-full gap-7 w-screen max-w-[480px] relative bg-white bottom-0 m-auto  flex text-black flex-col py-4 px-4 pt-8">
      <Link className="self-start text-2xl font-extrabold" href={"/"}>
        {"<"}
      </Link>
      <h1 className="text-2xl font-bold font-serif mt-[5%] self-start">
        {whichPage === "login" ? (
          <>
            Welcome <br /> Back{" "}
            <p className="text-gray-400 pl-2 text-lg font-mono font-normal">
              We missed you 😀
            </p>
          </>
        ) : (
          <>
            Create Account{" "}
            <p className="font-normal text-lg text-gray-400 pl-2 font-serif">
              You're about to rock!! 🤘
            </p>
          </>
        )}
      </h1>
      {whichPage === "login" ? (
        <form autoComplete="off" className="mt-auto flex flex-col gap-4">
          <InputField
            hintImage="/svgs/id.svg"
            placeholder="User ID"
            altText={"user icon"}
          ></InputField>
          <InputField
            hintImage="/svgs/lock.svg"
            placeholder="Password"
            inputType="password"
            altText={"lock icon"}
          ></InputField>

          <Link href={"forgetPassword"} className=" self-end">
            Forget Password?
          </Link>
          <button
            type="submit"
            className="py-2 rounded-md text-center my-2 text-white font-bold bg-slate-950"
          >
            Log in
          </button>
        </form>
      ) : (
        <form autoComplete="off" className="mt-auto flex flex-col gap-4">
          <InputField
            hintImage="/svgs/userLogin.svg"
            placeholder="User name"
            altText={"id icon"}
          ></InputField>

          <InputField
            hintImage="/svgs/id.svg"
            placeholder="Choose an ID"
            inputType="text"
            altText={"user icon"}
          ></InputField>

          <InputField
            hintImage="/svgs/lock.svg"
            placeholder="Password"
            inputType="password"
            altText={"lock icon"}
          ></InputField>

          <Link
            href={"forgetPassword"}
            className={`${whichPage !== "login" ? "hidden" : ""} self-end`}
          >
            Forget Password?
          </Link>
          <button
            type="submit"
            className="py-2 rounded-md text-center my-2 text-white font-bold bg-slate-950"
          >
            Sign up
          </button>
        </form>
      )}

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
        href={whichPage === "login" ? "/signup" : "/login"}
        className="border-2 rounded-md  py-2 font-semibold border-slate-950 text-center"
      >
        {whichPage !== "login" ? "Log in" : "Sign up"}
      </Link>
    </div>
  );
}

export default LoginSignup;
