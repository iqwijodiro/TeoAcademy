<template>
  <section class="whom gutter-p">
    <v-container>
      <h2
        :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 25px' : ''"
        class="text-center mb-5"
      >
        Dirigido a:
      </h2>
      <v-row justify="center">
        <v-col
          cols="12"
          md="7"
          sm="8"
        >
          <v-card
            elevation="5"
            class="sheet-slider rounded-xl my-5 mx-auto d-flex flex-column"
            :height="$vuetify.breakpoint.smAndDown ? '70%' : '65%'"
            width="90%"
          >
            <div class="mask rounded-xl" />
            <v-row justify="center" class="mb-5">
              <v-carousel hide-delimiters cycle>
                <v-carousel-item
                  v-for="(who, i) in whos"
                  :key="i"
                  class="ma-5 rounded-xl"
                >
                  <v-card
                    flat
                    color="transparent"
                    class="d-flex flex-column justify-center rounded-xl"
                    height="75%"
                  >
                    <h3
                      :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 21px' : ''"
                      class="text-center mb-10"
                    >
                      Quienes {{ who.slide }}
                    </h3>
                    <p
                      :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 18px' : ''"
                      class="text text-center mx-auto"
                    >
                      {{ who.text }}
                    </p>
                  </v-card>
                </v-carousel-item>
              </v-carousel>
            </v-row>
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
      whos: [
        {
          slide: 'entienden',
          text: 'La importancia de la formación cristiana sistémica y disciplinada para el sano desarrollo del Cuerpo de Cristo.'
        },
        {
          slide: 'necesitan',
          text: 'Los recursos precisos, experiencia comprobada y métodos eficaces para garantizar el éxito de la labor formativa.'
        },
        {
          slide: 'deciden',
          text: 'Tomar acciones con alcance eterno y no postergar para mañana la implementación de un pilar fundamental de la fe cristiana: “el proceso de formación”.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.whom {
  height: 75vh;
  // background: rgb(149,149,149);
  // background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(149,149,149,0.5) 25%, rgba(233,233,233,1) 50%, rgba(149,149,149,0.5) 75%, rgba(149,149,149,1) 100%);
  h2, h3 {color: $wine;}
  .sheet-slider{
    background-image: url(https://images.unsplash.com/photo-1440317539597-ad354a025165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
    background-size: cover;
    background-position: center center;
    object-fit: cover;
    position: relative;
    // .v-window__prev, .v-window__next {
    //   top: calc(20% - 20px) !important;
    // }
    .mask {
      position: absolute;
      background: rgba($color: #ffffff, $alpha: 0.55);
      min-height: 100%;
      width: 100%;
    }
    h3 {
      font-size: 28px;
      font-weight: 700;
    }
    .text {
      font-size: 22px;
      color: $gray-dark;
      font-weight: 700;
      text-align: center;
      max-width: 75%;
    }

  }
}
@include miniDesktop() {
    .gutter-p {
        padding-top: 40px !important;
  }
}
</style>
