import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <main className="flex flex-col p-3 h-full relative">
      <h1 className="self-start text-black font-extrabold text-2xl">UNICHAT</h1>
      <div className="relative w-full h-[50%]">
        <Image src={"/svgs/heroImage.svg"} alt="hero Image" fill={true} />
      </div>
      <section className="relative w-full self-start mt-auto mb-12">
        <h2 className="text-slate-950 text-2xl font-semibold">Welcome</h2>
        <p className="text-gray-600">💕 Connecting people... </p>
        <p className="text-gray-600 mb-6">Bringing hearts Together 💕</p>
        <nav className="flex flex-col justify-center">
          <Link
            className="py-2 rounded-md text-center my-2 text-white font-semibold bg-slate-950"
            href="/login"
            prefetch={true}
          >
            Log in
          </Link>

          <Link className="border-2 rounded-md text-black py-2 font-semibold border-slate-950 text-center"
            href="/signup"
            prefetch={true}
          >
            Sign up
          </Link>
        </nav>
      </section>
    </main>
  );
}

export default HomePage;
