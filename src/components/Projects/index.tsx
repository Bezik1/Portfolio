import { IMAGES_PATH } from '../../constans'
import './index.css'

const Projects = () =>{
    return (
        <section id='projects'>
            <h2>Projects</h2>
            <div className='projects-container'>
                <div className='project'>
                    <a rel="noreferrer" href="https://curious-flan-5202c7.netlify.app" target="_blank">
                        <img
                            alt="City Token App cover"
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
                            <img alt="City Token App screenshot" src={IMAGES_PATH.CITY_TOKEN_SS} />
                        </div>
                    </div>
                </div>
                <div className='project down'>
                    <div className='project-content down-content'>
                        <h3 style={{ color: '#fff' }}>PrawiMy App</h3>
                        <div className='project-desc'>
                        Website designed to infrom users about "PrawiMy" - zwzt project. App using react, typescript, 
                        gsap react-three/drei
                        </div>
                        <div className="project-ss down-ss">
                            <img alt="Prawimy website screenshot" src={IMAGES_PATH.PRAWIMY_SS} />
                        </div>
                    </div>
                    <a rel="noreferrer" href="https://prawimy.netlify.app" target="_blank">
                        <img 
                            alt="Prawimy project cover"
                            src={IMAGES_PATH.PRAWIMY_LOGO} className="project-cover prawimy" 
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects