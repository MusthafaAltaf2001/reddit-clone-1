const FetchHotPosts = (FetchHotPosts = [], action) => {
  switch (action.type) {
    case "FETCH_HOT_POSTS":
      FetchHotPosts = action.payload;
      break;
    case "FETCH_MORE_HOT_POSTS":
      FetchHotPosts = action.payload;
      break;
    default:
      FetchHotPosts = FetchHotPosts;
      break;
  }
  return FetchHotPosts;
};

export default FetchHotPosts;
