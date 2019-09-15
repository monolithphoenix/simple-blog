import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "../components/Loader";
import PostItem from "../components/PostItem";
// import { columns } from "../antdHelpers";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

const LatestPosts = ({ posts }) => {
  console.log(posts);
  return !posts.length ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <List>
      {posts.map(el => (
        <PostItem {...el} />
      ))}
    </List>
  );
};

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(LatestPosts);
