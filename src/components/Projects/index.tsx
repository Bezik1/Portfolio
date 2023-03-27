import { useState } from 'react'
import { IMAGES_PATH } from '../../constans'
import './index.css'

const Projects = () =>{
    const [hover, setHover] = useState(false)

    return (
        <section id='projects'>
            <h2>Projects</h2>
            <div className='projects-container'>
                <div className='project'>
                    <a href="https://curious-flan-5202c7.netlify.app" target="_blank">
                        <img 
                            src={IMAGES_PATH.CITY_TOKEN_IMG} className="project-cover" 
                        />
                    </a>
                    <div className='project-content'>
                        <h3>City Token App</h3>
                        <div className='project-desc'>
                        Decentralized app based on ethereum crypto using hardhat, ethers.js, react-three/fiber MetaMask and react. 
                        In application you can buy some CityTokens paying by ethereum.
                        </div>
                        <div className="project-ss" >
                            <img src={IMAGES_PATH.CITY_TOKEN_SS} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects