import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import ReactHelmet from "../../shared/Helmet/ReactHelmet";

const Register = () => {
  // state
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });

  // routes
  const navigate = useNavigate();

  // firebase create user
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // handle inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  if (user) {
    navigate("/");
  }

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = info;
    await createUserWithEmailAndPassword(email, password, {
      sendEmailVerification: true,
    });
  };

  return (
    <>
      <ReactHelmet title="Register" />

      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-4/12 shadow py-3 px-5">
          <h1 className="font-bold my-4 text-red-600 text-center">Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              className="block w-full px-10 py-2 rounded-2xl text-lg border border-slate-300 shadow-sm placeholder-white font-bold focus:outline-slate-500 mt-3 bg-slate-500 text-white"
              required
            />
            <input
              onChange={handleChange}
              name="password"
              type="password"
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
    </>
  );
};

export default Register;
