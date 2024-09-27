import React from 'react'
import { useState } from 'react';
import './servicos_container.scss'

const servicos = () => {

    // modal serviços
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (index) => {
        setActiveModal(index);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

  return (
    <>
        <div className="section services section" id="services">
      <h2 data-heading="Qualidades" className="section_title">Serviços</h2>
      <div className="services_container container grid">

        {/* Serviço 1 */}
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">Desenvolvimento <br /> Fullstack</h3>
          </div>

          <span className="services_button" onClick={() => openModal(1)}>
            Veja mais <i className="uil uil-arrow-right services_button_icon"></i>
          </span>

          <div className={`services_modal ${activeModal === 1 ? 'active_modal' : ''}`}>
          <div className="services_modal_content">
                <i className="uil uil-times services_modal_close" onClick={closeModal}></i>

                <h3 className="services_modal_title">Desenvolvedor fullstack</h3>
                <p className="services_modal_description">Com mais de 2 anos de experiência desenvolvendo códigos com qualidade, limpos e dinâmicos que agradam clientes e empresas que tive contato! </p>

                <ul className="services_modal_services grid">
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong>Desenvolvimento Frontend: </strong> Criação de interfaces de usuário responsivas e dinâmicas utilizando frameworks como React e Vue.js. focando em uma experiência de usuário fluida e intuitiva.</p>
                    </li>
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong>Desenvolvimento Backend: </strong>Criação de APIs robustas e escaláveis com frameworks como Node.js e  gerenciando lógica de negócios e conectividade com bancos de dados como MySQL e MongoDB.</p>
                    </li>
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong>Testes e Manutenção:</strong>Escrita de testes unitários e de integração, além de monitoramento e manutenção contínua da aplicação para garantir estabilidade e disponibilidade</p>
                    </li>
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong>Automatização de Tarefas Repetitivas:</strong> Criação de scripts para automatizar tarefas como envio de emails, manipulação de arquivos, renomeação em massa, e execução de processos repetitivos.</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>

        {/* Serviço 2 */}
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">Web <br /> Designer</h3>
          </div>

          <span className="services_button" onClick={() => openModal(2)}>
            Veja mais <i className="uil uil-arrow-right services_button_icon"></i>
          </span>

          <div className={`services_modal ${activeModal === 2 ? 'active_modal' : ''}`}>
          <div className="services_modal_content">
                <i className="uil uil-times services_modal_close" onClick={closeModal}></i>

                <h3 className="services_modal_title">Web Designer</h3>
                <p className="services_modal_description">Focando em garantir uma experiência intuitiva, consistente e atraente em todos os projetos </p>

                <ul className="services_modal_services grid">
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong> Criação de Layouts Responsivos: </strong> Desenvolvimento de sites com design adaptável para diferentes dispositivos, utilizando técnicas de CSS Grid, Flexbox e Media Queries para garantir uma experiência consistente em desktops, tablets e smartphones. </p>
                    </li>
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong>Otimização de Performance:  </strong>Melhoria no desempenho de carregamento de páginas, implementando técnicas como compressão de imagens, minificação de arquivos CSS/JS e uso de CDNs para distribuição de conteúdo.</p>
                    </li>
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong>Manutenção de Sites: </strong>Atualização de conteúdo, correção de bugs e implementação de pequenas melhorias em sites já existentes, garantindo que permaneçam seguros e funcionais.</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>

        {/* Serviço 3 */}
        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">UX/UI <br /> Designer</h3>
          </div>

          <span className="services_button" onClick={() => openModal(3)}>
            Veja mais <i className="uil uil-arrow-right services_button_icon"></i>
          </span>

          <div className={`services_modal ${activeModal === 3 ? 'active_modal' : ''}`}>
          <div className="services_modal_content">
                <i className="uil uil-times services_modal_close" onClick={closeModal}></i>

                <h3 className="services_modal_title">UX/UI designer</h3>
                <p className="services_modal_description">Criação de soluções visuais e funcionais focadas na experiência e interação do usuário com produtos digitais, do conceito ao design final. </p>

                <ul className="services_modal_services grid">
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong>Pesquisa e Análise de Usuários: </strong> Coleta e análise de dados sobre o comportamento dos usuários para identificar pontos de melhoria e criar soluções centradas no usuário. </p>
                    </li>
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong>Otimização de UX:  </strong>Design centrado no usuário, com foco em navegação simples, interações intuitivas e otimização da jornada do usuário para melhorar conversões e retenção. </p>
                    </li>
                    <li className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info"><strong>Design Visual e UI: </strong>Criação de interfaces visuais atraentes e intuitivas, utilizando ferramentas como Figma, Adobe XD, ou Sketch para desenvolver wireframes e protótipos de alta fidelidade.</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </>
  )
}

export default servicos