import "../App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const RecipeCards = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {recipes.map((recipe) => (
          <Card
            className="col-md-2 my-1 mx-1"
            border="secondary"
            key={recipe.sys.id}
          >
            <Card.Img variant="top" src={recipe.fields.img.fields.file.url} />
            <Card.Body>
              <Card.Title>{recipe.fields.headline}</Card.Title>
              <Link to={recipe.sys.id}>
                <Button variant="primary">Zum Rezept</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipeCards;
