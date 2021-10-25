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
                    class="my-1"
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
        no-data-text=""
      >
        <template #default="props">
          <v-container>
            <v-row id="container" justify="center">
              <v-col
                v-for="course in props.items"
                :key="course._id"
              >
                <v-card elevation="5" height="100%" max-height="500px" max-width="325px" class="card rounded-lg mx-3 my-5 pb-2 d-flex flex-column justify-space-between">
                  <v-img
                    :src="course.imgUrl"
                    height="45%"
                    max-height="230px"
                    class="mb-2"
                  />
                  <v-card-title class="card-title">
                    {{ course.name }}
                  </v-card-title>
                  <v-card-text class="text-card">
                    {{ course.subName }}
                  </v-card-text>
                  <v-row class="minirow d-flex justify-center align-center py-1 px-2">
                    <div v-if="course.structure && course.structure.sections" class="my-2 mr-2">
                      <p class="mx-3 my-0 px-3">
                        {{ course.structure.sections.length }} <br>
                        Módulos
                      </p>
                    </div>
                    <div v-if="course.features && course.features.resources" class="my-2 mr-2">
                      <p class="mx-3 my-0 px-3">
                        {{ course.features.resources.length }} <br>
                        Recursos
                      </p>
                    </div>
                    <div>
                      <span class="priceOld mx-2">
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
          <v-container>
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

export default {
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
    rowsPerPage () {
      return this.rpp
    },
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
    background-image: url(https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80);
    height: 600px;
    background-position: 25% 25%;
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
.paginator-rail {
  border-bottom: 3px;
  border-bottom-style: solid;
  border-bottom-color: $gray-light;
  .pagination{
    font-size: 2rem;
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
