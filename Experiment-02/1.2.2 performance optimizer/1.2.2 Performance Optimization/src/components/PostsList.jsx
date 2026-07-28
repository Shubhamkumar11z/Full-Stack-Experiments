import React from "react";
import { useSelector } from "react-redux";
import { selectProgrammingPosts } from "../features/posts/selectors";

function PostsList() {
  const posts = useSelector(selectProgrammingPosts);

  console.log("PostsList rendered");

  return (
    <div>
      <h2>Programming Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.category}</p>
        </div>
      ))}
    </div>
  );
}

export default React.memo(PostsList);