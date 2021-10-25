<template>
  <!--Seccion de Hero-->
  <section class="ma-0 pa-0">
    <div class="hero d-flex justify-center align-center">
      <div class="mask" />
      <v-container>
        <v-row class="rail">
          <v-col
            lg="5"
            xl="5"
            md="6"
            sm="10"
            class="px-5"
          >
            <v-card
              v-animation-entering:top="{duration: 1500, delay: 200}"
              elevation="5"
              max-width="450px"
              min-height="320px"
              class="hero-card rounded-lg text-center py-3"
            >
              <v-card-title class="mx-auto pb-0">
                <h1 class="fw-700 text-center mx-4">
                  Formación con alcance eterno
                </h1>
              </v-card-title>
              <v-card-text class="my-3 mx-auto px-5 py-0">
                <p class="text">
                  Disfruta la maravillosa experiencia de la formación cristiana a través de los cursos y programas de Teo Academy
                </p>
              </v-card-text>
              <div class="d-block mx-auto d-sm-flex justify-sm-center px-2">
                <v-btn to="/courses" class="btn">
                  Nuestros Cursos
                </v-btn>
                <!-- Formulario de contacto -->
                <contact-form
                  v-model="heroContact"
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
      </v-container>
    </div>
  </section>
  <!--Seccion de Hero-->
</template>
<script>
import ContactForm from '~/components/forms/contactForm'

export default {
  components: {
    ContactForm
  },
  data () {
    return {
      heroContact: false
    }
  }
}
</script>
<style lang="scss" scoped>
.hero{
  background-image: url(
    https://images.unsplash.com/photo-1594142117505-c70dcd31087c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
    );
  min-height: 650px;
  background-color: rgba($color: $gray-mid, $alpha: 0.37);
  .rail {
    display: flex;
    justify-content: center;
    // .hero-card{
      // .btn {
      //   display: block;
      //   width: 80%;
      //   overflow: unset;
      // }
    // }
  }
}
  @include tablet {
    .hero{
      .rail {
        display: flex;
        justify-content: center;
        .hero-card {
          margin: 0 auto;
        }
      }
    }
  }
@include miniDesktop {
  .hero{
    .rail {
      display: flex;
      justify-content: center;
    }
  }
}
@include desktop {
  .hero {
    .rail {
      justify-content: flex-end;
    }
  }
  .gutter-p {
    padding-top: 12rem !important;
  }
}
</style>
