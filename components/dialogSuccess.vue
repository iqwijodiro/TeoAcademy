<template>
  <div class="centrar">
    <v-dialog
      v-model="dialogSuccess"
      max-width="400px"
    >
      <template #activator="{ on, attrs }" class="d-block mx-auto">
        <slot name="activator" :on="on" :attrs="attrs" />
      </template>
      <v-card rounded="lg">
        <div class="centrar">
          <v-icon size="60" class="icon blue-font text-center my-3">
            mdi-check-circle-outline
          </v-icon>
        </div>
        <v-card-text>
          <p class="text-mid text-center ma-2">
            <span class="card-title blue-font">
              {{ title }}
            </span>
            <br> {{ text }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-icon
            size="30"
            class="icon gray-m-font"
            @click="dialogSuccess = false"
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
    },
    header: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dialogSuccess: this.value,
      title: this.header,
      text: this.message
    }
  },
  watch: {
    value () {
      this.dialogSuccess = this.value
    },
    dialogSuccess () {
      this.$emit('input', this.dialogSuccess)
    }
  }
}
</script>
<style lang="scss" scoped>
.blue-font {
  color: $ocean;
}
</style>
