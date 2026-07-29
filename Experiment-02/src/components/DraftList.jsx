import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  publishPost,
} from "../features/posts/postSlice";

import { selectDrafts } from "../features/posts/selectors";

function DraftList() {
  const dispatch = useDispatch();

  const drafts = useSelector(selectDrafts);

  return (
    <div style={{ marginTop: "30px" }}>

      <h2>Draft Posts</h2>

      {drafts.length === 0 ? (
        <p>No Drafts</p>
      ) : (
        drafts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <p>{post.text}</p>

            <small>
              Platform: <b>{post.platform}</b>
            </small>

            <br />
            <br />

            <button
              onClick={() => dispatch(publishPost(post.id))}
            >
              Publish
            </button>

            <button
              onClick={() => dispatch(deletePost(post.id))}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DraftList;