import React from 'react';
import './header_style.scss';
import { NavLink } from 'react-router-dom'

const Header = ({ theme, toggleTheme }) => {
  return (
    <>
        <div className='home_box'>
            <NavLink to="/"><h3 className='title_header'>Shiotuqui.</h3></NavLink>
            <div className="home_social">
                <span className="home_social-follow">Me siga</span>
                <div className="home_social_links">
                    <a href="https://www.linkedin.com/in/enzo-shiotuqui-385324266/" target="_blank" rel="noopener noreferrer" className="home_social_link">
                    <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/enzo.shiotuqui/" target="_blank" rel="noopener noreferrer" className="home_social_link">
                    <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://github.com/EnzoMiShiotuqui" target="_blank" rel="noopener noreferrer" className="home_social_link">
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
                    <label className="theme-switch label" htmlFor="theme-toggle-checkbox">
                        <div className="slider round">
                        <i className="uil uil-moon icon-moon"></i>
                        <i className="uil uil-sun icon-sun"></i>
                        <div className="ball"></div>
                        </div>
                    </label>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Header;
