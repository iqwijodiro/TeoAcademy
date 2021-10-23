<template>
  <section class="ebook gutter-p">
    <v-container>
      <v-row class="justify-space-around align-center pt-5 mt-5 mx-auto">
        <v-col
          xl="4"
          lg="4"
          md="6"
          sm="10"
          class="mx-auto px-5"
        >
          <v-card elevation="4" class="pa-5 rounded-xl">
            <h2 class="text-capitalize text-center">
              Descarga gratis nuestro ebook
            </h2>
            <!-- Formulario de Ebook / Descarga -->
            <ebook-form
              v-model="ebookContact"
            >
              <template #activator="{ on, attrs}" class="mx-auto d-block">
                <v-btn
                  class="btn d-block"
                  v-bind="attrs"
                  v-on="on"
                >
                  Descargar
                </v-btn>
              </template>
            </ebook-form>
          </v-card>
        </v-col>
        <transition name="enter-to">
          <v-col xl="5" lg="5" md="5" sm="10" class="mx-auto">
            <v-img height="100%" max-width="1000px" :src="require('@/assets/img/ebookindex.webp')" :alt="alt" />
          </v-col>
        </transition>
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
  data () {
    return {
      ebookContact: false,
      alt: 'Libro digital: Relevancia de la formación bíblica para el cuerpo de Cristo'
    }
  }
}
</script>
<style lang="scss" scoped>

.ebook {
  background-image: url(@/assets/img/wave.svg);
  background-size: cover;
  min-height: 80vh;
  h2 {
    color: $gray-mid;
  }
  .v-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, .4) !important;
    transition: .5s;
  }
}
</style>
