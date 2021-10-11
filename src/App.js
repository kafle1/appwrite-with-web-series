import "./App.css";
import React, { useState, useEffect } from "react";
import { account, storage } from "./appwrite/appwriteConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //States
  const [imageList, setImageList] = useState();
  const [image, setImage] = useState();

  //Get the list of images from appwrite
  const getImage = async () => {
    const images = await storage.listFiles();
    setImageList(images.files);
  };

  //Runs every time the page reloads
  useEffect(() => {
    getImage();
  }, []);

  //Upload the image to appwrite
  const uploadImage = async (e) => {
    e.preventDefault();

    try {
      const user = await account.getSession("current");

      if (user) {
        const newImage = await storage.createFile(image, ["*"], ["*"]);
       toast.success('Image uploaded successfully!')
      } else {
        await account.createAnonymousSession();
        const newImage = await storage.createFile(image, ["*"], ["*"]);
        toast.success('Image uploaded successfully!')
      }
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  //Delete the image
  const deleteImage = async (e, imageId) => {
    e.preventDefault();

    try {
      await storage.deleteFile(imageId);
      toast.success("Image Deleted Successfully");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  //Download image
  const downloadImage = (e, imageId) => {
    e.preventDefault();

    console.log(imageId);

    try {
      const downloadLink = storage.getFileDownload(imageId);

      window.open(downloadLink.href);
    } catch (error) {
      console.log(`${error.message}`);
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
        {imageList &&
          imageList.map((img) => {
            return (
              <div class="card col-sm-3 col-xl-3">
                <img
                  class="card-img-top"
                  src={storage.getFilePreview(img.$id)}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteImage(e, img.$id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={(e) => downloadImage(e, img.$id)}
                  >
                    Download
                  </button>
                </div>
              </div>
            );
          })}
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
}

export default App;
