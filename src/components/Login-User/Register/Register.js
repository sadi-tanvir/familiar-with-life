import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-4/12 shadow py-3 px-5">
        <h1 className="font-bold my-4 text-red-600 text-center">Register</h1>
        <form>
          <input
            type="text"
            placeholder="Email"
            className="block w-full px-10 py-2 rounded-2xl text-lg border border-slate-300 shadow-sm placeholder-white font-bold focus:outline-slate-500 mt-3 bg-slate-500 text-white"
            required
          />
          <input
            type="text"
            placeholder="Password"
            className="block w-full px-10 py-2 rounded-2xl text-lg border border-slate-300 shadow-sm placeholder-white font-bold focus:outline-slate-500 mt-3 bg-slate-500 text-white"
            required
          />
          <button className="px-5 py-2 bg-red-500 shadow-md text-white w-full font-bold rounded-2xl uppercase mt-4">
            Register
          </button>
        </form>
        <SocialLogin />

        <p className="ml-3">
        already have an account?
          <span
            className="text-blue-900 font-bold hover:underline cursor-pointer ml-1"
            onClick={() => navigate("/login")}
          >
            please login!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
