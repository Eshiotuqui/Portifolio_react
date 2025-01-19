import React from "react";
import "./contato_style.scss";

const contato = () => {
  return (
    <div className="contato_box">
      <div className=" contact " id="contact">
        <h2 data-heading="Conexão" className="section_title">
          Minhas redes
        </h2>

        <div className="contact_container container grid">
          <div className="contact_content">
            <div className="contact_info">
              <div className="contact_card">
                <i className="uil uil-envelope-edit contact_icon"></i>
                <a href="mailto:enzoshiotuqui.dev@gmail.com">
                  <span className="contact_button">Envie algo!</span>
                </a>
              </div>
              <div className="contact_card">
                <i className="uil uil-whatsapp contact_icon"></i>
                <a
                  href="https://wa.me/5511994387201"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact_button">Envie algo!</span>
                </a>
              </div>
              <div className="contact_card">
                <i className="uil uil-github contact_icon"></i>
                <a
                  href="https://github.com/EnzoMiShiotuqui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact_button">Me siga!</span>
                </a>
              </div>
              <div className="contact_card">
                <i className="uil uil-linkedin contact_icon"></i>
                <a
                  href="https://www.linkedin.com/in/enzo-shiotuqui-385324266/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact_button">Me siga!</span>
                </a>
              </div>
              <div className="contact_card">
                <i className="uil uil-instagram contact_icon"></i>
                <a
                  href="https://www.instagram.com/enzo.shiotuqui/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact_button">Me siga!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contato;
