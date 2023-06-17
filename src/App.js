import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Profil from "./pages/Profil";
import WriteBa from "./pages/WriteBa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Signin />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/raconte_ta_ba" element={<WriteBa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
