import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/posts/postSlice";
import { changePlatform } from "../features/platform/platformSlice";

function PostComposer() {
  const dispatch = useDispatch();

  const platform = useSelector((state) => state.platform.current);
  const limit = useSelector((state) => state.platform.limit);

  const [text, setText] = useState("");

  const handleSave = () => {
    if (!text.trim()) return;

    dispatch(addPost(text, platform));

    setText("");
  };

  return (
    <div className="composer">

      <label>Platform</label>

      <select
        value={platform}
        onChange={(e) => dispatch(changePlatform(e.target.value))}
      >
        <option>Twitter</option>
        <option>Facebook</option>
        <option>Instagram</option>
        <option>LinkedIn</option>
      </select>

      <br />
      <br />

      <textarea
        placeholder="Write your post..."
        value={text}
        maxLength={limit}
        onChange={(e) => setText(e.target.value)}
      />

      <p>
        {text.length} / {limit}
      </p>

      <button onClick={handleSave}>
        Save Draft
      </button>
    </div>
  );
}

export default PostComposer;