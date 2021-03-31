<template>
  <v-app class="pt-10">
    <v-main>
      <v-container>
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <NuxtLink to="/" class="card-title mx-auto mt-10 centrar text-center">
          Ir al Inicio
        </NuxtLink>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  // layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Error, no se encontró la solicitud',
      otherError: 'Ocurrió un error inesperado'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
}
</style>
