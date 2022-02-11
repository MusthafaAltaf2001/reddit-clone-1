export function HandleHotPosts() {
  return async (dispatch) => {
    return await fetch("http://localhost:3001/hot")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_HOT_POSTS", payload: res }))
      .catch((err) => console.log(err));
  };
}

export function HandleMoreHotPosts() {
  return async (dispatch) => {
    return await fetch("http://localhost:3001/fetchMoreHot")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_MORE_HOT_POSTS", payload: res }))
      .catch((err) => console.log(err));
  };
}

export default { HandleHotPosts, HandleMoreHotPosts };
