import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
      signOut(auth).then(() => {
        
      }).catch((error) => {
        
      });
    }
  return (
    <div className="header">
      <div>
        <Link to="/"><h1 className="title">Shoes House</h1></Link>
      </div>
      <div>
        <nav className={openNav ? " nav-close":"nav-open"}>
          <NavLink className="link-btn" to="/">Home</NavLink>
          {user && 
            <>
              <NavLink className="link-btn" to="/manageitems">Manage Items</NavLink>
              <NavLink className="link-btn" to="/additems">Add Item</NavLink>
              <NavLink className="link-btn" to="/myitems">My items</NavLink>
            </>
          }
          <NavLink className="link-btn" to="/blogs">Blogs</NavLink>
          {!user ? <NavLink className="login-btn" to="/login">Login</NavLink>:
          <NavLink onClick={() => handleSignOut()} className="login-btn" style={{background:'red'}} to="/login">Logout</NavLink>}
        </nav>
        <button onClick={() => {setOpenNav(!openNav)}} className="menu-ico">{openNav ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>}</button>
      </div>
    </div>
  );
};

export default Header;
