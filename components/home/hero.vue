<template>
  <!--Seccion de Hero-->
  <section class="ma-0 pa-0 mt-5 mt-sm-0">
    <div class="hero d-flex flex-column justify-center align-center">
      <!-- <div class="mask" /> -->
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="8" class="px-5 mx-0">
            <!-- v-animation-entering:top="{duration: 800, delay: 100}" -->
            <appear :duration="900" :delay="300" :translate="[0, '-200px']">
              <v-card
                min-height="300px"
                max-width="900"
                :min-width="$vuetify.breakpoint.lgAndUp ? '750' : 'auto'"
                class="hero-card mt-n10 mt-md-n12 rounded-xl text-center pa-5"
              >
                <v-card-title class="mx-auto pb-0">
                  <h1
                    class="fw-300 text-center"
                    :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 30px' : ''"
                  >
                    Cursos y programas de estudio cristiano
                  </h1>
                </v-card-title>
                <v-card-text class="my-3">
                  <h2
                    :class="$vuetify.breakpoint.mdAndDown ? 'my-0 text-blog text-center' : 'my-0 text-blog text-center'"
                  >
                    ¡Contenido Teológico a tu alcance!
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
      <div class="lay-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" />
        </svg>
      </div>
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
  // background-image: url(../../assets/img/bubblei.svg);
  min-height: 100vh;
  // background-position: bottom center;
  // background-attachment: scroll;
    .lay-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 110%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(0deg);
    }

    .lay-bottom svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 20%;
    }

    .lay-bottom .shape-fill {
        fill: #fff;
    }
    background: rgb(240,38,58);
    background: linear-gradient(135deg, rgba(240,38,58,1) 0%, rgba(240,38,58,1) 15%, rgba(240,38,58,0.9780287114845938) 30%, rgba(190,30,46,1) 70%, rgba(190,30,46,1) 85%, rgba(190,30,46,1) 100%);
  .hero-card {
    background-color: rgba($color: #fff, $alpha: 0.95);
    border: 6px solid rgba($color: $wine, $alpha: 0.55);
    // transition: all 0.8s ease-in-out;
    // animation: enter 0.8s ease-in-out;
  }
}
</style>
