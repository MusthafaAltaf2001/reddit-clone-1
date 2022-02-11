import URL from "../../URL";

export function HandleNewPosts() {
  return async (dispatch) => {
    return await fetch(`${URL}/new`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_NEW_POSTS", payload: res }))
      .catch((err) => console.log(err));
  };
}

export function HandleMoreNewPosts() {
  return async (dispatch) => {
    return await fetch(`${URL}/fetchMoreNew`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_MORE_NEW_POSTS", payload: res }))
      .catch((err) => console.log(err));
  };
}

export default { HandleNewPosts, HandleMoreNewPosts };
