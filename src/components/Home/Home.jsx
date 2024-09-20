// Home.js
import React from 'react';
import { NavLink } from 'react-router-dom'
import './home_styles.scss';

const Home = ({ theme, toggleTheme }) => {
  return (
    <div className="home animated">
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
            em web design, qualidade de produto e experiência do usuário
          </p>
          <div className="home_buttons">
            <NavLink className="button" to="/sobre">
              <i className="uil uil-user button_icon"></i>Sobre mim
            </NavLink>
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
    </div>
  );
};

export default Home;
