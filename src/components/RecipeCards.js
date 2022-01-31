import "../App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecipeCards = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="container">
      <div className="row">
        {recipes.map((recipe) => (
          <Card className="col-md-3" border="secondary">
            <Card.Img variant="top" src={recipe.fields.img.fields.file.url} />
            <Card.Body>
              <Card.Title>{recipe.fields.headline}</Card.Title>
              <Button variant="primary">Zum Rezept</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipeCards;
