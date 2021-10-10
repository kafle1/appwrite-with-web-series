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
      <img
        src="https://source.unsplash.com/user/erondu/200x200"
        class="img-thumbnail"
        alt="..."
      />
    </div>
  );
}

export default App;
