import React from 'react'

const Home = () => {
    return (
        <div className="container-xxl border mt-5 p-3">
        <h3 className="text-center"> Super Auth </h3>
        <h6 className='d-flex justify-content-end' >Welcome, Username </h6>
        <div className="d-flex justify-content-end align-items-center">
          
          <button className="btn btn-danger mx-1">Logout</button>
          <button className="btn btn-primary mx-1">Change Password</button>
        </div>
  
        <div className="my-3">
          <h6>UID : </h6>
          <h6>Name : </h6>
          <h6>Email : </h6>
          <h6>Email Verified :</h6>
  
          <h6>Registered on :</h6>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <button className="btn btn-outline-danger">Delete Account</button>
        </div>
      </div>
    )
}

export default Home
