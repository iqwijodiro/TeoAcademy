<template>
  <div id="courses">
    <div class="hero d-flex justify-center align-center mt-9">
      <div class="mask">
        <v-row justify="center" class="rail">
          <v-col
            lg="8"
            md="10"
            class="mx-auto px-5"
          >
            <v-card elevation="5" class="hero-card rounded-lg text-center pa-5 ma-5">
              <v-card-title class="centrar mx-auto pa-2 mb-4">
                <h1 class="fw-300 text-center">
                  Conoce todos nuestros cursos
                </h1>
              </v-card-title>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                class="px-5 courses-form"
              >
                <v-row>
                  <v-col>
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
                  <v-col>
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
                  <v-col>
                    <v-text-field
                      id="search"
                      label="Categoría"
                      solo
                      append-icon="mdi-magnify"
                    />
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
    <main class="gallery gutter-p">
      <v-container>
        <v-row>
          <v-col
            v-for="course in courses"
            :key="course.id"
            lg="4"
            xl="4"
            md="4"
          >
            <v-card elevation="5" max-width="325px" class="rounded-lg mx-3 my-5 pb-2">
              <v-img
                :src="course.img"
                height="47%"
              />
              <v-card-title class="card-title">
                {{ course.title }}
              </v-card-title>
              <v-card-text class="text-card">
                {{ course.text }}
              </v-card-text>
              <v-row class="minirow d-flex justify-center align-center py-1">
                <div class="my-2 mr-2">
                  <p class="ma-0 px-3">
                    {{ course.modules }} <br>
                    Módulos
                  </p>
                </div>
                <div class="my-2 mr-2">
                  <p class="ma-0 px-3">
                    {{ course.resources }} <br>
                    Recursos
                  </p>
                </div>
                <div>
                  <span class="priceOld mr-2">
                    ${{ course.priceOld }}
                  </span>
                  <span class="priceNew mr-2">
                    ${{ course.priceNew }}
                  </span>
                </div>
              </v-row>
              <div class="centrar mt-2">
                <v-btn class="minibtn mt-3">
                  Ver Curso
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="6"
            color="#2ec4b6"
            class="fs-mid"
          />
        </div>
      </v-container>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Cursos',
      valid: true,
      select: null,
      page: 1,
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
      ],
      courses: [
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        },
        {
          img: require('../assets/img/IniciacionCristiana.webp'),
          title: 'El proceso de iniciacion Cristiana',
          text:
            'Conoce cuáles son los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental.',
          modules: 9,
          resources: 9,
          priceOld: 19.99,
          priceNew: 9.99
        }
      ]
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
    background-image: url(../assets/img/hero-courses.webp);
    height: 40vh;
    background-position: bottom center;
    .hero-card{
    .courses-form{
      #category > * {
        font-size: 2rem !important;
      }
    }
  }
}
.gallery {
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
</style>
