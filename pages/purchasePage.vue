<template>
  <main class="bg-main">
    <v-container class="text-center">
      <h1>
        {{ formMsj }}
      </h1>
      <final-purchase-form />
    </v-container>
  </main>
</template>

<script>
import finalPurchaseForm from '~/components/forms/finalPurchaseForm.vue'
export default {
  components: { finalPurchaseForm },
  data () {
    return {
      title: 'Información final necesaria para su matriculación',
      formMsj: 'La Universidad Teológica Interamericana es una institución educativa formal por lo que requerimos para completar el proceso de matrícula, por favor suministrar los siguientes datos:'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-main {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  background: rgb(190,30,45);
  background: linear-gradient(90deg, #be1e2d 0%, rgba(142,22,34,1) 50%, rgba(95,15,23,1) 100%);
    h1 {
        font-size: 30px;
        color: #fff;
        font-weight: 300;
        max-width: 1100px;
        margin-bottom: 50px;
        margin-top: 100px;
    }
}
</style>
