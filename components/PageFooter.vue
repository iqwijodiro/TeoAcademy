<template>
  <footer>
    <div id="footer">
      <v-container class="pt-3">
        <v-row class="mt-5">
          <v-col
            cols="12"
            md="4"
            class="d-flex flex-column justify-space-around"
          >
            <!-- <v-img
              :src="require('../assets/img/logo_full.jpg')"
              contain
              width="200px"
              max-width="100%"
              class="mx-auto my-4"
            /> -->
            <div class="d-flex flex-column justify-space-around justify-md-space-between mx-auto align-center pt-2">
              <h4 class="mb-3 text-center">
                Síguenos en nuestras redes sociales
              </h4>
              <div>
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
            </div>
            <div class="centrar">
              <!-- Formulario de contacto -->
              <contact-form v-model="dialogContact" />
              <v-btn
                class="btn mb-5"
                @click="dialogContact = true"
              >
                Contáctanos
              </v-btn>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="5"
            class=""
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
            class=""
          >
            <v-list
              class="d-flex flex-column align-md-start align-center pa-0"
            >
              <h4 class="pt-4 mb-3 fw-700">
                Acceso Rápido
              </h4>
              <v-list-item v-for="(item, i) in items" :key="i" class="item">
                <nuxt-link :to="item.to">
                  <v-list-item-title class="link px-0 red-font" v-text="item.text" />
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-container class="text-center my-5">
          <v-row class="d-flex justify-center row-foot py-4">
            <span class="text-small">Created by SEGO Technology</span>
          </v-row>
          <v-row class="d-flex justify-center py-5 text-mid">
            <span>Todos los derechos reservados para Teo Academy &copy; </span>
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
      dialogContact: false,
      FootItems: [
        {
          icon: 'mdi-email-outline',
          text: 'servicios@teo-academy.com'
        },
        // {
        //   icon: 'mdi-map-marker',
        //   text:
        //     'Costa Rica, San José, Sabana Norte, Edificio Gran Campo, Oficina No. 6.'
        // },
        // {
        //   icon: 'mdi-map-marker',
        //   text: 'EEUU, Pensilvania, Alburtis, 1548 Pinewind, PA 18011'
        // },
        {
          icon: 'mdi-whatsapp',
          text: 'EE.UU. +1 484 9255978'
        },
        {
          icon: 'mdi-whatsapp',
          text: 'Costa Rica y Centroamérica: +506-70176705'
        },
        {
          icon: 'mdi-whatsapp',
          text: 'Venezuela y Suramérica: +58 426 5758868'
        },
        {
          icon: 'mdi-whatsapp',
          text: 'Argentina + 54 911 30753752'
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
          text: 'Asesoria',
          to: '/groups'
        },
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
        // {
        //   brand: 'mdi-twitter',
        //   link: 'https://twitter.com'
        // },
        {
          brand: 'mdi-facebook',
          link: 'https://facebook.com'
        },
        {
          brand: 'mdi-instagram',
          link: 'https://instagram.com'
        }
        // ,
        // {
        //   brand: 'fab fa-telegram-plane',
        //   link: 'https://telegram.com'
        // }
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
    display: inline-block;
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
