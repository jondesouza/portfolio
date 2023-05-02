import React from 'react'
import './Footer.css'

import Logo from '../assets/images/logo.png'

import { HashLink as Link } from 'react-router-hash-link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="contact" id="contact">
            <img src={Logo} alt="logo" />
            <div className="links">
                <BrowserRouter>
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
                </BrowserRouter>
            </div>
            <p>© 2023 SAINTS / Jonathan Santos</p>
        </footer >
    )
}

export default Footer