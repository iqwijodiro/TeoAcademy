<template>
  <section class="top-cursos gutter-p">
    <v-container>
      <h2 class="text-start">
        Nuestros cursos más populares
      </h2>
      <v-row justify="center">
        <v-col
          cols="12"
        >
          <v-slide-group multiple arrows class="my-3 my-slider">
            <v-slide-item v-for="course in courses" :key="course._id" class="slides">
              <v-card elevation="5" height="100%" max-height="520px" max-width="315px" class="card rounded-lg mx-4 my-5 pb-2 d-flex flex-column justify-space-between">
                <v-img
                  :src="course.imgUrl"
                  height="45%"
                  max-height="220px"
                  class="mb-2"
                />
                <v-card-title class="card-title">
                  {{ course.name }}
                </v-card-title>
                <v-card-text class="text-card">
                  {{ course.subName }}
                </v-card-text>
                <v-row class="minirow d-flex justify-center align-center py-1">
                  <div v-if="course.structure && course.structure.sections" class="my-2 mr-2">
                    <p class="ma-0 px-3">
                      {{ course.structure.sections.length }} <br>
                      Módulos
                    </p>
                  </div>
                  <div v-if="course.features && course.features.resources" class="my-2 mr-2">
                    <p class="ma-0 px-3">
                      {{ course.features.resources.length }} <br>
                      Recursos
                    </p>
                  </div>
                  <div>
                    <span class="priceOld mr-2">
                      ${{ parseInt(course.features.priceInfo.price) }}
                    </span>
                    <span class="priceNew mr-2">
                      ${{ parseInt(course.features.priceInfo.finalPrice) }}
                    </span>
                  </div>
                </v-row>
                <div class="centrar mt-2">
                  <v-btn class="minibtn mt-3" @click="setCourse(course)">
                    Ver Curso
                  </v-btn>
                </div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-btn to="/courses" class="btn my-5">
          Ver todos los cursos
        </v-btn>
      </v-row>
    </v-container>
  </section>
</template>
<script>
// import ebookForm from '~/components/forms/ebookForm'

export default {
  components: {
    // ebookForm
  },
  data () {
    return {
      courses: []

    }
  },
  mounted () {
    this.getTopCourses()
  },
  methods: {
    async getTopCourses () {
      const data = await this.$axios.$get(`${this.$store.state.urlAPI}/courses/client6049278bc32f0d0015e108e9/all`)
      this.courses = data.courses
    },
    setCourse (course) {
      this.$store.commit('setCourse', course)
      this.$router.push('/course/' + course._id)
    }
  }
}
</script>
<style lang="scss" scoped>
.top-cursos {
  h2 {
    color: $wine;
    text-align: center;
  }
    .my-slider {
      height: 550px;
    }
  @include miniDesktop {
    h2 {
      margin-left: 7rem !important;
      text-align: left;
    }
  }
  .slides{
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
    }
  }
}
</style>
