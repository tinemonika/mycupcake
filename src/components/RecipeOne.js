import { useState, useEffect } from "react";
import { client } from "../client";
import { useParams } from "react-router-dom";

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
  }, []);

  return (
    <>
      <div>Hallo</div>
      {/* sobald recipe einen Wert hat (der fetch fertig ist), wollen wir alle Infos zum Rezept darstellen (zB recipe.fields.title als H1 usw), andernfalls wollen wir "Loading..." anzeigen */}
    </>
  );
};

export default RecipeOne;
