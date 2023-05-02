import React from 'react'
import './Services.css'

import Forma from '../assets/images/corte-logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFigma, faHtml5, faCss3, faBootstrap, faReact, faSquareJs, faGitAlt } from '@fortawesome/free-brands-svg-icons'

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="section-title"><img src={Forma} alt="logo" />Serviços oferecidos</h2>
            <div className="my-skills">
                <div className='design'>
                    <h2 className="service-title">Web design</h2>
                    <span className="intro-serv">Concepção do design de sites utilizando a ferramenta <span className="tech">Figma</span>, confeccionando um visual criativo, responsivo e voltado para a melhor experiência do usuário.</span>
                    <FontAwesomeIcon icon={faFigma} className='tech-icon' title="FIGMA" />
                </div>
                <div className='dev'>
                    <h2 className="service-title">Web development</h2>
                    <span className="intro-serv">Fabricação e manutenção de sites comumente utilizando as tecnologias dispostas abaixo:</span>
                    <div className="techs">
                        <FontAwesomeIcon icon={faHtml5} className='tech-icon' title="HTML5" />
                        <FontAwesomeIcon icon={faCss3} className='tech-icon' title="CSS3" />
                        <FontAwesomeIcon icon={faBootstrap} className='tech-icon' title="BOOTSTRAP" />
                        <FontAwesomeIcon icon={faSquareJs} className='tech-icon' title="JAVASCRIPT" />
                        <FontAwesomeIcon icon={faReact} className='tech-icon' title="REACT.JS" />
                        <FontAwesomeIcon icon={faGitAlt} className='tech-icon' title="GIT" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services