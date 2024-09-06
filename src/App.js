import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import MoreAbout from "./Components/MoreAbout/MoreAbout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/more-about" element={<MoreAbout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
