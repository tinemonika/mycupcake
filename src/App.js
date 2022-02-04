import "./App.css";
import NavBar from "./components/NavBar";
import RecipeOne from "./components/RecipeOne";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:id" element={<RecipeOne />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
