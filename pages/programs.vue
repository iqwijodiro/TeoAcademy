<template>
  <div id="programs">
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
              <h1 class="fw-300">
                Nuestros Programas
              </h1>
            </v-card-title>
            <v-card-text class="my-3 mx-auto px-5 py-0">
              <p class="text">
                Ponemos a su disposición programas de enseñanza bíblica de amplio alcance
                diseñados y desarrollado por lideres con el Don de la Enseñanza y amplia
                experiencia ministerial, disponible para personas con el anhelo de desarrollar su fe y
                experimentar la maravillosa experiencia de la formación cristiana. <br>
                <!-- <span class="fw-700">¡Matriculate y disfruta la experiencia!</span> -->
              </p>
            </v-card-text>
            <v-row class="ma-0 pa-0" justify="center">
              <!-- <v-col cols="12" md="auto" class="px-0">
                          <v-select
                            v-model="sortBy"
                            dense
                            :items="keys"
                            label="Ordenar por..."
                            hide-details
                            solo
                          />
                        </v-col> -->
              <v-col cols="12" md="5" class="px-0 ml-2">
                <v-select
                  v-model="sortBy"
                  dense
                  :items="keys"
                  label="Busqueda por tipo de programa"
                  hide-details
                  solo
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <main>
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
          <v-container class="gutte mt-5">
            <h2 class="fw-300 text-center mt-10 red-font">
              ¡Matriculate y disfruta la experiencia!
            </h2>
            <v-row
              v-for="program in props.items"
              :key="program._id"
              no-gutters
              justify="center"
              class="pt-5 mt-5"
            >
              <v-col>
                <v-card
                  elevation="5"
                  class="d-flex flex-column flex-sm-row program-card pa-0 rounded-lg mb-10"
                >
                  <v-col
                    xl="6"
                    lg="6"
                    md="6"
                    sm="6"
                    class="pa-0"
                  >
                    <v-img :src="program.imgUrl" class="rounded-l-lg pa-0 ma-0 fill-height img-course" />
                  </v-col>
                  <v-col
                    xl="6"
                    lg="6"
                    md="6"
                    class="px-8 py-5"
                  >
                    <v-card-title class="pa-0">
                      <h2 class="fw-300 gray-m-font">
                        {{ program.name }}
                      </h2>
                    </v-card-title>
                    <v-card-text class="pa-0 mb-5">
                      <p class="text">
                        {{ program.description }}
                      </p>
                    </v-card-text>
                    <div v-if="program.features && program.features.resources" class="d-flex mb-5">
                      <v-icon class="icon mr-5">
                        mdi-book-open-page-variant-outline
                      </v-icon>
                      <p class="text">
                        {{ program.features.resources.length }} recursos descargables
                      </p>
                    </div>
                    <div class="d-flex mb-5">
                      <v-icon class="icon mr-5">
                        mdi-school
                      </v-icon>
                      <p class="text">
                        Dirigido a quienes inician en estudios teologicos
                      </p>
                    </div>
                    <v-row class="minirow d-flex justify-start align-center ma-0">
                      <v-col
                        lg="4"
                        xl="4"
                        md="4"
                        class="px-2"
                      >
                        <div class="text-center">
                          <span class="priceOld mr-2">
                            ${{ program.features.priceInfo.price }}
                          </span>
                          <span class="priceNew mr-2">
                            ${{ program.features.priceInfo.finalPrice }}
                          </span>
                          <p class="text-sm">
                            hasta <br> DD-MM-AAAA
                          </p>
                        </div>
                      </v-col>
                      <v-spacer />
                      <v-col
                        cols="12"
                        lg="4"
                        xl="4"
                        md="4"
                        class="px-2"
                      >
                        <v-btn class="btn" @click="setProgram(program)">
                          Leer más
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-data-iterator>
    </main>
    <v-divider />
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Programas de cursos teológicos y de formación cristiana a tu alcance - Teo Academy',
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
      keys: [
        'Diplomado',
        'Licenciatura',
        'Maestría',
        'Doctorado',
        'Todos'
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
      const data = await this.$axios.$get(`${this.$store.state.urlAPI}/divisions/client6049278bc32f0d0015e108e9`)
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
@include miniDesktop() {
  .gutter-p {
    padding-top: 120px !important;
  }
}
#programs {
.hero {
  background-image:
  url(https://images.unsplash.com/photo-1587325474165-d49e05df3a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80);
  height: 65vh;
  background-position: bottom;
    .hero-card {
      max-height: 500px;
      .text {
        line-height: 1.5;
        font-size: 18px;
      }
    }
}
main {
  .program-card {
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
.register {
  display: flex;
  align-items: center;
  min-height: 30vh !important;
  background: rgb(190,30,45);
  background: linear-gradient(90deg, rgba(190,30,45,1) 0%, rgba(142,22,34,1) 50%, rgba(95,15,23,1) 100%);
  h2 {
    color: #ffffff;
  }
  .btn {
      max-width: 200px;
  }
}
.paginator-rail {
  border-bottom: 3px solid $gray-light;
  .pagination{
    font-size: 20px;
  }
}
.mdi-chevron-left,
.mdi-chevron-right {
  border: none;
}
}
</style>
