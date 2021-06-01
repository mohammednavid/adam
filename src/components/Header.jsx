import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../assets/styles/Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // for trigger sidebar with the help of state
  const [sidebar, setSidebar] = useState(true);

  // function to open the sidebar
  const openSidebar = () => {
    setSidebar(true);
  };
  // function to close the Sidebar
  const closeSidebar = () => {
    setSidebar(false);
  };
  return (
    <div className="header">
      {/* <Modal modal={modal} setModal={setModal} /> */}
      {/* Sidebar */}
      <input
        type="checkbox"
        hidden
        className={`${sidebar ? "openSidebarMenu" : ""}`}
        id="openSidebarMenu"
      />
      <label
        htmlFor={`${sidebar ? "openSidebarMenu" : ""}`}
        className="sidebarIconToggle"
        onClick={openSidebar}
      >
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li onClick={closeSidebar}>
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
          </li>
          <li onClick={closeSidebar}>
            <a>About Us</a>
          </li>
          <li onClick={closeSidebar}>
            <a>Services</a>
          </li>
          <li onClick={closeSidebar}>
            <a>Login</a>
          </li>
          <li>
            {/* this button will handle modal popup actions */}
            <a
              className="header__button"
              onClick={() =>setSidebar(false)}
            >
              Sign Up Now
            </a>
          </li>
        </ul>
      </div>
      {/* Sidebar */}
      <Link to="/" className="header__logo">
        <img src={logo} alt="Logo" className="header__logoImg" />
      </Link>
      <ul className="header__tabs">
        <NavLink activeClassName="active" to="/">
          <li>Home</li>
        </NavLink>
        <li>About Us</li>
        <li>Services</li>
        <li>Login</li>
        <li>
          <a
            className="header__button"
            onClick={() =>setSidebar(false)}
          >
            Sign Up Now
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
