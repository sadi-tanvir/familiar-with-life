import React from "react";
import CustomLink from "./CustomLink/CustomLink";
import logo from "../../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';

const Header = () => {
  // firebase
  const [user, loading, error] = useAuthState(auth);

  // routes
  const navigate = useNavigate();
  return (
    <header className="w-full h-16 flex justify-center items-center mt-2">
      <nav className="w-11/12 flex justify-around items-center">
        <img
          onClick={() => navigate("/")}
          className="w-28 md:w-40 cursor-pointer"
          src={logo}
          alt="logo"
        />
        <div className="flex text-white font-bold ml-auto">
          <CustomLink
            className="ml-0 md:ml-3 px-2 px-md-3 py-1 text-xs md:text-lg"
            to="/"
          >
            HOME
          </CustomLink>
          <CustomLink
            className="ml-0 md:ml-3 px-2 px-md-3 py-1 text-xs md:text-lg"
            to="/services"
          >
            SERVICES
          </CustomLink>
          <CustomLink
            className="ml-0 md:ml-3 px-2 px-md-3 py-1 text-xs md:text-lg"
            to="/checkout/:id"
          >
            CHECKOUT
          </CustomLink>
          <CustomLink
            className="ml-0 md:ml-3 px-2 px-md-3 py-1 text-xs md:text-lg"
            to="/blogs"
          >
            BLOGS
          </CustomLink>
          <CustomLink
            className="ml-0 md:ml-3 px-2 px-md-3 py-1 text-xs md:text-lg"
            to="/about"
          >
            ABOUT
          </CustomLink>
          {user ? (
            <button onClick={() => signOut(auth)} className="px-3 py-2 -mt-1 ml-2 bg-slate-600 shadow-md text-white font-bold rounded-md uppercase">
              Logout
            </button>
          ) : (
            <>
              <CustomLink
                className="ml-0 md:ml-3 px-2 px-md-3 py-1 text-xs md:text-lg"
                to="/login"
              >
                LOGIN
              </CustomLink>
              <CustomLink
                className="ml-0 md:ml-3 px-2 px-md-3 py-1 text-xs md:text-lg"
                to="/register"
              >
                REGISTER
              </CustomLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
