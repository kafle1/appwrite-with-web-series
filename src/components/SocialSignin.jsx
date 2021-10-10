import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { account } from "../services/appwriteConfig";

const SocialSignin = () => {
  const googleAuth = (e) => {
    e.preventDefault();

    try {
      account.createOAuth2Session(
        "google",
        "http://localhost:3000/home",
        "http://localhost:3000/login"
      );
    } catch (e) {
      toast.error(`${e.message}`);
    }
  };

  const facebookAuth = (e) => {
    e.preventDefault();

    try {
      account.createOAuth2Session(
        "facebook",
        "http://localhost:3000/home",
        "http://localhost:3000/login"
      );
    } catch (e) {
      toast.error(`${e.message}`);
    }
  };

  return (
    <div className="container-xl my-3">
      <b>OR:</b>
      <br />

      <button
        className="btn btn-outline-danger my-1 mx-2 "
        onClick={(e) => googleAuth(e)}
      >
        Google
      </button>

      <button
        className="btn btn-outline-primary my-1"
        onClick={(e) => facebookAuth(e)}
      >
        Facebook
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default SocialSignin;
