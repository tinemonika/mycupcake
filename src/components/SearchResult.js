import "../App.css";
import { client } from "../client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SearchResult = (search) => {
  const [requestedRecipes, setRequestedRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "trtchenwelt",
        "fields.headline[match]": search.searchTerm,
      })
      .then((res) => {
        setRequestedRecipes(res.items);
      })
      .catch((err) => console.log(err));
  }, [search]);

  if (requestedRecipes.length === 0) {
    return <p>Keine Rezepte gefunden</p>;
  }

  return (
    <>
      <div className="search">
        <h1>Hier sind deine Suchergebnisse:</h1>
        {/* Wenn requestedRecipes einen truthy value hat, 
      mappe über den array (requestedRecipes), andernfalls zeige "Loading" --> ternary operator */}
      </div>
      <div className="container">
        <div className="row">
          {requestedRecipes.length > 0
            ? requestedRecipes.map((recipe) => (
                <Card
                  className="col-md-2 my-1 mx-1"
                  border="secondary"
                  key={recipe.sys.id}
                >
                  <Card.Img
                    variant="top"
                    src={recipe.fields.img.fields.file.url}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.fields.headline}</Card.Title>
                    <Link to={recipe.sys.id}>
                      <Button variant="primary">Zum Rezept</Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
