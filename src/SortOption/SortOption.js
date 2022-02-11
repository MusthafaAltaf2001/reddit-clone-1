import React, { useEffect } from "react";
import "./SortOption.css";
import RocketIcon from "@mui/icons-material/Rocket";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useDispatch } from "react-redux";
import { HandleBestPosts } from "../Actions/SortOptionActions/HandleBestPosts";
import { HandleHotPosts } from "../Actions/SortOptionActions/HandleHotPosts";
import { HandleNewPosts } from "../Actions/SortOptionActions/HandleNewPosts";
import { HandleTopPosts } from "../Actions/SortOptionActions/HandleTopPosts";

function SortOption() {
  const dispatch = useDispatch();

  const handleBestPosts = () => {
    dispatch({ type: "BEST", payload: null });
    dispatch(HandleBestPosts());
  };

  const handleHotPosts = () => {
    dispatch({ type: "HOT", payload: null });
    dispatch(HandleHotPosts());
  };

  const handleNewPosts = () => {
    dispatch({ type: "NEW", payload: null });
    dispatch(HandleNewPosts());
  };

  const handleTopPosts = () => {
    dispatch({ type: "TOP", payload: null });
    dispatch(HandleTopPosts());
  };

  useEffect(() => {
    // handleBestPosts();
  }, []);

  return (
    <div className="sortoption">
      <div onClick={handleBestPosts} className="sortoption_sort">
        <RocketIcon className="sortoption_sort_icon"></RocketIcon>
        <span>Best</span>
      </div>
      <div onClick={handleHotPosts} className="sortoption_sort">
        <WhatshotIcon className="sortoption_sort_icon"></WhatshotIcon>
        <span>Hot</span>
      </div>
      <div onClick={handleNewPosts} className="sortoption_sort">
        <NewReleasesIcon className="sortoption_sort_icon"></NewReleasesIcon>
        <span>New</span>
      </div>
      <div onClick={handleTopPosts} className="sortoption_sort">
        <TrendingUpIcon className="sortoption_sort_icon"></TrendingUpIcon>
        <span>Top</span>
      </div>
    </div>
  );
}

export default SortOption;
