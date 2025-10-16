import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Header from "./components/layout/Header";
import RealEstate from "./components/pages/RealEstate";
import Construction from "./components/pages/Construction";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="relative">
      {/* Header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
      {/* <div className="fixed left-0.5 bottom-2">
        <CircularText
          text="*DD ASSOCIATES*BEST*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div> */}
    </div>
  );
}
export default App;
