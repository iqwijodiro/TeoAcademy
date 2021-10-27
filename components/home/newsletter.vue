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
            <v-form v-model="validForm" class="form-box pa-0 d-flex align-center">
              <v-text-field
                v-model="emailNews"
                :rules="[validationRules.required, validationRules.emailPattern]"
                label="E-mail"
                required
                clearable
                class="input-email rounded-l-lg py-5 ma-0"
                solo
              >
                <template #label>
                  <p class="pa-0 ma-0 blue-font">
                    Email
                  </p>
                </template>
                <template
                  #message="
                    {
                      message,
                    }"
                >
                  <span :message="message" class="text--white text-white" style="color: #fff; font-size: 14px">
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
    height: 50px !important;
    padding: 0 !important;
    width: 100%;
    display: flex !important;
    justify-content: center !important;

    .input-email {
      // background: rgba($color: #f0f0f0, $alpha: 1.0);
      // min-height: 100% !important;
      // height: 45px;
      // font-size: $body;
      // font-family: $title-font;
      // border: none;
      // margin: 0 !important;
      // border-top-right-radius: 0 !important;
      // border-bottom-right-radius: 0 !important;
      // padding: 10px !important;
      // max-width: 80% !important;
    }
    .btn-input {
      height: 49px !important;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      border: transparent !important;
      background-color: $ocean !important;
      color: #ffffff;
      text-transform: capitalize !important;
      font-size: $link;
      padding: 12px 15px !important;
      font-family: $title-font !important;
      margin: -35% 0 0 -5px !important;
       &:hover {
        color: #fff;
        font-weight: 400;
        background: rgba( $wine, .75) !important;
        transition: .5s;
      }
      &:active {
        transform: translateY(2px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
      }
    }
  }
}
</style>
