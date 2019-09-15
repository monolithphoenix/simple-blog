import axios from "axios";
const getData = data => ({
  type: "GET_POSTS",
  data
});

function getFetch() {
  return axios.get("https://simple-blog-api.crew.red/posts");
}

export const asyncData = () => dispatch => {
  getFetch().then(res => dispatch(getData(res.data)));
};
