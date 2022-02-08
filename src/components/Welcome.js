import "../App.css";
import { useState, useEffect } from "react";
import { client } from "../client";
import RecipeCards from "./RecipeCards";

const Welcome = () => {
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
      <div className="welcome">
        <h1>Willkommen auf Christines digitalem Rezeptbuch</h1>
        {recipes ? <RecipeCards recipes={recipes} /> : "...Loading"}
      </div>
    </>
  );
};

export default Welcome;
