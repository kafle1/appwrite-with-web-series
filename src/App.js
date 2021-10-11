import "./App.css";
import React, { useState, useEffect } from "react";
import { account, storage } from "./appwrite/appwriteConfig";

function App() {
  const [imageList, setImageList] = useState();

  const getImage = async () => {
    const images = await storage.listFiles();
    setImageList(images.files);
  };

  useEffect(() => {
    getImage();
  }, []);

  const [image, setImage] = useState();

  const uploadImage = async (e) => {
    e.preventDefault();

    const user = await account.getSession("current");

    if (user) {
      const newImage = await storage.createFile(image, ["*"], ["*"]);
      console.log(newImage);
    } else {
      await account.createAnonymousSession();
      const newImage = await storage.createFile(image, ["*"], ["*"]);
      console.log(newImage);
    }
  };

  return (
    <div className="container-xl border my-5 p-3">
      <h2 className="text-center my-2">Image Hub</h2>

      <div className="container border p-3 my-3">
        <form>
          <div class="form-group">
            <label for="exampleFormControlFile1">
              <b>Upload your image</b> :
            </label>
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
              class="btn form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <button className="btn btn-primary" onClick={(e) => uploadImage(e)}>
            Upload
          </button>
        </form>
      </div>
      <div className="container-xxl d-flex flex-wrap justify-content-start">
        { imageList && imageList.map((img) => {
          return (
            <div class="card col-sm-3 col-xl-3">
              <img
                class="card-img-top"
                src={storage.getFilePreview(img.$id)}
                alt="Card image cap"
              />
              <div class="card-body">
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-primary mx-2">Download</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
