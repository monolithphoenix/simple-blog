import React from "react";
import { Switch, Route } from "react-router-dom";

import { connect } from "react-redux";
import { asyncData } from "./redux/actions/getPostsActions";

import "antd/dist/antd.css";

import LatestPosts from "./containers/LatestPosts";
import ViewPost from "./components/ViewPost";

class App extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LatestPosts} />
        <Route path="/posts/:postId" component={ViewPost} />
      </Switch>
    );
  }
}

const MSTP = state => ({
  posts: state.posts
});
const MDTP = dispatch => ({
  fetch: () => dispatch(asyncData())
});

export default connect(
  MSTP,
  MDTP
)(App);
