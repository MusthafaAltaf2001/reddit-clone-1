import React, { useEffect, useState } from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import popular from "./popular.png";
import all from "./all.png";
import redditLive from "./redditLive.png";
import redditRecapPage from "./redditRecapPage.png";
import karmaSymbol from "./karmaSymbol.png";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { OpenPopUp, ClosePopUp } from "../Actions/HandlePopUp";
import { Link } from "react-router-dom";
import { HandleUserInfo } from "../Actions/HandleUserInfo";

function Header(props) {
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(HandleUserInfo());
  }, []);
  // dispatch(handleUserInfo());
  const userInfo = useSelector((state) => state.FetchUserInfo);
  // const getUserInfo = () => {
  //   dispatch(handleUserInfo());
  // };

  const searchHistory = [{ title: "r/monash" }, { title: "r/memes" }];

  const isLogged = localStorage.getItem("isLogged");

  return (
    <div className="header">
      <Link to="/">
        <div className="header_logo">
          <img
            className="header_logo_image"
            src="https://download.logo.wine/logo/Reddit/Reddit-Horizontal-White-Logo.wine.png"
          ></img>
        </div>
      </Link>
      {isLogged == "true" ? (
        <div className="header_dropdown">
          <div className="header_dropdown_homeicon">
            <HomeIcon fontSize="medium"></HomeIcon>
          </div>
          <div className="header_dropdown_hometext">
            <span>Home</span>
          </div>
          <div className="header_dropdown_expandicon">
            <ExpandMoreIcon className="header_dropdown_expand"></ExpandMoreIcon>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <Input
        sx={{ color: "#d7dadc" }}
        className="header_search_input"
        placeholder="Search Reddit"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "white" }} fontSize="large"></SearchIcon>
          </InputAdornment>
        }
      />
      {isLogged == "true" ? (
        <div className="header_auth">
          <div className="header_auth_div">
            <img className="header_auth_icon" src={popular}></img>
          </div>
          <div className="header_auth_div">
            <img className="header_auth_icon" src={all}></img>
          </div>
          <div className="header_auth_div">
            <img className="header_auth_icon" src={redditLive}></img>
          </div>
          <div className="header_auth_div">
            <img className="header_auth_icon" src={redditRecapPage}></img>
          </div>
          <div className="header_auth_div_vertical_line"></div>
          <div className="header_auth_div_icon">
            <i
              style={{ color: "#D7DADC", fontSize: "23px" }}
              class="bi bi-chat-dots"
            ></i>
          </div>
          <div className="header_auth_div_icon">
            <i
              class="bi bi-bell"
              style={{ color: "#D7DADC", fontSize: "23px" }}
            ></i>
          </div>
          <div className="header_auth_div_icon">
            <i
              class="bi bi-plus-lg"
              style={{ color: "#D7DADC", fontSize: "23px" }}
            ></i>
          </div>
          <div className="header_accountinfo">
            <div className="header_accountinfo_flex">
              <div className="header_accountInfo_circle"></div>
              <img
                className="header_accountInfo_avatar_img"
                src={userInfo.icon_img}
              />
              <div className="header_accountinfo_userinfo">
                <div className="header_accountinfo_userinfo_name">
                  {userInfo.name}
                </div>
                <div className="header_accountinfo_userinfo_karma">
                  <img
                    style={{ width: "14px", height: "14px" }}
                    src={karmaSymbol}
                  ></img>
                  {userInfo.total_karma} karma
                </div>
              </div>
            </div>
            <div className="header_dropdown_expandicon">
              <ExpandMoreIcon className="header_dropdown_expand"></ExpandMoreIcon>
            </div>
          </div>
        </div>
      ) : (
        <div className="header_auth">
          <Link to="/login">
            <div onClick={() => dispatch(OpenPopUp())} className="header_login">
              Log In
            </div>
          </Link>
          <div className="header_signup">Sign Up</div>
        </div>
      )}
    </div>
  );
}

export default Header;
