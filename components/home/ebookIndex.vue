<template>
  <section class="ebook gutter-p">
    <div class="lay-top">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" />
      </svg>
    </div>
    <v-container>
      <v-row class="justify-space-around align-center pt-10 mt-5 mx-auto">
        <v-col
          cols="12"
          md="5"
          class="mx-auto"
        >
          <v-img
            v-animate-on-scroll
            height="100%"
            max-width="1000px"
            :src="require('@/assets/img/ebookindex.webp')"
            class="ebook__img"
            :alt="alt"
          />
        </v-col>
        <v-col
          cols="12"
          md="5"
          class="mx-auto px-5"
        >
          <v-card elevation="5" class="pa-5 rounded-xl">
            <h2
              :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 25px' : ''"
              class="text-center"
            >
              Descarga gratis nuestro ebook
            </h2>
            <div class="centrar">
              <v-btn
                class="btn d-block"
                @click="dialogContact = true"
              >
                Descargar
              </v-btn>
            </div>
            <!-- Formulario de Ebook / Descarga -->
            <ebook-form
              v-model="dialogContact"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <div class="lay-bottom">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" />
      </svg>
    </div> -->
  </section>
</template>
<script>
import ebookForm from '~/components/forms/ebookForm'

export default {
  components: {
    ebookForm
  },
  transition: {
    name: 'ebook',
    mode: 'out-in'
  },
  data () {
    return {
      dialogContact: false,
      ebookAnim: false,
      alt: 'Libro digital: Relevancia de la formación bíblica para el cuerpo de Cristo'
    }
  },
  mounted () {
    this.ebookAnim = true
  }
}
</script>
<style lang="scss" scoped>

.ebook {
  position: relative;
      .lay-bottom,
      .lay-top {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .lay-top {
      top: 0;
    }
    .lay-bottom {
      transform: rotate(0deg);
    }
    .lay-bottom svg,
    .lay-top svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 100px;
    }

    .lay-bottom .shape-fill,
    .lay-top .shape-fill {
        fill: #fff;
    }
  // background-image: url(@/assets/img/wave.svg);
  // background-size: cover;
    background-color: $wine;
    // background: linear-gradient(180deg, rgba($wine,1.0) 0%, rgba($wine,.75) 33%, rgba($wine,.50) 66%, rgba($wine,.05) 100%);
    min-height: 90vh;
  h2 {
    color: $gray-mid;
  }
  .v-card {
    animation: bouncing 2s ease-in-out;
    animation-iteration-count: infinite;
    position: relative;
    // box-shadow: 2px 10px 10px rgba(0, 0, 0, .14) !important;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: all 0.3s ease-in-out;
    &::after {
      position: absolute;
      content: '';
      z-index: -1;
      opacity: 0;
      // box-shadow: 15px 10px 25px rgba(0, 0, 0, .4) !important;
       box-shadow: 0 15px 25px rgba(0,0,0,0.3);
      transition: opacity 0.3s ease-in-out;
    }
  }
  .ebook__img {
    display: block;
  }
}
.before-enter {
  opacity: 0;
  transform: translateX(-200px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateX(0);
}
@keyframes bouncing {
    0% {
      transform: translateY(-10px);
    }
    50% {
    transform: translateY(10px);
    }
    100% {
    transform: translateY(-10px);
    }
}
</style>
