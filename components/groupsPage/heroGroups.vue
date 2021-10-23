<template>
  <section class="pa-0 ma-0">
    <div class="hero d-flex justify-center align-center mt-5 pa-0 ">
      <div class="mask" />
      <v-row justify="center" class="rail">
        <v-col
          xl="8"
          lg="8"
          sm="10"
          md="10"
          class="px-5"
        >
          <v-card
            elevation="5"
            class="hero-card rounded-lg    text-center pa-5 mx-auto"
          >
            <v-card-title class="mx-auto pb-0 mb-4">
              <h1 class="fw-300 mb-4">
                Implemente un proceso de formación cristiana en su congregación.
              </h1>
            </v-card-title>
            <v-card-text class="my-3 mx-auto px-5 py-0">
              <p class="text">
                Teo Academy pone a su disposición los recursos (tecnologías y contenidos) y la experiencia (personas y métodos), para hacer del proceso formativo una experiencia de éxito y así brindar a los miembros del cuerpo de Cristo todos los beneficios que brinda la instrucción cristiana.
              </p>
            </v-card-text>
            <div class="centrar">
              <contact-form
                v-model="heroGroups"
              >
                <template #activator="{ on, attrs }" class="d-block mx-auto">
                  <v-btn
                    class="btn d-block"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Contáctanos
                  </v-btn>
                </template>
              </contact-form>
            </div>
          </v-card>
        </v-col>
      </v-row>
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

@include miniDesktop() {
    .gutter-p {
        padding-top: 12rem !important;
  }
}
.hero {
    background-image: url(https://images.unsplash.com/photo-1543702404-38c2035462ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  min-height: 650px;
  .text {
      display: none;
  }
  .btn {
      display: block;
  }
}
@include tablet {
.text {
    line-height: 2;
}
.btn {
    display: inline-block !important;
}
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

@include miniDesktop {
.text {
    display: block !important;
}
}
</style>
