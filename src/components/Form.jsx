import React, { useState, useRef } from "react";
import { COLLECTION_ID, db, account } from "../appwrite/appwiteConfig";

const Form = () => {
  
  
   //Create a new sesson for the user 
   const createUser = async ()=> {
    var newUser = await account.createAnonymousSession();
    localStorage.setItem('newUser', JSON.stringify(newUser));
   };
  
  //Bug Fix
  const retrievedUser = JSON.parse(localStorage.getItem('newUser'));
  if (!retrievedUser) {
    createUser();
  }
  
    
  const [newRecipe, setNewRecipe] = useState({
    food_name: "",
    ingredients: "",
    recipe: "",
  });

  const form = useRef(null);
  //Add new Recipe to database
  const addNewRecipe = async (e) => {
    e.preventDefault();

    const user = await account.getSession("current");

    if (user) {
      const res = await db.createDocument(COLLECTION_ID, {
        created_date: Date.now(),
        ...newRecipe,
      });
      console.log(res);
    } else {
      await account.createAnonymousSession();
      const res = await db.createDocument(COLLECTION_ID, {
        created_date: Date.now(),
        ...newRecipe,
      });
      console.log(res);
    }

    form.current.reset();
  };

  return (
    <div className="container my-5 border  p-3">
      <h2 className="text-center">Quick Recipe</h2>
      <hr />
      <form ref={form}>
        <div className="mb-3">
          <label for="food" className="form-label">
            Food Name
          </label>
          <input
            type="text"
            className="form-control"
            id="food"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                food_name: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label for="ingredients" className="form-label">
            Ingredients
          </label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                ingredients: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label for="recipe" className="form-label">
            Recipe
          </label>
          <textarea
            className="form-control"
            id="recipe"
            rows="3"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                recipe: e.target.value,
              });
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => addNewRecipe(e)}
        >
          Add New Recipe
        </button>
      </form>
    </div>
  );
};

export default Form;
