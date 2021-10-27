<template>
  <div class="centrar">
    <v-dialog
      v-model="eventContact"
      transition="dialog-top-transition"
      persistent
      max-width="400px"
    >
      <template #activator="{ on, attrs }" class="d-block mx-auto">
        <slot name="activator" :on="on" :attrs="attrs" />
      </template>
      <v-card class="pa-5">
        <h2 class="text-center red-font">
          Registrate para nuestros próximos eventos gratuitos
        </h2>
        <v-form
          ref="eventContact"
          v-model="validForm"
        >
          <v-container>
            <v-row justify="center">
              <v-col
                xl="10"
                lg="10"
                class="pa-0"
              >
                <v-text-field
                  v-model="event.name"
                  :rules="[validationRules.required]"
                  solo
                  clearable
                  label="Nombre"
                  required
                />
                <v-text-field
                  v-model="event.email"
                  :rules="[validationRules.required, validationRules.emailPattern]"
                  solo
                  clearable
                  label="Email"
                  required
                />
                <v-text-field
                  v-model="event.country"
                  :rules="[validationRules.required]"
                  solo
                  clearable
                  label="País"
                  required
                />
                <!-- <v-text-field
                  v-model="lead.contactInfo.phoneNumber"
                  solo
                  clearable
                  label="Teléfono (opcional)"
                  type="number"
                /> -->
              </v-col>
            </v-row>
            <v-container>
              <v-dialog
                v-model="privacy"
              >
                <template #activator="{ on, attrs }">
                  <p class="text-small" style="line-height: 1.5">
                    Al hacer click en <span class="blue-font font-weight-bold">Enviar</span> usted está confirmando que acepta los términos de nuestras
                    <a v-bind="attrs" class="text-decoration-underline red-font" v-on="on"> políticas y condiciones</a>
                  </p>
                </template>
                <v-card>
                  <v-toolbar
                    flat
                    dense
                    app
                    color="transparent"
                  >
                    <v-spacer />
                    <v-btn
                      icon
                      @click="privacy = false"
                    >
                      <v-icon size="30" class="icon gray-light-font">
                        mdi-close-circle-outline
                      </v-icon>
                    </v-btn>
                  </v-toolbar>
                  <privacy />
                </v-card>
              </v-dialog>
            </v-container>
          </v-container>
        </v-form>
        <v-card-actions class="d-flex justify-center">
          <div class="centrar">
            <dialog-success
              v-model="dialogSuccess"
              header="¡Gracias por registrarte en nuestro evento!"
              message="En tu bandeja de correo electrónico recibirás las indicaciones y recomendaciones para unirte al evento y disfrutar de la experiencia."
            >
              <template
                #activator="{ on, attrs }"
              >
                <v-btn
                  :attrs="attrs"
                  class="btn"
                  @on="on"
                  @click="requestForm"
                >
                  Enviar
                </v-btn>
              </template>
            </dialog-success>
            <dialog-error
              v-model="dialogError"
            />
            <v-btn
              class="btn"
              @click="eventContact = false"
            >
              Cerrar
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      eventContact: this.value,
      privacy: false,
      apiResponse: false,
      validForm: false,
      dialogSuccess: false,
      dialogError: false,
      event: {
        name: '',
        email: '',
        country: ''
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
      this.eventContact = this.value
    },
    eventContact () {
      this.$emit('input', this.eventContact)
    }
  },
  methods: {
    requestForm () {
      if (this.validForm) {
        // Se realiza el post a la api
        // Se recibe respuesta de la api
        this.apiResponse = true
        if (this.apiResponse) {
          // Mensaje de éxito
          this.resetForm()
          this.eventContact = false
          this.dialogSuccess = true
        } else {
          // Mensaje de error
          this.dialogError = true
          // this.$emit('error', 'Esto es un parametro')
        }
      } else {
        // Mensaje de error
        this.dialogError = true
        // this.$emit('error', 'Esto es un parametro')
      }
    },
    resetForm () {
      this.$refs.eventContact.reset()
      this.$refs.eventContact.resetValidation()
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
