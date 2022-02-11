import URL from "../../URL";

export function HandleTopPosts() {
  return async (dispatch) => {
    return await fetch(`${URL}/top`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_TOP_POSTS", payload: res }))
      .catch((err) => console.log(err));
  };
}

export function HandleMoreTopPosts() {
  return async (dispatch) => {
    return await fetch(`${URL}/fetchMoreTop`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_MORE_TOP_POSTS", payload: res }))
      .catch((err) => console.log(err));
  };
}

export default { HandleTopPosts, HandleMoreTopPosts };
