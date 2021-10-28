<template>
  <div id="courses my-5">
    <div class="hero d-flex justify-center align-center mt-10">
      <div class="mask" />
      <v-row justify="center" class="rail">
        <v-col
          lg="8"
          md="10"
          class="mx-auto px-5"
        >
          <v-card elevation="5" max-width="900px" class="hero-card rounded-lg text-center mx-auto pa-5 mt-8">
            <v-card-title class="centrar mx-auto pa-0 mb-4">
              <h1 class="fw-300 text-center">
                Conoce todos nuestros cursos
              </h1>
            </v-card-title>
            <v-form>
              <v-container>
                <v-row justify="center">
                  <!-- <v-col
                    cols="12"
                    lg="4"
                    xl="4"
                    md="4"
                    class="py-0 my-1"
                  >
                    <v-select
                      id="category"
                      v-model="select"
                      :items="options"
                      :rules="[v => !!v || 'Campo Requerido']"
                      label="Categoría"
                      required
                      solo
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    lg="4"
                    xl="4"
                    md="4"
                    class="py-0 my-1"
                  >
                    <v-select
                      id="price"
                      v-model="select"
                      :items="prices"
                      :rules="[v => !!v || 'Campo Requerido']"
                      label="Costo"
                      required
                      solo
                    />
                  </v-col> -->
                  <!-- <v-col
                    cols="12"
                    lg="8"
                    xl="8"
                    md="8"
                    class="py-0 my-1"
                  > -->
                  <input type="text" style="display: none; visibility: hidden">
                  <v-text-field
                    v-model="search"
                    placeholder="Buscar curso..."
                    solo
                    clearable
                    prepend-inner-icon="mdi-magnify"
                    autofocus
                    class="mt-2"
                    @keyup.enter.stop="searchData"
                  />
                  <!-- </v-col> -->
                  <v-btn width="100%" max-width="200px" class="btn d-block" @click="searchData">
                    Buscar
                  </v-btn>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <main class="gallery gutter-p">
      <div v-if="spinner" class="spinner">
        <div class="bounce1" />
        <div class="bounce2" />
        <div class="bounce3" />
      </div>
      <v-data-iterator
        v-else
        :items="courses"
        :items-per-page="ipp"
        :page.sync="page"
        hide-default-footer
        :loading="spinner"
        no-data-text="No hay datos para mostrar"
      >
        <template #default="props">
          <v-container>
            <v-row
              id="container"
              justify="center"
            >
              <v-col
                v-for="course in props.items"
                :key="course._id"
                xl="4"
                lg="4"
                md="6"
                sm="6"
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
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template #footer>
          <v-container>
            <v-row justify="center" class="my-2">
              <v-btn
                class="btn text-uppercase mt-3"
                @click="couponContact = true"
              >
                descarga cupón 75% descuento
              </v-btn>
              <discount-form
                v-model="couponContact"
                title="Obtén un descuento especial en el curso que más te gusta"
              />
            </v-row>
            <v-row justify="center" class="mt-5 py-10 paginator-rail">
              <v-pagination
                v-model="page"
                :length="pages"
                color="#be1e2d"
                circle
                next-icon="mdi-chevron-right"
                prev-icon="mdi-chevron-left"
                class="pagination"
              />
            </v-row>
          </v-container>
        </template>
      </v-data-iterator>
    </main>
  </div>
</template>

<script>
import courseCard from '~/components/genericComponents/courseCard.vue'
import discountForm from '~/components/forms/discountForm.vue'

export default {
  components: { courseCard, discountForm },
  data () {
    return {
      title: 'Cursos de formación cristiana y temas teológicos a tu alcance - Teo Academy',
      courses: [],
      search: '',
      valid: true,
      select: null,
      spinner: false,
      page: 1,
      pages: 1,
      rpp: 3,
      ipp: 6,
      couponContact: false,
      rowsPerPageArray: [6, 9, 12, 15],
      pagination: {
        rowsPerPage: 3
      },
      busy: false,
      options: [
        'Categoría 1',
        'Categoría 2',
        'Categoría 3',
        'Categoría 4'
      ],
      prices: [
        'Precio 1 - Precio 2',
        'Precio 2 - Precio 3',
        'Precio 3 - Precio 4',
        'Precio 4 - Precio 5'
      ]
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  watch: {
    search (newVal, oldVal) {
      if (oldVal && (newVal === '' || newVal === null)) {
        this.getCourses(this.page)
      }
    },
    page () {
      if (this.search === null || this.search === '') {
        this.getCourses(this.page)
      } else {
        this.searchData()
      }
    }
  },
  mounted () {
    this.spinner = true
    const that = this
    setTimeout(() => {
      that.getCourses(that.page)
    })
  },
  methods: {
    async getCourses (page) {
      const data = await this.$axios.$get(`${this.$store.state.urlAPI}/courses/client6049278bc32f0d0015e108e9/${page}/${this.ipp}`)
      this.pages = data.pages
      this.courses = data.courses
      this.spinner = false
    },
    async searchData () {
      this.search.trim()
      if (this.search) {
        const searched = await this.$axios.$get(`${this.$store.state.urlAPI}/courses/client6049278bc32f0d0015e108e9/search:${this.search}/${this.page}/${this.ipp}`)
        this.pages = searched.pages
        this.courses = searched.courses
      }
    },
    setCourse (course) {
      this.$store.commit('setCourse', course)
      this.$router.push('/course/' + course._id)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
    background-image:
    url(https://images.unsplash.com/photo-1485548125564-21b2276a644a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1116&q=80);
    height: 100%;
    min-height: 50vh;
    background-position: bottom;
    .hero-card {
      max-height: 500px;
    }

  .text {
    display: none;
  }
  .btn {
    display: block;
  }

}
  @include tablet {
    .text {
      line-height: 2;
    }
    .btn {
      display: block !important;
    }
  }
  @include miniDesktop {
    .hero {
      max-height: 40vh;
    }
    .text {
      display: block !important;
    }
  }
.gallery {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
    .mh-100 {
        min-height: 100vh;
        max-height: 100vh;
        height: 100vh;
    }
  .text-card {
      font-size: $body;
      color: $gray-mid;
      font-weight: 300;
      line-height: 1.5;
      padding: 0 15px !important;
      margin: 12px 0 !important;
    }
    .minirow div {
      font-size: $miniLink !important;
      font-weight: 400;
      color: $gray-mid;
      &:nth-child(1) {
        border-right: 2px solid $gray-light;
      }
      .priceOld {
        color: $wine;
        font-size: $link;
        font-family: $title-font;
        text-decoration: line-through;
      }
      .priceNew {
        color: $gray-mid;
        font-size: 25px;
        font-family: $title-font;
        font-weight: 400;
      }
  }
}
.mdi-chevron-left,
.mdi-chevron-right {
  border: none;
}
.paginator-rail {
  border-bottom: 3px solid $gray-light;
  nav.pagination{
    .v-pagination__item.v-pagination__item--active {
      font-family: $title-font;
    }
    .v-pagination.v-pagination--circle.theme--light {
      button.v-pagination__item {
        font-size: 20px !important;
        font-weight: 700;
      }
    }
  }
}

</style>
<style lang="scss">
.spinner {
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: $wine;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
