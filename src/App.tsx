import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/encyclopedia" element={<h1>Encyclopedia</h1>} />
          <Route
            path="/encyclopedia/:id"
            element={<h1>Encyclopedia Entry</h1>}
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
