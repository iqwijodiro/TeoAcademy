<template>
  <div id="programs my-5">
    <div class="hero d-flex justify-center align-center">
      <div class="mask" />
      <v-container>
        <v-row justify="center" class="rail">
          <v-col cols="12" md="8" sm="10" class="mx-auto px-5">
            <!-- max-width="900" -->
            <v-card
              elevation="5"
              min-height="320px"
              max-height="400"
              :width="$vuetify.breakpoint.lgAndUp ? '750' : 'auto'"
              class="hero-card rounded-xl text-center mt-10 pa-5 d-flex flex-column justify-space-around"
            >
              <v-card-title class="centrar mx-auto pa-0 my-4">
                <h1
                  :style="
                    $vuetify.breakpoint.mdAndDown ? 'font-size: 30px' : ''
                  "
                  class="fw-300 text-center"
                >
                  Nuestros Programas
                </h1>
              </v-card-title>
              <v-card-text class="my-3 mx-auto px-5 py-0">
                <p class="text">
                  Ponemos a su disposición programas de enseñanza bíblica de
                  amplio alcance disponible para personas con el anhelo de
                  desarrollar su fe y para grupos y congregaciones comprometidos
                  con ganar almas para Cristo y la sana edificación de la
                  iglesia.
                </p>
              </v-card-text>
              <div class="centrar">
                <v-col
                  cols="12"
                  md="8"
                >
                  <v-select
                    v-model="sortBy"
                    dense
                    :items="keys"
                    label="Busqueda por tipo de programa"
                    hide-details
                    solo
                  />
                </v-col>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <main class="px-2">
      <div v-if="spinner" class="spinner">
        <div class="bounce1" />
        <div class="bounce2" />
        <div class="bounce3" />
      </div>
      <v-data-iterator
        :items="programs"
        :items-per-page="3"
        :page.sync="page"
        hide-default-footer
        loading=""
        loading-text=""
      >
        <template #default="props">
          <v-container class="mt-5 line-rail">
            <h2
              :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 25px' : ''"
              class="fw-300 text-center mt-10 red-font"
            >
              ¡Matriculate y disfruta la experiencia!
            </h2>
            <v-row
              v-for="program in props.items"
              :key="program._id"
              no-gutters
              justify="center"
              class="pt-5 mt-5"
            >
              <v-col cols="12" xl="8" lg="10" md="12" sm="10">
                <v-card
                  elevation="5"
                  class="d-flex flex-column flex-md-row program-card pa-0 rounded-xl mb-10"
                  @click="setProgram(program)"
                >
                  <!-- <v-row> -->
                  <v-col cols="12" md="6" class="pa-0">
                    <v-img
                      height="100%"
                      min-width="100%"
                      :src="program.imgUrl"
                      :class="
                        $vuetify.breakpoint.smAndDown
                          ? 'rounded-t-xl'
                          : 'rounded-l-xl'
                      "
                    />
                  </v-col>
                  <v-col cols="12" md="6" class="px-sm-5 px-3 py-5">
                    <v-card-title class="card-title my-2 ml-5 red-font">
                      <h2
                        :style="
                          $vuetify.breakpoint.mdAndDown ? 'font-size: 25px' : ''
                        "
                        class="fw-300"
                      >
                        {{ program.name }}
                      </h2>
                    </v-card-title>
                    <v-card-text class="pa-1">
                      <p class="text">
                        {{ program.description }}
                      </p>
                    </v-card-text>
                    <!-- <div v-if="program.features && program.features.resources" class="d-flex mb-5"> -->
                    <!-- <v-icon class="icon mr-5">
                          mdi-book-open-page-variant-outline
                        </v-icon>
                        <p class="text">
                          {{ program.features.resources.length }} recursos descargables
                        </p> -->
                    <!-- </div> -->
                    <div class="d-flex mb-5">
                      <!-- <v-icon class="icon mr-5">
                          mdi-school
                        </v-icon>
                        <p class="text">
                          Dirigido a quienes inician en estudios teologicos
                        </p> -->
                    </div>
                    <v-row
                      class="minirow d-flex justify-start align-center ma-0"
                    >
                      <v-col lg="4" xl="4" md="4" class="px-2">
                        <div class="text-center">
                          <span class="priceOld mr-2">
                            ${{ program.features.priceInfo.price }}
                          </span>
                          <span class="priceNew mr-2">
                            ${{ program.features.priceInfo.finalPrice }}
                          </span>
                          <!-- <p class="text-sm">
                              hasta <br> DD-MM-AAAA
                            </p> -->
                        </div>
                      </v-col>
                      <v-spacer />
                      <v-col cols="12" lg="4" xl="4" md="4" class="px-2">
                        <v-btn class="btn" @click="setProgram(program)">
                          Leer más
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                  <!-- </v-row> -->
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="center" class="my-2">
              <v-btn class="minibtn mt-3" @click="couponContact = true">
                Descargar Cupón de descuento
              </v-btn>
              <discount-form
                v-model="couponContact"
                title="Obtén un descuento especial en el programa que más te gusta"
              />
            </v-row>
          </v-container>
        </template>
      </v-data-iterator>
    </main>
    <!-- <v-divider /> -->
  </div>
</template>

<script>
import discountForm from '~/components/forms/discountForm.vue'

export default {
  components: { discountForm },
  data () {
    return {
      couponContact: false,
      title: 'Programas de cursos teológicos y de formación cristiana',
      programs: [],
      page: 1,
      pages: 1,
      spinner: false,
      sortBy: false,
      pagination: {
        rowsPerPage: 3
      },
      ipp: 2,
      rpp: 2,
      keys: ['Diplomado', 'Licenciatura', 'Maestría', 'Doctorado', 'Todos']
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.programs.length / this.ipp)
    },
    rowsPerPage () {
      return this.rpp
    }
  },
  mounted () {
    this.spinner = true
    const that = this
    setTimeout(() => {
      that.getPrograms(that.page)
    })
  },
  methods: {
    async getPrograms () {
      const data = await this.$axios.$get(
        `${this.$store.state.urlAPI}/divisions/client6049278bc32f0d0015e108e9`
      )
      this.pages = data.pages
      this.programs = data.divisions
      this.spinner = false
    },
    setProgram (program) {
      this.$store.commit('setProgram', program)
      this.$router.replace('/program/' + program._id)
    },
    handlePageChange (value) {
      this.page = value
    },
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) {
        this.page += 1
      }
    },
    formerPage () {
      if (this.page - 1 >= 1) {
        this.page -= 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url(https://images.unsplash.com/photo-1486525546686-3cd5484691f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80);
  height: 100%;
  min-height: 85vh;
  background-position: center;
  .hero-card {
    max-height: 500px;
    .text {
      line-height: 1.5;
      font-size: 18px;
    }
  }
}
@include tablet {
  .hero {
      min-height: 70vh;
  }
}
main {
  .program-card {
    // opacity: 0.75;
    // box-shadow: 10px 5px 10px -5px rgba(0, 0, 0, 0.4) !important;
    .img-course {
      filter: grayscale(60%);
      opacity: 0.9;
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
    .text {
      font-size: $body;
    }
    .text-sm {
      font-size: $body;
      color: $gray-mid;
      font-weight: 300;
      line-height: 1.7;
      margin: 0;
      padding: 0;
    }
    .minirow {
      .priceOld {
        color: $wine;
        font-size: $link;
        font-family: $title-font;
        text-decoration: line-through;
      }
      .priceNew {
        color: $gray-mid;
        font-size: 29px;
        font-family: $title-font;
        font-weight: 400;
      }
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
