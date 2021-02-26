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
        <v-row />
      </v-container>
    </section>
    <!--Seccion de los mejores cursos-->
  </div>
</template>
<script>
export default {
  // components: {},
  data () {
    return {
      courses: [
        {
          img: '../assets/img/IniciacionCristiana.webp',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
        },
        {
          img: 'IniciacionCristiana.webp',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
        },
        {
          img: 'IniciacionCristiana.webp',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
        },
        {
          img: 'IniciacionCristiana.webp',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
        },
        {
          img: 'IniciacionCristiana.webp',
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.'
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
  .rounded {
    max-width: 100%;
    // border-radius: 2.5rem!important;
  }
}

</style>
