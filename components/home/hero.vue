<template>
  <!--Seccion de Hero-->
  <section class="ma-0 pa-0">
    <div class="hero d-flex flex-column justify-center align-center">
      <div class="mask" />
      <appear :duration="800" :delay="100" :translate="[0, '-200px']">
        <v-card flat class="main-title text-center">
          <h1 class="text-center font-weight-regular">
            Universidad Teológica Interamericana
          </h1>
          <h2 class="text-2 my-0 gray-font">
            25 años /
            Avalada y reconocida por:
            Transworld Accrediting Commission International
          </h2>
        </v-card>
      </appear>
      <v-container>
        <v-row class="rail">
          <v-col lg="6" xl="6" md="6" sm="10" class="px-5">
            <!-- v-animation-entering:top="{duration: 800, delay: 100}" -->
            <appear :duration="800" :delay="200" :translate="[0, '-200px']">
              <v-card
                elevation="5"
                max-width="500px"
                min-height="320px"
                class="hero-card rounded-lg text-center pa-3"
              >
                <v-card-title class="mx-auto pb-0">
                  <h2 class="fw-700 card-main-title text-center mx-4 red-font">
                    Programas de estudios formales cristianos
                  </h2>
                </v-card-title>
                <v-card-text class="my-3 mx-auto px-5 py-0">
                  <h2 class="text-1 my-0">
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
  background-image: url(https://images.unsplash.com/photo-1594142117505-c70dcd31087c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  min-height: 650px;
  background-color: rgba($color: $gray-mid, $alpha: 0.37);
  h1 {
    text-shadow: 3px 3px 5px rgba(149,149,149,0.75);
  }
  .main-title {
    margin-top: 70px;
    background-color: rgba($color: #e9e9e9, $alpha: 0);
    .text-2 {
      font-size: 20px;
      color: $gray-dark;
      width: 100%;
      max-width: 850px;
      margin: 0 auto;
    }
  }
    .card-main-title {
      font-size: 35px;
      line-height: 1.4;
    }
  .rail {
    display: flex;
    justify-content: center;
    // margin-top: -200px !important;
    .hero-card {
      transition: all 0.8s ease-in-out;
      animation: enter 0.8s ease-in-out;
      .text-1 {
        font-size: 25px;
        color: $gray-dark;
        // font-weight: 700;
      }
    }
    @keyframes enter {
      0% {
        opacity: 0;
        transform: translateY(-200px);
      }
      100% {
        opacity: 1;
      }
    }
  }
}
@include tablet {
  .hero {
    .main-title {
      margin-top: 0;
    margin-bottom: 70px;
    }
    .rail {
      display: flex;
      justify-content: center;
      .hero-card {
        margin: 0 auto;
      }
    }
  }
}
@include miniDesktop {
  .hero {
    .rail {
      display: flex;
      justify-content: center;
    }
  }
}
@include desktop {
  .hero {
    .rail {
      justify-content: flex-end;
    }
  }
  .gutter-p {
    padding-top: 120px !important;
  }
}
</style>
