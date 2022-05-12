import React from "react";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";

const SocialLogin = () => {
  return (
    <div className="w-full my-6">
      {/* <span className="text-red-800 font-semibold">your code is empty</span> */}
      <div className="flex justify-center items-center">
        <div style={{ height: 1 }} className="w-full bg-slate-500"></div>
        <span className="mx-2 font-bold">or</span>
        <div style={{ height: 1 }} className="w-full bg-slate-500"></div>
      </div>
      <div className="flex flex-col">
        <button className="px-4 py-2 bg-white text-slate-600 rounded font-bold mt-2 flex shadow-lg">
          <img className="mr-2 w-6" src={google} alt="" />
          sign in with google
        </button>
        <button className="px-4 py-2 bg-white text-slate-600 rounded font-bold mt-3 flex shadow-lg">
          <img className="mr-2 w-6" src={github} alt="" />
          sign in with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
