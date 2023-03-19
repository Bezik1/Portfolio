import './App.css';
import NextSection from './components/NextSection';
import IntroSection from './components/IntroSection';
import Blob from "./components/Blob";

const App = () => {
    return (
      <div className="App">
        <Blob />
        <IntroSection />
        <NextSection />
      </div>
    )
}

export default App;

