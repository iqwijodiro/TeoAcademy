<template>
  <section class="students mt-5 py-5 px-2 d-flex justify-center align-center">
    <v-container class="d-flex justify-center align-center">
      <v-row justify="center" class="fill-height">
        <v-col
          md="9"
          lg="7"
          xl="5"
          sm="10"
          class="d-flex align-center"
        >
          <v-card elevation="5" rounded="xl" class="bg-sheet mx-auto py-5 px-3 text-center">
            <h2 class="mt-5 mb-3 px-5 text-center">
              Lo que dicen los Teo estudiantes
            </h2>
            <v-carousel
              cycle
              hide-delimiters
              class="quote-slider my-slider mt-5"
            >
              <v-carousel-item
                v-for="(quote, i) in quotes"
                :key="i"
                class="fill-height"
              >
                <v-card light elevation="0" class="card-quote d-flex flex-column justify-space-between align-center mx-auto">
                  <p class="quote">
                    {{ quote.text }}
                  </p>
                  <v-avatar size="95" class="mb-5">
                    <v-img :src="quote.avatar" />
                  </v-avatar>
                  <h3 class="name">
                    {{ quote.name }}
                  </h3>
                  <h3 class="job">
                    {{ quote.job }}
                  </h3>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      quotes: [
        {
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Adriana Campos',
          job: 'Lic. Business Management'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Gustavo Campos',
          job: 'Lic. Business Management'
        },
        {
          avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu92UHJOEtoubLZW2b6fItrHIOvxKRUtHvIIMVuAEg=s83-c-mo',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Winder Díaz',
          job: 'Frontend Developer'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Aquiles Campos',
          job: 'Cardiologist M.D.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.students{
  background: rgb(149,149,149);
  background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(193,193,193,1) 25%, rgba(211,211,211,1) 50%, rgba(231,231,231,1) 75%, rgba(250,250,250,1) 100%);
  padding: 5rem 2rem;
  min-height: 600px;
  height: 120vh;
  max-height: 900px;
  .bg-sheet {
    height: 95%;
    min-height: 300px;
    max-height: 1000px;
    h2 {
      color: $wine;
      line-height: 1.4;
      font-size: 2.2rem;
    }
    .quote-slider {
      .card-quote {
        width: 90%;
        max-width: 500px;
      }
      .quote {
        color: $gray-mid;
        font-size: $link + .2rem;
        line-height: 1.7;
        margin-bottom: 3rem;
      }
    }
    .name, .job {
      font-family: $title-font;
      font-size: $link +.5rem;
      padding: 0 1rem !important;
      color: $gray-mid;
      font-weight: 300;
      line-height: 1.4;
      margin: 0 !important;
    }
  }
}
  @include telefono {
    .students{
      .bg-sheet {
        height: 85%;
        max-height: 600px;
      }
    }
    .quote {
        font-size: $link + .6rem;
      }
  }
  @include tablet {
    .students {
      height: 70vh;
      .bg-sheet {
        max-height: 600px;
        height: 80%;
      }
    }
  }
  @include desktop {
    .bg-sheet {
      height: 75%;
    }
  }
  @include lgdesktop {
      .quote {
        font-size: $link + .4rem;
      }
      .bg-sheet {
        height: 75%;
      }
  }
</style>
