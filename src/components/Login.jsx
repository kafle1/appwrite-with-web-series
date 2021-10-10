import React, { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../services/appwriteConfig";
import SocialSignin from "./SocialSignin";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
  
    try {
      await account.createSession(userDetails.email, userDetails.password);
      history.push("/home");
    } catch (error) {
      toast.error(`${error.message}`)

    }
  };

  return (
    <div>
      <h2 className="mt-5 text-center">Super Auth</h2>
      <h3 className=" text-center">Login</h3>
      <form className="container">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                email: e.target.value,
              });
            }}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
            required
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <span>First time here ? </span>
          <Link to="/signup">
            <button className="btn btn-primary mx-1">Signup</button>
          </Link>
        </div>

        <div>
          <span>Forget password ? </span>
          <Link to="/forget-password">
            <button className="btn btn-danger mx-1">Forget Password</button>
          </Link>
        </div>

        <button
          type="submit"
          onClick={(e) => loginUser(e)}
          className="btn btn-success"
        >
          Login
        </button>
      </form>
      <SocialSignin />

      
    </div>
  );
};

export default Login;
