import "./App.css";

import PostComposer from "./components/PostComposer";
import DraftList from "./components/DraftList";
import PublishedList from "./components/PublishedList";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="app">

      <h1>Social Media Post Manager</h1>

      <PostComposer />

      <DraftList />

      <PublishedList />

      <Statistics />

    </div>
  );
}

export default App;