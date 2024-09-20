import "./about_styles.scss"
import Enzo_IMG from "../../assets/img/enzo.jpeg"

const About = () => {
  return (
    <>
        <section className="about section" id="about">
            <h2 data-heading="Intro" className="section_title">
                Sobre mim
            </h2>

            <div className="about_container container grid">
                <img src={Enzo_IMG} className="about_img" alt="Sobre mim"/>

                <div className="about_data">
                    <h3 className="about_heading">Olá, sou Enzo Shiotuqui</h3>
                    <p className="about_description">Desenvolvedor Fullstack com foco em frontend, com conhecimento e experiência em tecnologias web e UI/UX design. Entregando qualidade de trabalho!</p>

                    <div className="about_info grid">
                        <div className="about_box">
                            <i className="uil uil-award about_icon"></i>
                            <h3 className="about_title">Experiência</h3>
                            <span className="about_subtitle">+ 2 anos</span>
                        </div>
                        <div className="about_box">
                            <i className="uil uil-suitcase-alt about_icon"></i>
                            <h3 className="about_title">Completos</h3>
                            <span className="about_subtitle">+ 23 projetos </span>
                        </div>
                        <div className="about_box">
                            <i className="uil uil-headphones-alt about_icon"></i>
                            <h3 className="about_title">Suporte</h3>
                            <span className="about_subtitle">Online 24/7</span>
                        </div>
                    </div>

                    <a href="#contact" className="button"><i className="uil uil-navigator button_icon"></i>
                        Entre em contato!
                    </a>

                </div>
            </div>

        </section>

    </>
  )
}

export default About