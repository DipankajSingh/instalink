import React from "react";
import Nav from "./components/navbar/Nav";
import PostsArea from "./components/posts/PostsArea";
import Footer from "./components/footer/Footer";
import SearchTab from "./components/searchTab/SearchTab";

function MainScreen() {
  return (
    <>
      <div className=" h-screen overflow-auto flex flex-col">
        {/* <Nav /> */}
        {/* <PostsArea /> */}
        <SearchTab />
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
