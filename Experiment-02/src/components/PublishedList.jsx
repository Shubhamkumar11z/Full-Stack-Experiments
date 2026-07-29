import { useSelector } from "react-redux";
import { selectPublishedPosts } from "../features/posts/selectors";

function PublishedList() {
  const posts = useSelector(selectPublishedPosts);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Published Posts</h2>

      {posts.length === 0 ? (
        <p>No Published Posts</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid green",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <p>{post.text}</p>

            <small>
              Platform: <b>{post.platform}</b>
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default PublishedList;