import React from "react";
import Nav from "./components/navbar/Nav";
import PostsArea from "./components/posts/PostsArea";
import Footer from "./components/footer/Footer";
import SearchTab from "./components/searchTab/SearchTab";
import Profile from "./components/profile/Profile";

function MainScreen() {
  return (
    <>
      <div className=" h-screen flex overflow-auto flex-col">
        {/* <Nav /> */}
        {/* <PostsArea /> */}
        <Profile profilePic="/res/spider.bmp"/>
        {/* <SearchTab /> */}
        <Footer profilePic="/res/spider.bmp"/>
      </div>
    </>
  );
}

export default MainScreen;
