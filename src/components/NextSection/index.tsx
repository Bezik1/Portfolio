import './index.css'
import { useState } from "react"
import { Link } from "react-router-dom";
import NEXT_SECTION_URL from '../../assets/next-section.png'
import { PATHS } from '../../constans';

const NextSection = () =>{
    const [pathIndex, setPathIndex] = useState(0)

    const handleSwitch = () => {
        setPathIndex(pathIndex+1)
    }

    return (
        <a href={PATHS[pathIndex]} onClick={handleSwitch} className='next-section'>
            <img style={{ width: 50, padding: 10 }} src={NEXT_SECTION_URL} />
        </a>
    )
}

export default NextSection