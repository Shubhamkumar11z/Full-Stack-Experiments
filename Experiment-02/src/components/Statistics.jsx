import React from "react";
import { useSelector } from "react-redux";
import {
  selectDraftCount,
  selectPublishedCount,
} from "../features/posts/selectors";

function Statistics() {
  const drafts = useSelector(selectDraftCount);
  const published = useSelector(selectPublishedCount);
  const platform = useSelector((state) => state.platform.current);

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Statistics</h2>

      <p>
        <strong>Current Platform:</strong> {platform}
      </p>

      <p>
        <strong>Draft Posts:</strong> {drafts}
      </p>

      <p>
        <strong>Published Posts:</strong> {published}
      </p>
    </div>
  );
}

export default React.memo(Statistics);