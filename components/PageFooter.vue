<template>
  <footer>
    <div id="footer">
      <v-container class="py-4">
        <v-row>
          <v-col
            md="5"
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
            md="3"
            lg="3"
            xl="3"
          >
            <v-list
              class="d-flex flex-column align-md-start align-center pa-0"
            >
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
            md="4"
            lg="4"
            xl="4"
          >
            <v-img
              :src="require('../assets/img/logo-red-full.webp')"
              contain
              width="200px"
              class="mx-auto py-4"
            />
            <h4 class="pb-3 text-center">
              Síguenos en nuestras redes sociales
            </h4>
            <div class="d-flex justify-space-between mx-auto">
              <v-list
                v-for="(icon, i) in icons"
                :key="i"
                class=""
              >
                <a
                  :href="icons[i].link"
                >
                  <v-icon size="45" class="mx-auto mb-5">
                    {{ icon.brand }}
                  </v-icon>
                </a>
              </v-list>
            </div>
          </v-col>
        </v-row>
        <v-container class="text-center mt-2">
          <v-row class="d-flex justify-center row-foot py-4">
            <span>Created by SEGO Technology</span>
          </v-row>
          <v-row class="d-flex justify-center py-5">
            <span>Todos los derechos reservados para Teo Academy &copy; </span>
          </v-row>
        </v-container>
      </v-container>
    </div>
  </footer>
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
        // {
        //   text: 'For Group',
        //   to: '/groups'
        // },
        {
          text: 'Blog',
          to: '/blogPage'
        },
        {
          text: 'Iniciar Sesión',
          to: '/login'
        }
      ],
      icons: [
        {
          brand: 'mdi-twitter',
          link: 'https://twitter.com'
        },
        {
          brand: 'mdi-facebook',
          link: 'https://facebook.com'
        },
        {
          brand: 'mdi-instagram',
          link: 'https://instagram.com'
        },
        {
          brand: 'fab fa-telegram-plane',
          link: 'https://telegram.com'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#footer {
  h4 {
    color: $gray-mid !important;
  }
  // .rrss_icon{
  //   font-size: 4.5rem !important;
  // }
  .v-icon {
    opacity: .5;
    transition: all .3s ease-in-out;
    border-radius: 50%;
    padding: 10px;
    &:hover {
      transform: translateY(-2px) scale(1.05);
      opacity: 1;
      color: $wine;
      border: 1px solid rgba($wine,0.3);
      box-shadow: 2px 2px 20px 5px rgba($wine,0.3);
    }
  }
  .text {
    font-size: $body;
    white-space: normal !important;
    color: $gray-mid;
    line-height: 1.8;
  }
  .item {
    min-height: 3.5rem !important;
    padding: 0;
  }
  span {
    font-family: $title-font;
    font-size: $miniLink + 0.5rem;
    color: $gray-mid;
  }

  .row-foot {
    border-bottom: 0.2rem solid $gray-light;
    padding-bottom: 0.5rem;
  }
  @include tablet {
    .rrss_icon {
      font-size: $link + 1.5rem !important;
    }
  }
}
</style>
