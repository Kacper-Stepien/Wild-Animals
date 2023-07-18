import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../../pages/Home/Home";
import Encyclopedia from "../../pages/Encyclopedia/Encyclopedia";
import Animal from "../../pages/Animal/Animal";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/encyclopedia/:id" element={<Animal />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </AnimatePresence>
  );
}
