import React from 'react'
import Nav from './components/navbar/Nav'
import PostsArea from './components/posts/PostsArea'
import Footer from './components/footer/Footer'

function MainScreen() {
  return (
    <>
    
    <div className=' h-screen overflow-auto flex flex-col'>
    <Nav />
    <PostsArea />
    <Footer />
    </div>

    </>


  )
}

export default MainScreen