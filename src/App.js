import "./App.css";
import { useEffect, useState } from "react";
import { client } from "./client";
import NavBar from "./components/NavBar";
import RecipeCards from "./components/RecipeCards";

function App() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        setRecipes(res.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Hello</h1>
      {recipes ? <RecipeCards recipes={recipes} /> : "...Loading"}
    </>
  );
}

export default App;
