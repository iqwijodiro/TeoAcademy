<template>
  <div class="centrar">
    <v-dialog
      v-model="dialogError"
      max-width="400px"
    >
      <v-card rounded="lg">
        <div class="centrar">
          <v-icon size="60" class="icon red-font text-center my-3">
            mdi-close-circle-outline
          </v-icon>
        </div>
        <v-card-text>
          <p class="text-mid text-center ma-2">
            <span class="card-title red-font">Ocurrió un error</span>
            <br> No se pudieron registrar los datos de forma exitosa, por favor verifique que todos los campos hayan sido llenados correctamente.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-icon
            size="30"
            class="icon gray-m-font"
            @click="dialogError = false"
          >
            mdi-close-circle-outline
          </v-icon>
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
      dialogError: this.value
    }
  },
  watch: {
    value () {
      this.dialogError = this.value
    },
    dialogError () {
      this.$emit('input', this.dialogError)
    }
  }
}
</script>
<style lang="scss" scoped>
.red-font {
  color: $wine;
}
</style>
