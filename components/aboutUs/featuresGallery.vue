<template>
  <section class="features">
    <h2 class="fw-300 text-center mt-10 red-font">
      ¿Por qué somos una excelente opción?
    </h2>
    <v-container>
      <v-col cols="10" class="mx-auto">
        <v-row justify="center">
          <v-card
            v-for="(card, i) in content"
            :key="i"
            elevation="3"
            height="200"
            width="250"
            class="pa-3 text-center ma-5 rounded-lg d-flex flex-column justify-center align-center card-feature"
          >
            <v-icon size="45" class="icon mb-2">
              mdi-{{ card.icon }}
            </v-icon>
            <span>
              <h3 class="text-blog">
                {{ card.title }}
              </h3>
            </span>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
    <v-container class="last-container pb-10">
      <h2 class="fw-300 text-center mt-10 red-font">
        Consulta nuestra oferta académica
      </h2>
      <div class="d-flex flex-column flex-sm-row justify-center align-center">
        <v-col
          cols="12"
          md="3"
        >
          <v-btn width="100%" class="minibtn mx-3" to="/courses">
            Ver Cursos
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-btn width="100%" class="minibtn mx-3" to="/programs">
            Ver programas
          </v-btn>
        </v-col>
      </div>
      <h3 class="red-font text-center my-5">
        Contáctanos y solicita información sobre nuestros descuentos, planes de financiamiento y becas. <br>
        ¡Matricúlate ya y disfruta la experiencia UTI!
      </h3>
      <!-- <v-row justify="center">
        <v-col
          cols="12"
          md="3"
        >
          <contact-form v-model="dialogContact" />
          <v-btn
            block
            class="btn mb-5"
            @click="dialogContact = true"
          >
            Contáctanos
          </v-btn>
        </v-col>
      </v-row> -->
    </v-container>
  </section>
</template>

<script>
// import contactForm from '~/components/forms/contactForm.vue'
export default {
  components: {
    // contactForm
  },
  data () {
    return {
      dialogContact: false,
      content: [
        {
          title: 'Trayectoria y experiencia',
          icon: 'crown-circle-outline'
        },
        {
          title: 'Metodología',
          icon: 'checkbox-multiple-marked-outline'
        },
        {
          title: 'Recursos tecnológicos',
          icon: 'cellphone-link'
        },
        {
          title: 'Precios accesibles',
          icon: 'currency-usd'
        },
        {
          title: 'Lo mas importante: Apasionados por la enseñanza cristiana',
          icon: 'rocket-launch-outline'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.features {
    .card-feature {
        .icon {
            color: $gray-mid;
        }
        &:hover {
            transform: scale(1.08);
            transition: all .45s;
            .icon, h3 {
                transition: all .45s;
                color: $wine;
            }
        }
    }
    .last-container{
    border-bottom: 3px solid $gray-light;}
}
</style>
<style scoped>
@media only screen and (max-width: 600px) {
  h2 {
    font-size: 24px !important;
  }
  .card-feature {
    margin: 10px auto !important;
    width: 85% !important;
  }
}
</style>
