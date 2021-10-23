<template>
  <section class="newsletter mt- pt-5">
    <v-container>
      <v-row class="d-flex justify-center align-center">
        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="6"
          sm="6"
          class="mr-5"
        >
          <v-img
            :src="require('@/assets/img/logo-white-full.webp')"
            contain
          />
        </v-col>
        <v-col
          cols="12"
          xl="5"
          lg="5"
          md="6"
          sm="10"
        >
          <div class="container mx-auto">
            <h3 class="mb-5">
              Recibe información acerca de nuestros eventos y contenidos
            </h3>
            <v-form v-model="validForm" class="form-box">
              <v-text-field
                v-model="emailNews"
                :rules="[validationRules.required, validationRules.emailPattern]"
                label="E-mail"
                required
                clearable
                class="input-email rounded-l-lg"
              >
                <template #label>
                  <p class="card-title pa-0 ma-0">
                    Email
                  </p>
                </template>
                <template
                  #message="
                    {
                      message,
                    }"
                  class="text-white"
                >
                  <span :message="message" class="text--white">
                    Campo Requerido
                  </span>
                </template>
              </v-text-field>
              <dialog-success
                v-model="dialogSuccess"
                header="¡Gracias por suscribirte al Newsletter de Teo Academy!"
                message="A partir de este momento recibirás en tu bandeja de correo electrónico contenidos de muy alto valor para el desarrollo de tu fe."
              >
                <template #activator="{ on, attrs }">
                  <v-btn :attrs="attrs" class="btn-input rounded-lg" @on="on" @click="validForm === true ? dialogNews = true : dialogError === true">
                    Enviar
                  </v-btn>
                </template>
              </dialog-success>
              <dialog-error
                v-model="dialogError"
              />
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import dialogSuccess from '~/components/dialogSuccess'
import dialogError from '~/components/dialogError'
export default {
  components: {
    dialogSuccess,
    dialogError
  },
  data () {
    return {
      emailNews: '',
      validForm: false,
      dialogError: false,
      dialogSuccess: false,
      apiResponse: false,
      validationRules: {
        required: v => !!v || 'Campo Requerido',
        emailPattern: (v) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'E-mail inválido'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.newsletter {
  display: flex;
  align-items: center !important;
  min-height: 50vh !important;
  background: rgb(190,30,45);
  background: linear-gradient(90deg, #be1e2d 0%, rgba(142,22,34,1) 50%, rgba(95,15,23,1) 100%);
  h3 {
    color: #ffffff;
  }
  .form-box {
    height: 45px !important;
    padding: 0 !important;
    width: 100%;
    display: flex !important;
    justify-content: center !important;

    .input-email {
      background: rgba($color: #f0f0f0, $alpha: 1.0);
      min-height: 100% !important;
      font-size: $body;
      font-family: $title-font;
      border: none;
      margin: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      padding: 1rem !important;
      max-width: 80% !important;

      /* Elemento | http://localhost:3000/ */

        .v-messages__message {
          background: transparent;
          color: $gray-light !important;
          font-size: 1.3rem !important;
        }

        /* En línea #5 | http://localhost:3000/ */

        .v-application .error--text {
          color: $gray-light !important;
          font-weight: 700;
          caret-color: rgba($gray-light, $alpha: 0.60) !important;
        }

        .v-application .error--text {
          /* color: #ff5252 !important; */
          color: $gray-mid !important;
        }
    }
    .btn-input {
      min-height: 100% !important;
      border-top-left-radius: 0rem !important;
      border-bottom-left-radius: 0rem !important;
      border: transparent !important;
      background-color: $ocean !important;
      color: #ffffff;
      text-transform: capitalize !important;
      font-size: $link + 0.1rem;
      padding: 1.2rem 1.5rem !important;
      font-family: $title-font !important;
      margin-left: -.5rem !important;
      &:hover {
        color: $wine;
        font-weight: 700;
        background: #ffffff !important;
    }
    }
  }
}
</style>
