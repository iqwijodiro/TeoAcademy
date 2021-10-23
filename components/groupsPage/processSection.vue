<template>
  <section class="process">
    <v-container>
      <h2 class="text-center red-font mb-5">
        Proceso de implementación
      </h2>
      <p class="text-center text px-3">
        Nuestro proceso de implementación para grupos y congregaciones esta diseñado para garantizar la
        efectividad en todas sus actividades y lograr los objetivos propuestos.
      </p>
      <v-row justify="center">
        <v-col>
          <v-img :src="require('@/assets/img/infografiateo-copy.svg')" max-width="1000" class="mx-auto" />
        </v-col>
      </v-row>
      <div class="centrar mt-5">
        <process-form
          v-model="process"
        >
          <template #activator="{ on, attrs}" class="mx-auto d-block">
            <v-btn v-bind="attrs" class="btn mt-2" v-on="on">
              Descargar ficha de servicio
            </v-btn>
          </template>
        </process-form>
      </div>
    </v-container>
  </section>
</template>
<script>
import processForm from '~/components/forms/processForm'

export default {
  components: {
    processForm
  },
  data () {
    return {
      process: false
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  height: 4.5rem !important;
//   border-radius: 0.5rem;
  background-color: $ocean !important;
  color: #ffffff;
  text-transform: capitalize !important;
  font-size: $link + 0.1rem;
  padding: 1.2rem 1.5rem !important;
  margin: 0.7rem;
  font-family: $title-font !important;
  &:hover {
    color: $wine;
    font-weight: 700;
    background: #ffffff !important;
  }
}
</style>
