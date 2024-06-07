import { Navigate, Route, Router, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LiveStream from "./pages/livestream";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<LiveStream />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
