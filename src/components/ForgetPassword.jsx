import React, { useState } from "react";
import { account } from "../services/appwriteConfig";

const ForgetPassword = () => {
  const [userEmail, setuserEmail] = useState("");

  const forgetPassword = async (e) => {
    e.preventDefault();

  await  account.createRecovery(userEmail, 'http://localhost:3000/reset-password')
  console.log('Email has been sent');
  };

  return (
    <div className="container-xl p-3 my-5 border">
      <h2 className="text-center"> Password Recovery</h2>
      <form className="container">
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Enter you email
          </label>
          <input
            onChange={(e) => {
              setuserEmail(e.target.value)
            }}
            type="email"
            name="password"
            required
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button className="btn btn-primary" onClick={(e)=> forgetPassword(e)} >Reset password</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
