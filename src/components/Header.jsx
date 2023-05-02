import React, { useState } from 'react'
import './Header.css'

import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'

import Logo from '../assets/images/logo.png'

const Header = () => {
    const [menu, setMenu] = useState(true)

    const changeMenu = () => setMenu(!menu)

    return (
        <BrowserRouter>
            <header className="menu mobile">
                {menu ? (
                    <>
                        <img src={Logo} alt="Logo" className="logo" />
                        <FontAwesomeIcon icon={faBars} onClick={changeMenu} className='open-menu' />
                    </>
                ) : (
                    <>
                        <img src={Logo} alt="Logo" className="logo" />
                        <FontAwesomeIcon icon={faXmark} onClick={changeMenu} className="close-menu" />
                        <nav className='navbar'>
                            <div className="navbox"><Link className="navlink btn" to="#home" smooth>Home</Link></div>
                            <div className="navbox"><Link className="navlink btn" to="#projects" smooth>Projetos</Link></div>
                            <div className="navbox"><Link className="navlink btn" to="#services" smooth>Serviços</Link></div>
                            <div className="navbox"><Link className="navlink btn" to="#about" smooth>Sobre mim</Link></div>
                        </nav>
                    </>
                )}
            </header>

            <header className="menu desktop">
                <img src={Logo} alt="Logo" className="logo" />
                <nav className='navbar'>
                    <div className="navbox"><Link className="navlink btn" to="#home" smooth>Home</Link></div>
                    <div className="navbox"><Link className="navlink btn" to="#projects" smooth>Projetos</Link></div>
                    <div className="navbox"><Link className="navlink btn" to="#services" smooth>Serviços</Link></div>
                    <div className="navbox"><Link className="navlink btn" to="#about" smooth>Sobre mim</Link></div>
                </nav>
                <div className="links">
                    <Link
                        to="https://www.linkedin.com/in/jonathan-santos-aa681a244/"
                        target="blank" rel="noopener noreferer" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    <Link
                        to="https://wa.me/5584994771111"
                        target="blank" rel="noopener noreferer" title="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></Link>
                    <Link
                        to="https://github.com/jondesouza"
                        target="blank" rel="noopener noreferer" title="GitHub"><FontAwesomeIcon icon={faGithub} /></Link>
                    <Link
                        to="mailto:jondesouza.dev@gmail.com"
                        target="blank" rel="noopener noreferer" title="E-mail"><FontAwesomeIcon icon={faEnvelope} className="mail" /></Link>
                </div>
            </header>
        </BrowserRouter >
    )
}

export default Header