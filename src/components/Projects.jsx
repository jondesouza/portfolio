import React, { useState } from 'react'
import './Projects.css'

import Fylo from '../assets/images/fylo-mockup.png'
import Easybank from '../assets/images/easybank-mockup.png'
import News from '../assets/images/news-mockup.png'
import Forma from '../assets/images/corte-logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Projects = () => {
    const [project, setProject] = useState(Easybank)
    const [site, setSite] = useState("https://godsichor.forumeiros.com/")
    const [content, setContent] = useState("Landing page do Easybank, um banco digital fictício. Feito com HTML5, CSS3 e React.")

    const projectLeft = () => {
        if (project === Fylo) {
            setProject(Easybank)
            setSite("https://jondesouza.github.io/easybank/")
            setContent("Landing page do Easybank, um banco digital fictício. Feito com HTML5, CSS3 e React.")
        } else if (project === Easybank) {
            setProject(News)
            setSite("https://github.com/jondesouza/News-Homepage/")
            setContent("Landing page do News, um jornal digital fictício. Feito com HTML5, CSS3 e React.")
        } else {
            setProject(Fylo)
            setSite("https://jondesouza.github.io/fylo/")
            setContent("Landing page do Fylo, uma empresa fictícia de gerenciamento de dados. Feito com HTML5, CSS3 e React.")
        }
    }

    const projectRight = () => {
        if (project === Fylo) {
            setProject(News)
            setSite("https://github.com/jondesouza/News-Homepage")
            setContent("Landing page do News, um jornal digital fictício. Feito com HTML5, CSS3 e React.")
        } else if (project === News) {
            setProject(Easybank)
            setSite("https://jondesouza.github.io/easybank/")
            setContent("Landing page do Easybank, um banco digital fictício. Feito com HTML5, CSS3 e React.")
        } else {
            setProject(Fylo)
            setSite("https://jondesouza.github.io/fylo/")
            setContent("Landing page do Fylo, uma empresa fictícia de gerenciamento de dados. Feito com HTML5, CSS3 e React.")
        }
    }

    return (
        <section className="projects" id="projects">
            <h2 className="section-title highlight"><img src={Forma} alt="logo" />Projetos realizados</h2>
            <div className="project">
                <div className="project-image">
                    <img src={project} alt="project" />
                </div>
                <div className="buttons-box">
                    <div className="content-port">{content}</div>
                    <div className="navigation">
                        <BrowserRouter>
                            <Link to={site} target="blank" rel="noopener noreferer" title="acessar o site"><button class="check btn navigate">Acessar o site <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></button></Link>
                        </BrowserRouter>
                    </div>
                    <div className="qualities">
                        <input type="button" value="Projeto Anterior" className="check btn" onClick={projectRight} />
                        <input type="button" value="Próximo Projeto" className="check btn" onClick={projectLeft} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects