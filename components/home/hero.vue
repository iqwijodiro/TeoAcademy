<template>
  <!--Seccion de Hero-->
  <section class="ma-0 pa-0">
    <div class="hero d-flex flex-column justify-center align-center">
      <div class="mask" />
      <v-container>
        <v-row class="d-flex justify-center justify-md-end">
          <v-col cols="12" md="6" class="px-5 mx-0">
            <!-- v-animation-entering:top="{duration: 800, delay: 100}" -->
            <appear :duration="900" :delay="300" :translate="[0,'-200px']">
              <v-card
                min-height="320px"
                class="hero-card rounded-xl text-center pa-5"
              >
                <v-card-title class="mx-auto pb-0">
                  <h1 class="fw-700 text-left white--text">
                    Contenido Teológico a tu alcance
                  </h1>
                </v-card-title>
                <v-card-text class="my-3">
                  <h2 class="text-1 my-0 white--text text-left">
                    Cursos, Diplomados, Licenciaturas, Maestrías y Doctorados
                  </h2>
                </v-card-text>
                <div class="d-md-flex justify-center">
                  <v-col cols="12" md="5" class="pa-0 mr-3">
                    <v-btn to="/courses" block class="btn">
                      Cursos
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="5" class="pa-0 mr-3">
                    <v-btn to="/program" block class="btn">
                      Programas
                    </v-btn>
                  </v-col>
                </div>
              </v-card>
            </appear>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
  <!--Seccion de Hero-->
</template>
<script>
import Appear from '~/components/Appear.vue'

export default {
  components: {
    Appear
  }
}
</script>
<style lang="scss" scoped>
.hero {
  background-image: url(../../assets/img/hero-banner.jpg);
  min-height: 100vh;
  background-position: bottom center;
  // background-attachment: scroll;
  h1 {
    text-shadow: 3px 3px 5px rgba($ocean, 0.75);
  }
    .hero-card {
      background-color: rgba($color: $ocean, $alpha: .15);
      border: 6px solid rgba($color: $wine, $alpha: .55);
      // transition: all 0.8s ease-in-out;
      // animation: enter 0.8s ease-in-out;
      .text-1 {
        font-size: 25px;
        color: $gray-dark;
        // font-weight: 700;
      }
    }
    // @keyframes enter {
    //   0% {
    //     opacity: 0;
    //     transform: translateY(-200px);
    //   }
    //   100% {
    //     opacity: 1;
    //   }
    // }
}
</style>
