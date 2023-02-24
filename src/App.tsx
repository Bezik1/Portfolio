import BoxContainer from './components/Box/BoxContainer'
import Typed from 'react-typed';

import './App.css';
import { TYPED_BOX_STRINGS } from './constans';
import Projects from './components/Projects';

const App = () => {

    return (
      <div className="App">
        <header>
          <BoxContainer />
          <Typed
            strings={TYPED_BOX_STRINGS}
            className='typed-box'
            typeSpeed={40}
            backSpeed={50}
            loop 
          />
        </header>
        <Projects />
      </div>
    )
}

export default App;

