<template>
  <v-overlay
    absolute
    :value="value"
    :opacity="0.8"
  >
    <v-progress-circular
      indeterminate
      size="128"
    >
      {{ message }}
    </v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
    message: { type: String, default: 'Enviando ...' }
  }
}
</script>
