import React from "react";
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

    } catch(e){
      console.log(e.message);
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
    } catch(e){
      console.log(e.message);
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
    </div>
  );
};

export default SocialSignin;
