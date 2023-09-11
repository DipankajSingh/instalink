"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";
import { isVerified } from "../data/authSlice";

function ProtectedRoute({ showNavbar = false, showFooter = false, children }) {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isVerified()) {
    if (typeof window !== "undefined") {
    router.push("/login")
    }
    return null
  }else{
    router.push("/feed")
  }

  return (
    <>
      <Nav showNavbar={showNavbar} />
      {children}
      <Footer showFooter={showFooter} />
    </>
  );
}

export default ProtectedRoute;
