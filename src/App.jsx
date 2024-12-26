import Banner from "./components/Banner"
import Headers from "./components/Headers"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"



function App() {


  return (
    <>

      <Headers></Headers>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className="flex flex-col md:flex-row gap-6 container mx-auto">
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </section>
     
    </>
  )
}

export default App
