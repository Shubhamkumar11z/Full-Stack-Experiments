import { useState } from "react";
import "./App.css";

function App() {
  const limits = {
    Twitter: 280,
    Facebook: 63206,
    Instagram: 2200,
    LinkedIn: 3000,
  };

  const [post, setPost] = useState("");
  const [platform, setPlatform] = useState("");
  const [image, setImage] = useState(null);

  const [drafts, setDrafts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const currentLimit = platform ? limits[platform] : 0;
  const remaining = currentLimit - post.length;
  const exceedsLimit = platform && post.length > currentLimit;

  const clearForm = () => {
    setPost("");
    setPlatform("");
    setImage(null);
    setEditingIndex(null);

    // Clears selected file from the input
    const fileInput = document.getElementById("imageInput");
    if (fileInput) fileInput.value = "";
  };

  const saveDraft = () => {
    if (post.trim() === "") {
      alert("Please write something first!");
      return;
    }

    const draft = {
      post,
      platform,
      image: image ? image.name : "No Image",
      time: new Date().toLocaleString(),
    };

    if (editingIndex !== null) {
      const updated = [...drafts];
      updated[editingIndex] = draft;
      setDrafts(updated);
    } else {
      setDrafts([...drafts, draft]);
    }

    clearForm();
  };

  const editDraft = (index) => {
    setPost(drafts[index].post);
    setPlatform(drafts[index].platform);
    setEditingIndex(index);
  };

  const deleteDraft = (index) => {
    const updated = drafts.filter((_, i) => i !== index);
    setDrafts(updated);
  };

  const publishPost = () => {
    if (post.trim() === "") {
      alert("Please write something first!");
      return;
    }

    alert("✅ Post Published Successfully!");
    clearForm();
  };

  return (
    <div className="container">
      <div className="card">

        <h1>📱 Social Media Post Composer</h1>

        <textarea
          placeholder="Write your post here..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <h3>Select Platform</h3>

        <div className="platforms">
          {Object.keys(limits).map((item) => (
            <label key={item}>
              <input
                type="radio"
                name="platform"
                value={item}
                checked={platform === item}
                onChange={handlePlatformChange}
              />
              {item}
            </label>
          ))}
        </div>

        <div className="info">
          <p>
            <strong>Characters:</strong> {post.length}
          </p>

          {platform && (
            <p>
              <strong>Limit:</strong> {currentLimit}
            </p>
          )}

          {platform && (
            <p className={remaining < 20 ? "warning" : ""}>
              Remaining Characters: {remaining}
            </p>
          )}
        </div>

        {exceedsLimit && (
          <p className="error">
            ❌ Character limit exceeded!
          </p>
        )}

        <h3>Attach Image</h3>

        <input
          id="imageInput"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {image && (
          <p className="success">
            ✔ {image.name}
          </p>
        )}

        <div className="buttonGroup">

          <button
            onClick={publishPost}
            disabled={!platform || exceedsLimit}
          >
            Publish Post
          </button>

          <button
            className="draftBtn"
            onClick={saveDraft}
          >
            {editingIndex !== null ? "Update Draft" : "Save Draft"}
          </button>

          <button
            className="clearBtn"
            onClick={clearForm}
          >
            Clear
          </button>

        </div>

        <hr />

        <h2>📂 Saved Drafts</h2>

        {drafts.length === 0 ? (
          <p>No Drafts Available</p>
        ) : (
          drafts.map((draft, index) => (
            <div className="draftCard" key={index}>

              <p>
                <strong>Platform:</strong> {draft.platform || "Not Selected"}
              </p>

              <p>
                <strong>Post:</strong> {draft.post}
              </p>

              <p>
                <strong>Image:</strong> {draft.image}
              </p>

              <p>
                <strong>Saved:</strong> {draft.time}
              </p>

              <div className="draftButtons">

                <button
                  className="edit"
                  onClick={() => editDraft(index)}
                >
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => deleteDraft(index)}
                >
                  Delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default App;