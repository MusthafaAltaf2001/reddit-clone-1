const authCode = (authCode = {}, action) => {
  switch (action.type) {
    case "FETCH_AUTH_CODE":
      authCode = action.payload;
      break;
    default:
      authCode = authCode;
      break;
  }
  return authCode;
};

export default authCode;
