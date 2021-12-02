<template>
  <footer>
    <div id="footer">
      <v-container class="pt-3">
        <v-row class="mt-5">
          <v-col
            md="5"
            lg="5"
            xl="5"
          >
            <ul>
              <li v-for="(FootItem, i) in FootItems" :key="i" class="d-flex">
                <v-icon size="30" class="icon">
                  {{ FootItem.icon }}
                </v-icon>
                <p class="text-mid ma-3">
                  {{ FootItem.text }}
                </p>
              </li>
            </ul>
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
            <!-- Formulario de contacto -->
            <contact-form v-model="heroContact">
              <template #activator="{ on, attrs }" class="d-block mx-auto">
                <v-btn
                  block
                  class="btn mb-5"
                  v-bind="attrs"
                  v-on="on"
                >
                  Contáctanos
                </v-btn>
              </template>
            </contact-form>
            <v-img
              :src="require('../assets/img/logo.webp')"
              contain
              width="200px"
              class="mx-auto my-4"
            />
            <h4 class="mb-3 text-center">
              Síguenos en nuestras redes sociales
            </h4>
            <div class="d-flex justify-space-between mx-auto pt-2">
              <v-list
                v-for="(icon, i) in icons"
                :key="i"
                class="pa-0 ma-0 list_rrss"
              >
                <a
                  :href="icons[i].link"
                >
                  <v-icon size="45" class="mx-auto">
                    {{ icon.brand }}
                  </v-icon>
                </a>
              </v-list>
            </div>
          </v-col>
        </v-row>
        <v-container class="text-center my-5">
          <v-row class="d-flex justify-center row-foot py-4">
            <span class="text-small">Created by SEGO Technology in Partnership with Theo Academy </span>
          </v-row>
          <v-row class="d-flex justify-center py-5 text-mid">
            <span>Todos los derechos reservados para Universidad Teológica Interamericana &copy; </span>
          </v-row>
        </v-container>
      </v-container>
    </div>
  </footer>
</template>

<script>
import ContactForm from '~/components/forms/contactForm'

export default {
  components: { ContactForm },
  data () {
    return {
      heroContact: false,
      FootItems: [
        // {
        //   icon: 'mdi-map-marker',
        //   text:
        //     'Costa Rica, San José, Sabana Norte, Edificio Gran Campo, Oficina No. 6.'
        // },
        {
          icon: 'mdi-map-marker',
          text: 'EEUU, 4150 Raleigh Road Pkwy. NW Wilson NC 27896'
        },
        {
          icon: 'mdi-email-outline',
          text: 'info@utiuniversity.org'
        },
        {
          icon: 'mdi-whatsapp',
          text: 'EEUU: +1-2524225252'
        },
        {
          icon: 'mdi-whatsapp',
          text: 'Venezuela y Suramérica: +58-4244409819'
        },
        {
          icon: 'mdi-whatsapp',
          text: 'Costa Rica y Centroamérica: +506-70176705'
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
  .list_rrss {
    .v-icon {
      opacity: .5;
      transition: all .3s ease-in-out;
      border-radius: 50%;
      padding: 10px;
      &:hover {
        transform: translateY(-2px) scale(1.05);
        opacity: 1;
        color: $wine;
        border: 1px solid rgba($wine, 0.3);
        box-shadow: 2px 2px 12px 5px rgba($wine,0.3);
      }
    }
  }
  .item {
    min-height: 35px !important;
    padding: 0;
  }
  span {
    font-family: $title-font;
    color: $gray-mid;
  }

  .row-foot {
    border-bottom: 2px solid $gray-light;
    padding-bottom: 15px;
  }
  @include tablet {
    .rrss_icon {
      font-size: $link!important;
    }
  }
}
</style>
