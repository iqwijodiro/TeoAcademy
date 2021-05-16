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
          <v-card class="pa-5 rounded-xl mx-auto">
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
        <v-col xl="6" lg="6" md="6" sm="10" class="mx-auto">
          <v-img max-width="500px" :src="require('@/assets/img/ebook_index.jpeg')" class="rounded" :alt="alt" />
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
  .rounded {
    max-width: 100%;
    border-radius: 2.5rem!important;
  }
}
</style>
