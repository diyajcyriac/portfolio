import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
    </>  
  );
}

export default App;
