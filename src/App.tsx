import './App.css';
import NextSection from './components/NextSection';
import IntroSection from './components/IntroSection';
import Blob from "./components/Blob";
import Projects from './components/Projects';

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

