import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Profil from "./pages/Profil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inscription" element={<Signin />} />
        <Route path="connexion" element={<Login />} />
        <Route path="profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
