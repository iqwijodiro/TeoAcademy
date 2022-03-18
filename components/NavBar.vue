<template>
  <header>
    <div id="navbar">
      <v-app-bar
        app
        elevate-on-scroll
        color="white"
        class="appbar pt-3"
      >
        <v-container class="mt-5">
          <v-row class="d-flex justify-space-between align-center">
            <v-toolbar-title>
              <nuxt-link to="/">
                <v-img
                  :src="require('../assets/img/logo_full.jpg')"
                  contain
                  width="160px"
                />
              </nuxt-link>
            </v-toolbar-title>
            <nav class="nav transparent hidden-sm-and-down">
              <v-row class="ma-0 pa-0">
                <v-col>
                  <v-tabs
                    v-model="tabs"
                    color="#be1e2d"
                    active-class="link_item link-active"
                    class="px-0 link_item d-flex align-center justify-center"
                  >
                    <v-tab
                      v-for="(link, i) in links"
                      :key="i"
                      :to="link.to"
                      class="px-1 tab__block "
                    >
                      <h2 class="link text-capitalize">
                        {{ link.title }}
                      </h2>
                    </v-tab>
                  </v-tabs>
                </v-col>
                <v-btn to="/login" class="btn rounded my-2">
                  Ingresar
                </v-btn>
              </v-row>
            </nav>
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
          :src="require('../assets/img/logo_full.jpg')"
          contain
          width="13rem"
          class="mx-auto py-5"
        />
        <v-list nav dense>
          <v-list-item-group class="d-flex nav flex-column pa-1 mx-1">
            <v-list-item v-for="(link, i) in links" :key="i" class="tab__block pa-2">
              <v-icon class="icon mr-1">
                {{ link.icon }}
              </v-icon>
              <nuxt-link :to="link.to">
                <v-list-item-title class="link" v-text="link.title" />
              </nuxt-link>
            </v-list-item>
            <v-btn to="#" class="btn text-capitalize text-center my-2">
              Ingresar
            </v-btn>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      tabs: false,
      links: [
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
          title: 'Asesoría',
          to: '/groups'
        },
        {
          icon: 'fas fa-blog',
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
    height: 110px !important;
    // width: 100vw;
  }
  .appbar,
  .drawer {
    .nav {
      .tab__block {
        .link {
          font-size: $link;
          text-align: center !important;
          margin: 0 10px !important;
          color: rgba($gray-mid, .8);
          padding: 10px 0 !important;
          &:hover {
            color: rgba($wine, .8);
          }
        }
      }
    }
  }
}
.link-active.link_item {
    border-bottom: 2.5px solid $wine;
    color: #fff;
    .icon, .link {
      color: $wine !important;
    }
}
</style>
