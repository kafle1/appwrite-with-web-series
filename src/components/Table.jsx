import React from "react";

const Table = () => {
  return (
    <div className="container my-5 border  p-3">
      <h2 className="text-center">Recipes</h2>
      <hr />
      <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col">Food Name</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Recipe</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Momo</td>
            <td>Onion, Wheat, Cabbage, Spices</td>
            <td>Recipe</td>
            <td>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-primary mx-2">Edit</button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default Table;
