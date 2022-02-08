import "./App.css";
import NavBar from "./components/NavBar";
import RecipeOne from "./components/RecipeOne";
import Welcome from "./components/Welcome";
import SearchResult from "./components/SearchResult";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="ehm">
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/:id" element={<RecipeOne />} />
          <Route path="suche" element={<SearchResult />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
