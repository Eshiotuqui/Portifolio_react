import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jornada_style.scss';

const Jornada = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({}); 

    const handleClose = () => setShowModal(false);
    const handleShow = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    return (
        <>
            <div className="qualification section" id="qualification">
                <h2 data-heading="Jornada" className="section_title">Experiências</h2>

                <div className="qualification_container container grid">
                    <div className="education">
                        <h3 className="qualification_title">
                            <i className="uil uil-graduation-cap"></i>Educação
                        </h3>

                        <div className="timeline">
                            <div className="timeline_item">
                                <div className="circle_dot"></div>
                                <div className='box_time'>
                                    <h3 className="timeline_title">FIAP - São Paulo</h3>
                                    <p className="timeline_text">Engenharia de software</p>
                                    <span className="timeline_date"><i className="uil uil-calendar-alt"></i>
                                        2023 - Presente
                                    </span>
                                </div>
                            </div>
                            <div className="timeline_item">
                                <div className="circle_dot"></div>
                                <div className='box_time'>
                                    <h3 className="timeline_title">Alura - São Paulo</h3>
                                    <p className="timeline_text">Cursos de programação web</p>
                                    <span className="timeline_date"><i className="uil uil-calendar-alt"></i>
                                        2022 - Presente
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience">
                        <h3 className="qualification_title">
                            <i className="uil uil-suitcase"></i> Experiência
                        </h3>

                        <div className="timeline">
                            <div className="timeline_item">
                                <div className="circle_dot"></div>
                                <div className='box_time'>
                                    <h3 className="timeline_title">Estagiário - Dev Frontend</h3>
                                    <p className="timeline_text">Potencial Tecnologia</p>
                                    <span className="timeline_date"><i className="uil uil-calendar-alt"></i> 2023 - 2024</span>

                                    {/* Botão para abrir o modal */}
                                    <span className="services_button" onClick={() => handleShow({
                                        title: 'Estagiário Frontend',
                                        body: (
                                            <>
                                                <p>
                                                    Iniciei minha jornada no mundo da programação como estagiário na empresa Potencial Tecnologia. Tive a oportunidade de entrar de cabeça no universo dos códigos e maneiras de me portar em um ambiente corporativo. Aprendi muito nessa jornada sobre as tecnologias web como <span className='destaque_text'>HTML</span>, <span className='destaque_text'>JavaScript</span> e aprendi muito a lidar com o framework <span className='destaque_text'>VUE.js</span>. Além do código, aprendi muito sobre metodologia ágil, utilizei durante o estágio o software JIRA para manejar meus projetos e controlar meus processos e tarefas...
                                                </p>
                                                <p>Veja algumas atuações minhas nesse período:</p>
                                                <ul className="services_modal_services grid">
                                                    <li>Ajuda em criar componentes para os sites</li>
                                                    <li>Criar templates criativos no figma</li>
                                                    <li>Criar um sistema de envio de e-mails automáticos</li>
                                                </ul>
                                            </>
                                        )
                                    })}>
                                        Veja mais <i className="uil uil-arrow-right services_button_icon"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="circle_dot"></div>
                                <div className='box_time'>
                                    <h3 className="timeline_title">Dev Frontend JR</h3>
                                    <p className="timeline_text">Potencial tecnologia</p>
                                    <span className="timeline_date"><i className="uil uil-calendar-alt"></i>
                                        2024 - Presente
                                    </span>

                                    <span className="services_button" onClick={() => handleShow({
                                        title: 'Desenvolvedor Frontend JR',
                                        body: (
                                            <>
                                                <p>
                                                    Após um período de muito aprendizado durante o estágio, fui efetivado para júnior... E tive a minha oportunidade de aprender muito mais e lidar com muito mais responsabilidades. Fiquei responsável por cuidar do design e criação de dashboards e componentes mais complexos. Além disso aprendi muito sobre <span className='destaque_text'>React</span> e <span className='destaque_text'>Python</span> na qual utilizei para diversos projetos para a empresa e para uso pessoal !
                                                </p>
                                                <p>Veja algumas atuações minhas nesse período:</p>
                                                <ul className="services_modal_services grid">
                                                    <li>Criar um dashboard com informações de vendas com <span className='destaque_text'>Vue.js</span></li>
                                                    <li>Criar robôs que agilizam tarefas diárias com <span className='destaque_text'>Python</span></li>
                                                    <li>Aplicar testes unitários com <span className='destaque_text'>Jest</span></li>
                                                </ul>
                                            </>
                                        )
                                    })}>
                                        Veja mais <i className="uil uil-arrow-right services_button_icon"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal do Bootstrap */}
                <Modal show={showModal} onHide={handleClose} className="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>{modalContent.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {modalContent.body}
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default Jornada;
