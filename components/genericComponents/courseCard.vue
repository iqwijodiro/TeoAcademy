<template>
  <v-card
    max-height="545px"
    max-width="320px"
    height="95%"
    class="
      course__card
      rounded-lg
      mx-4
      my-5
      pb-3
      d-flex
      flex-column
      justify-space-between
    "
    @click="selectCourse(course)"
  >
    <v-img
      :src="imgLink"
      height="45%"
      max-height="220px"
      class="mb-2 img-course"
      :alt="name"
    />
    <v-card-title class="card-title my-0 pt-2">
      {{ name }}
    </v-card-title>
    <v-card-text class="text-card">
      {{ subName }}
    </v-card-text>
    <v-row class="minirow d-flex justify-center align-center py-1">
      <!-- v-if="course.structure && course.structure.sections" -->
      <div
        class="my-2 mr-2"
      >
        <p class="ma-0 px-3 text-small">
          {{ sections }} <br>
          Módulos
        </p>
      </div>
      <!-- v-if="course.features && course.features.resources" -->
      <div
        class="my-2 mr-2"
      >
        <p class="ma-0 px-3 text-small">
          {{ resources }} <br>
          Recursos
        </p>
      </div>
      <div>
        <span class="priceOld mr-2">
          ${{ parseInt(price) }}
        </span>
        <span class="priceNew mr-2">
          ${{ parseInt(finalPrice) }}
        </span>
      </div>
    </v-row>
    <div class="centrar mt-2">
      <v-btn class="minibtn mt-3" @click="selectCourse(course)">
        Ver Curso
      </v-btn>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    imgLink: {
      type: String,
      default: '',
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    subName: {
      type: String,
      default: ''
    },
    sections: {
      type: Number,
      default: null
    },
    resources: {
      type: Number,
      default: null
    },
    price: {
      type: String,
      default: ''
    },
    finalPrice: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      course: {}
    }
  },
  methods: {
    selectCourse (course) {
      this.$emit('select-course', course)
    }
  }
}
</script>

<style lang="scss" scoped>
.course__card {
  opacity: 0.75;
  box-shadow: 10px 5px 10px -5px rgba(0, 0, 0, 0.4) !important;
  .img-course {
    filter: grayscale(50%);
  }
  &:hover {
    opacity: 1;
    transition: all 0.4s ease-in-out;
    transform: translateY(-5px);
    box-shadow: 15px 8px 15px -5px rgba(0, 0, 0, 0.4) !important;
    .img-course {
      filter: none;
    }
  }
  .text-card {
        font-size: $subtitle !important;
        color: $gray-mid;
        font-weight: 300;
        line-height: 1.4 !important;
        padding: 0 15px !important;
        margin: 10px 0 !important;
        opacity: 1;
    }
    .minirow div {
        font-size: $miniLink !important;
        font-weight: 400;
        color: $gray-mid;
        &:nth-child(1) {
            border-right: 2px solid $gray-light;
        }
    }
}

</style>
