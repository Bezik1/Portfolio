import './index.css'
import { useState } from "react"
import NEXT_SECTION_URL from '../../assets/next-section.png'
import { Link } from 'react-router-dom'
import { PATHS } from '../../constans'

const NextSection = () =>{
    const [pathIndex, setPathIndex] = useState(1)

    const handleSwitch = () => setPathIndex(pathIndex+1)

    return (
        <Link onClick={handleSwitch} to={PATHS[pathIndex]} className='next-section'>
            <img style={{ width: 50, padding: 10 }} src={NEXT_SECTION_URL} />
        </Link>
    )
}

export default NextSection