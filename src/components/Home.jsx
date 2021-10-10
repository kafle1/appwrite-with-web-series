import React, { useEffect, useState } from "react";
import { account } from "../services/appwriteConfig";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState();

  const fetchUser = async () => {
    try {
      const data = await account.get();
      setUserDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userDetails]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await account.deleteSession("current");
      history.push("/");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    try {
      await account.delete();
      history.push("/");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const secret = urlParams.get("secret");

  if (userId) {
    account
      .updateVerification(userId, secret)
      .then(() => {
        toast.success("User is verified!");
        history.push("/home");
      })
      .catch((e) => {
        toast.error("Verification failed");
        console.log(e);
      });
  }

  if (userDetails) {
    return (
      <div className="container-xxl border mt-5 p-3">
        <h3 className="text-center"> Super Auth </h3>
        <h6 className="d-flex justify-content-end">Welcome, Username </h6>
        <div className="d-flex justify-content-end align-items-center">
          <button
            className="btn btn-danger mx-1"
            onClick={(e) => handleLogout(e)}
          >
            Logout
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={() => {
              history.push("/forget-password");
            }}
          >
            Change Password
          </button>
        </div>

        <div className="my-3">
          <h6>UID : {userDetails.$id} </h6>
          <h6>Name : {userDetails.name} </h6>
          <h6>Email : {userDetails.email} </h6>
          <h6>
            Email Verified :
            {userDetails.emailVerification ? "Verified" : "Not-Verified"}
          </h6>

          <h6>
            Registered on :
            {new Date(userDetails.registration * 1000).toDateString()}{" "}
          </h6>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <button
            className="btn btn-outline-danger"
            onClick={(e) => handleDeleteAccount(e)}
          >
            Delete Account
          </button>
        </div>
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
  } else {
    return (
      <div>
        <h2 className="text-center my-3">
          Please login first to see the homepage
        </h2>
        <button
          className="btn btn-dark text-center "
          onClick={() => history.push("/")}
        >
          Login
        </button>
      </div>
    );
  }
};

export default Home;
