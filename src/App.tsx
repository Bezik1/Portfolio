import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import Projects from './components/Projects';
import NextSection from './components/NextSection';
import { useState } from 'react';
import IntroSection from './components/IntroSection';
import { PATHS } from "./constans";
import Blob from "./components/Blob";

const App = () => {
    return (
      <div className="App">
        <Blob />
        <BrowserRouter>
          <Routes>
            <Route path={PATHS[0]} element={<IntroSection />} />
            <Route path={PATHS[1]} element={<Projects />} />
          </Routes>
          <NextSection />
        </BrowserRouter>
      </div>
    )
}

export default App;

