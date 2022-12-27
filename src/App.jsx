import "./App.css";
import Navbar from "./component/navbar/Navbar";
import NavbarClicked from "./component/navbar/NavbarClicked";
import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import ProRouter from "./component/profile/ProRouter";
export const NavbarChange = createContext();
export const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});


function App() {
  const [navbar, setNavbar] = useState(false);

  return (
    <NavbarChange.Provider value={{ navbar, setNavbar }}>
      <div className="App">
        {navbar ? <NavbarClicked /> : <Navbar />}
        <div className="www">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ProRouter />} />
          </Routes>
        </div>
      </div>
    </NavbarChange.Provider>
  );
}

export default App;
