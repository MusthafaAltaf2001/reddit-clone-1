export function HandleUserInfo() {
  return async (dispatch) => {
    return await fetch("http://localhost:3001/fetchUserInfo")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_USER_INFO", payload: res }))
      .catch((err) => console.log(err));
  };
}

export default { HandleUserInfo };
