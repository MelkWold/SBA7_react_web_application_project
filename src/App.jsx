import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Vegan from "./pages/Vegan";
import Vegetarian from "./pages/Vegetarian"
import Miscellaneous from "./pages/Miscellaneous";
import MasterImporter from "./components/MasterImporter";
import Title from './components/Title';

function App() {
  return (
    <>
      <Title />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allfood" element={<MasterImporter/>} />
        <Route path="/vegetarian" element={<Vegetarian />} />
        <Route path="/vegan" element={<Vegan />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
        
      </Routes>
    </>
  );
}

export default App;
