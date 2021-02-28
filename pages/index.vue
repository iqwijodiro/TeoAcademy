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
    <section class="top-cursos">
      <v-container>
        <h2 class="d-flex align-start ml-5">
          Nuestros cursos más populares
        </h2>
        <v-row class="d-flex justify-center align-center">
          <v-card v-for="(course, i) in courses" :key="i">
            <v-img :src="course.img" />
            <v-card-text v-text="course.text" />
          </v-card>
        </v-row>
      </v-container>
    </section>
    <!--Seccion de los mejores cursos-->
    <section class="our-team py-5">
      <v-container>
        <v-sheet elevation="0" class="rounded col-12 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 mx-auto py-5 ma-5 container">
          <h2 class="mt-5">
            Lo que dicen los Teo estudiantes
          </h2>
          <!-- <v-row>
            <v-col
              cols="12"
              xl="8"
              lg="8"
              md="8"
              sm="10"
              xs="12"> -->
          <v-sheet>
            <v-slide-group multiple show-arrow class="quote-slider container">
              <v-slide-item v-for="(quote, i) in quotes" :key="i" class="card-quote container">
                <v-sheet class="d-flex flex-column align-center justify-space-between ">
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
                </v-sheet>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <!-- </v-col>
          </v-row> -->
        </v-sheet>
      </v-container>
    </section>
    <section class="next-events py-5">
      <v-container>
        <h2 class="d-flex align-start ml-5">
          Próximos Eventos
        </h2>
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
          img: 'https://unsplash.com/photos/SSh9O_-sTzg',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
        },
        {
          img: 'https://unsplash.com/photos/SSh9O_-sTzg',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
        },
        {
          img: 'https://unsplash.com/photos/SSh9O_-sTzg',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
        },
        {
          img: 'https://unsplash.com/photos/SSh9O_-sTzg',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
        },
        {
          img: 'https://unsplash.com/photos/SSh9O_-sTzg',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
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
.our-team{
  background: rgb(149,149,149);
  background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(193,193,193,1) 25%, rgba(211,211,211,1) 50%, rgba(231,231,231,1) 75%, rgba(250,250,250,1) 100%);
  padding: 5rem 0;
    .quote-slider {
      min-height: 35vh !important;
      .quote {
        font-size: $link + .4rem;
        text-align: center;
        line-height: 1.8;
        max-width: 80%;
        margin-bottom: 1rem;
      }
      .name, .job {
        font-family: $title-font;
        font-size: $link +.5rem;
        padding: 0 1rem !important;
        color: $gray-mid;
        font-weight: 300;
        line-height: 1.4;
      }
    }
}
/*.next-events{
}*/
</style>
