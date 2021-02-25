<template>
  <div id="hero" class="d-flex align-center">
    <div class="mask" />
    <v-row class="d-flex justify-center justify-lg-end justify-sm-center align-center">
      <v-col
        cols="12"
        lg="4"
        xl="4"
        md="4"
        sm="10"
        class="px-2"
      >
        <v-card class="card text-center pa-2 mx-3">
          <v-card-title class="pa-0 ma-3 col-10 mx-auto">
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
</template>
<script>
export default {
  components: {}
}
</script>
<style lang="scss" scoped>
#hero {
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
      .card {
        right: 18rem;
      }
      .btn {
        display: inline-block;
    }
  }
}
</style>
