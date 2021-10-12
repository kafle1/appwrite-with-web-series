import React, { useState, useEffect } from "react";
import { COLLECTION_ID, db } from "../appwrite/appwiteConfig";

const Table = () => {
  const [documents, setDocuments] = useState();

  //Get all documents
  const getDocuments = async () => {
    const res = await db.listDocuments(COLLECTION_ID);
    setDocuments(res.documents);
  };

  useEffect(() => {
    getDocuments();
  }, [documents]);

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
          {documents &&
            documents.map((document) => {
              return (
                <tr>
                  <td>{document.food_name}</td>
                  <td>{document.ingredients}</td>
                  <td>{document.recipe} </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                    <button className="btn btn-primary mx-2">Edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
