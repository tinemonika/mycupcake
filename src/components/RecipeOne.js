import "../App.css";
import { useState, useEffect } from "react";
import { client } from "../client";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const RecipeOne = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    // von der contentful API ein rezept anhand seiner ID fetchen
    client
      .getEntry(id)
      .then((res) => {
        console.log(res);
        setRecipe(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {recipe ? (
        <div className="theOneRecipe">
          <Link to="/">
            <Button variant="outline-secondary">Zurück</Button>
          </Link>
          <h1>{recipe.fields.headline}</h1>
          <img alt="img" src={recipe.fields.img.fields.file.url} />
          <h3>Zutaten:</h3>
          <ul>
            {recipe.fields.zutaten.content[0].content.map(
              (ingredient, index) => (
                <li key={index}>{ingredient.content[0].content[0].value}</li>
              )
            )}
          </ul>
          <h3>Zubereitung:</h3>
          <p>{recipe.fields.preparation}</p>
        </div>
      ) : (
        <div>
          <img alt="img" scr="" />
        </div>
      )}

      {/* sobald recipe einen Wert hat (der fetch fertig ist), 
      wollen wir alle Infos zum Rezept darstellen (zB recipe.fields.headline als H1 usw), 
      andernfalls wollen wir "Loading..." anzeigen */}
    </>
  );
};

export default RecipeOne;
