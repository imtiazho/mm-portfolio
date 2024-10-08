import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import MoreAbout from "./Components/MoreAbout/MoreAbout";
import Works from "./Components/Works/Works";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import Blog from "./Components/Blog/Blog";
import ServiceOfferingDetails from "./Components/ServiceOfferingDetails/ServiceOfferingDetails";
import Contact from "./Components/Contact/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/more-about" element={<MoreAbout />}></Route>
        <Route path="/my-works" element={<Works></Works>}></Route>
        <Route
          path="/project-details/:projectId"
          element={<ProjectDetails />}
        ></Route>

        {/* testing route */}
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/services" element={<ServiceOfferingDetails />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
