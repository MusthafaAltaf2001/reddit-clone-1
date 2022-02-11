import URL from "../../URL";

export function HandleBestPosts() {
  return async (dispatch) => {
    return await fetch(`${URL}/best`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_BEST_POSTS", payload: res }))
      .catch((err) => console.log(err));
  };
}

export function HandleMoreBestPosts() {
  return async (dispatch) => {
    return await fetch(`${URL}/fetchMoreBest`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_MORE_BEST_POSTS", payload: res }))
      .catch((err) => console.log(err));
  };
}

export default { HandleBestPosts, HandleMoreBestPosts };
