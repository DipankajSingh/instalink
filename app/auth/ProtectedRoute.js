'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";

function ProtectedRoute({ showNavbar = false, showFooter = false, children }) {
  const router = useRouter();
  const authen = useSelector((state) => state.authentication.authenticated);

  if (!authen) {
    if (typeof window !== "undefined") {
      router.push("/login"); // Redirect to the login page
    }
    return null;
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
