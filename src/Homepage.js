import React, { useEffect, useState } from "react";
import SortOption from "./SortOption/SortOption";
import Posts from "./Posts/Posts";
import CreatePost from "./CreatePost/CreatePost";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { HandleMoreBestPosts } from "./Actions/SortOptionActions/HandleBestPosts";
import { HandleMoreHotPosts } from "./Actions/SortOptionActions/HandleHotPosts";
import { HandleMoreNewPosts } from "./Actions/SortOptionActions/HandleNewPosts";
import { HandleMoreTopPosts } from "./Actions/SortOptionActions/HandleTopPosts";
import { HandleBestPosts } from "./Actions/SortOptionActions/HandleBestPosts";
import { useSearchParams } from "react-router-dom";
import URL from "./URL";

function Homepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const code = searchParams.get("code");
  let redditUser = localStorage.getItem("redditUser");
  localStorage.setItem("authCode", code);
  // let authCode = localStorage.getItem("authCode");

  // console.log("start test");
  fetch(`${URL}/getRequester`)
    .then((res) => res.json())
    .then((res) => console.log(res));
  //   .then(() => console.log("end test"));

  const setRequester = async () => {
    // await fetch(`${URL}/getRequeste`)
    //   .then((res) => res.json())
    //   .then((res) => {
    let authCode = localStorage.getItem("authCode");
    if (redditUser == "null") {
      fetch(`${URL}/logi`)
        .then((authUrl) => authUrl.json())
        .then((authUrl) => {
          localStorage.setItem("redditUser", "loggedIn");
          window.location.replace(authUrl);
        });
    } else {
      fetch(`${URL}/?code=${authCode}`)
        .then((res) => res.json())
        // .then((res) => localStorage.setItem("redditUser", "loggedIn"))
        .catch((err) => console.log(err));
    }
    // });
  };

  // const checkUserAuth = async () => {
  //   let redditUser = localStorage.getItem("redditUser");

  //   if (redditUser == "null") {
  // fetch(`${URL}/login`)
  //       .then((authUrl) => authUrl.json())
  //       .then((authUrl) => {
  //         localStorage.setItem("redditUser", "loggedIn");
  //         window.location.replace(authUrl);
  //       });
  //   } else {
  //     // let authCode = localStorage.getItem("authCode");
  //     await fetch(`${URL}/?code=${code}`)
  //       .then((res) => res.json())
  //       // .then((res) => localStorage.setItem("redditUser", "loggedIn"))
  //       .catch((err) => console.log(err));
  //   }
  // };

  const checkLogged = () => {
    const isLogged = localStorage.getItem("isLogged");

    if (code == null) {
      localStorage.setItem("isLogged", "true");
      console.log("logged test");
      dispatch({ type: "FETCH_AUTH_CODE", payload: code });
    }
  };

  useEffect(async () => {
    setRequester();
    // await checkUserAuth();
    // checkLogged();
    // let isLogged = localStorage.getItem("isLogged");
    if (redditUser == "loggedIn") {
      await dispatch({ type: "BEST", payload: null });
      await dispatch(HandleBestPosts());
    }
  }, []);

  const sortOptionType = useSelector((state) => state.SortOptionType);
  let posts = useSelector((state) => state.FetchBestPosts);
  console.log(posts);
  posts = useSelector((state) => {
    if (sortOptionType == "BEST") {
      return state.FetchBestPosts;
    } else if (sortOptionType == "HOT") {
      return state.FetchHotPosts;
    } else if (sortOptionType == "NEW") {
      return state.FetchNewPosts;
    } else {
      return state.FetchTopPosts;
    }
  });

  const fetchMorePosts = async () => {
    if (sortOptionType == "BEST") {
      await dispatch(HandleMoreBestPosts());
    } else if (sortOptionType == "HOT") {
      await dispatch(HandleMoreHotPosts());
    } else if (sortOptionType == "NEW") {
      await dispatch(HandleMoreNewPosts());
    } else {
      await dispatch(HandleMoreTopPosts());
    }
  };

  return (
    <div>
      <CreatePost></CreatePost>
      <SortOption></SortOption>
      <div>
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchMorePosts}
          hasMore={true}
          loader={<h4 style={{ color: "white" }}>Loading...</h4>}
        >
          {posts.map((post) => (
            <Posts key={post.id} post={post}></Posts>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Homepage;
