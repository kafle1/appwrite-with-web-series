import React, { useState } from "react";
import { useHistory } from "react-router";
import { account } from "../services/appwriteConfig";

const ResetPassword = () => {

  const history = useHistory();
  const [password, setpassword] = useState({
    newPassword: "",
    repeatedPassword: "",
  });
  const changePassword = async (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const secret = urlParams.get("secret");

    await account.updateRecovery(
      userId,
      secret,
      password.newPassword,
      password.repeatedPassword
    );
    history.push("/home");
  };

  return (
    <div>
      <div className="container-xl p-3 my-5 border">
        <h2 className="text-center"> Reset your password </h2>
        <form className="container">
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Enter your new password :
            </label>
            <input
              required
              type="password"
              name="password"
              onChange={(e) => {
                setpassword({
                  ...password,
                  newPassword: e.target.value,
                });
              }}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Repeat your new password :
            </label>
            <input
              required
              type="password"
              name="password"
              onChange={(e) => {
                setpassword({
                  ...password,
                  repeatedPassword: e.target.value,
                });
              }}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button
            className="btn btn-success"
            type="submit"
            onClick={(e) => changePassword(e)}
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
