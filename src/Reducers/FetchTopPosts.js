const FetchTopPosts = (FetchTopPosts = [], action) => {
  switch (action.type) {
    case "FETCH_TOP_POSTS":
      FetchTopPosts = action.payload;
      break;
    case "FETCH_MORE_TOP_POSTS":
      FetchTopPosts = action.payload;
      break;
    default:
      FetchTopPosts = FetchTopPosts;
      break;
  }
  return FetchTopPosts;
};

export default FetchTopPosts;
