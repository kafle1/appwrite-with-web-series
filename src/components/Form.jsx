import React, { useState } from "react";
import { COLLECTION_ID, db, account } from "../appwrite/appwiteConfig";

const Form = () => {
  const [newRecipe, setNewRecipe] = useState({
    food_name: "",
    ingredients: "",
    recipe: "",
  });

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
  };

  return (
    <div className="container my-5 border  p-3">
      <h2 className="text-center">Quick Recipe</h2>
      <hr />
      <form>
        <div class="mb-3">
          <label for="food" class="form-label">
            Food Name
          </label>
          <input
            type="text"
            class="form-control"
            id="food"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                food_name: e.target.value,
              });
            }}
          />
        </div>

        <div class="mb-3">
          <label for="ingredients" class="form-label">
            Ingredients
          </label>
          <input
            type="text"
            class="form-control"
            id="ingredients"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                ingredients: e.target.value,
              });
            }}
          />
        </div>

        <div class="mb-3">
          <label for="recipe" class="form-label">
            Recipe
          </label>
          <textarea
            class="form-control"
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
          class="btn btn-primary"
          onClick={(e) => addNewRecipe(e)}
        >
          Add New Recipe
        </button>
      </form>
    </div>
  );
};

export default Form;
