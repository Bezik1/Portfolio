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
        <IntroSection />
        <Projects />
        <NextSection />
      </div>
    )
}

export default App;

