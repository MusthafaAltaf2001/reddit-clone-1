const FetchUserInfo = (FetchUserInfo = {}, action) => {
  switch (action.type) {
    case "FETCH_USER_INFO":
      FetchUserInfo = action.payload;
      break;
    default:
      FetchUserInfo = FetchUserInfo;
      break;
  }
  return FetchUserInfo;
};

export default FetchUserInfo;
