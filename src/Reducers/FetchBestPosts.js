const FetchBestPosts = (FetchBestPosts=[], action) => {
    switch(action.type) {
        case 'FETCH_BEST_POSTS':
            FetchBestPosts = action.payload;
            break;
        case 'FETCH_MORE_BEST_POSTS':
            FetchBestPosts = action.payload;
            break;
        default:
            FetchBestPosts = FetchBestPosts;
            break;
    }
    return FetchBestPosts;
}

export default FetchBestPosts;