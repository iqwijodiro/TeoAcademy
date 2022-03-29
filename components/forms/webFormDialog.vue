<template>
  <v-dialog
    v-model="dialog"
    persistent
    scrollable
    :max-width="maxWidth"
    :transition="transition"
  >
    <!-- <template #activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" />
    </template> -->
    <v-card class="rounded-xl">
      <loading-overlay :value="loading" :message="loadingMessage" />
      <v-card-title>
        <h2
          :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 20px' : 'font-size: 25px'"
          class="text-center red-font my-1 form-title"
        >
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
              <p class="text-small mb-n1 mx-5" style="line-height: 1.5">
                Al hacer click en <span class="font-weight-bold blue-font">{{ textActionButton }}</span> usted está confirmando que acepta los términos de nuestras
                <a v-bind="attrs" class="red-font" v-on="on"> políticas y condiciones</a>
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
  </v-dialog>
</template>

<script>
import LoadingOverlay from '~/components/forms/loadingOverlay.vue'
import Privacy from '~/components/Privacy'

export default {
  components: { LoadingOverlay, Privacy },
  props: {
    value: { type: Boolean, default: false },
    maxWidth: { type: String, default: '500px' },
    transition: { type: String, default: 'dialog-top-transition' },
    loading: { type: Boolean, default: false },
    loadingMessage: { type: String, default: 'Enviando ...' },
    title: { type: String, default: '' },
    recaptcha: { type: Boolean, default: true },
    textActionButton: { type: String, default: 'Enviar' }
  },
  data () {
    return {
      dialog: this.value,
      privacyDialog: false
    }
  },
  watch: {
    value () {
      this.dialog = this.value
    },
    dialog () {
      this.$emit('input', this.dialog)
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
