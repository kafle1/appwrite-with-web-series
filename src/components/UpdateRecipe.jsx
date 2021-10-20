import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { COLLECTION_ID, db } from "../appwrite/appwiteConfig";

const UpdateRecipe = () => {
  const { state } = useLocation();
  const history = useHistory();

  //   console.log(state);

  const [updatedRecipe, setupdatedRecipe] = useState({
    food_name: "",
    ingredients: "",
    recipe: "",
  });

  const updateRecipe = async (e) => {
    e.preventDefault();
    console.log(updatedRecipe);
    await db.updateDocument(COLLECTION_ID, state.$id, updatedRecipe);
    console.log("Recipe updated Successfully");
    history.push("/");
  };

  useEffect(() => {
    if (state) {
      setupdatedRecipe({
        food_name: state.food_name,
        ingredients: state.ingredients,
        recipe: state.recipe,
      });
    }
  }, []);

  return (
    <div className="container my-5 border  p-3">
      <h2 className="text-center">Update Recipe </h2>
      <hr />
      <form>
        <div className="mb-3">
          <label for="food" className="form-label">
            Food Name
          </label>
          <input
            type="text"
            className="form-control"
            id="food"
            onChange={(e) =>
              setupdatedRecipe({
                ...updatedRecipe,
                food_name: e.target.value,
              })
            }
            value={updatedRecipe.food_name}
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
            onChange={(e) =>
              setupdatedRecipe({
                ...updatedRecipe,
                ingredients: e.target.value,
              })
            }
            value={updatedRecipe.ingredients}
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
            onChange={(e) =>
              setupdatedRecipe({
                ...updatedRecipe,
                recipe: e.target.value,
              })
            }
            value={updatedRecipe.recipe}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => updateRecipe(e)}
        >
          Update the Recipe
        </button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
