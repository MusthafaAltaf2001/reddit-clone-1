const FetchNewPosts = (FetchNewPosts = [], action) => {
  switch (action.type) {
    case "FETCH_NEW_POSTS":
      FetchNewPosts = action.payload;
      break;
    case "FETCH_MORE_NEW_POSTS":
      FetchNewPosts = action.payload;
      break;
    default:
      FetchNewPosts = FetchNewPosts;
      break;
  }
  return FetchNewPosts;
};

export default FetchNewPosts;
