import { TYPED_BOX_STRINGS } from "../../constans";
import Typed from "react-typed"
import BoxContainer from "../Box/BoxContainer";

const IntroSection = () =>(
    <header id="intro-section">
        <BoxContainer />
          <Typed
            startDelay={2000}
            strings={TYPED_BOX_STRINGS}
            className='typed-box'
            typeSpeed={100}
            backSpeed={50}
            loop 
          />
    </header>
)

export default IntroSection