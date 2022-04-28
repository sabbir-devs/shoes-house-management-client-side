import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [openNav, setOpenNav] = useState(false)
  return (
    <div className="header">
      <div>
        <h1>Warehouse</h1>
      </div>
      <div>
        <nav className={openNav ? " nav-close":"nav-open"}>
          <NavLink className="link-btn" to="/">Home</NavLink>
          <NavLink className="link-btn" to="/mypage">My Page</NavLink>
          <NavLink className="link-btn" to="/blogs">Blogs</NavLink>
          <NavLink className="login-btn" to="/login">Login</NavLink>
        </nav>
        <button onClick={() => {setOpenNav(!openNav)}} className="menu-ico">{openNav ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>}</button>
      </div>
    </div>
  );
};

export default Header;
