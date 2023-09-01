import React, { Suspense } from 'react';

const Post = React.lazy(() => import('./Post'));

function PostsArea() {
  return (
    <div className='flex overflow-auto flex-col'>
      <Suspense fallback={<div>Loading...</div>}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Suspense>
    </div>
  );
}

export default PostsArea;
