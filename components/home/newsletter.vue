<template>
  <section class="newsletter mt- pt-5">
    <v-container>
      <v-row class="d-flex justify-center align-center">
        <v-col
          cols="8"
          sm="3"
          class="mr-5"
        >
          <v-img
            :src="require('@/assets/img/logo-white-full.webp')"
            contain
            max-width="100%"
          />
        </v-col>
        <v-col
          cols="12"
          lg="5"
          md="6"
        >
          <div class="container mx-auto text-center">
            <h3 class="mb-5">
              Recibe información acerca de nuestros eventos y contenidos
            </h3>
            <v-btn
              class="btn"
              @click="dialogContact = true"
            >
              Suscribirse
            </v-btn>
            <news-form
              v-model="dialogContact"
              title="Suscríbete y recibe contenido teológico gratis"
            />
            <p class="text mt-5">
              Compartiremos contenido periódicamente para fortalecer nuestra comunidad
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import newsForm from '~/components/forms/newsForm'
export default {
  components: {
    newsForm
  },
  data () {
    return {
      emailNews: '',
      dialogContact: false,
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
  h3, .text {
    color: #ffffff;
  }
  .form-box {
    height: 50px !important;
    padding: 0 !important;
    width: 100%;
    display: flex !important;
    justify-content: center !important;

    // .input-email {
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
    // }
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
