import Link from "next/link";
import React from "react";
import InputField from "./InputField";

function LoginSignup({ pageTitle = "", whichPage = "" }) {
  return (
    <div className="h-full gap-7 w-screen max-w-[480px] relative bottom-4 m-auto  flex text-white flex-col p-3 pt-8">
      <Link className="self-start text-2xl font-extrabold" href={"/"}>
        {"<"}
      </Link>
      <h1 className="text-2xl font-bold mt-[5%] self-start">
        {whichPage==="login"?<>Welcome <br /> Back</>:<>Create <br /> Account</>}
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
            className="py-2 rounded-md text-center my-2 text-[#082aed] font-bold bg-white"
          >
            Log in
          </button>
        </form>
      ) : (
        <form autoComplete="off" className="mt-auto flex flex-col gap-4">
          <InputField
            hintImage="/svgs/id.svg"
            placeholder="User name"
            altText={"id icon"}
          ></InputField>

          <InputField
            hintImage="/svgs/user.svg"
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

          <Link href={"forgetPassword"} className={`${whichPage!=="login"?"hidden":""} self-end`}>
            Forget Password?
          </Link>
          <button
            type="submit"
            className="py-2 rounded-md text-center my-2 text-[#082aed] font-bold bg-white"
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
      after:bg-gray-500
      after:absolute
      before:content-['']
      before:h-0.5
      before:w-[45%]
      before:bg-gray-500
      before:absolute
       before:left-0
       after:right-0
       text-gray-400
      "
      >
        Or
      </span>
      <Link
        href={whichPage==="login"?"/signup":"/login"}
        className="border-2 rounded-md  py-2 font-semibold border-white text-center"
      >
        {whichPage!=="login"?"Log in":"Sign up"}
      </Link>
    </div>
  );
}

export default LoginSignup;
