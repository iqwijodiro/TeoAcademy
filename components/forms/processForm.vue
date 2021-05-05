<template>
  <div class="centrar">
    <v-dialog
      v-model="processContact"
      transition="dialog-top-transition"
      persistent
      max-width="400px"
    >
      <template #activator="{ on, attrs }" class="d-block mx-auto">
        <slot name="activator" :on="on" :attrs="attrs" />
      </template>
      <v-card class="pa-5">
        <h2 class="text-center red-font">
          Registrate para asesorarte con el proceso de implementación
        </h2>
        <v-form
          ref="processContact"
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
              header="¡Gracias por registrarte!"
              message="En tu bandeja de correo electrónico recibirás las indicaciones y recomendaciones que te ayudarán en el proceso de implementación de la modalidad For Groups."
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
              @click="processContact = false"
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
    },
    header: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      processContact: this.value,
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
      this.processContact = this.value
    },
    processContact () {
      this.$emit('input', this.processContact)
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
          this.processContact = false
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
      this.$refs.processContact.reset()
      this.$refs.processContact.resetValidation()
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  height: 4.5rem !important;
//   border-radius: 0.5rem;
  background-color: $ocean !important;
  color: #ffffff;
  text-transform: capitalize !important;
  font-size: $link + 0.1rem;
  padding: 1.2rem 1.5rem !important;
  margin: 0.7rem;
  font-family: $title-font !important;
  &:hover {
    color: $wine;
    font-weight: 700;
    background: #ffffff !important;
  }
}
</style>
