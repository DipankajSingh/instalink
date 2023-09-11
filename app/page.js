"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "./data/authSlice";
import { verify_URL } from "./components/apiRoutes";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  // should i redirect to feed if logged in already
  useEffect(() => {
    const token = localStorage.getItem("token");

    async function fetchData() {
      if (token) {
        try {
          const res = await fetch(verify_URL, {
            method: "POST",
            headers: {
              authorization: token,
            },
          });

          const result = await res.json();
          console.log(result);
          if (result.success === true) {
            dispatch(login());

            console.log(useSelector((state) => state.auth.isLoggedIn));
            
            router.push("/feed");
          } else {
            localStorage.removeItem("token");
            router.push("/login");
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  });

  return (
    <div className="h-full w-full bg-white text-white max-w-[480px] relative m-auto ">
      <main className="flex flex-col p-3 h-full relative">
        <h1
          className={`self-start text-black font-extrabold text-2xl font-appTitle`}
        >
          InstaLink
        </h1>
        <div className="relative w-full h-[50%]">
          <Image src={"/svgs/heroImage.svg"} alt="hero Image" fill={true} />
        </div>
        <section className="relative w-full self-start mt-auto mb-12">
          <h2 className="text-slate-950 text-2xl pl-14 font-mono font-semibold mb-4">
            Welcome
          </h2>
          <p className="text-slate-800 text-2xl font-tagline">
            💕 Connecting people
          </p>
          <p className="text-slate-800 text-2xl font-tagline mb-9">
            Bringing hearts Together 💕
          </p>
          <nav className="flex flex-col justify-center">
            <Link
              className="py-2 rounded-md text-center my-2 text-white font-semibold bg-slate-950"
              href="/login"
              prefetch={true}
            >
              Log in
            </Link>

            <Link
              className="border-2 rounded-md text-black py-2 font-semibold border-slate-950 text-center"
              href="/signup"
              prefetch={true}
            >
              Sign up
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
