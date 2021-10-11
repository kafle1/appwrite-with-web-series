import React from "react";

const Form = () => {
  return (
    <div className='container my-5 border  p-3'>
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
          />
        </div>

        <div class="mb-3">
          <label for="ingredients" class="form-label">
            Ingredients
          </label>
          <input
            type="password"
            class="form-control"
            id="ingredients"
          />
        </div>

        <div class="mb-3">
          <label for="recipe" class="form-label">
            Recipe
          </label>
          <textarea class="form-control" id="recipe" rows="3"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">
          Add New Recipe
        </button>
      </form>
    </div>
  );
};

export default Form;
