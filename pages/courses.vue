<template>
  <div id="courses">
    <div class="hero d-flex justify-center align-center">
      <div class="mask" />
      <v-row justify="center" class="rail">
        <v-col
          lg="8"
          md="10"
          class="mx-auto px-5"
        >
          <v-card elevation="5" class="hero-card rounded-lg text-center pa-5 mt-8">
            <v-card-title class="centrar mx-auto pa-0 mb-4">
              <h1 class="fw-300 text-center">
                Conoce todos nuestros cursos
              </h1>
            </v-card-title>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="courses-form"
              @submit.prevent="submit"
            >
              <v-container>
                <v-row>
                  <v-col
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
                  </v-col>
                  <v-col
                    cols="12"
                    lg="4"
                    xl="4"
                    md="4"
                    class="py-0 my-1"
                  >
                    <v-text-field
                      id="search"
                      v-model="search"
                      placeholder="Buscar curso..."
                      solo
                      append-icon="mdi-magnify"
                      autofocus
                      @keyup.enter="submit"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <main class="gallery gutter-p">
      <v-data-iterator
        :items="courses"
        :items-per-page="ipp"
        :page.sync="page"
        hide-default-footer
      >
        <template #default="props">
          <v-container>
            <v-row id="container" class="overflow-auto">
              <v-col
                v-for="course in props.items"
                :key="course._id"
              >
                <v-card elevation="5" height="510px" max-width="325px" class="card rounded-lg mx-3 my-5 pb-2 d-flex flex-column justify-space-between">
                  <v-img
                    :src="course.imgUrl"
                    height="47%"
                    max-height="230px"
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
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template #footer>
          <v-row justify="center" class="mt-5 py-5">
            <span class="text mr-5">
              Pagina {{ page }} de
              <span class="gray-m-font" v-text="pages" />
            </span>
            <v-btn
              small
              rounded
              dark
              color="#2ec4b6"
              class="mr-2"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              small
              rounded
              dark
              color="#2ec4b6"
              class="ml-2"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </main>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'Cursos',
      courses: [],
      search: '',
      valid: true,
      select: null,
      page: 1,
      pages: 1,
      rpp: 3,
      ipp: 3,
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
  computed: {
    numberOfPages () {
      return Math.ceil(this.courses.length / 9)
    },
    // rowsPerPage () {
    //   return this.rpp
    // },
    itemsPerRow () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return 1
        case 'md': return 3
        case 'lg': return 3
        case 'xl': return 3
        default: return 9
      }
    }
    // ,
    // ipp () {
    //   return Math.ceil(this.rowsPerPage * this.itemsPerRow)
    // }
  },
  watch: {
    page () {
      this.getCourses(this.page)
    }
  },
  mounted () {
    this.getCourses(this.page)
  },
  methods: {
    async getCourses (page) {
      const data = await this.$axios.$get(`${this.$store.state.urlAPI}/courses/client6049278bc32f0d0015e108e9/${page}/${this.ipp}`)
      this.pages = data.pages
      this.courses = data.courses
    },
    async submit () {
      this.courses = await this.$axios.$get(`${this.$store.state.urlAPI}/courses/client6049278bc32f0d0015e108e9/all/search${this.search}/${this.page}/12`)
    },
    setCourse (course) {
      this.$store.commit('setCourse', course)
      this.$router.replace('/course/' + course._id)
    },
    handlePageChange (value) {
      this.page = value
    },
    nextPage () {
      if (this.page + 1 <= this.pages) {
        this.page += 1
      }
    },
    formerPage () {
      if (this.page - 1 >= 1) {
        this.page -= 1
      }
    },
    calcRowsPerPage () {
      const container = document.getElementById('container')
      const minItemHeight = 300
      if (container) {
        const containerHeight = parseInt(container.clientHeight, 0)
        this.rpp = Math.floor(Math.max(containerHeight, minItemHeight) / minItemHeight)
      } else {
        this.rpp = 3
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
    background-image: url(../assets/img/hero-courses.webp);
    height: 600px;
    background-position: 25% 25%;

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
      display: inline-block !important;
    }
  }
  @include miniDesktop {
    .hero {
      max-height: 40vh;
    }
    .text {
      display: block !important;
    }
    // .rail {
    //   max-width: 1200px;
    //   width: 85% !important;
    //   display: flex !important;
    //   justify-content: center !important;
    // }
  }
.gallery {
    .mh-100 {
        min-height: 100vh;
        max-height: 100vh;
        height: 100vh;
    }
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
}
.mdi-chevron-left,
.mdi-chevron-right {
  border: none;
}
</style>
