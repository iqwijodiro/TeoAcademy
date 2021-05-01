<template>
  <div id="programs">
    <div class="hero d-flex justify-center align-center mt-5 ma-0 pa-0">
      <div class="mask" />
      <v-row justify="center" class="rail">
        <v-col
          xl="8"
          lg="8"
          sm="10"
          md="10"
          class="px-5"
        >
          <v-card
            elevation="5"
            class="hero-card rounded-lg text-center pa-5 ma-2"
          >
            <v-card-title class="centrar mx-auto pb-0">
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
                <span class="fw-700">¡Matriculate y disfruta la experiencia!</span>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <main>
      <v-data-iterator
        :items="programs"
        :items-per-page="3"
        :page.sync="page"
        hide-default-footer
        loading=""
        loading-text=""
      >
        <template #default="props">
          <v-container class="gutter-p">
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
                    <v-img :src="program.imgUrl" class="rounded-l-lg pa-0 ma-0 fill-height" />
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
                      </v-col><v-spacer />
                      <!-- <v-col
                        cols="12"
                        lg="4"
                        xl="4"
                        md="4"
                        class="px-2"
                      >
                        <div class="text-center px-2">
                          <v-icon>
                            mdi-earth
                          </v-icon>
                          <p class="text-sm mt-2">
                            Descuentos aplican segun tu país
                          </p>
                        </div>
                      </v-col> -->
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
        <template #footer>
          <v-container>
            <v-row justify="center" class="mt-5 py-10 paginator-rail">
              <!-- <v-pagination
                v-model="page"
                :length="pages"
                color="#2ec4b6"
                next-icon="mdi-chevron-right"
                prev-icon="mdi-chevron-left"
                class="pagination"
              /> -->
            </v-row>
          </v-container>
        </template>
      </v-data-iterator>
    </main>
    <!-- <section class="register">
      <v-container>
        <v-row justify="center">
          <v-col
            lg="6"
            xl="6"
            md="6"
            sm="8"
          >
            <h2 class="text-center">
              Registrate gratis y solicita tu cupón de descuento
            </h2>
            <div class="centrar">
              <v-btn class="btn">
                Registrarse
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Nuestros Programas',
      programs: [],
      page: 1,
      pages: 1,
      pagination: {
        rowsPerPage: 3
      },
      ipp: 2,
      rpp: 2
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
    this.getPrograms(this.page)
  },
  methods: {
    async getPrograms () {
      const data = await this.$axios.$get(`${this.$store.state.urlAPI}/divisions/client6049278bc32f0d0015e108e9`)
      this.pages = data.pages
      this.programs = data.divisions
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
    padding-top: 12rem !important;
  }
}
.hero {
  background-image: url(https://images.unsplash.com/photo-1507692049790-de58290a4334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  height: 55vh;
  .text {
    line-height: 1.5;
    font-size: 1.8rem;
  }
}
  // @include tablet {
  //   .hero{
  //     background-position: 50% 50%;
  //     .text {
  //         font-size: $body + .4rem;
  //         line-height: 2;
  //     }
  //     .rail {
  //       .hero-card {
  //         min-height: 330px !important;
  //       }
  //     }
  //   }
  // }

  // @include miniDesktop {
  //   .text {
  //     display: block !important;
  //   }
  //   .rail {
  //     max-width: 1200px;
  //     width: 85% !important;
  //     display: flex !important;
  //     justify-content: center !important;
  //   }
  // }
//   @include tablet {
//     .hero{
//       .rail {
//         display: flex;
//         justify-content: center;
//         .hero-card {
//           margin: 0 auto;
//         }
//       }
//     }
//   }
// @include miniDesktop {
//   .hero{
//     .rail {
//       display: flex;
//       justify-content: center;
//     }
//   }
// }
// @include desktop {
//   .hero {
//     .rail {
//       justify-content: flex-end;
//     }
//   }
//   .gutter-p {
//     padding-top: 12rem !important;
//   }
// }
main {
    //   .program-card {
    //       flex-direction: column;
    //   }
    .text {
        font-size: $body;
    }
    .text-sm {
        font-size: $body - .3rem;
        color: $gray-mid;
        font-weight: 300;
        line-height: 1.7;
        margin: 0;
        padding: 0;
    }
    .minirow {
      .priceOld {
        color: $wine;
        font-size: $link + .2rem;
        font-family: $title-font;
        text-decoration: line-through;
      }
      .priceNew {
        color: $gray-mid;
        font-size: 2.9rem;
        font-family: $title-font;
        font-weight: 400;
      }
    }
    .btn {
        width: 100%;
    }
    // @include miniDesktop {
    //     .program-card {
    //         flex-direction: row;
    //     }
    // }
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
  border-bottom: 3px;
  border-bottom-style: solid;
  border-bottom-color: $gray-light;
  .pagination{
    font-size: 2rem;
  }
}
.mdi-chevron-left,
.mdi-chevron-right {
  border: none;
}
</style>
