import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import { COLLECTION_ID, db } from "../appwrite/appwiteConfig";

const Table = () => {
  const [documents, setDocuments] = useState();
  const history = useHistory();

  //Get all documents
  const getDocuments = async () => {
    const res = await db.listDocuments(COLLECTION_ID, undefined, undefined, undefined, undefined, 'DESC');
    setDocuments(res.documents);
  };

  useEffect(() => {
    getDocuments();
  }, [documents]);

  //Delete recipe
  const deleteRecipe = async (e, id) => {
    e.preventDefault();
    // console.log(id);

    await db.deleteDocument(COLLECTION_ID, id);
    console.log("Deleted Successfully");
  };

  //Update Recipe
  const handleUpdate = (e, recipe) => {
    e.preventDefault();

    history.push({
      pathname: "/updateRecipe",
      state: recipe,
    });
  };

  return (
    <div className="container my-5 border  p-3">
      <h2 className="text-center">Recipes</h2>
      <hr />
      <table className="table table-bordered">
        <thead className="table-dark">
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
                    <button
                      className="btn btn-danger"
                      onClick={(e) => deleteRecipe(e, document.$id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={(e) => handleUpdate(e, document)}
                    >
                      Edit
                    </button>
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
