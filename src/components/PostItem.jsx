import React from "react";
import styled from "styled-components";

const Post = styled.li`
  background: #ccc;
  margin: 5px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostItem = ({ id, title, date, author }) => {
  return (
    <Post>
      <h2>{title}</h2>
      <p>
        Posted by {author} at {date}
      </p>
    </Post>
  );
};

export default PostItem;
