import React, { Suspense } from "react";

const Post = React.lazy(() => import("./Post"));

function PostsArea() {
  return (
    <div className="flex overflow-auto flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <Post
          postDescription="I have no idea whats going on 🤷‍♂️🤷‍♂️"
          userId="ankitvishwakarma"
          userName="AK Vishwakarma"
          postImageUrl="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
        />
        <Post
        postDescription="I dont know where she went"
          userId="_saynorita"
          userName="SayNoRita"
          profilePic="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
          postImageUrl="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
        />
        <Post
        postDescription="I'm not the coolest guy alive 😐😑"
          userId="_dipankaj"
          userName="Dipankaj"
          profilePic="/res/spider.bmp"
          postImageUrl="/defaults_res/defaultUser.jpg"
        />
      </Suspense>
    </div>
  );
}

export default PostsArea;
