import React from 'react'
import './Home.css'
import Photo from '../assets/images/home-photo.png'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="my-photo">
                <img src={Photo} alt="jonathan santos" className='photo' />
            </div>
            <div className="intro">
                <div className="greeting mobile-greeting">Oi, sou o <h1 className="name">Jonathan Santos</h1> Trabalho com criação e manutenção de sites.</div>
                <div className="greeting desktop-greeting">Oi, sou o <h1 className="name">Jonathan Santos</h1> Trabalho com idealização, criação e manutenção de sites.</div>
                <div className="buttons-box mobile-buttons">
                    <BrowserRouter>
                        <div className="qualities">
                            <Link className="check btn" to="#services" smooth>meus serviços</Link>
                            <Link className="check btn" to="#contact" smooth>fale comigo</Link>
                        </div>
                        <div className='navigation'>
                            <Link className="check btn navigate" to="#projects" smooth>veja mais sobre mim abaixo <FontAwesomeIcon icon={faArrowDown} className='arrow-down' /></Link>
                        </div>
                    </BrowserRouter>
                </div>
                <div className="buttons-box desktop-buttons">
                    <BrowserRouter>
                        <div className="qualities">
                            <Link className="check btn" to="#services" smooth>meus serviços</Link>
                            <Link className="check btn" to="#contact" smooth>fale comigo</Link>
                            <Link className="check btn" to="#projects" smooth>continue abaixo <FontAwesomeIcon icon={faArrowDown} className='arrow-down' /></Link>
                        </div>
                    </BrowserRouter>
                </div>
            </div >
        </section >
    )
}

export default Home;