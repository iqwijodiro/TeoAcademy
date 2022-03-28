<template>
  <web-form-card
    ref="webFormCard"
    title=""
    :loading="loading"
    text-action-button="Enviar"
    max-width="900px"
    class="mx-auto"
    @recaptchaUpdate="recaptchaUpdate"
  >
    <template #body>
      <v-form
        ref="form"
        v-model="validForm"
      >
        <v-container>
          <v-row justify="center">
            <v-col
              cols="12"
              md="6"
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
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
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
                    append-icon="mdi-calendar"
                    solo
                    v-bind="attrs"
                    class="mt-5"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="date"
                  locale="es"
                  @change="save"
                />
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="lead.contactInfo.email"
                :rules="[validationRules.required]"
                solo
                clearable
                label="Edad"
                type="number"
                min="0"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="lead.secondLastName"
                :rules="[validationRules.required]"
                solo
                clearable
                label="País Natal"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="lead.second"
                :rules="[validationRules.required]"
                solo
                clearable
                label="País de Residencia Actual"
                required
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="lead.contactInfo.code"
                solo
                clearable
                label="Código Postal"
                type="number"
                min="0"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              cols="12"
              md="6"
            >
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
                :rules="[validationRules.required]"
              />
            </v-col>
          </v-row>
          <v-row justify="center" class="my-5">
            <p class="text-blog font-weight-bold blue-font text-start">
              Usted se está matriculando en: "nombre de Estudio"
            </p>
            <p class="text text-start">
              ¿Tiene conocimientos y/o estudios previos en la materia?
            </p>
          </v-row>
          <v-row justify="center">
            <v-checkbox
              v-model="positive"
              hide-details
              class="shrink mr-2 mt-0"
              label="Si"
              :disabled="negative"
            />
            <v-checkbox
              v-model="negative"
              hide-details
              class="shrink mr-2 mt-0"
              label="No"
              :disabled="positive"
            />
          </v-row>
          <v-row justify="center">
            <v-col
              cols="12"
              md="8"
            >
              <v-textarea
                :disabled="!positive"
                label="Describa brevemente:"
                solo
                class="mt-5"
                auto-grow
              />
            </v-col>
          </v-row>
          <!-- </v-row> -->
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
        header="¡Gracias por contactarnos!"
        message="Un miembro de nuestro equipo le estará contactando a la brevedad posible para ampliar información y/o atender cualquiera de sus solicitudes."
      />
      <dialog-error
        v-model="dialogError"
      />
    </template>
  </web-form-card>
</template>

<script>
import dialogSuccess from '~/components/dialogSuccess'
import dialogError from '~/components/dialogError'
import webFormCard from '~/components/forms/webFormCard.vue'

export default {
  components: { dialogSuccess, dialogError, webFormCard },
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
      dialogContact: this.value,
      loading: false,
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
          this.dialogContact = false
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
