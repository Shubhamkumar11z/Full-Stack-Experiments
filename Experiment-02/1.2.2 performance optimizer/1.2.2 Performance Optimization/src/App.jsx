import { useState } from "react";
import PostsList from "./components/PostsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Experiment 1.2.2</h1>
      <h2>Memoized Selectors using Redux Toolkit</h2>

      <button onClick={() => setCount(count + 1)}>
        Re-render App ({count})
      </button>

      <PostsList />
    </div>
  );
}

export default App;