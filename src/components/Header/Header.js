import React from "react";
import "./Header.css";
import logo from "../../logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";

function Header() {
  let notification = true;
  return (
    <div className="header__main">
      <div className="header__bar__main">
        <div className="header__logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hygge</h2>
        </div>
        <div className="header__nav">
          <SearchIcon />
          <div className="cart__section">
            <LocalGroceryStoreOutlinedIcon />
            <div className={notification ? "active" : "not__active"}></div>
          </div>
          <PermIdentityOutlinedIcon />
        </div>
      </div>
      <div className="header__bar__main__mob  classalen">
        <div className="hamburger">
          <DragHandleOutlinedIcon />
        </div>
        <div className="header__logo">
          <h2>Hygge</h2>
        </div>
        <div className="header__nav">
          <div className="cart__section">
            <LocalGroceryStoreOutlinedIcon />
            <div className={notification ? "active" : "not__active"}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
