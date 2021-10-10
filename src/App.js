import "./App.css";

function App() {
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
              type="file"
              class="btn form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <button className="btn btn-primary">Upload</button>
        </form>
      </div>
      <div className="container-xxl d-flex flex-wrap justify-content-start">
        <div class="card col-sm-3 col-xl-3">
          <img
            class="card-img-top"
            src="https://source.unsplash.com/user/erondu/200x200"
            alt="Card image cap"
          />
          <div class="card-body">
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-primary mx-2">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
