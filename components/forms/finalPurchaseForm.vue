<template>
  <v-card
    class="py-3 px-3 rounded-xl mx-auto"
    max-width="1000"
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
            <v-select
              v-model="gender"
              :items="['Masculino', 'Femenino']"
              label="Sexo"
              hide-details
              solo
              clearable
              class="my-5"
              :rules="[validationRules.required, validationRules.emailPattern]"
            />
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Fecha de Nacimiento"
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="date"
                locale="es"
                @change="save"
              />
            </v-menu>
            <v-text-field
              v-model="lead.contactInfo.email"
              :rules="[validationRules.required]"
              solo
              clearable
              label="Edad"
              type="number"
              min="0"
            />
            <v-text-field
              v-model="lead.secondLastName"
              :rules="[validationRules.required]"
              solo
              clearable
              label="Pais Natal"
              required
            />
            <v-text-field
              v-model="lead.secondLastName"
              :rules="[validationRules.required]"
              solo
              clearable
              label="Pais de Residencia Actual"
              required
            />
            <v-text-field
              v-model="lead.contactInfo.phoneNumber"
              solo
              clearable
              label="Codigo Postal"
              type="number"
              min="0"
            />
            <v-select
              v-model="level"
              :items="[
                'Primaria y/o secundaria',
                'Universitaria',
                'Maestría']"
              label="Último grado académico cursado"
              hide-details
              solo
              clearable
              class="my-5"
              :rules="[validationRules.required]"
            />
            <v-text-field
              v-model="lead.contactInfo.phoneNumber"
              solo
              clearable
              label="Profesión u oficio"
              :rules="[validationRules.required]"
            />
            <v-checkbox
              v-model="positive"
              hide-details
              class="shrink mr-2 mt-0"
              label="Si"
            />
            <v-checkbox
              v-model="negative"
              hide-details
              class="shrink mr-2 mt-0"
              label="No"
            />
            <v-text-field
              :disabled="!positive"
              label="Describa brevemente:"
              solo
              class="mt-5"
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
      gender: false,
      positive: false,
      negative: false,
      level: false,
      privacy: false,
      apiResponse: false,
      validForm: false,
      dialogSuccess: false,
      dialogError: false,
      activePicker: null,
      date: null,
      menu: false,
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
    },
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'Año'))
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
    },
    save (date) {
      this.$refs.menu.save(date)
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
