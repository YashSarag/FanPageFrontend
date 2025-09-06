import { Routes,Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PhotoGallery from "./components/PhotoGallery";
import Videos from "./components/Videos";
import Fanwall from "./components/Fanwall";
import Biography from "./components/Biography";

function App() {
  return (
    <div className="w-screen overflow-y-auto overflow-x-hidden app">
      <div className="w-full flex flex-col">
        <NavBar/>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/biography" element={<Biography/>}/>
            <Route path="/photo-gallery" element={<PhotoGallery/>}/>
            <Route path="/video" element={<Videos/>}/>
            <Route path="/fanwall" element={<Fanwall/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
