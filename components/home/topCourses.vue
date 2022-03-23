<template>
  <section class="top-cursos">
    <div class="lay-bottom">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" />
      </svg>
    </div>
    <div class="lay-top">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" />
      </svg>
    </div>
    <v-container class="mt-14 pt-5">
      <h2 class="text-start">
        Nuestros cursos más populares
      </h2>
      <v-row justify="center">
        <v-col cols="12">
          <v-slide-group multiple arrows class="my-3 my-slider">
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
        <v-btn to="/courses" class="btn my-5">
          Ver todos los cursos
        </v-btn>
      </v-row>
    </v-container>
  </section>
</template>
<script>
// import ebookForm from '~/components/forms/ebookForm'
import courseCard from '~/components/genericComponents/courseCard'

export default {
  components: {
    // ebookForm
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
  // height: 100vh;
  // margin-top: -50px;
  position: relative;
      .lay-bottom,
      .lay-top {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .lay-top {
      top: 0;
    }
    .lay-bottom {
      transform: rotate(0deg);
    }
    .lay-bottom svg,
    .lay-top svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 160px;
    }

    .lay-bottom .shape-fill,
    .lay-top .shape-fill {
        fill: #fff;
    }
  h2 {
    color: $wine;
    text-align: center;
  }
  .my-slider {
    height: 550px;
  }
  @include miniDesktop {
    h2 {
      margin-left: 70px !important;
      text-align: left;
    }
  }
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

  .text-card {
    font-size: $subtitle;
    color: $gray-mid;
    font-weight: 300;
    line-height: 1.5;
    padding: 0 15px !important;
    margin: 12px 0 !important;
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
<style scoped>
.v-slide-group__wrapper {
  touch-action: auto !important;
}
</style>
