<template>
  <v-card elevation="5" max-width="325px" class="rounded-lg mx-3 my-5 pb-2">
    <v-img
      :src="course.img"
      height="47%"
      :alt="course.name"
    />
    <v-card-title class="card-title">
      {{ course.title }}
    </v-card-title>
    <v-card-text class="text-card">
      {{ course.text }}
    </v-card-text>
    <v-row class="minirow d-flex justify-center align-center py-1">
      <div class="my-2 mr-2">
        <p class="ma-0 px-3">
          {{ course.modules }} <br>
          Módulos
        </p>
      </div>
      <div class="my-2 mr-2">
        <p class="ma-0 px-3">
          {{ course.resources }} <br>
          Recursos
        </p>
      </div>
      <div>
        <span class="priceOld mr-2">
          ${{ course.priceOld }}
        </span>
        <span class="priceNew mr-2">
          ${{ course.priceNew }}
        </span>
      </div>
    </v-row>
    <div class="centrar mt-2">
      <v-btn class="minibtn mt-3">
        Ver Curso
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['course']
}
</script>

<style lang="scss" scoped>
.text-card {
      font-size: $body - .15rem;
      color: $gray-mid;
      font-weight: 300;
      line-height: 1.5;
      padding: 0 1.5rem !important;
      margin: 1.2rem 0 !important;
    }
    .minirow div {
      font-size: $miniLink + .3rem !important;
      font-weight: 400;
      color: $gray-mid;
      &:nth-child(1) {
        border-right: .2rem solid $gray-light;
      }
      .priceOld {
        color: $wine;
        font-size: $link;
        font-family: $title-font;
        text-decoration: line-through;
      }
      .priceNew {
        color: $gray-mid;
        font-size: 2.5rem;
        font-family: $title-font;
        font-weight: 400;
      }
  }
</style>
