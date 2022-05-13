import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import ModalBody from "../../re-usable-components/Modal";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  // state
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });

  // rotes
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  // firebase signin
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // handle inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = info;
    signInWithEmailAndPassword(email, password);

    // success alert
    Swal.fire({
      title: error || "Register Successfull.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((res) => {
      if (res) {
        navigate(from, { replace: true });
      }
    });
  };

  return (
    <>
    <Helmet>
      <title>Login - Familiar With Life</title>
    </Helmet>
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-4/12 shadow py-3 px-5">
        <h1 className="font-bold my-4 text-red-600 text-center">Login</h1>
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
            Login
          </button>
        </form>
        <SocialLogin />
        <p
          onClick={handleShow}
          className="text-blue-700 font-semibold cursor-pointer mt-3"
          href="#"
        >
          forgot password?
        </p>
        <p className="">
          Don't have an account?
          <span
            className="text-blue-900 font-bold hover:underline cursor-pointer ml-1"
            onClick={() => navigate("/register")}
          >
            please register!
          </span>
        </p>
        <ModalBody show={show} setShow={setShow} />
      </div>
    </div>
    </>
  );
};

export default Login;
