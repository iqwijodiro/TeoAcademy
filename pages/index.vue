<template>
  <div id="index">
    <div class="hero d-flex align-center">
      <div class="mask" />
      <v-row
        class="d-flex justify-center justify-lg-end justify-sm-center align-center mx-auto col-12 col-xs-12"
      >
        <v-col
          cols="12"
          lg="5"
          xl="5"
          md="5"
          sm="10"
          xs="12"
          class="px-5"
        >
          <v-card class="card text-center pa-2 mx-3">
            <v-card-title class="pa-0 ma-3 mx-auto">
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
    <section class="ebook">
      <!--Seccion de Ebook-->
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
  </div>
</template>
<script>
export default {
  // components: {},
  // data () {}
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
  @include telefono {
    .btn {
      display: inline-block;
    }
  }
}
.ebook {
  background: no-repeat url(../assets/img/wave.svg);
  background-size: cover;
  min-height: 85vh;
  h2 {
    font-size: $section-title;
    font-weight: 300;
    color: $gray-mid;
    text-align: center;
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  .rounded {
    max-width: 100%;
    // border-radius: 2.5rem!important;
  }
}
</style>
