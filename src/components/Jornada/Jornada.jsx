// SASS
import "./jornada_style.scss"


const Jornada = () => {
  return (
    <>
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

    </>
  )
}

export default Jornada