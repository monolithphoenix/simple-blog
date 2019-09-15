function posts(state = [], action) {
  switch (action.type) {
    case "GET_POSTS":
      return [...state, ...action.data];
    default:
      return state;
  }
}

export default posts;
