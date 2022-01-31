import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecipeCards = ({ recipes }) => {
  console.log(recipes);
  return (
    <>
      {recipes.map((recipe) => (
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{recipe.fields.headline}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default RecipeCards;
