<template>
  <div id="groups">
    <div class="hero d-flex justify-center align-center">
      <div class="mask" />
      <v-row justify="center" class="rail">
        <v-col
          cols="12"
          lg="10"
          sm="10"
          xs="10"
          class="px-5"
        >
          <v-card elevation="5" class="hero-card rounded-lg text-center py-3 ma-5">
            <v-card-title class="mx-auto pb-0">
              <h1 class="fw-300">
                Implemente un proceso de formación cristiana en su congregación.
              </h1>
            </v-card-title>
            <v-card-text class="my-3 mx-auto px-5 py-0">
              <p class="text">
                Teo Academy pone a su disposición los recursos (tecnologías y contenidos) y la experiencia (personas y métodos), para hacer del proceso formativo una experiencia de éxito y así brindar a los miembros del cuerpo de Cristo todos los beneficios que brinda la instrucción cristiana.
              </p>
            </v-card-text>
            <v-btn to="/groups" class="btn mt-5">
              Descargar ficha de servicios
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <section class="ebook gutter-p">
      <v-container>
        <v-row class="justify-around align-center pt-5 mt-5 mx-auto flex-row-reverse">
          <v-col
            cols="12"
            xl="4"
            lg="4"
            md="6"
            sm="10"
            class="mx-auto"
          >
            <v-card class="pa-5 rounded-xl mx-auto">
              <h2 class="text-capitalize text-center">
                Descarga gratis nuestro ebook
              </h2>
              <div class="centrar">
                <v-btn class="btn">
                  Descargar
                </v-btn>
              </div>
            </v-card>
          </v-col>
          <v-col lg="4" md="6" sm="10" class="mx-auto">
            <v-img :src="require('../assets/img/ebook2.webp')" class="rounded" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--Seccion del Ebook-->
    <section class="goals gutter-p px-5">
      <v-container class="px-5">
        <v-row>
          <v-col
            lg="10"
            class="mx-auto"
          >
            <h2 class="text-center mb-5">
              <v-icon class="icon">
                mdi-bullseye-arrow
              </v-icon>
              Objetivos
            </h2>
            <ul v-for="(goal, i) in goals" :key="i">
              <li class="text ml-3">
                <v-icon class="icon mr-3">
                  mdi-check-circle
                </v-icon>{{ goal }}
              </li>
            </ul>
            <h2 class="text-center my-5">
              <v-icon class="icon">
                mdi-medal
              </v-icon>
              Beneficios
            </h2>
            <ul v-for="(benefit, i) in benefits" :key="i">
              <li class="text ml-3">
                <v-icon class="icon mr-3">
                  mdi-seal
                </v-icon>{{ benefit }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="whom gutter-p">
      <v-container>
        <h2 class="text-center mb-5">
          Dirigido a:
        </h2>
        <v-row justify="center">
          <v-col
            lg="8"
            sm="10"
          >
            <v-card class="sheet-slider rounded-lg mt-5" height="85%">
              <div class="mask rounded-lg" />
              <v-row justify="center" class="mb-5">
                <v-col
                  cols="12"
                >
                  <v-carousel hide-delimiters show-arrows-on-hover>
                    <v-carousel-item
                      v-for="who in whos"
                      :key="who.id"
                      class="ma-5 rounded-lg"
                    >
                      <!-- <v-img
                    :src="who.img"
                    contain
                    class="rounded-lg"
                    gradient="to top right, rgba(255,255,255,.3), rgba(240,240,240,.7)"
                  /> -->
                      <v-card elevation="0" color="transparent" class="d-flex flex-column justify-center rounded-lg" height="85%">
                        <h3 class="text-center mb-10">
                          Quienes {{ who.title }}
                        </h3>
                        <p class="text text-center mx-auto">
                          {{ who.text }}
                        </p>
                      </v-card>
                    </v-carousel-item>
                  </v-carousel>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-slide-group arrows class="my-3 my-slider">
              <v-slide-item
                v-for="(who, i) in whos"
                :key="i"
                class="slides ma-5"
              >
                <v-card elevation="5" max-width="700" class="rounded-lg">
                  <v-img
                    :src="who.img"
                  />
                </v-card>
              </v-slide-item>
            </v-slide-group> -->
      </v-container>
    </section>
    <section class="levels gutter-p">
      <v-container>
        <h2 class="text-center red-font">
          De acuerdo a las necesidades y factibilidades de cada congregación, proveemos:
        </h2>
        <section class="library ">
          <h3 class="text-center red-font">
            Biblioteca de Cursos
          </h3>
          <v-container class="d-flex justify-center align-center">
            <v-row>
              <v-col
                v-for="level in levels"
                :key="level.id"
                lg="4"
                xl="4"
                md="4"
              >
                <v-card
                  elevation="5"
                  width="320"
                  height="320"
                  class="level-card rounded-xl mx-auto d-flex align-end"
                >
                  <v-img
                    :src="level.img"
                    height="100%"
                    class="rounded-xl"
                  />
                  <div class="card-overlay">
                    <h4 class="text-center card-title mb-4">
                      {{ level.title }}
                    </h4>
                    <div class="centrar px-2">
                      <v-btn to="/" class="btn-leer rounded-lg">
                        <v-icon class="eye-i">
                          mdi-eye
                        </v-icon> <br>
                        <span>Leer</span>
                      </v-btn>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </section>
        <v-container>
          <h3 class="text-start gray-m-font">
            Con recursos formativos de excepcional calidad:
          </h3>
          <ul>
            <li
              v-for="(source, n) in sources"
              :key="n"
              class="list-item mr-7 gray-m-font"
            >
              <v-icon class="icon mr-3 gray-m-font">
                mdi-{{ source.icon }}
              </v-icon>
              {{ source.title }}
            </li>
          </ul>
        </v-container>
      </v-container>
    </section>
    <section class="software">
      <v-container>
        <v-row>
          <v-col>
            <h2 class="text-center red-font mb-5">
              Software para gestión de procesos formativos
            </h2>
            <p class="text-center text px-2">
              Ponemos a disposición de grupos y congregaciones las mejores tecnologías al servicio de la educación,desarrolladas para satisfacer las más exigentes necesidades en materia de gestión de procesos formativos, haciendo posible el acceder metodológicamente a un universo de contenidos de alto valor y hacer de la participación de tutores y estudiantes una experiencia enriquecedora, amena y efectiva.
            </p>
            <div class="centrar mt-5">
              <v-btn href="https://www.segoschool.com/" class="btn">
                Descubre más
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="asesoria">
      <v-container>
        <h2 class="text-center red-font mb-5">
          Asesoría para la implementación de procesos formativos
        </h2>
        <ul class="px-2">
          <li class="text">
            Diseño, planificación e implementación del programa formativo cristiano.
          </li>
          <li class="text">
            Seguimiento, control y mejora del proceso formativo.
          </li>
          <li class="text">
            Asesoría para la creación de contenidos.
          </li>
        </ul>
      </v-container>
    </section>
    <section class="process">
      <v-container>
        <h2 class="text-center red-font mb-5">
          Proceso de implementación
        </h2>
        <p class="text-center text px-3">
          Nuestro proceso de implementación para grupos y congregaciones esta diseñado para garantizar la
          efectividad en todas sus actividades y lograr los objetivos propuestos.
        </p>
        <div class="centrar mt-5">
          <v-btn href="https://www.segoschool.com/" class="btn">
            Descubre ficha de servicios
          </v-btn>
        </div>
      </v-container>
    </section>
    <section class="faq gutter-p pb-10">
      <h2 class="text-center red-font mb-3">
        Preguntas Frecuentes
      </h2>
      <v-container class="pb-5">
        <v-row justify="center">
          <v-col
            lg="10"
            md="10"
          >
            <v-expansion-panels accordion focusable>
              <v-expansion-panel
                v-for="(question, x) in questions"
                :key="x"
                class="px-5"
              >
                <v-expansion-panel-header disable-icon-rotate expand-icon="mdi-plus-thick" class="card-title">
                  <h4 class="red-font mr-5">
                    {{ question.title }}
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="text">
                    {{ question.text }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'For Groups',
      goals: [
        'Fomentar el desarrollo saludable del creyente en las tres áreas del ser (espíritu, alma y cuerpo).',
        'Desarrollar competencias de carácter espiritual en el participante, a través del estudio sistemático de la Biblia (ver competencias por curso).',
        'Fomentar el conocimiento y práctica de los principios escriturales como medio para la mejora de la calidad de vida del participante.',
        'Fomentar y desarrollar en el participante disciplinas cristocentricas (lectura de la Palabra, oración, adoración, otros).',
        'Desarrollar lideres fieles e idóneos para instruir y acompañar a otros en el conocimiento de la Palabra de Dios.',
        'Construir bases solidas para el crecimiento, desarrollo y expansión de la iglesia.'
      ],
      benefits: [
        'Acompañamiento para la implementación efectiva de un pilar importante para el desarrollo saludable del cuerpo de Cristo.',
        'Acceso a un modelo educativo diseñado para lograr el efecto de cambio, transformación y mejora de los miembro de la iglesia.',
        'Acceso a compendio de recursos educativos de alta calidad, lo que permite hacer del proceso formativo una experiencia amena y exitosa.',
        'Acceso a plataforma tecnológica de clase mundial, lo que facilita disponer de todo el programay materiales desde cualquier lugar, espacio y tiempo con recursos que hoy se encuentran al alcance de hogares e iglesias.',
        'Ahorro significativo de tiempo, recursos humanos y monetarios.'
      ],
      whos: [
        {
          id: '1',
          img: require('../assets/img/who-1.webp'),
          title: 'entienden',
          text: 'La importancia de la formación cristiana sistémica y disciplinada para el sano desarrollo del Cuerpo de Cristo.'
        },
        {
          id: '2',
          img: require('../assets/img/who-2.webp'),
          title: 'necesitan',
          text: 'Los recursos precisos, experiencia comprobada y métodos eficaces para garantizar el éxito de la labor formativa.'
        },
        {
          id: '3',
          img: require('../assets/img/who-3.webp'),
          title: 'deciden',
          text: 'Tomar acciones con alcance eterno y no postergar para mañana la implementación de un pilar fundamental de la fe cristiana: “el proceso de formación”.'
        }
      ],
      levels: [
        {
          id: 'a',
          title: 'Básico',
          img: require('../assets/img/basic.webp')
        },
        {
          id: 'b',
          title: 'Intermedio',
          img: require('../assets/img/intermediate.webp')
        },
        {
          id: 'c',
          title: 'Avanzado',
          img: require('../assets/img/advance.webp')
        }
      ],
      sources: [
        {
          icon: 'play-circle-outline',
          title: 'Videos'
        },
        {
          icon: 'file-document-outline',
          title: 'Documentos'
        },
        {
          icon: 'square-edit-outline',
          title: 'Asignaciones'
        },
        {
          icon: 'magnify',
          title: 'Cuestionarios'
        },
        {
          icon: 'account-group',
          title: 'Foros'
        }
      ],
      questions: [
        {
          title: '¿Es Teo Academy una congregación cristiana?',
          text: 'Teo Academy no es una congregación cristiana, por lo que no persigue ganar personas para propósitos particulares ni emite planteamientos de dónde deben  congregarse las personas. Teo Academy es una organización cristiana apegada a la sana doctrina (sana enseñanza), que tiene por misión brindar los recursos, herramientas y contenidos de alta calidad a cualquier denominación o congregación cristiana para efectos de posibilitar y facilitar un proceso formativo efectivo, aportando valor a la labor gran comisionista de formar discípulos para Cristo.'
        },
        {
          title: '¿El programa TEO Academy puede implementarse en cualquier denominación cristiana?',
          text: 'Si, nuestro contenido esta apegado y sustentado en las sagradas escrituras (La Biblia),   como la única base de nuestra fe, la inefable Palabra escrita de Dios en todos sus libros del Antiguo y Nuevo Testamento. Creemos que fue única, verbal y totalmente inspirada por el Espíritu Santo y fue escrita sin error en los manuscritos originales y ella debe tenerse como suprema y final autoridad en todo aquello que enseña. Estamos afianzados en la creencia de un solo y verdadero Dios existente eternamente en tres personas distintas: Padre, Hijo y Espíritu Santo, cada una de las cuales posee todos los atributos de la Deidad. Prescindimos el ofrecer contenidos con mensajes doctrinales donde existen históricamente posiciones divergentes entre denominaciones, por ejemplo: la predestinación. Ante lo cual quedara ha criterio de la denominación cristiana respectiva impartir su mensaje.'
        },
        {
          title: '¿Se pueden hacer modificaciones o adecuaciones al programa TEO Academy de acuerdo a las características y necesidades de cada iglesia?',
          text: 'Si, nuestro programa formativo es una propuesta base, de la cual se puede prescindir unidades y temas a requerimiento y solicitud de cada congregación. De igual forma se podrán añadir las unidades y temas que creen convenientes. Esto es posible gracias al diseño modular de unidades y temas, a la plataforma tecnológica empleada y a la ejecución del proceso de diagnóstico e implementación diseñado por Teo Academy a ser aplicado en cada congregación permitiendo la creación de programas adaptables a las necesidades particulares de quienes empleen nuestros recursos.'
        },
        {
          title: '¿Participando y aprobando en el programa TEO Academy se obtiene un título en Teología Bíblica?',
          text: 'No, sin embargo, al finalizar y aprobar cada sub-programa el participante recibe un certificado de participación y aprobación respectivo a cada nivel. Nuestro programa esta diseñado para brindar soluciones efectivas a las necesidades del individuo y del cuerpo de Cristo, su iglesia, garantizando el logro de los objetivos propuestos por el programa. No tenemos por misión el generar títulos académicos, aunque en ninguna circunstancia nos oponemos a aquellos quienes deseen obtenerlos por otros medios formales con el propósito de glorificar a Cristo.'
        },
        {
          title: '¿Qué se requiere para implementar Teo Academy en un grupo ó congregación?',
          text: 'Se requiere: Tener la visión correcta de como la enseñanza beneficia al cuerpo de Cristo. Comprender el alcance eterno que tiene un proceso formativo organizado y estructurado. Disposición para adoptar o mejorar acciones en materia formativa. Disposición para asumir los compromisos y generar cambios. Superar el espacio de confort creado por no adoptar medidas efectivas en materia formativa.'
        }
      ]
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss" scoped>
@include miniDesktop() {
  .gutter-p {
    padding-top: 12rem !important;
  }
}
.hero {
  background-image: url(../assets/img/hero-groups.webp);
  min-height: 600px;
  .text {
    display: none;
  }
  .btn {
    display: block;
  }
  @include tablet {
    .btn {
      display: inline-block !important;
    }
    .rail {
      .hero-card {
        min-height: 330px !important;
      }
    }
  }

  @include miniDesktop {
    .text {
      display: block !important;
    }
    .rail {
      max-width: 1000px;
      width: 75% !important;
      display: flex !important;
      justify-content: center !important;
    }
  }
}
.goals {
  h2, .icon {
    color: $gray-mid;
  }
  ul{
    padding: 0 !important;
    text-indent: -4rem;
    li {
      margin: 1rem 0 0 1rem !important;
      .icon{
        color: $ocean;
      }
    }
  }
  .icon {
    font-size: 3rem;
  }
}
.whom {
  background: rgb(149,149,149);
  background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(149,149,149,0.5) 25%, rgba(233,233,233,1) 50%, rgba(149,149,149,0.5) 75%, rgba(149,149,149,1) 100%);
  h2, h3 {color: $wine;}
  .sheet-slider{
    background-image: url(../assets/img/who-1.webp);
    background-size: cover;
    background-position: center center;
    object-fit: cover;
    position: relative;
    .mask {
      position: absolute;
      background: rgba($color: #ffffff, $alpha: 0.55);
      min-height: 100%;
      width: 100%;
    }
    h3 {
      font-size: 3.2rem;
      font-weight: 700;
    }
    .text {
      font-size: 2.2rem;
      color: $gray-dark;
      font-weight: 700;
      text-align: center;
      max-width: 75%;
    }

  }
}
.levels {
  h3 {
    font-size: 2.5rem;
    font-weight: 400;
  }
  .level-card {
    position: relative;
    .card-overlay{
      background-color: rgba($gray-dark, $alpha: 0.650);
      height: 40%;
      position: absolute;
      width: 100%;
      .card-title {
        font-size: 2.3rem !important;
        color: #fff;
      }
      .btn-leer {
        width: 85px;
        height: 50px;
        color: white;
        background-color: rgba($gray-dark, $alpha: 0.75);
        text-transform: capitalize !important;
        font-size: $link;
        .eye-i{
          font-size: 2.5rem;
          margin-right: .6rem;
        }
      }
    }
  }
  .list-item {
    display: inline-block;
    font-size: 2.5rem;
    .icon {
      font-size: 4.8rem;
    }
  }

}
.faq {
  background: rgb(149,149,149);
  background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(193,193,193,1) 25%, rgba(211,211,211,1) 50%, rgba(231,231,231,1) 75%, rgba(250,250,250,1) 100%);
}
</style>
