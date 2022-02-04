import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
    console.log("unsere Suche ist: ", search);
  };

  const handleSearch = () => {
    //wenn der Button geklickt wird, wollen wir Rezepte angezeigt bekommen, die mit der Suche übereinstimmen
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Tini's Törtchen Welt</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Grundrezepte</Nav.Link>
            <Nav.Link href="#action2">Torten</Nav.Link>
            <Nav.Link href="#action3">Kuchen</Nav.Link>
            <Nav.Link href="#action4">anderes</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Suchen"
              className="me-2"
              aria-label="Search"
              onChange={handleInput}
              value={search}
            />
            <Button onClick={handleSearch} variant="outline-success">
              Suchen
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
