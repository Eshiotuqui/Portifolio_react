import React from 'react'
import { useState } from 'react';
import './skills_style.scss'

const skills = () => {

    const [activeTab, setActiveTab] = useState("frontend");

    const handleTabClick = (target) => {
        setActiveTab(target);
    };
  return (
    <>
         <div className="skills section" id="skills">
        <h2 data-heading="Skills" className="section_title">Habilidades</h2>

        <div className="skills_container container grid">
            {/* Abas */}
            <div className="skills_tabs">
            <div
                className={`skills_header ${activeTab === "frontend" ? "skills_active" : ""}`}
                onClick={() => handleTabClick("frontend")}
            >
                <i className="uil uil-brackets-curly skills_icon"></i>
                <div>
                <h1 className="skills_title">Dev Frontend</h1>
                <span className="skills_subtitle">+ 2 anos</span>
                </div>
                <i className="uil uil-angle-down skills_arrow"></i>
            </div>

            <div
                className={`skills_header ${activeTab === "design" ? "skills_active" : ""}`}
                onClick={() => handleTabClick("design")}
            >
                <i className="uil uil-swatchbook skills_icon"></i>
                <div>
                <h1 className="skills_title">UX/UI Design</h1>
                <span className="skills_subtitle">+ 2 anos</span>
                </div>
                <i className="uil uil-angle-down skills_arrow"></i>
            </div>

            <div
                className={`skills_header ${activeTab === "backend" ? "skills_active" : ""}`}
                onClick={() => handleTabClick("backend")}
            >
                <i className="uil uil-server-network skills_icon"></i>
                <div>
                <h1 className="skills_title">Dev Backend</h1>
                <span className="skills_subtitle">+ 1 ano</span>
                </div>
                <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            </div>

            {/* Conteúdo das habilidades */}
            <div className="skills_content">
            {/* Grupo Frontend */}
            {activeTab === "frontend" && (
                <div className="skills_group skills_active" id="frontend">
                <div className="skills_list grid">
                    <div className="skills_data">
                    <h3 className="skills_name">HTML</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                    <div className="skills_data">
                    <h3 className="skills_name">CSS</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                    <div className="skills_data">
                    <h3 className="skills_name">JavaScript</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                    <div className="skills_data">
                    <h3 className="skills_name">React</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                    <div className="skills_data">
                    <h3 className="skills_name">Vue.js</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                </div>
                </div>
            )}

            {/* Grupo Design */}
            {activeTab === "design" && (
                <div className="skills_group skills_active" id="design">
                <div className="skills_list grid">
                    <div className="skills_data">
                    <h3 className="skills_name">Figma</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                    <div className="skills_data">
                    <h3 className="skills_name">Photoshop</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                    <div className="skills_data">
                    <h3 className="skills_name">Sketch</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                </div>
                </div>
            )}

            {/* Grupo Backend */}
            {activeTab === "backend" && (
                <div className="skills_group skills_active" id="backend">
                <div className="skills_list grid">
                    <div className="skills_data">
                    <h3 className="skills_name">Python</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                    <div className="skills_data">
                    <h3 className="skills_name">MySQL</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                    <div className="skills_data">
                    <h3 className="skills_name">Firebase</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                    <div className="skills_data">
                    <h3 className="skills_name">TypeScript</h3>
                    <div className="skills_bar">
                        <span className="skills_percentage" style={{ width: '100%' }}></span>
                    </div>
                    </div>
                </div>
                </div>
            )}
            </div>
        </div>
      </div> 
    </>
  )
}

export default skills