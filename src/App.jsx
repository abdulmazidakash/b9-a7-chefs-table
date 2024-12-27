import { useState } from "react"
import Banner from "./components/Banner"
import Headers from "./components/Headers"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"
import toast from "react-hot-toast"



function App() {

  const [recipeQue, setRecipeQue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addToRecipe = recipe =>{
    // console.log(recipe);
    const isExist = recipeQue.find(prevRecipe => prevRecipe.recipe_id === recipe.recipe_id);

    if(!isExist){
      setRecipeQue([...recipeQue, recipe] )
      toast.success('Added Cook')
    }else{
      toast.error('Recipe already exist')
    }
  }
// console.log(recipeQue);

const handleDelete = id =>{
  // find which recipe to remove
  const deleteRecipe = recipeQue.find(recipe => recipe.recipe_id === id);

  const updatedQue = recipeQue.filter(recipe => recipe.recipe_id !== id);
  setRecipeQue(updatedQue)
  setPreparedRecipe([...preparedRecipe, deleteRecipe])

}

const calculateTimeAndCalories = (time, calorie) =>{
  setTotalTime(totalTime + time);
  setTotalCalories(totalCalories + calorie)
}

  return (
    <>

    <div className="container mx-auto px-4">
    <Headers></Headers>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className="flex flex-col md:flex-row gap-6 container mx-auto">
        <Recipes addToRecipe={addToRecipe}></Recipes>
        
        <Sidebar 
        handleDelete={handleDelete} 
        recipeQue={recipeQue} 
        preparedRecipe={preparedRecipe}
        calculateTimeAndCalories={calculateTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
     
    </>
  )
}

export default App
