<template>
  <v-card :max-width="maxWidth" class="rounded-xl">
    <loading-overlay :value="loading" />
    <v-card-title>
      <h2 class="text-center f-fucsia fs-24 my-1 form-title">
        {{ title }}
      </h2>
    </v-card-title>
    <v-card-text :class="$vuetify.breakpoint.xsOnly ? 'px-1' : ''">
      <slot name="body" />

      <!-- reCaptcha -->
      <v-row v-if="recaptcha" justify="center" class="mb-4">
        <recaptcha
          @success="onSuccess"
          @expired="onExpired"
          @error="onError"
        />
      </v-row>
      <!-- Políticas de Privacidad -->
      <v-container class="pa-0 mb-0 mt-1">
        <v-dialog
          v-model="privacyDialog"
        >
          <template #activator="{ on, attrs }">
            <p class="text-mid f-gray-mid fs-14 mb-n1" style="line-height: 1.5">
              Al hacer click en <span class="font-weight-bold f-fucsia">{{ textActionButton }}</span> usted está confirmando que acepta los términos de nuestras
              <a v-bind="attrs" class="text-decoration-underline" v-on="on"> políticas y condiciones</a>
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
                @click="privacyDialog = false"
              >
                <v-icon size="30" class="icon">
                  mdi-close-circle-outline
                </v-icon>
              </v-btn>
            </v-toolbar>
            <privacy />
          </v-card>
        </v-dialog>
      </v-container>
    </v-card-text>
    <!-- Acciones -->
    <v-divider />
    <v-card-actions class="mb-2 mt-1">
      <v-row justify="center" class="pb-2 pt-2">
        <slot name="actions" />
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import LoadingOverlay from '~/components/forms/loadingOverlay.vue'
import Privacy from '~/components/Privacy'

export default {
  components: { LoadingOverlay, Privacy },
  props: {
    maxWidth: { type: String, default: '500px' },
    loading: { type: Boolean, default: false },
    loadingMessage: { type: String, default: 'Enviando ...' },
    title: { type: String, default: '' },
    recaptcha: { type: Boolean, default: true },
    textActionButton: { type: String, default: 'Enviar' }
  },
  data () {
    return {
      privacyDialog: false
    }
  },
  beforeDestroy () {
    this.$recaptcha.destroy()
  },
  methods: {
    async getRecaptchaResponse () {
      return await this.$recaptcha.getResponse()
    },
    async recaptchaReset () {
      await this.$recaptcha.reset()
    },
    onSuccess (token) {
      this.$emit('recaptchaUpdate', token)
    },
    onExpired () {
      this.$emit('recaptchaUpdate', '')
    },
    onError () {
      this.$emit('recaptchaUpdate', '')
    }
  }
}
</script>

<style lang="css" scoped>
.form-title {
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  width: 100%;
}
</style>
