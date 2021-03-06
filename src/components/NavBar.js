import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import SearchResult from "./SearchResult";
import { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  // const handleInput = (e) => {
  //     e.preventDefault()
  //     setSearch(e.target.value)
  //     e.target.value="";
  // };

  const handleInput = (e) => {
    setInput(e.target.value);
    // console.log("unsere Suche ist: ", search);
  };

  const handleSearch = (e) => {
    //wenn der Button geklickt wird, wollen wir Rezepte angezeigt bekommen, die mit der Suche übereinstimmen
    e.preventDefault();
    setSearch(e.target.searchTerm.value);
  };

  return (
    <>
      <div className="color-nav">
        <Navbar bg="dark" expand="lg">
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
              <Form className="d-flex" onSubmit={handleSearch}>
                <FormControl
                  type="search"
                  placeholder="Suchen"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleInput}
                  value={input}
                  name="searchTerm"
                />
                <Button
                  type="submit"
                  variant="outline-success"
                  className="Button search-button"
                >
                  Suchen
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {search && <SearchResult searchTerm={search} />}
      </div>
    </>
  );
};

export default NavBar;
