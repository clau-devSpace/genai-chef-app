import React from "react";
import ShowIngredients from './show-ingredients.jsx';
import GenerateRecipe from './generate-recipe.jsx';
import {getRecipeFromGenai} from './ai.js'

export default function SendIngredientsForm() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState();
  
  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromGenai(ingredients)
    setRecipe(recipeMarkdown)
  }

  /* Esta es una forma mas rudimentaria para hacer lo mismo que esta abajo! function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }*/

    function Submit(formData){
      event.preventDefault();
      const newIngredient = formData.get('ingredient');
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    

  return (
    <>
     <div className="form-container">
      <form action={Submit} className="form-add-ingredient">
        <input
          className="input-add-ingredient"
          type="text"
          name="ingredient"
          aria-label="add-ingredient"
          placeholder="e.g oregano"
        />

        <button type="submit" className="button-add-ingredient" >
          <span className="span">Add Ingredient</span>
        </button>

      </form>
     
       <h2 className="minimunIngredients">Add at least 3 ingredients</h2>
       <h2 className="minimunIngredients">Recipe generation may take a few seconds</h2>
    </div>

    {ingredients.length > 0 && <ShowIngredients
     ingredients={ingredients}
     getRecipe={getRecipe}
     />}

     {recipe && <GenerateRecipe recipe={recipe} />}
    </>
   
  );
}
