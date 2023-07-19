import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Encyclopedia from "./pages/Encyclopedia/Encyclopedia";
import Animal from "./pages/Animal/Animal";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/encyclopedia" element={<Encyclopedia />} />
          <Route path="/encyclopedia/:id" element={<Animal />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
