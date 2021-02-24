<template>
  <v-app class="app">
    <NavBar />
    <v-main>
      <v-container>
        <nuxt />
        <nuxt />
        <nuxt />
        <nuxt />
        <nuxt />
        <nuxt />
      </v-container>
    </v-main>
    <!-- Main -->
    <PageFooter />
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar'
import PageFooter from '~/components/PageFooter'
export default {
  components: {
    NavBar,
    PageFooter
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      // items: [
      //   {
      //     icon: 'mdi-apps',
      //     title: 'Welcome',
      //     to: '/'
      //   },
      //   {
      //     icon: 'mdi-chart-bubble',
      //     title: 'Inspire',
      //     to: '/inspire'
      //   }
      // ],
      // miniVariant: false,
      right: true,
      rightDrawer: false
      // title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
* {
  margin: 0;
  padding: 0;
}
.app {
  font-family: $body-font;
}

h1,
h2,
h3,
h4,
a,
.btn {
  font-family: $title-font !important;
  text-decoration: none;
}
</style>
