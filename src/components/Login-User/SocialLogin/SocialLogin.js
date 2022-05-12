import React from "react";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  // routes
  const navigate = useNavigate()
  // firebase google login
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // redirect to home page
  if(user){
    navigate('/')
  }

  // google login
  const handleGoogleLogin = () => {
    signInWithGoogle()

  }
  return (
    <div className="w-full my-6">
      {/* <span className="text-red-800 font-semibold">your code is empty</span> */}
      <div className="flex justify-center items-center">
        <div style={{ height: 1 }} className="w-full bg-slate-500"></div>
        <span className="mx-2 font-bold">or</span>
        <div style={{ height: 1 }} className="w-full bg-slate-500"></div>
      </div>
      <div className="flex flex-col">
        <button onClick={handleGoogleLogin} className="px-4 py-2 bg-white text-slate-600 rounded font-bold mt-2 flex shadow-lg">
          <img className="mr-2 w-6" src={google} alt="" />
          sign in with google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
