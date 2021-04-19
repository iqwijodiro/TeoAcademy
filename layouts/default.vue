<template>
  <v-app class="app">
    <NavBar />
    <v-main>
      <nuxt />
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
      right: true,
      rightDrawer: false
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
  padding-top: 2rem;
}

</style>
