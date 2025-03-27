import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/sistemas" element={<Home />} />
        <Route path="/instalaciones" element={<Home />} />
        <Route path="/automatizacion" element={<Home />} />
        <Route path="/contabilidad" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
