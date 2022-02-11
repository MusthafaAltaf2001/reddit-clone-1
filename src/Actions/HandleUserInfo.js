import URL from "../ApiUrl/URL";

export function HandleUserInfo() {
  return async (dispatch) => {
    return await fetch(`${URL}/fetchUserInfo`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_USER_INFO", payload: res }))
      .catch((err) => console.log(err));
  };
}

export default { HandleUserInfo };
