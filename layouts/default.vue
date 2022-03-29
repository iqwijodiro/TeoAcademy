<template>
  <v-app id="app" class="app">
    <div ref="point" style="visibility: hidden;">
      {{ routeIn }}
    </div>
    <div
      id="scrollapp"
      ref="scrollapp"
      class="box overflow-y-auto overflow-x-hidden"
    >
      <nav-bar ref="navbar" :offset-top="offsetTop" />
      <!-- Main -->
      <v-main v-scroll:#scrollapp="onScroll" class="ma-0 px-0 pt-5">
        <nuxt />
      </v-main>
      <page-footer />
    </div>
    <v-fab-transition>
      <v-btn
        v-show="fabScroll"
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        right
        color="#be1e2d"
        class="mr-2"
        @click="scrollTop"
      >
        <v-icon>mdi-arrow-up-bold</v-icon>
      </v-btn>
    </v-fab-transition>
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
  scrollToTop: true,
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      offsetTop: 0,
      offset: 0,
      fabScroll: false,
      easing: 'easeInOutCubic'
    }
  },
  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    },
    routeIn () {
      if (!this.$nuxt.$route.path) {
        return null
      }
      this.scrollTop()
      return this.$nuxt.$route.path
    }
  },
  methods: {
    onScroll (evt) {
      this.offsetTop = evt.target.scrollTop
      this.fabScroll = this.offsetTop > 300
    },
    handleScroll (evt) {
      this.offsetTop = evt.target.scrollTop
    },
    toTop () {
      this.$vuetify.goTo(this.$refs.button, this.options)
    },
    scrollTop () {
      if (this.$refs.scrollapp && this.$refs.point) {
        const container = this.$refs.scrollapp
        const point = this.$refs.point
        const event = new CustomEvent('scroll', {})
        container.pageYOffset = 0
        setTimeout(() => {
          container.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }, 30)
        console.log(point)
        console.log(event)
      }
    }
  }
}
</script>

<style lang="scss">
.box {
  height: 100vh;
}
html {
  overflow: hidden !important;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100vw;
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
body {
  width: 100vw !important;
  min-width: 100% !important;
  margin: 0 !important;
  overflow-x: hidden !important;
}
.app {
  font-family: $body-font;
  // padding-top: 20px;
  width: 100vw !important;
  min-width: 100% !important;
}

</style>
