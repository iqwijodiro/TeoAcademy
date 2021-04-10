<template>
  <div id="index">
    <div class="hero d-flex align-center">
      <div class="mask" />
      <v-row class="rail">
        <v-col
          cols="12"
          lg="5"
          xl="5"
          md="8"
          sm="8"
          class="px-5"
        >
          <v-card elevation="10" class="hero-card rounded-lg text-center py-3">
            <v-card-title class="mx-auto pb-0">
              <h1 class="fw-700 text-center mx-4">
                Formación con alcance eterno
              </h1>
            </v-card-title>
            <v-card-text class="my-3 mx-auto px-5 py-0">
              <p class="text">
                Disfruta la maravillosa experiencia de la formación cristiana a través de los cursos y programas de Teo Academy
              </p>
            </v-card-text>
            <v-btn to="/courses" class="btn">
              Nuestros Cursos
            </v-btn>
            <v-btn to="/courses" class="btn">
              Contáctanos
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!--Seccion de Hero-->
    <section class="ebook gutter-p">
      <v-container>
        <v-row class="justify-space-around align-center pt-5 mt-5 mx-auto">
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
            <v-img src="https://images.unsplash.com/photo-1454817481404-7e84c1b73b4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)" class="rounded" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--Seccion del Ebook-->
    <section class="top-cursos gutter-p">
      <v-container>
        <h2 class="text-start">
          Nuestros cursos más populares
        </h2>
        <v-row justify="center">
          <v-col
            cols="12"
          >
            <v-slide-group multiple arrows class="my-3 my-slider">
              <v-slide-item v-for="(course, i) in courses" :key="i" class="slides ma-5">
                <v-card elevation="5" max-width="315px" class="rounded-lg">
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
                  <v-row class="minirow d-flex justify-center align-center py-1">
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
                  <div class="centrar mt-2">
                    <v-btn class="minibtn mt-3">
                      Ver Curso
                    </v-btn>
                  </div>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
          <v-btn to="/courses" class="btn my-5">
            Ver todos los cursos
          </v-btn>
        </v-row>
      </v-container>
    </section>
    <!--Seccion de los mejores cursos-->
    <section class="students mt-5 py-5">
      <v-container class="d-flex justify-center align-center">
        <v-row justify="center">
          <v-col
            md="9"
            lg="8"
            xl="8"
            sm="10"
          >
            <v-card elevation="5" rounded="xl" class="bg-sheet d-flex flex-column justify-space-around mx-auto py-5 px-3 text-center">
              <h2 class="mt-5 mb-3 px-5 text-center">
                Lo que dicen los Teo estudiantes
              </h2>
              <v-carousel
                cycle
                hide-delimiters
                class="quote-slider my-slider"
              >
                <v-carousel-item
                  v-for="(quote, i) in quotes"
                  :key="i"
                >
                  <v-card light max-width="80%" elevation="0" class="card-quote mx-auto">
                    <p class="quote">
                      {{ quote.text }}
                    </p>
                    <v-avatar size="95" class="mb-4">
                      <v-img :src="quote.avatar" />
                    </v-avatar>
                    <h3 class="name">
                      {{ quote.name }}
                    </h3>
                    <h3 class="job">
                      {{ quote.job }}
                    </h3>
                  </v-card>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="next-events gutter-p pb-5 mb-5">
      <v-container>
        <h2 class="d-flex align-start ml-5">
          Próximos Eventos
        </h2>
        <v-container>
          <v-row v-for="(evento, i) in eventos" :key="i" class="rail py-3">
            <v-col
              cols="5"
              xl="2"
              lg="2"
              md="4"
              sm="6"
              class="order-3 order-lg-1 mx-auto"
            >
              <div class="date-box">
                <div class="d-inline-flex">
                  <span class="date mr-4"> {{ evento.date }} </span>
                  <p class="month">
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
                <h3 class="event-title gray-m-font">
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
              <v-img :src="evento.img" class="rounded fill-height" min-height="200px" />
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </section>
    <section class="our-team d-flex justify-center align-center">
      <div class="mask" />
      <v-container>
        <v-row justify="center">
          <v-col
            md="8"
            lg="8"
            xl="8"
          >
            <v-card rounded="xl" class="bg-sheet mx-auto py-5 px-3 text-center">
              <h2 class="mt-5 mb-2 text-center">
                Nuestro Equipo
              </h2>
              <v-carousel
                hide-delimiters
                class="team-slider my-slider"
              >
                <v-carousel-item v-for="(partner, i) in partners" :key="i" class="card-member mx-auto">
                  <v-card max-width="90%" elevation="0" light class="mx-auto d-flex flex-column justify-center align-center py-5">
                    <v-avatar style="border-radius: 50%" size="125" class="mb-4">
                      <v-img :src="partner.avatar" />
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
                  </v-card>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="blog gutter-p mb-5 pb-5">
      <v-container>
        <h2 class="text-start ml-3">
          Nuestro Blog
        </h2>
        <v-row justify="center" class="mb-5">
          <v-col>
            <v-slide-group arrows class="my-3 my-slider">
              <v-slide-item v-for="(entry, i) in entries" :key="i" class="slide ma-5">
                <v-card elevation="5" max-width="315px" height="315px" class="blog-card d-flex align-end rounded-xl">
                  <v-img
                    :src="entry.img"
                    height="100%"
                    class="rounded-xl"
                  />
                  <div class="card-overlay">
                    <v-card-title class="card-title text-center mb-4">
                      {{ entry.title }}
                    </v-card-title>
                    <div class="d-flex justify-start align-start px-2">
                      <v-avatar size="45" class="mb-4 mx-2">
                        <v-img :src="entry.avatar" />
                      </v-avatar>
                      <div class="px-2 mr-3">
                        <h4 class="author mb-2">
                          {{ entry.author }}
                        </h4>
                        <span class="date">
                          {{ entry.date }}
                        </span>
                      </div>
                      <div>
                        <v-btn to="/" class="btn-leer">
                          <v-icon class="eye-i">
                            mdi-eye
                          </v-icon> <br>
                          <span>Leer</span>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
          <v-btn to="/blog" class="btn my-5">
            Ver todos los articulos
          </v-btn>
        </v-row>
      </v-container>
    </section>
    <section class="newsletter mt- pt-5">
      <v-container>
        <v-row class="d-flex justify-center align-center">
          <v-col
            cols="12"
            xl="4"
            lg="4"
            md="6"
            sm="6"
            class="mr-5"
          >
            <v-img
              :src="require('../assets/img/logo-white-full.webp')"
              contain
            />
          </v-col>
          <v-col
            cols="12"
            xl="5"
            lg="5"
            md="6"
            sm="10"
          >
            <div class="container mx-auto">
              <h3 class="mb-5">
                Recibe información acerca de nuestros eventos y contenidos
              </h3>
              <v-form v-model="valid" action="" class="form-box">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  clearable
                  class="input-email rounded-l-lg"
                />
                <button type="submit" class="btn-input rounded-lg">
                  Enviar
                </button>
              </v-form>
            </div>
          </v-col>
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
      title: 'Inicio',
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'El E-mail es requerido',
        v => /.+@.+/.test(v) || 'Debe ser un E-mail válido'
      ],
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
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Adriana Campos',
          job: 'Lic. Business Management'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Gustavo Campos',
          job: 'Lic. Business Management'
        },
        {
          avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu92UHJOEtoubLZW2b6fItrHIOvxKRUtHvIIMVuAEg=s83-c-mo',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Winder Díaz',
          job: 'Frontend Developer'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
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
          img: 'https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'El proceso de la iniciación cristiana',
          text: 'En esta conferencia abordaremos los aspectos básicos de la fe cristiana, esenciales para un sano proceso de cambio y sanidad en él ser interior y para establecer una adecuada relación espiritual (no religiosa) con Dios (Padre, Hijo y Espíritu Santo).',
          date: 6,
          month: 'Mayo',
          day: 'Jueves',
          img: 'https://images.unsplash.com/photo-1502101872923-d48509bff386?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
        },
        {
          title: 'Importancia de la formación bíblica para el desarrollo del cristiano',
          text: 'En esta conferencia abordaremos los principios y fundamentos bíblicos sobre la paternidad de Dios y como esta interviene en la vida de quienes han decidido creer en Su poder y anhelan experimentar una relación personal e intima con el autor de la vida.',
          date: 3,
          month: 'Junio',
          day: 'Jueves',
          img: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      ],
      partners: [
        {
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          member: 'Gustavo Campos',
          role: 'Fundador - Colaborador',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          member: 'Adriana Campos',
          role: 'Fundador - Colaborador',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
          member: 'Aquiles Campos',
          role: 'Fundador - Colaborador',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
          member: 'Vladimir Rueda',
          role: 'CTO - Founder',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        }
      ],
      entries: [
        {
          img: 'https://images.unsplash.com/photo-1555935288-ad7bad5d006b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          title: 'Fundamentos de la fe cristiana',
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          author: 'Gustavo Campos',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1590363763899-f0b78a7bb968?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          title: 'Fundamentos de la fe cristiana',
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          author: 'Adriana Campos',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1611525464734-aa4126eb6a8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          title: 'Fundamentos de la fe cristiana',
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          author: 'Gustavo Campos',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1482920387559-08269818bcfc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
          title: 'Fundamentos de la Teología Biblica',
          avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
          author: 'Winder Díaz',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1577760263010-ebfa5798337c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          title: 'Beneficios de la educación online',
          avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
          author: 'Vladimir Rueda',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1602058176018-7915d6bd37ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          title: 'Conflictos de la personalidad',
          avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
          author: 'Aquiles Campos',
          date: '01/03/2021'
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
.hero{
  background-image: url(../assets/img/banner-indexmod.webp);
  min-height: 650px !important;
  background-color: rgba($color: $gray-mid, $alpha: 0.37);
  // .mask {
  //   background-color: rgba($color: #ffffff, $alpha: 0.15);
  // }
  .btn {
    display: block !important;
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
    .rail {
      max-width: 1000px;
      width: 65% !important;
      display: flex !important;
      justify-content: flex-end !important;
    }
  }
}
@include miniDesktop() {
  .gutter-p {
    padding-top: 12rem !important;
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
.top-cursos {
  h2 {
    color: $wine;
    text-align: center;
  }
  @include miniDesktop {
    h2 {
      margin-left: 7rem !important;
      text-align: left;
    }
  }
  .slides{
    .text-card {
      font-size: $body - .15rem;
      color: $gray-mid;
      font-weight: 300;
      line-height: 1.5;
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
    }
  }
}
.students{
  background: rgb(149,149,149);
  background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(193,193,193,1) 25%, rgba(211,211,211,1) 50%, rgba(231,231,231,1) 75%, rgba(250,250,250,1) 100%);
  padding: 5rem 2rem;
  max-height: 110vh;
  .bg-sheet {
    height: 95%;
    h2 {
      color: $wine;
      line-height: 1.4;
    }
    .quote-slider {
      .card-quote {
        padding: 0 !important;
        border: none !important;
        box-shadow: none !important;
      }
      .quote {
        color: $gray-mid;
        font-size: $link + .2rem;
        line-height: 1.5;
        margin-bottom: 2rem;
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
  @include miniTelefono {
    .quote {
        font-size: $link + .8rem;
      }
    .bg-sheet {
        max-height: 580px;
      }
  }
  @include telefono {
    .bg-sheet {
        max-height: 550px;
      }
  }
  @include tablet {
    .quote {
        font-size: $link + .6rem;
      }
      .bg-sheet {
        max-height: 450px;
      }
  }
  @include lgdesktop {
    .students {
      // max-height: 60vh;
      max-height: 75vh;
      }
      .quote {
        font-size: $link + .4rem;
      }
      .bg-sheet {
        max-height: 450px;
      }
    }
.next-events{
  h2 {
    color: $wine;
  }
  .rail {
    border-bottom: .2rem solid $gray-light;
    &:last-child {
      border-bottom: none;
    }
    .date-box {
      span.date {
        font-family: $title-font;
        color: $ocean;
        font-size: 6rem;
        font-weight: 400;
      }
      .month {
        font-family: $title-font;
        font-size: 2.8rem;
        color: $gray-mid;
        align-self: center !important;
      }
      .day  {
        color: $gray-mid;
        font-size: 2.2rem;
        font-family: $title-font;
        text-align: center;
      }
      @include telefono {
        .day {
          text-align: left;
        }
      }
    }
    .event-center {
      max-width: 650px;
      width: 100%;
      padding: .5rem;
      .evento-text.text {
        font-size: $link + .2rem !important;
        margin: 1rem 0 !important;
        line-height: 1.5;
        color: $gray-mid;
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
  min-height: 80vh;
  max-height: 110vh !important;
  padding: 0 !important;
  .mask {
    position: absolute;
    background: rgba($color: #ffffff, $alpha: 0.25);
    height: 100% !important;
    width: 100%;
  }
  h2 {
    color: $wine;
  }
  .team-slider {
      .name, .job {
        font-family: $title-font;
        font-size: $link + .5rem;
        padding: 0 1rem !important;
        color: $gray-mid;
        font-weight: 300 !important;
        line-height: 1.4;
      }
      .name {
        color: $wine;
        font-weight: 400 !important;
      }
      .member {
        font-size: $link + .4rem;
        text-align: center;
        line-height: 1.4;
        margin: 1rem;
        color: $gray-mid;
       }
  }
}
.blog {
  h2 {
    color: $wine;
  }
  .my-slider {
    border-top: .2rem solid $gray-light;
    border-bottom: .2rem solid $gray-light;
    .slide {
      .blog-card{
        position: relative;
      }
      .card-overlay{
        background-color: rgba($gray-dark, $alpha: 0.60);
        height: 47.5%;
        position: absolute;
        width: 100%;
        border-bottom-left-radius: 2.4rem;
        .card-title, .date {
          color: #fff !important;
        }
        .card-title {
          font-size: 2rem !important;

        }
        .author {
          font-size: 1.5rem;
          color: #fff;
        }
        .date {
            font-size: $subtitle;
        }
        .btn-leer {
          width: 85px;
          height: 50px;
            color: white;
            background-color: rgba($gray-dark, $alpha: 0.50);
            text-transform: capitalize !important;
            font-size: $link;
            .eye-i{
              font-size: 2.5rem;
              margin-right: .6rem;
            }
        }
      }
    }
  }
}
.newsletter {
  display: flex;
  align-items: center !important;
  min-height: 50vh !important;
  background: rgb(190,30,45);
  background: linear-gradient(90deg, #be1e2d 0%, rgba(142,22,34,1) 50%, rgba(95,15,23,1) 100%);
  h3 {
    color: #ffffff;
  }
  .form-box {
    height: 45px !important;
    padding: 0 !important;
    width: 100%;
    display: flex !important;
    justify-content: center !important;

    .input-email {
      background: rgba($color: #f0f0f0, $alpha: 1.0);
      min-height: 100% !important;
      font-size: $body;
      font-family: $title-font;
      border: none;
      margin: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      padding: 1rem !important;
      max-width: 80% !important;

      /* Elemento | http://localhost:3000/ */

        .v-messages__message {
          background: transparent;
          color: $gray-light !important;
          font-size: 1.3rem !important;
        }

        /* En línea #5 | http://localhost:3000/ */

        .v-application .error--text {
          color: $gray-light !important;
          font-weight: 700;
          caret-color: rgba($gray-light, $alpha: 0.60) !important;
        }

        .v-application .error--text {
          /* color: #ff5252 !important; */
          color: $gray-mid !important;
        }
    }
    .btn-input {
      min-height: 100% !important;
      border-top-left-radius: 0rem !important;
      border-bottom-left-radius: 0rem !important;
      border: transparent !important;
      background-color: $ocean !important;
      color: #ffffff;
      text-transform: capitalize !important;
      font-size: $link + 0.1rem;
      padding: 1.2rem 1.5rem !important;
      font-family: $title-font !important;
      margin-left: -.5rem !important;
      &:hover {
        color: $wine;
        font-weight: 700;
        background: #ffffff !important;
    }
    }
  }
}
</style>
<style lang="scss">

/* En línea #13 | http://localhost:3000/ */

.my-slider {
  .v-icon.v-icon {
    /* font-size: 24px; */
    font-size: 45px;
  }
}

/* Elemento | http://localhost:3000/ */

// .my-slider > div:nth-child(3) > i:nth-child(1) {
//   border: 1px solid $gray-light;
//   color: $gray-mid;
//   border-radius: 50%;
//   // background-color: rgba($color: $gray-light, $alpha: 0.45);
// }
.mdi-chevron-left,
.mdi-chevron-right {
  transform-origin: center top 0px;
  border: 1px solid $gray-light;
  color: $gray-light;
  border-radius: 50%;
  background-color: rgba($color: $gray-light, $alpha: 0.25);
}

</style>
