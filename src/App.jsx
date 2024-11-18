import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Legacy from "./pages/Legacy";
import Datascience from "./pages/Datascience";
import Webproject from "./pages/Webproject";
import AutresProjets from "./pages/Autresprojets";
import Publications from "./pages/Publications";
import Certifications from "./pages/Certifications";
import About from "./pages/About";
import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Legacy />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/datascience" element={<Datascience />} />
        <Route path="/webproject" element={<Webproject />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/autresprojets" element={<AutresProjets />} />
        <Route path="/about" element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Legacy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
