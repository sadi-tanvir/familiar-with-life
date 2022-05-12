import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-red-500 flex flex-col justify-center items-center py-3">
      <div className="my-2">
        <a href="https://web.facebook.com/" target="_blank">
          <i className="fa-brands fa-facebook text-white"></i>
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <i className="fa-brands fa-youtube text-white ml-5"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
        <i className="fa-brands fa-instagram text-white ml-5"></i>
        </a>
        <a href="https://twitter.com/" target="_blank">
        <i className="fa-brands fa-twitter text-white ml-5"></i>
        </a>
      </div>
      <p className="text-white font-bold">
        Copyright © 2022 tanvir-hossain-sadi
      </p>
    </div>
  );
};

export default Footer;
