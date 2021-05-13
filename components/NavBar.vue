<template>
  <div id="navbar">
    <v-app-bar
      :clipped-left="clipped"
      elevate-on-scroll
      fixed
      app
      color="white"
      class="appbar py-2"
    >
      <v-container>
        <v-row class="d-flex justify-space-between align-items-center mt-3">
          <v-toolbar-title>
            <nuxt-link to="/">
              <v-img
                :src="require('../assets/img/logo-red-full.webp')"
                contain
                width="15rem"
              />
            </nuxt-link>
          </v-toolbar-title>
          <v-list class="nav transparent hidden-sm-and-down">
            <v-item-group class="d-flex align-center">
              <v-list-item v-for="(item, i) in items" :key="i" class="px-1">
                <nuxt-link :to="item.to">
                  <v-list-item-title class="link" v-text="item.title" />
                </nuxt-link>
              </v-list-item>
              <v-btn to="/login" class="btn rounded ml-5 my-2">
                Iniciar Sesión
              </v-btn>
            </v-item-group>
          </v-list>
          <v-btn
            class="hidden-md-and-up align-self-center"
            icon
            @click.stop="rightDrawer = !rightDrawer"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="rightDrawer"
      class="drawer"
      :right="right"
      temporary
      fixed
    >
      <v-img
        :src="require('../assets/img/logo-red-full.webp')"
        contain
        width="13rem"
        class="mx-auto py-5"
      />
      <v-list nav dense>
        <v-list-item-group class="d-flex nav flex-column pa-1 mx-1">
          <v-list-item v-for="(item, i) in items" :key="i" class="pa-2">
            <v-icon class="icon mr-1">
              {{ item.icon }}
            </v-icon>
            <nuxt-link :to="item.to">
              <v-list-item-title class="link" v-text="item.title" />
            </nuxt-link>
          </v-list-item>
          <v-btn to="/login" class="btn text-capitalize text-center my-2">
            Iniciar Sesión
          </v-btn>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-home-variant-outline',
          title: 'Inicio',
          to: '/'
        },
        {
          icon: 'mdi-book-open-outline',
          title: 'Cursos',
          to: '/courses'
        },
        {
          icon: 'mdi-school-outline',
          title: 'Programas',
          to: '/programs'
        },
        {
          icon: 'mdi-account-group',
          title: 'For Group',
          to: '/groups'
        },
        {
          icon: 'mdi-blogger',
          title: 'Blog',
          to: '/blogPage'
        }
      ],
      right: true,
      rightDrawer: false
    }
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  .appbar {
    height: 100px !important;
    width: 100vw;
  }
  .appbar,
  .drawer {
    .nav {
      .link {
        font-size: $link + .3rem;
        font-weight: 400;
        text-align: center !important;
        margin: 0 1rem !important;
        color: $wine;
        padding: 1rem 0 !important;
        &:hover {
          color: $ocean;
          border-bottom: 0.2rem solid $ocean;
          margin-top: 0;
        }
      }
    }
  }
}
</style>
