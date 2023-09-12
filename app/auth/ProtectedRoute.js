"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";
import { isVerified } from "./verifyToken";
import { useSelector } from "react-redux";

function ProtectedRoute({ showNavbar = false, showFooter = false, children }) {
  const router = useRouter();
  const isAlreadyLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    
  })

  return (
    <>
      <Nav showNavbar={showNavbar} />
      {children}
      <Footer showFooter={showFooter} />
    </>
  );
}

export default ProtectedRoute;
