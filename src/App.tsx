import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Header from "./components/layout/Header";
import RealEstate from "./components/pages/RealEstate";
import Construction from "./components/pages/Construction";
import Contact from "./components/pages/Contact";
import BounceImagePreview from "./BounceImagePreview";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
function App() {


const [showArrow, setShowArrow] = useState(false);

const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(()=>{

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    },[])

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

       <div className="image-bounce-section">
            <BounceImagePreview 
            src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=" 
            size={120}/>
       </div>
      {/* TOP SCROLL ARROW */}
                      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 mt-2 p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
export default App;
