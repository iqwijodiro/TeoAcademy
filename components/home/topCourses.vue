<template>
  <section class="top-cursos">
    <v-container class="mt-14 mb-5 py-5 line-rail">
      <h2
        :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 25px' : ''"
        class="text-md-left text-center"
      >
        Nuestros cursos más populares
      </h2>
      <v-row justify="center">
        <v-col cols="12" class="py-0">
          <v-slide-group multiple arrows class="my-slider">
            <v-slide-item
              v-for="course in courses"
              :key="course._id"
              class="slides course__card"
            >
              <course-card
                :img-link="course.imgUrl"
                :name="course.name"
                :sub-name="course.subName"
                :sections="course.structure.sections.length"
                :resources="course.features.resources.length"
                :price="course.features.priceInfo.price"
                :final-price="course.features.priceInfo.finalPrice"
                @select-course="setCourse(course)"
              />
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-btn to="/courses" class="btn mb-12">
          Ver todos los cursos
        </v-btn>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import courseCard from '~/components/genericComponents/courseCard'

export default {
  components: {
    courseCard
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
      const data = await this.$axios.$get(
        `${this.$store.state.urlAPI}/courses/client6049278bc32f0d0015e108e9/all`
      )
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
  // position: relative;
  h2 {
    color: $wine;
    text-align: center;
  }
  .my-slider {
    height: 550px;
  }
  // @include miniDesktop {
  //   h2 {
  //     text-align: left;
  //   }
  // }
  .course__card {
    opacity: 0.65;
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
  }

  // .text-card {
  //   font-size: $subtitle;
  //   color: $gray-mid;
  //   font-weight: 300;
  //   line-height: 1.5;
  //   padding: 0 15px !important;
  //   margin: 12px 0 !important;
  //   opacity: 1;
  // }
  // .minirow div {
  //   font-size: $miniLink !important;
  //   font-weight: 400;
  //   color: $gray-mid;
  //   &:nth-child(1) {
  //     border-right: 2px solid $gray-light;
  //   }
  // }
}
</style>
<style scoped>
.v-slide-group__wrapper {
  touch-action: auto !important;
}
</style>
