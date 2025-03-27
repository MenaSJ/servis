import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Sistemas from "./pages/sistemas/Sistemas";
import Automatizacion from "./pages/automatizacion/Automatizacion";
import Contabilidad from "./pages/contabilidad/Contabilidad";
import Instalaciones from "./pages/instalaciones/Instalaciones";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sistemas" element={<Sistemas />} />
        <Route path="/instalaciones" element={<Instalaciones />} />
        <Route path="/automatizacion" element={<Automatizacion />} />
        <Route path="/contabilidad" element={<Contabilidad />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
