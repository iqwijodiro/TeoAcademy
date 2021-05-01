<template>
  <div class="centrar">
    <v-dialog
      v-model="heroContact"
      transition="dialog-top-transition"
      persistent
      max-width="650px"
    >
      <template #activator="{ on, attrs }" class="d-block mx-auto">
        <slot name="activator" :on="on" :attrs="attrs" />
      </template>
      <v-card class="py-5 px-3 rounded-xl">
        <h2 class="text-center red-font">
          Contáctanos
        </h2>
        <v-form
          ref="formHero"
          v-model="validForm"
        >
          <v-container>
            <v-row justify="center">
              <v-col
                xl="10"
                lg="10"
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
                  v-model="lead.contactInfo.email"
                  :rules="[validationRules.required, validationRules.emailPattern]"
                  solo
                  clearable
                  label="Email"
                  required
                />
                <v-text-field
                  v-model="lead.contactInfo.masterLocation.country"
                  :rules="[validationRules.required]"
                  solo
                  clearable
                  label="País"
                  required
                />
                <v-text-field
                  v-model="lead.contactInfo.phoneNumber"
                  solo
                  clearable
                  label="Teléfono (opcional)"
                  type="number"
                />
                <v-textarea
                  v-model="lead.request"
                  :rules="[validationRules.required]"
                  solo
                  clearable
                  label="Coméntanos tu solicitud (requerido)"
                  auto-grow
                />
              </v-col>
            </v-row>
            <v-container>
              <v-dialog
                v-model="privacy"
              >
                <template #activator="{ on, attrs }">
                  <p class="text-mid" style="line-height: 2">
                    Al hacer click en <span class="minibtn">Enviar</span> usted está confirmando que acepta los términos de nuestras
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
        <v-container>
          <v-row justify="end">
            <dialog-success
              v-model="dialogSuccess"
              header="¡Gracias por contactarnos!"
              message="Un miembro de nuestro equipo le estará contactando para ampliar información y/o atender cualquiera de sus solicitudes."
            >
              <template #activator="{ on, attrs }">
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
              @click="heroContact = false"
            >
              Cerrar
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Privacy from '~/components/Privacy'
import dialogSuccess from '~/components/dialogSuccess'
import dialogError from '~/components/dialogError'

export default {
  components: { Privacy, dialogSuccess, dialogError },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      heroContact: this.value,
      privacy: false,
      apiResponse: false,
      validForm: false,
      dialogSuccess: false,
      dialogError: false,
      lead: {
        name: '',
        request: '',
        contactInfo: {
          masterPhone: {
            phoneType: 'Principal',
            code: '',
            number: '',
            ext: ''
          },
          masterLocation: {
            _id: 'Principal',
            name: 'Principal',
            building: {
              typeBuilding: 'Casa',
              name: 'Principal',
              floor: null,
              number: null
            },
            route1: {
              typeRoute: 'CL',
              name: null
            },
            route2: {
              typeRoute: 'AV',
              name: null
            },
            neighborhood: null,
            adminArea1: null,
            city: null,
            adminArea2: null,
            country: '',
            postalCode: null,
            formatted: null,
            location: {
              lat: null,
              lng: null
            }
          },
          email: null,
          aditional: {
            phones: [],
            infoWeb: [],
            locations: []
          }
        }
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
      this.heroContact = this.value
    },
    heroContact () {
      this.$emit('input', this.heroContact)
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
          this.heroContact = false
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
      this.$refs.formHero.reset()
      this.$refs.formHero.resetValidation()
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