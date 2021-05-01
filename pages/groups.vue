<template>
  <div id="groups">
    <div class="hero d-flex justify-center align-center">
      <div class="mask" />
      <v-row justify="center" class="rail">
        <v-col
          lg="10"
          xl="8"
          md="10"
          class="px-1"
        >
          <v-card elevation="5" class="hero-card rounded-lg text-center pa-10 ma-5">
            <v-card-title class="mx-auto pb-0 mb-4">
              <h1 class="fw-300 mb-4">
                Implemente un proceso de formación cristiana en su congregación.
              </h1>
            </v-card-title>
            <v-card-text class="my-3 mx-auto px-5 py-0">
              <p class="text">
                Teo Academy pone a su disposición los recursos (tecnologías y contenidos) y la experiencia (personas y métodos), para hacer del proceso formativo una experiencia de éxito y así brindar a los miembros del cuerpo de Cristo todos los beneficios que brinda la instrucción cristiana.
              </p>
            </v-card-text>
            <div class="centrar">
              <contact-form
                v-model="dialog.hero"
              >
                <template #activator="{ on, attrs }" class="d-block mx-auto">
                  <v-btn
                    class="btn d-block"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Contáctanos
                  </v-btn>
                </template>
              </contact-form>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!--Seccion del Ebook-->
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
              <!-- Formulario de Ebook / Descarga -->
              <ebook-form
                v-model="dialog.ebookContact"
              >
                <template #activator="{ on, attrs}" class="mx-auto d-block">
                  <v-btn
                    class="btn d-block"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Descargar
                  </v-btn>
                </template>
              </ebook-form>
            </v-card>
          </v-col>
          <v-col xl="6" lg="6" md="6" sm="10" class="mx-auto">
            <v-img max-width="500px" :src="require('../assets/img/ebook_index.jpeg')" class="rounded" />
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
            <ul v-for="(goal, j) in goals" :key="j">
              <li class="text ml-3">
                <v-icon class="icon mr-3">
                  mdi-check-circle
                </v-icon>{{ goal }}
              </li>
            </ul>
            <h2 class="text-center mt-15 mb-5">
              <v-icon class="icon">
                mdi-medal
              </v-icon>
              Beneficios
            </h2>
            <ul v-for="(benefit, n) in benefits" :key="n">
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
    <section class="whom gutter-p mt-15">
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
                          Quienes {{ who.slide }}
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
                      {{ level.mod }}
                    </h4>
                    <div class="centrar px-2">
                      <v-btn to="/" class="btn-leer rounded-lg">
                        <v-icon class="eye-i">
                          mdi-eye
                        </v-icon> <br>
                        <span>Ver</span>
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
              v-for="(source, y) in sources"
              :key="y"
              class="list-item mr-7 gray-m-font my-5"
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
              <v-btn href="https://www.segoschool.com/" target="_blank" class="btn" rel="noopener noreferrer">
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
        <ul class="px-5">
          <li class="text">
            <v-icon class="icon mr-3 gray-m-font">
              mdi-handshake-outline
            </v-icon>
            Diseño, planificación e implementación del programa formativo cristiano.
          </li>
          <li class="text">
            <v-icon class="icon mr-3 gray-m-font">
              mdi-handshake-outline
            </v-icon>
            Seguimiento, control y mejora del proceso formativo.
          </li>
          <li class="text">
            <v-icon class="icon mr-3 gray-m-font">
              mdi-handshake-outline
            </v-icon>
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
        <v-row justify="center">
          <v-col>
            <v-img :src="require('../assets/img/process.svg')" max-width="1000" class="mx-auto" />
          </v-col>
        </v-row>
        <div class="centrar mt-5">
          <process-form
            v-model="dialog.process"
          >
            <template #activator="{ on, attrs}" class="mx-auto d-block">
              <v-btn v-bind="attrs" class="btn mt-2" v-on="on">
                Descargar ficha de servicio
              </v-btn>
            </template>
          </process-form>
        </div>
      </v-container>
    </section>
    <section class="faq gutter-p pb-10">
      <h2 class="text-center red-font mb-3">
        Preguntas Frecuentes
      </h2>
      <v-container class="pb-15 mb-5">
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
                    {{ question.header }}
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="text">
                    {{ question.answer }}
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
import ContactForm from '~/components/forms/contactForm'
import ebookForm from '~/components/forms/ebookForm'
import processForm from '~/components/forms/processForm'
export default {
  components: { ContactForm, ebookForm, processForm },
  data () {
    return {
      title: 'For Groups',
      dialog: {
        hero: false,
        ebook: false,
        process: false,
        privacy: false,
        cookies: false
      },
      dialogSuccess: false,
      dialogError: false,
      validForm: false,
      alertForm: false,
      errorForm: false,
      courses: [],
      lead: {
        name: '',
        request: '',
        contactInfo: {
          masterPhone: {
            phoneType: 'Principal',
            code: '',
            number: '',
            ext: ''
          },
          masterLocation: {
            _id: 'Principal',
            name: 'Principal',
            building: {
              typeBuilding: 'Casa',
              name: 'Principal',
              floor: null,
              number: null
            },
            route1: {
              typeRoute: 'CL',
              name: null
            },
            route2: {
              typeRoute: 'AV',
              name: null
            },
            neighborhood: null,
            adminArea1: null,
            city: null,
            adminArea2: null,
            country: '',
            postalCode: null,
            formatted: null,
            location: {
              lat: null,
              lng: null
            }
          },
          email: null,
          aditional: {
            phones: [],
            infoWeb: [],
            locations: []
          }
        }
      },
      emailHero: '',
      emailEbook: '',
      emailProcess: '',
      emailNews: '',
      apiResponse: false,
      validationRules: {
        required: v => !!v || 'Campo Requerido',
        emailPattern: (v) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'E-mail inválido'
        }
      },
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
          // img: require('../assets/img/who-1.webp'),
          slide: 'entienden',
          text: 'La importancia de la formación cristiana sistémica y disciplinada para el sano desarrollo del Cuerpo de Cristo.'
        },
        {
          id: '2',
          // img: require('../assets/img/who-2.webp'),
          slide: 'necesitan',
          text: 'Los recursos precisos, experiencia comprobada y métodos eficaces para garantizar el éxito de la labor formativa.'
        },
        {
          id: '3',
          // img: require('../assets/img/who-3.webp'),
          slide: 'deciden',
          text: 'Tomar acciones con alcance eterno y no postergar para mañana la implementación de un pilar fundamental de la fe cristiana: “el proceso de formación”.'
        }
      ],
      levels: [
        {
          id: 'a',
          mod: 'Básico',
          img: require('../assets/img/basic.webp')
        },
        {
          id: 'b',
          mod: 'Intermedio',
          img: require('../assets/img/intermediate.webp')
        },
        {
          id: 'c',
          mod: 'Avanzado',
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
          header: '¿Es Teo Academy una congregación cristiana?',
          answer: 'Teo Academy no es una congregación cristiana, por lo que no persigue ganar personas para propósitos particulares ni emite planteamientos de dónde deben  congregarse las personas. Teo Academy es una organización cristiana apegada a la sana doctrina (sana enseñanza), que tiene por misión brindar los recursos, herramientas y contenidos de alta calidad a cualquier denominación o congregación cristiana para efectos de posibilitar y facilitar un proceso formativo efectivo, aportando valor a la labor gran comisionista de formar discípulos para Cristo.'
        },
        {
          header: '¿El programa TEO Academy puede implementarse en cualquier denominación cristiana?',
          answer: 'Si, nuestro contenido esta apegado y sustentado en las sagradas escrituras (La Biblia),   como la única base de nuestra fe, la inefable Palabra escrita de Dios en todos sus libros del Antiguo y Nuevo Testamento. Creemos que fue única, verbal y totalmente inspirada por el Espíritu Santo y fue escrita sin error en los manuscritos originales y ella debe tenerse como suprema y final autoridad en todo aquello que enseña. Estamos afianzados en la creencia de un solo y verdadero Dios existente eternamente en tres personas distintas: Padre, Hijo y Espíritu Santo, cada una de las cuales posee todos los atributos de la Deidad. Prescindimos el ofrecer contenidos con mensajes doctrinales donde existen históricamente posiciones divergentes entre denominaciones, por ejemplo: la predestinación. Ante lo cual quedara ha criterio de la denominación cristiana respectiva impartir su mensaje.'
        },
        {
          header: '¿Se pueden hacer modificaciones o adecuaciones al programa TEO Academy de acuerdo a las características y necesidades de cada iglesia?',
          answer: 'Si, nuestro programa formativo es una propuesta base, de la cual se puede prescindir unidades y temas a requerimiento y solicitud de cada congregación. De igual forma se podrán añadir las unidades y temas que creen convenientes. Esto es posible gracias al diseño modular de unidades y temas, a la plataforma tecnológica empleada y a la ejecución del proceso de diagnóstico e implementación diseñado por Teo Academy a ser aplicado en cada congregación permitiendo la creación de programas adaptables a las necesidades particulares de quienes empleen nuestros recursos.'
        },
        {
          header: '¿Participando y aprobando en el programa TEO Academy se obtiene un título en Teología Bíblica?',
          answer: 'No, sin embargo, al finalizar y aprobar cada sub-programa el participante recibe un certificado de participación y aprobación respectivo a cada nivel. Nuestro programa esta diseñado para brindar soluciones efectivas a las necesidades del individuo y del cuerpo de Cristo, su iglesia, garantizando el logro de los objetivos propuestos por el programa. No tenemos por misión el generar títulos académicos, aunque en ninguna circunstancia nos oponemos a aquellos quienes deseen obtenerlos por otros medios formales con el propósito de glorificar a Cristo.'
        },
        {
          header: '¿Qué se requiere para implementar Teo Academy en un grupo ó congregación?',
          answer: 'Se requiere: Tener la visión correcta de como la enseñanza beneficia al cuerpo de Cristo. Comprender el alcance eterno que tiene un proceso formativo organizado y estructurado. Disposición para adoptar o mejorar acciones en materia formativa. Disposición para asumir los compromisos y generar cambios. Superar el espacio de confort creado por no adoptar medidas efectivas en materia formativa.'
        }
      ]
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    requestForm () {
      // const that = this
      if (this.validForm) {
        // Se realiza el post a la api
        // Se recibe respuesta de la api
        this.apiResponse = true
        if (this.apiResponse) {
          // Mensaje de éxito
          if (this.dialog.heroContact) {
            this.dialog.heroContact = false
            this.dialogSuccess = true
            this.dialogError = false
          }
          if (this.dialog.ebookContact) {
            this.dialog.ebookContact = false
            this.dialogSuccess = true
            this.dialogError = false
          }
          if (this.dialog.processContact) {
            this.dialog.processContact = false
            this.dialogSuccess = true
            this.dialogError = false
          }
        } else {
          // Mensaje de error
          if (this.dialog.heroContact) {
            this.dialog.heroContact = true
            this.dialog.ebookContact = false
            this.dialog.processContact = false
          } else if (this.dialog.ebookContact) {
            this.dialog.heroContact = false
            this.dialog.ebookContact = true
            this.dialog.processContact = false
          } else if (this.dialog.processContact) {
            this.dialog.heroContact = false
            this.dialog.ebookContact = false
            this.dialog.processContact = true
          }
          this.dialogError = true
        }
      } else {
        if (this.dialog.heroContact) {
          this.dialog.heroContact = true
          this.dialog.ebookContact = false
        } else if (this.dialog.ebookContact) {
          this.dialog.heroContact = false
          this.dialog.ebookContact = true
        }
        this.dialogError = true
      }
      this.lead.name = ''
      this.lead.contactInfo.email = ''
      this.lead.contactInfo.masterLocation.country = ''
      this.lead.contactInfo.phoneNumber = ''
      this.lead.request = ''
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
  background-image: url(https://images.unsplash.com/photo-1543702404-38c2035462ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  min-height: 650px;
  .text {
    display: none;
  }
  .btn {
    display: block;
  }
}
@include tablet {
    .text {
      line-height: 2;
    }
    .btn {
      display: inline-block !important;
    }
    .rail {
      .hero-card {
        min-height: 450px !important;
      }
    }
  }

  @include miniDesktop {
    .text {
      display: block !important;
    }
    .rail {
      max-width: 1200px;
      width: 85% !important;
      display: flex !important;
      justify-content: center !important;
    }
  }
.ebook {
  background-image: url(../assets/img/wave.svg);
  background-size: cover;
  min-height: 80vh;
  h2 {
    color: $gray-mid;
  }
  .rounded {
    max-width: 100%;
    border-radius: 2.5rem!important;
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
    background-image: url(https://images.unsplash.com/photo-1440317539597-ad354a025165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
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
