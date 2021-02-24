<template>
  <div id="footer">
    <v-container class="py-4">
      <v-row>
        <v-col
          cols="12"
          xs="10"
          sm="10"
          md="4"
          lg="5"
          xl="5"
        >
          <v-list>
            <v-list-item v-for="(FootItem, i) in FootItems" :key="i">
              <v-icon class="icon">
                {{ FootItem.icon }}
              </v-icon>
              <v-list-item-title class="text ma-3" v-text="FootItem.text" />
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          xs="10"
          sm="10"
          md="3"
          lg="3"
          xl="3"
        >
          <v-list class="d-flex flex-column align-center align-md-center align-lg-start align-xl-start pa-0">
            <h4 class="pt-4 mb-3">
              Acceso Rápido
            </h4>
            <v-list-item v-for="(item, i) in items" :key="i" class="item">
              <nuxt-link :to="item.to">
                <v-list-item-title class="link px-0" v-text="item.text" />
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          xs="10"
          sm="10"
          md="4"
          lg="4"
          xl="4"
        >
          <v-img
            :src="require('../assets/img/logo-red-full.webp')"
            contain
            width="18rem"
            class="mx-auto py-4"
          />
          <h4 class="pb-3 text-center">
            Sigue nuestras redes sociales
          </h4>
          <v-list class="d-flex align-start">
            <v-list-item v-for="(icon, i) in icons" :key="i" class="px-0">
              <v-icon class="icon">
                {{ icon.brand }}
              </v-icon>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-container>
        <v-row class="d-flex justify-center row-foot">
          <span>Created by SEGO Technology</span>
        </v-row>
        <v-row class="d-flex justify-center py-4">
          <span>Todos los derechos reservados para Teo Academy &copy; </span>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      FootItems: [
        {
          icon: 'mdi-map-marker',
          text:
            'Costa Rica, San José, Sabana Norte, Edificio Gran Campo, Oficina No. 6.'
        },
        {
          icon: 'mdi-map-marker',
          text: 'EEUU, Pensilvania, Alburtis, 1548 Pinewind, PA 18011'
        },
        {
          icon: 'mdi-email-outline',
          text: 'servicios@teo-academy.com'
        },
        {
          icon: 'mdi-whatsapp',
          text: '+506 70176705 y +1 484 9255978'
        }
      ],
      items: [
        {
          text: 'Inicio',
          to: '/'
        },
        {
          text: 'Cursos',
          to: '/courses'
        },
        {
          text: 'Programas',
          to: '/programs'
        },
        {
          text: 'For Group',
          to: '/groups'
        },
        {
          text: 'Blog',
          to: '/blog'
        },
        {
          text: 'Iniciar Sesión',
          to: '/login'
        }
      ],
      icons: [
        { brand: 'mdi-twitter' },
        { brand: 'mdi-facebook' },
        { brand: 'mdi-instagram' },
        { brand: 'mdi-telegram' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#footer {
  .container {
    .icon {
      font-size: $btn + .5rem;
    }
    .text {
      font-size: $body;
      white-space: normal !important;
      color: $gray-mid;
      line-height: 1.8;
    }
    h4 {
      font-size: $link + 0.5rem;
      font-family: $title-font;
      font-weight: 300;
      color: $red;
    }
    .link {
      font-size: $link + 0.2rem;
      color: $gray-mid;
      &:hover {
        color: $blue;
        border-bottom: 0.2rem solid $blue;
        margin-top: 0;
      }
    }
    .item {
      min-height: 3.5rem !important;
      padding: 0;
    }
    span {
      font-family: $title-font;
      font-size: $miniLink + .3rem;
      color: $gray-mid;
    }
  }
  .row-foot {
    border-bottom: .2rem solid $gray-light;
    padding-bottom: .5rem;
  }
}
</style>
