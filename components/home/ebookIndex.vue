<template>
  <section class="ebook gutter-p">
    <v-container>
      <v-row class="justify-space-around align-center pt-5 mt-5 mx-auto">
        <v-col xl="5" lg="5" md="5" sm="10" class="mx-auto">
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
          xl="4"
          lg="4"
          md="6"
          sm="10"
          class="mx-auto px-5"
        >
          <v-card elevation="5" class="pa-5 rounded-xl">
            <h2 class="text-capitalize text-center">
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
  // background-image: url(@/assets/img/wave.svg);
  // background-size: cover;
  background: rgb(255,255,255);
background: rgb(11,131,191);
background: linear-gradient(0deg, rgba(11,131,191,0) 0%, rgba(11,131,191,0.32816876750700286) 33%, rgba(11,131,191,0.6671043417366946) 66%, rgba(11,131,191,1) 100%);
  min-height: 80vh;
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
