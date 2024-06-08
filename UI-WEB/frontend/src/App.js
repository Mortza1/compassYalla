import { Navigate, Route, Router, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LiveStream from "./pages/livestream";
import AboutStatement from "./components/AboutStatement";
import ShopPage from "./components/ShopPage";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<LiveStream />} />
          <Route path="/about" element={<AboutStatement />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
