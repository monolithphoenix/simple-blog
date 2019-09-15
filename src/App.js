import React, { Router, Route } from "react";
import LatestPosts from "./containers/LatestPosts";
import ViewPost from "./components/ViewPost";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LatestPosts} />
      <Route path=" /posts/:postId" component={ViewPost} />
    </Router>
  );
}

export default App;
