import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Story from "./Components/pages/Story";
import Skills from "./Components/pages/Skills";
import Project from "./Components/pages/Project";
import Vision from "./Components/pages/Vision";
import Contact from "./Components/pages/Contact";
import Services from "./Components/pages/Services";
import NotFound from "./Components/pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/story" element={<Story />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
