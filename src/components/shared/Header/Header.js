import React from "react";
import CustomLink from "./CustomLink/CustomLink";
import logo from "../../../images/logo.png"

const Header = () => {
  return (
    <header className="w-full h-16 flex justify-center items-center">
      <nav className="w-11/12 flex justify-around items-center">
          {/* <div> */}
              <img className="" src={logo} alt="logo" />
          {/* </div> */}
        <div className="flex text-white font-bold ml-auto">
          <CustomLink to="/">HOME</CustomLink>
          <CustomLink to="/reviews">SERVICES</CustomLink>
          <CustomLink to="/dashboard">CHECKOUT</CustomLink>
          <CustomLink to="/blogs">BLOGS</CustomLink>
          <CustomLink to="/about">ABOUT</CustomLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
