import './projetos_styles.scss'
import React, { useState } from "react";

import Footer from '../footer/footer'

// Imagens 
import parcele from '../../assets/img/parcele.png';
import dashboard from '../../assets/img/dash.png';
import food from '../../assets/img/food.png';
import thanos from '../../assets/img/sneakers.png';
import racoom from '../../assets/img/gua.png';
import weather from '../../assets/img/weather.app.png';
import piglet from '../../assets/img/piglet.png';
import senha from '../../assets/img/senha.png'

const projetos = () => {
  // Lista de projetos
  const projectsList = [
    {
      id: 1,
      title: 'Parcele Aqui',
      category: 'web design',
      img: parcele,
      data: '10/05/2023',
      papel: 'Frontend',
      description: 'Site que ajudei fazendo o design e o frontend para parcelamento de boletos em até 12x com até 3 cartões, podendo parcelar até débitos veiculares    ',
      tecnologias: 'Vue.js | Sass | Bootstrap',
      link: 'https://www.parceleaqui.com.br/'
    },
    {
      id: 2,
      title: 'Dashboard',
      category: 'app',
      img: dashboard,
      data: '10/03/2024',
      papel:'Frontend | Backend',
      description: 'Junto ao site, fiz um Dashboard em que acompanha todas as transações, cadastros, empresas que usam o serviço do parcele, podendo somente gestores utilizar o sistema!',
      tecnologias: 'Vue.js | Sass | TypeScript | Node.js',
    },
    {
      id: 3,
      title: 'Food Theme',
      category: 'web design',
      img: food,
      data: '12/06/2024',
      papel: 'Frontend',
      description: ' Landing page que fiz para um projeto de restaurante, fiz o design no figma e transformei em código para satisfação do cliente, podendo ver vários pratos, satisfação de cliente e outras funcionalidades.',
      tecnologias: 'HTML | CSS | JavaScript',
      link: 'https://foodtheme.netlify.app/',
      git: 'https://github.com/EnzoMiShiotuqui/Food-Theme',
    },
    {
      id: 4,
      title: 'Thanos Store',
      category: 'web',
      img: thanos,
      data: '02/11/2023',
      papel : 'Frontend',
      description: 'Landing page de uma loja de tênis que fiz para um projeto seletivo, possui simulação de checkout para compra, o usuário pode escolher em até 5 modelos de tênis com diversas cores!',
      tecnologias: 'HTML | CSS | JavaScript',
      link: 'https://thanosstore.netlify.app/',
      git: 'https://github.com/EnzoMiShiotuqui/Sneakers_Shop',
    },
    {
      id: 5,
      title: 'Racoom Blog',
      category: 'web design',
      img: racoom,
      data: '10/03/2024',
      papel:'Frontend | Backend',
      alert: '*PROJETO OFFLINE DEVIDO LICENÇA DO FIREBASE*',
      description: 'Blog do guaxinim, permitindo usuário se cadastrar e postar imagens e textos criativos, existe um Dashboard do usuário permitindo editar sua postagem apagar e visualizar (CRUD), feita autenticação com Firebase e o front com react',
      tecnologias: 'React | CSS | Firebase',
      link: 'https://racoomblog.netlify.app/',
      git: 'https://github.com/EnzoMiShiotuqui/racomBlog'
    },
    {
      id: 6,
      title: 'Weather.IO',
      category: 'web',
      img: weather,
      data: '18/08/2023',
      papel: 'Frontend',
      description: 'Dashboard weather.io que utiliza a API OpenWeather, mostra clima do local que quiser, mostrando previsão de 5 dias, qualidade do ar, umidade relativa, temperatura durante o dia e muito mais! ',
      tecnologias: 'React | Sass',
      link: 'https://eweatherio.netlify.app/#/current-location',
      git: 'https://github.com/EnzoMiShiotuqui/weatherApp'
    },
    {
      id: 7,
      title: 'PigLet',
      category: 'app',
      img: piglet,
      data: '10/05/2023',
      papel: 'Frontend',
      description: 'Projeto que fiz para facilitar busca na wikipédia, ao digitar qualquer coisa o pig procura resultados na wiki e em segundos retorna várias pesquisas sobre... Utilizando a API da própria WIKI',
      tecnologias: 'React.js | CSS',
      link: 'https://pigwiki.netlify.app/',
      git: 'https://github.com/EnzoMiShiotuqui/Piglet'
    },
    {
      id: 8,
      title: 'Gerador de senha',
      category: 'app',
      img: senha,
      data: '20/09/2023',
      papel: 'Frontend',
      description: 'Gerador de senha feita para ajudar a decidir como proteger sua conta... podendo escolher em até 30 caracteres com símbolos, números e letras.',
      tecnologias: 'HTML | CSS | JavaScript',
      git : 'https://github.com/EnzoMiShiotuqui/Gerador-de-senha'
    },
  ];
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null); // Estado para o projeto selecionado

    // Função que filtra os projetos com base na categoria selecionada
    const filteredProjects = filter === 'all' 
        ? projectsList 
        : projectsList.filter(project => project.category.includes(filter));

    // Função para abrir o modal com o projeto selecionado
    const openModal = (project) => {
        setSelectedProject(project);
        console.log("Projeto selecionado:", project);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setSelectedProject(null);
    };

  return (
    <>
        <section className="work section" id="work">
        <h2 data-heading="Portfólio" className="section_title">Projetos</h2>

        {/* Filtros */}
        <div className="work_filters">
            <span 
            className={`work_item ${filter === 'all' ? 'active-work' : ''}`} 
            onClick={() => setFilter('all')}>
                Todos
            </span>
            <span 
            className={`work_item ${filter === 'web' ? 'active-work' : ''}`} 
            onClick={() => setFilter('web')}>
                Web
            </span>
            <span 
            className={`work_item ${filter === 'app' ? 'active-work' : ''}`} 
            onClick={() => setFilter('app')}>
                Tools
            </span>
            <span 
            className={`work_item ${filter === 'design' ? 'active-work' : ''}`} 
            onClick={() => setFilter('design')}>
                Design
            </span>
        </div>

        {/* Container dos projetos */}
        <div className="work_container container grid">
            {filteredProjects.map(project => (
            <div className={`work_card mix ${project.category}`} key={project.id}>
                <img src={project.img} alt={project.title} className="work_img" />
                <h3 className="work_title">{project.title}</h3>
                <span className="work_button" onClick={() => openModal(project)}>Saiba mais</span>
            </div>
            ))}
        </div>
        </section>

        {/* Modal */}
        {selectedProject && (
        <div className="portifolio_popup open">
            <div className="portifolio_popup_inner">
                <div className="portifolio_popup_content grid">
                    {/* Botão de fechar o modal */}
                    <span className="portifolio_popup_close" onClick={closeModal}>
                        <i className="uil uil-times"></i>
                    </span>

                    {/* Imagem do projeto */}
                    <div className="pp_thumbnail">
                        <img
                            src={selectedProject.img}
                            alt={selectedProject.title}
                            className="portifolio_popup_img"
                        />
                    </div>

                    {/* Informações do projeto */}
                    <div className="portifolio_popup_info">
                        <div className="portifolio_popup_subtitle">
                            Projeto - <span>{selectedProject.category}</span>
                        </div>

                        <div className="portifolio_popup_body">
                            <h3 className="details_title">{selectedProject.title}</h3>
                            <p className="details_description">{selectedProject.description}</p>

                            {selectedProject.alert && (
                                <p className='details_description description_alert'>{selectedProject.alert}</p>
                            )}
                            
                            {/* Lista com mais detalhes */}
                            <ul className="details_info">
                                <li>
                                    Criado - <span>{selectedProject.data}</span>
                                </li>
                                <li>
                                    Tecnologias - <span>{selectedProject.tecnologias}</span>
                                </li>
                                <li>
                                    Papel - <span>{selectedProject.papel}</span>
                                </li>
                                {selectedProject.link && (
                                    <li>
                                        <span>
                                        <a 
                                            href={selectedProject.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ display: 'inline-flex', alignItems: 'center' }} // Alinha o ícone e o texto, se necessário
                                        >
                                            <i className="uil uil-globe skill_portifolio" style={{ marginRight: '5px' }}></i>
                                        </a>
                                        </span>
                                        <span>
                                            <a 
                                                href={selectedProject.git}
                                                target='_blank'
                                                rel="noopener noferrer"
                                                style={{display: 'inline-flex', alignItems: 'center'}}
                                            >
                                                <i class="uil uil-github  skill_portifolio"></i>
                                            </a>
                                        </span>
                                    </li>
                                    )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

    <Footer/>
    </>
  );
};

export default projetos;
