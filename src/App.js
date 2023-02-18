import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Surah } from "./pages/surah/Surah";
import { Home } from "./pages/home/Home";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>}/>
          <Route path="/surah/:idSurah" element={<Layout><Surah/></Layout>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
