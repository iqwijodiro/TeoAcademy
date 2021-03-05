<template>
  <div id="index">
    <div class="hero d-flex align-center">
      <div class="mask" />
      <v-row class="rail d-flex justify-end mx-auto">
        <v-col
          cols="12"
          lg="5"
          xl="5"
          md="6"
          sm="8"
          xs="12"
          class="px-5"
        >
          <v-card class="card text-center pa-2 mx-3">
            <v-card-title class="pa-0 ma-3 mx-auto col-10">
              <h1 class="h1">
                Formacion con alcance eterno
              </h1>
            </v-card-title>
            <v-card-text class="my-1 col-12">
              <p class="text">
                Disfruta la maravillosa experiencia de la formación cristiana a
                través de los cursos y programas de Teo Academy
              </p>
            </v-card-text>
            <v-btn to="/courses" class="btn ">
              Nuestros Cursos
            </v-btn>
            <v-btn to="/courses" class="btn ">
              Contáctanos
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!--Seccion de Hero-->
    <section class="ebook">
      <v-container>
        <v-row class="justify-space-around align-center py-5 my-5 mx-auto">
          <v-col
            cols="12"
            xl="4"
            lg="4"
            md="6"
            sm="10"
            class="mx-auto"
          >
            <v-card class="pa-5 rounded mx-auto">
              <h2 class="text-capitalize mx-auto">
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
            <v-hover>
              <img lazy src="../assets/img/ebook1.webp" class="rounded">
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--Seccion del Ebook-->
    <section class="top-cursos py-5">
      <v-container>
        <h2 class="d-flex align-start ml-5">
          Nuestros cursos más populares
        </h2>
        <v-row justify="center">
          <v-slide-group class="my-3">
            <v-slide-item v-for="(course, i) in courses" :key="i" class="slides ma-5">
              <v-card elevation="5" max-width="315px" height="430px">
                <v-img
                  :src="course.img"
                  height="47%"
                />
                <v-card-title class="card-title">
                  {{ course.title }}
                </v-card-title>
                <v-card-text class="text-card">
                  {{ course.text }}
                </v-card-text>
                <v-row class="minirow d-flex justify-content-center align-items-center py-1">
                  <div class="my-2 mr-2">
                    <p class="ma-0 px-3">
                      {{ course.modules }} <br>
                      Módulos
                    </p>
                  </div>
                  <div class="my-2 mr-2">
                    <p class="ma-0 px-3">
                      {{ course.resources }} <br>
                      Recursos
                    </p>
                  </div>
                  <div>
                    <span class="priceOld mr-2">
                      ${{ course.priceOld }}
                    </span>
                    <span class="priceNew mr-2">
                      ${{ course.priceNew }}
                    </span>
                  </div>
                </v-row>
                <div class="centrar my-2">
                  <v-btn class="minibtn mt-3">
                    Ver Curso
                  </v-btn>
                </div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
          <v-btn to="/courses" class="btn">
            Ver todos los cursos
          </v-btn>
        </v-row>
      </v-container>
    </section>
    <!--Seccion de los mejores cursos-->
    <section class="students">
      <v-container>
        <v-row>
          <v-col
            cols="11"
            md="8"
            lg="8"
            xl="8"
            class="container"
          >
            <v-sheet elevation="5" rounded="xl" class="bg-sheet mx-auto py-5">
              <h2 class="mt-5 col-11 mx-auto">
                Lo que dicen los Teo estudiantes
              </h2>
              <v-slide-group multiple show-arrow class="quote-slider">
                <v-slide-item v-for="(quote, i) in quotes" :key="i" class="card-quote mx-auto">
                  <v-card class="text-center mx-auto shadow-none">
                    <v-row justify="center">
                      <v-col
                        cols="11"
                      >
                        <v-container class="d-flex flex-column align-items-center py-0">
                          <p class="quote">
                            {{ quote.text }}
                          </p>
                          <v-avatar size="95" class="mb-4">
                            <v-img :src="require('../assets/img/' + quote.avatar)" />
                          </v-avatar>
                          <h3 class="name">
                            {{ quote.name }}
                          </h3>
                          <h3 class="job">
                            {{ quote.job }}
                          </h3>
                        </v-container>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="next-events py-5">
      <v-container>
        <h2 class="d-flex align-start ml-5">
          Próximos Eventos
        </h2>
        <v-container>
          <v-row v-for="(evento, i) in eventos" :key="i" class="rail d-flex justify-content-center align-items-start py-3">
            <v-col
              cols="5"
              xl="2"
              lg="2"
              md="4"
              sm="6"
              class="order-3 order-lg-1 mx-auto"
            >
              <div class="date-box d-flex flex-column justify-content-around">
                <div class="d-inline-flex">
                  <span class="date mr-4"> {{ evento.date }} </span>
                  <p class="month align-self-end">
                    {{ evento.month }}
                  </p>
                </div>
                <p class="day">
                  {{ evento.day }}
                </p>
              </div>
            </v-col>
            <v-col
              cols="12"
              xl="7"
              lg="7"
              md="6"
              sm="12"
              class="order-2 order-lg-2 mx-auto"
            >
              <div class="event-center mx-auto">
                <h3 class="event-title">
                  {{ evento.title }}
                </h3>
                <p class="text-start text evento-text">
                  {{ evento.text }}
                </p>
                <div class="centrar">
                  <v-btn class="minibtn mt-2">
                    Registrarse
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              xl="3"
              lg="3"
              md="2"
              sm="12"
              class="order-1 order-lg-3"
            >
              <v-img :src="require('../assets/img/' + evento.img)" class="rounded fill-height" />
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </section>
    <section class="our-team d-flex justify-content-center align-items-center">
      <div class="mask" />
      <v-container>
        <v-row>
          <v-col
            cols="11"
            md="8"
            lg="8"
            xl="8"
            class="container"
          >
            <v-sheet elevation="5" rounded="xl" min-height="45vh" class="bg-sheet mx-auto py-2">
              <h2 class="mt-5 col-11 mx-auto">
                Nuestro Equipo
              </h2>
              <v-slide-group multiple show-arrow class="team-slider">
                <v-slide-item v-for="(partner, i) in partners" :key="i" class="card-member mx-auto">
                  <v-card class="text-center mx-auto shadow-none">
                    <v-row justify="center">
                      <v-col
                        cols="12"
                      >
                        <v-container class="d-flex flex-column align-items-center py-0">
                          <v-avatar size="125" class="mb-4">
                            <v-img :src="require('../assets/img/' + partner.avatar)" />
                          </v-avatar>
                          <h3 class="name">
                            {{ partner.member }}
                          </h3>
                          <h3 class="job">
                            {{ partner.role }}
                          </h3>
                          <p class="member">
                            {{ partner.text }}
                          </p>
                        </v-container>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="blog py-5">
      <v-container>
        <h2 class="d-flex align-start ml-5">
          Nuestros Blog
        </h2>
        <v-row justify="center">
          <v-slide-group class="my-3">
            <v-slide-item v-for="(course, i) in courses" :key="i" class="slides ma-5">
              <v-card elevation="1" max-width="315px" height="315px">
                <v-img
                  :src="course.img"
                  height="100%"
                />
                <!-- <div class="overlay-card">
                  <v-card-title class="card-title">
                    {{ course.title }}
                  </v-card-title>
                  <v-card-text class="text-card">
                    {{ course.text }}
                  </v-card-text>
                  <v-row class="minirow d-flex justify-content-center align-items-center py-1">
                    <div class="my-2 mr-2">
                      <p class="ma-0 px-3">
                        {{ course.modules }} <br>
                        Módulos
                      </p>
                    </div>
                    <div class="my-2 mr-2">
                      <p class="ma-0 px-3">
                        {{ course.resources }} <br>
                        Recursos
                      </p>
                    </div>
                    <div>
                      <span class="priceOld mr-2">
                        ${{ course.priceOld }}
                      </span>
                      <span class="priceNew mr-2">
                        ${{ course.priceNew }}
                      </span>
                    </div>
                  </v-row>
                  <div class="centrar my-2">
                    <v-btn class="minibtn mt-3">
                      Ver Curso
                    </v-btn>
                  </div>
                </div> -->
              </v-card>
            </v-slide-item>
          </v-slide-group>
          <v-btn to="/courses" class="btn">
            Ver todos los cursos
          </v-btn>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  // components: {},
  data () {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: false,
        items: 4,
        swipeAngle: 45
      },
      courses: [
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        }
      ],
      quotes: [
        {
          avatar: 'adriana.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Adriana Campos',
          job: 'Lic. Business Management'
        },
        {
          avatar: 'gustavo.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Gustavo Campos',
          job: 'Lic. Business Management'
        },
        {
          avatar: 'winder.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Winder Díaz',
          job: 'Frontend Developer'
        },
        {
          avatar: 'aquiles.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Aquiles Campos',
          job: 'Cardiologist M.D.'
        }
      ],
      eventos: [
        {
          title: 'Importancia de la formación bíblica para el desarrollo del cristiano',
          text: 'Para las personas que desean conocer y comprender la importancia del estudio metódico y sistemático de las sagradas escrituras.',
          date: 1,
          month: 'Abril',
          day: 'Jueves',
          img: 'event-1.webp'
        },
        {
          title: 'El proceso de la iniciación cristiana',
          text: 'En esta conferencia abordaremos los aspectos básicos de la fe cristiana, esenciales para un sano proceso de cambio y sanidad en él ser interior y para establecer una adecuada relación espiritual (no religiosa) con Dios (Padre, Hijo y Espíritu Santo).',
          date: 6,
          month: 'Mayo',
          day: 'Jueves',
          img: 'event-2.webp'
        },
        {
          title: 'Importancia de la formación bíblica para el desarrollo del cristiano',
          text: 'En esta conferencia abordaremos los principios y fundamentos bíblicos sobre la paternidad de Dios y como esta interviene en la vida de quienes han decidido creer en Su poder y anhelan experimentar una relación personal e intima con el autor de la vida.',
          date: 3,
          month: 'Junio',
          day: 'Jueves',
          img: 'event-3.webp'
        }
      ],
      partners: [
        {
          avatar: 'gustavo.jpg',
          member: 'Gustavo Campos',
          role: 'Fundador - Colaborador',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'adriana.jpg',
          member: 'Adriana Campos',
          role: 'Fundador - Colaborador',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'aquiles.jpg',
          member: 'Aquiles Campos',
          role: 'Fundador - Colaborador',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'vladimir.jpg',
          member: 'Vladimir Rueda',
          role: 'CTO - Founder',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        }
      ]
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-position: 25% 25%;
  background-image: url(../assets/img/banner-index.webp);
  .mask {
    position: absolute;
    background: rgba($color: #ffffff, $alpha: 0.45);
    min-height: 100vh;
    width: 100%;
  }
  .btn {
    display: block;
  }
  .rail {
    max-width: 100% !important;
    justify-content: center !important;
  }
  @include tablet {
    .btn {
      display: inline-block;
    }
  }

  @include miniDesktop {
    .rail {
      max-width: 85% !important;
      display: flex !important;
      justify-content: flex-end !important;
    }
  }
}
.ebook {
  background: no-repeat url(../assets/img/wave.svg);
  background-size: cover;
  min-height: 85vh;
  h2 {
    color: $gray-mid;
  }
  .rounded {
    max-width: 100%;
    // border-radius: 2.5rem!important;
  }
}
.top-cursos {
  .slides{
    .text-card {
      font-size: $body - .15rem;
      color: $gray-mid;
      font-weight: 300;
      line-height: 1.3;
      padding: 0 1.5rem !important;
      margin: 1.2rem 0 !important;
    }
    .minirow div {
      font-size: $miniLink + .3rem !important;
      font-weight: 400;
      color: $gray-mid;
      &:nth-child(1) {
        border-right: .2rem solid $gray-light;
      }
      .priceOld {
        color: $red;
        font-size: $link;
        font-family: $title-font;
        text-decoration: line-through;
      }
      .priceNew {
        color: $gray-mid;
        font-size: 2.5rem;
        font-family: $title-font;
        font-weight: 400;
      }
    }
  }
}
.students{
  background: rgb(149,149,149);
  background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(193,193,193,1) 25%, rgba(211,211,211,1) 50%, rgba(231,231,231,1) 75%, rgba(250,250,250,1) 100%);
  padding: 5rem 0;
  max-height: 110vh !important;
  .bg-sheet {
    min-height: 450px;
  }
    .quote-slider {
      min-height: 35vh !important;
      .card-quote {
        max-width: 81.5vw !important;
        // min-width: 320px !important;
        // width: 80% !important;
        padding-bottom: 1.5rem;
      }
      .quote {
        color: $gray-mid;
        font-size: $link +.1rem;
        text-align: center;
        line-height: 1.6;
        // max-width: 85%;
        margin-bottom: 1rem;
      }
      @include miniTelefono {
        .card-quote {
          max-width: 82vw !important;
        }
      }
      @include telefono {
        .card-quote {
          max-width: 87vw !important;
        }
      }
      @include tablet {
        .card-quote {
          max-width: 80vw !important;
        }
      }
      @include miniDesktop {
        .card-quote {
          max-width: 55.5vw !important;
        }
      }
      @include lgdesktop {
        .card-quote {
            max-width: 39vw !important;
        }
        .quote {
          font-size: $link + .4rem;
        }
      }
      @include xlDesktop {
        .card-quote {
            max-width: 48vw !important;
        }
        .quote {
          font-size: $link + .8rem;
        }
      }
      .name, .job {
        font-family: $title-font;
        font-size: $link +.5rem;
        padding: 0 1rem !important;
        color: $gray-mid;
        font-weight: 300;
        line-height: 1.4;
        margin: 0 !important;
      }
    }
}
    @include lgdesktop {
      .students {
        max-height: 60vh;
        .bg-sheet {
          min-height: 450px !important;
        }
      }
    }
.next-events{
  .rail {
    border-bottom: .2rem solid $gray-light;
    &:last-child {
      border-bottom: none;
    }
    span.date {
      font-family: $title-font;
      color: $blue;
      font-size: 6rem;
      font-weight: 400;
    }
    .month {
      font-family: $title-font;
      font-size: 2.8rem;
      color: $gray-mid;
    }
    .day  {
      color: $gray-mid;
      font-size: 2.2rem;
      font-family: $title-font;
    }
    .event-center {
      max-width: 650px;
      width: 100%;
      padding: .5rem;
      .evento-text.text {
        font-size: $link - .1rem !important;
        margin: 1rem 0 !important;
      }
    }
  }
}
.our-team {
  position: relative !important;
  background-image: url(../assets/img/library-banner.webp);
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  min-height: 60vh;
  max-height: 110vh !important;
  .mask {
    position: absolute;
    background: rgba($color: #ffffff, $alpha: 0.45);
    min-height: 60vh;
    max-height: 110vh !important;
    width: 100%;
  }
  .team-slider {

      .name, .job {
        font-family: $title-font;
        font-size: $link + .5rem;
        padding: 0 1rem !important;
        color: $gray-mid;
        font-weight: 300;
        line-height: 1.4;
        margin: 0 !important;
      }
      .member {
        font-size: $link - .3rem;
        text-align: center;
        line-height: 1.4;
        margin: 1rem;
        color: $gray-mid;
       }
       @include miniTelefono {
        .card-member {
          max-width: 82vw !important;
        }
      }
      @include telefono {
        .card-member {
          max-width: 87vw !important;
        }
      }
      @include tablet {
        .card-member {
          max-width: 80vw !important;
        }
      }
      @include miniDesktop {
        .card-member {
          max-width: 55.5vw !important;
        }
      }
      @include lgdesktop {
        .card-member {
            max-width: 39vw !important;
        }
        .member {
          font-size: $link + .4rem;
        }
      }
      @include xlDesktop {
        .card-member {
            max-width: 48vw !important;
        }
        .member {
          font-size: $link + .8rem;
        }
      }
  }
}
</style>
