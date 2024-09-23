// Home.js
import React from 'react';
import { NavLink } from 'react-router-dom'
import Enzo_IMG from "../../assets/img/enzo.jpeg"

import './home_styles.scss';

const Home = ({ theme, toggleTheme }) => {
  return (
    <div className="home animated">

    {/* home */}
      <div className="home_container container grid">
        <div className="home_social">
          <span className="home_social-follow">Me siga</span>
          <div className="home_social_links">
            <a
              href="https://www.linkedin.com/in/enzo-shiotuqui-385324266/"
              target="_blank"
              rel="noopener noreferrer"
              className="home_social_link"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/enzo.shiotuqui/"
              target="_blank"
              rel="noopener noreferrer"
              className="home_social_link"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://github.com/EnzoMiShiotuqui"
              target="_blank"
              rel="noopener noreferrer"
              className="home_social_link"
            >
              <i className="uil uil-github"></i>
            </a>
          </div>

          <div className="switch_dark">
            <div className="theme-switch-wrapper">
              <input
                type="checkbox"
                id="theme-toggle-checkbox"
                className="checkbox"
                onChange={toggleTheme}
                checked={theme === 'dark'}
              />
              <label
                className="theme-switch label"
                htmlFor="theme-toggle-checkbox"
              >
                <div className="slider round">
                  <i className="uil uil-moon icon-moon"></i>
                  <i className="uil uil-sun icon-sun"></i>
                  <div className="ball"></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="home_data">
          <h1 className="home_title">Olá, sou Enzo Shiotuqui</h1>
          <h3 className="home_subtitle">Programador Fullstack</h3>
          <p className="home_description">
            Programador fullstack com foco em frontend com alto conhecimento
            em web design, qualidade de produto e experiência do usuário, com experiência em tecnologias como <span className='destaque_text'>React</span> , <span className='destaque_text'>Vue.js</span>, <span className='destaque_text'>Javascript</span> , <span className='destaque_text'>Python </span> , <span className='destaque_text'>Node.js</span> entre outras
          </p>
          <div className="home_buttons">
            <a href="#about" className="button" to="/sobre">
              <i className="uil uil-user button_icon"></i>Sobre mim
            </a>
            <a
              href="./assets/CV-EnzoShiotuqui.docx.pdf"
              className="button"
              download
            >
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

      {/* sobre */}
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
                    <a href="#qualification">
                        <div className="about_box">
                            <i className="uil uil-award about_icon"></i>
                            <h3 className="about_title">Experiência</h3>
                            <span className="about_subtitle">+ 2 anos</span>
                        </div>
                    </a>
                    <NavLink to="/projetos">
                        <div className="about_box">
                            <i className="uil uil-suitcase-alt about_icon"></i>
                            <h3 className="about_title">Completos</h3>
                            <span className="about_subtitle">+ 23 projetos </span>
                        </div>
                    </NavLink>
                    <NavLink to="/servicos">
                        <div className="about_box">
                            <i className="uil uil-headphones-alt about_icon"></i>
                            <h3 className="about_title">Suporte</h3>
                            <span className="about_subtitle">Online 24/7</span>
                        </div>
                    </NavLink> 
                    </div>

                    <a href="#contact" className="button"><i className="uil uil-navigator button_icon"></i>
                        Entre em contato!
                    </a>

                </div>
            </div>

      </div>

      {/* jornada */}
      <div class="qualification section" id="qualification">
            <h2 data-heading="Jornada" class="section_title">Experiências</h2>

            <div class="qualification_container container grid">

                <div class="education">
                    <h3 class="qualification_title">
                        <i class="uil uil-graduation-cap"></i>Educação
                    </h3>

                    <div class="timeline">
                        <div class="timeline_item">
                            <div class="circle_dot"></div>
                            <h3 class="timeline_title">FIAP - São Paulo</h3>
                            <p class="timeline_text">Engenharia de software</p>
                            <span class="timeline_date"><i class="uil uil-calendar-alt"></i>
                                2023 - Presente
                            </span>
                        </div>
                        <div class="timeline_item">
                            <div class="circle_dot"></div>
                            <h3 class="timeline_title">Alura - São Paulo</h3>
                            <p class="timeline_text">Cursos de programação web</p>
                            <span class="timeline_date"><i class="uil uil-calendar-alt"></i>
                                2022 - Presente
                            </span>
                        </div>
                    </div>
                </div>

                <div class="experience">
                    <h3 class="qualification_title">
                       <i class="uil uil-suitcase"></i> Experiência
                    </h3>

                    <div class="timeline">
                        <div class="timeline_item">
                            <div class="circle_dot"></div>
                            <h3 class="timeline_title">Estagiário - Dev Frontend </h3>
                            <p class="timeline_text">Potencial Tecnologia</p>
                            <span class="timeline_date"><i class="uil uil-calendar-alt"></i>
                                2023 - 2024
                            </span>
                        </div>
                        <div class="timeline_item">
                            <div class="circle_dot"></div>
                            <h3 class="timeline_title">Dev Frontend JR</h3>
                            <p class="timeline_text">Potencial tecnologia</p>
                            <span class="timeline_date"><i class="uil uil-calendar-alt"></i>
                                2024 - Presente
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
