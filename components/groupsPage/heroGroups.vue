<template>
  <section class="pa-0 ma-0">
    <div class="hero d-flex justify-center align-center pa-0 ">
      <div class="mask" />
      <v-container>
        <v-row justify="center" class="rail">
          <v-col cols="12" md="8" sm="10" class="mx-auto px-5">
            <v-card
              elevation="5"
              min-height="320px"
              max-height="400"
              :width="$vuetify.breakpoint.lgAndUp ? '750' : 'auto'"
              class="hero-card rounded-xl text-center mt-10 pa-5 d-flex flex-column justify-space-around"
            >
              <v-card-title class="mx-auto pb-0 mb-4">
                <h1
                  :style="
                    $vuetify.breakpoint.mdAndDown ? 'font-size: 30px' : ''
                  "
                  class="fw-300 text-center"
                >
                  ¡Enseñanza cristiana con excelencia!
                  <!-- Implemente un proceso de formación cristiana en su
                  congregación. -->
                </h1>
              </v-card-title>
              <v-card-text class="mb-3 mx-auto px-5 py-0">
                <p
                  :class="$vuetify.breakpoint.mdAndDown ? 'text-small' : 'text'"
                >
                  Teo Academy pone a su
                  disposición los recursos (tecnologías, contenidos, personas y
                  métodos), para hacer de la instrucción cristiana una
                  experiencia enriquecedora, amena y efectiva para los miembros
                  de la Congregación.
                </p>
              </v-card-text>
              <div class="centrar">
                <contact-form v-model="heroGroups">
                  <template #activator="{ on, attrs }" class="d-block mx-auto">
                    <v-btn class="btn d-block" v-bind="attrs" v-on="on">
                      Contáctanos
                    </v-btn>
                  </template>
                </contact-form>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>
<script>
import ContactForm from '~/components/forms/contactForm'

export default {
  components: {
    ContactForm
  },
  data () {
    return {
      heroGroups: false
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  background-image: url(https://images.unsplash.com/photo-1541629308-915eec71b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80);
  height: 100%;
  min-height: 85vh;
  background-position: bottom;
  .btn {
    display: block;
  }
}
@include tablet {
  .hero {
    min-height: 70vh;
    .rail {
      display: flex;
      justify-content: center;
      align-items: center;
      .hero-card {
        min-height: 350px !important;
        width: 90%;
        max-width: 1000px;
      }
    }
  }
}

@include miniDesktop {
  .text {
    display: block !important;
  }
}
</style>
