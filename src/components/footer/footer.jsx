import React from 'react'
import './footer_style.scss'
import { NavLink } from 'react-router-dom'

const footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="footer_bg">
                <div className="footer_container container grid">
                    <div>
                        <h1 className="footer_title">Enzo Shiotuqui</h1>
                        <span className="footer_subtitle">Dev Fullstack</span>
                    </div>

                    <ul className="footer_links">
                    <li>
                        <NavLink to="/curriculum/servicos" className="footer_link">Serviços</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projetos" className="footer_link">Projetos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum/skills" className="footer_link">Habilidades</NavLink>
                    </li>

                    </ul>

                    <div className="footer_socials">
                        <a href="https://www.instagram.com/enzo.shiotuqui/" target="_blank" rel="noopener noreferrer" className="footer_social">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/enzo-shiotuqui-385324266/" target="_blank" rel="noopener noreferrer" className="footer_social">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="https://github.com/EnzoMiShiotuqui" target="_blank" rel="noopener noreferrer" className="footer_social">
                            <i className="uil uil-github"></i>
                        </a>
                    </div>
                </div>

                <p className="footer_copy">&#169; Enzo Shiotuqui. Todos os direitos reservados</p>
            </div>
        </footer>
    </>
  )
}

export default footer
