import React from 'react'

import './capa_style.scss'
// CV
import CV from '../../../assets/CV-EnzoShiotuqui.pdf'

const capa = () => {
  return (
    <>
        <div className="home_container container grid ">
        <div className="home_data">
          <h1 className="home_title">Olá, sou Enzo Shiotuqui</h1>
          <h3 className="home_subtitle">Programador FrontEnd</h3>
          <p className="home_description">
            Programador frontend com alto conhecimento
            em web design, qualidade de produto e experiência do usuário, com experiência em tecnologias como <span className='destaque_text'>React</span> , <span className='destaque_text'>Vue.js</span>, <span className='destaque_text'>Javascript</span> , <span className='destaque_text'>Python </span> , <span className='destaque_text'>Node.js</span> entre outras
          </p>
          <div className="home_buttons">
            <a href="#about" className="button" to="/sobre">
              <i className="uil uil-user button_icon"></i>Sobre mim
            </a>
            <a href={CV} className="button" download>
              <i className="uil uil-file button_icon"></i>Baixar CV
            </a>

          </div>
        </div>

        <div className="my_info">
          <div className="info_item">
            <i className="uil uil-whatsapp info_icon"></i>
            <div>
              <h3 className="info_title">Whatsapp</h3>
              <span className="info_subtitle">(11) 99438-7201</span>
            </div>
          </div>

          <div className="info_item">
            <i className="uil uil-envelope-edit info_icon"></i>
            <div>
              <h3 className="info_title">E-mail</h3>
              <span className="info_subtitle">Eshiotuqui@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default capa
