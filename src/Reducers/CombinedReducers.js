import PopUpButton from "./PopUpButtonState";
import SortOptionType from "./SortOptionsType";
import FetchBestPosts from "./FetchBestPosts";
import FetchHotPosts from "./FetchHotPosts";
import FetchNewPosts from "./FetchNewPosts";
import FetchTopPosts from "./FetchTopPosts";
import authCode from "./authCode";
import FetchUserInfo from "./FetchUserInfo";
// import GetSubredditIconReducer from "./GetSubredditIconReducer";
import { combineReducers } from "redux";

const CombinedReducers = combineReducers({
  PopUpButtonState: PopUpButton,
  SortOptionType: SortOptionType,
  FetchBestPosts: FetchBestPosts,
  FetchHotPosts: FetchHotPosts,
  FetchNewPosts: FetchNewPosts,
  FetchTopPosts: FetchTopPosts,
  authCode: authCode,
  FetchUserInfo: FetchUserInfo,
  // GetSubredditIconReducer: GetSubredditIconReducer
});

export default CombinedReducers;
