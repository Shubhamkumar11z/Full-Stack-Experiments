import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addPost,
  deletePost,
  updatePost,
} from "./features/posts/postslice";

import { changePlatform } from "./features/platforms/platformslice";

function App() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);

  const platform = useSelector(
    (state) => state.platform.selectedPlatform
  );

  const [text, setText] = useState("");

  const [editingId, setEditingId] = useState(null);

  const limits = {
    Twitter: 280,
    Instagram: 2200,
    Facebook: 63206,
    LinkedIn: 3000,
  };

  const limit = limits[platform];

  const handleSubmit = () => {
    if (text.trim() === "") return;

    if (text.length > limit) {
      alert("Character limit exceeded!");
      return;
    }

    if (editingId) {
      dispatch(
        updatePost({
          id: editingId,
          text,
        })
      );

      setEditingId(null);
    } else {
      dispatch(
        addPost({
          id: Date.now(),
          text,
          platform,
        })
      );
    }

    setText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post Composer</h1>

      <input
        type="text"
        value={text}
        placeholder="Enter your post"
        onChange={(e) => setText(e.target.value)}
      />

      <br />
      <br />

      <select
        value={platform}
        onChange={(e) =>
          dispatch(changePlatform(e.target.value))
        }
      >
        <option>Twitter</option>
        <option>Instagram</option>
        <option>Facebook</option>
        <option>LinkedIn</option>
      </select>

      <br />
      <br />

      <p>
        Characters : {text.length} / {limit}
      </p>

      <button onClick={handleSubmit}>
        {editingId ? "Update Post" : "Add Post"}
      </button>

      <hr />

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.text}</h3>

          <p>Platform : {post.platform}</p>

          <button
            onClick={() => {
              setEditingId(post.id);
              setText(post.text);
            }}
          >
            Edit
          </button>

          {" "}

          <button
            onClick={() =>
              dispatch(deletePost(post.id))
            }
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;