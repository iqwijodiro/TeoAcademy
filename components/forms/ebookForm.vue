<template>
  <web-form-dialog
    v-if="dialogContact"
    ref="webFormDialog"
    v-model="dialogContact"
    title="Solicita nuestro ebook gratis"
    :loading="loading"
    text-action-button="Enviar"
    max-width="500px"
    @recaptchaUpdate="recaptchaUpdate"
  >
    <template #body>
      <v-form
        ref="form"
        v-model="validForm"
      >
        <v-container>
          <v-row justify="center" dense>
            <v-col
              cols="12"
              class="py-2"
            >
              <v-text-field
                v-model="lead.name"
                :rules="[validationRules.required]"
                solo
                clearable
                label="Nombre"
                required
              />
              <v-text-field
                v-model="lead.email"
                :rules="[validationRules.required, validationRules.emailPattern]"
                solo
                clearable
                label="Email"
                required
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </template>
    <template #actions>
      <v-btn
        class="btn mx-2"
        :disabled="!reCaptchaSuccess || !validForm"
        @click="sendLead"
      >
        Enviar
        <v-icon right color="white">
          mdi-send
        </v-icon>
      </v-btn>
      <v-btn
        class="btn mx-2"
        @click="dialogContact = false"
      >
        Cerrar
      </v-btn>

      <dialog-success
        v-model="dialogSuccess"
        header="¡Gracias por Descargar nuestro Ebook!"
        message="En tu bandeja de correo electrónico recibirás el link de descarga del Ebook. Esperamos sea de gran utilidad."
      />
      <dialog-error
        v-model="dialogError"
      />
    </template>
  </web-form-dialog>
</template>

<script>
// import Privacy from '~/components/Privacy'
import dialogSuccess from '~/components/dialogSuccess'
import dialogError from '~/components/dialogError'
import webFormDialog from '~/components/forms/webFormDialog.vue'

export default {
  components: { dialogSuccess, dialogError, webFormDialog },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialogContact: this.value,
      privacy: false,
      apiResponse: false,
      validForm: false,
      dialogSuccess: false,
      dialogError: false,
      reCaptchaSuccess: false,
      loading: false,
      lead: {
        name: null,
        email: null,
        contactInfo: {
          country: null,
          phone: null
        },
        origin: 'UTI',
        typeLead: 'Contact', // ['Services File Product', 'eBook', 'Contact', 'Services File Institution', 'Services File Representative', 'Services File Tutor', 'Services File Student']
        description: null,
        numberOfStudents: null,
        numberOfTutors: null,
        leadComment: null,
        recaptchaToken: null
      },
      validationRules: {
        required: v => !!v || 'Campo Requerido',
        emailPattern: (v) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'E-mail inválido'
        }
      }
    }
  },
  watch: {
    value () {
      this.dialogContact = this.value
    },
    dialogContact () {
      this.$emit('input', this.dialogContact)
    }
  },
  methods: {
    async sendLead () {
      try {
        this.loading = true
        // this.lead.recaptchaToken = await this.$recaptcha.getResponse()
        this.lead.recaptchaToken = await this.$refs.webFormDialog.getRecaptchaResponse()

        if (this.lead.recaptchaToken.length > 0) {
          // await axios.post(
          //   `${this.$store.state.urlPublicAPI}/segoschool/lead`,
          //   this.lead
          // )

          this.loading = false
          this.dialogSuccess = true
          await this.$refs.webFormDialog.recaptchaReset()
          this.resetForm()
        }
      } catch (err) {
        this.loading = false
        this.dialogError = true
      }
    },
    resetForm () {
      this.$refs.formHero.reset()
      this.$refs.formHero.resetValidation()
    },
    recaptchaUpdate (recaptcha) {
      this.lead.recaptchaToken = recaptcha
      if (!recaptcha) {
        this.reCaptchaSuccess = false
      } else {
        this.reCaptchaSuccess = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  height: 50px !important;
  border-radius: 9px !important;
  background-color: $ocean !important;
  color: #ffffff;
  text-transform: capitalize !important;
  font-size: $link;
  padding: 12px 20px !important;
  margin: 7px;
  font-family: $title-font !important;
  &:hover {
    color: #fff;
    font-weight: 400;
    background: rgba( $wine, .75) !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, .4);
    transition: .5s;
  }
  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 9px !important;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .3s;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  }
}
</style>
