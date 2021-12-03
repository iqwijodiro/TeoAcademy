<template>
  <div class="centrar">
    <v-dialog
      v-model="heroContact"
      transition="dialog-top-transition"
      persistent
      max-width="600px"
      max-height="80%"
    >
      <template #activator="{ on, attrs }" class="d-block mx-auto">
        <slot name="activator" :on="on" :attrs="attrs" />
      </template>
      <v-card
        class="py-3 px-3 rounded-xl"
        max-height="80%"
      >
        <h2 class="text-center red-font mb-0">
          {{ title }}
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
                  v-model="lead.contactInfo.email"
                  :rules="[validationRules.required, validationRules.emailPattern]"
                  solo
                  clearable
                  label="Email"
                  required
                />
                <v-text-field
                  v-model="lead.firstName"
                  :rules="[validationRules.required]"
                  solo
                  clearable
                  label="Primer Nombre"
                  required
                />
                <v-text-field
                  v-model="lead.secondName"
                  :rules="[validationRules.required]"
                  solo
                  clearable
                  label="Segundo Nombre"
                  required
                />
                <v-text-field
                  v-model="lead.firstLastName"
                  :rules="[validationRules.required]"
                  solo
                  clearable
                  label="Primer Apellido"
                  required
                />
                <v-text-field
                  v-model="lead.secondLastName"
                  :rules="[validationRules.required]"
                  solo
                  clearable
                  label="Segundo Apellido"
                  required
                />
                <v-text-field
                  v-model="lead.contactInfo.phoneNumber"
                  solo
                  clearable
                  label="Teléfono de Contacto"
                  type="number"
                />
              </v-col>
            </v-row>
            <v-container class="pa-0 ma-0">
              <v-dialog
                v-model="privacy"
              >
                <template #activator="{ on, attrs }">
                  <p class="text-small">
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
        <v-container class="pa-0 ma-0">
          <v-row justify="center" class="pa-0 ma-0">
            <dialog-success
              v-model="dialogSuccess"
              header="¡Gracias por Matricularte!"
              message="Un miembro de nuestro equipo le estará contactando para formalizar sus solicitud de inscripción."
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
    },
    title: {
      type: String,
      default: ''
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
      setTimeout(() => {
        this.$router.push('/purchasePage')
      }, 3500)
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
