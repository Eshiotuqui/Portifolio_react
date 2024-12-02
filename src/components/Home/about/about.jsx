import React from 'react'
import { NavLink } from 'react-router-dom'
import Enzo_IMG from "../../../assets/img/enzo.jpeg"

import './about_style.scss'

const about = () => {
  return (
    <>
        <div className="about section" id="about">
            <h2 data-heading="Intro" className="section_title">
                Sobre mim
            </h2>

            <div className="about_container container grid">
                <img src={Enzo_IMG} className="about_img" alt="Sobre mim"/>

                <div className="about_data">
                    <h3 className="about_heading">Olá, sou Enzo Shiotuqui</h3>
                    <p className="about_description">Desenvolvedor Fullstack com foco em frontend, com conhecimento e experiência em tecnologias web e UI/UX design. Entregando qualidade de trabalho! focado em tecnologias como <span className='destaque_text'>React</span> , <span className='destaque_text'>Vue.js</span>, <span className='destaque_text'>Javascript</span> , <span className='destaque_text'>Python </span> , <span className='destaque_text'>Node.js</span></p>

                    <div className="about_info grid">
                    <NavLink to="/curriculum">
                        <div className="about_box">
                            <i className="uil uil-award about_icon"></i>
                            <h3 className="about_title">Experiência</h3>
                            <span className="about_subtitle">+ 2 anos</span>
                        </div>
                    </NavLink>
                    <NavLink to="/projetos">
                        <div className="about_box">
                            <i className="uil uil-suitcase-alt about_icon"></i>
                            <h3 className="about_title">Completos</h3>
                            <span className="about_subtitle">+ 23 projetos </span>
                        </div>
                    </NavLink>
                    <NavLink to="/contato">
                        <div className="about_box">
                            <i className="uil uil-headphones-alt about_icon"></i>
                            <h3 className="about_title">Suporte</h3>
                            <span className="about_subtitle">Online 24/7</span>
                        </div>
                    </NavLink> 
                    <div className="about_box">
                            <i className="uil uil-coffee about_icon"></i>
                            <h3 className="about_title">Café</h3>
                            <span className="about_subtitle">Quentinho!</span>
                        </div>
                    </div>

                    <NavLink to="/contato" href="#contact" className="button"><i className="uil uil-navigator button_icon"></i>
                        Entre em contato!
                    </NavLink>

                </div>
            </div>

      </div>
    </>
  )
}

export default about
