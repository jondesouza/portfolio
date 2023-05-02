import React from 'react'
import './About.css'

import Forma from '../assets/images/corte-logo.png'
import OtherPhoto from '../assets/images/about-photo.png'

const Contact = () => {
    return (
        <section className="about" id="about">
            <h2 className="section-title"><img src={Forma} alt="logo" />Sobre mim</h2>
            <div className="about-me">
                <img src={OtherPhoto} alt="jonathan santos" />
                <p className="infos">Sou o Jonathan Santos, um desenvolvedor web de 25 anos. Atualmente estudo publicidade e propaganda, e em um futuro breve serei graduando de sistemas de informação.</p>
            </div>
        </section>
    )
}

export default Contact