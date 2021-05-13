<template>
  <section class="whom gutter-p mt-15">
    <v-container>
      <h2 class="text-center mb-5">
        Dirigido a:
      </h2>
      <v-row justify="center">
        <v-col
          lg="8"
          sm="10"
        >
          <v-card class="sheet-slider rounded-lg mt-5" height="85%">
            <div class="mask rounded-lg" />
            <v-row justify="center" class="mb-5">
              <v-col
                cols="12"
              >
                <v-carousel hide-delimiters cycle>
                  <v-carousel-item
                    v-for="(who, i) in whos"
                    :key="i"
                    class="ma-5 rounded-lg"
                  >
                    <!-- <v-img
                    :src="who.img"
                    contain
                    class="rounded-lg"
                    gradient="to top right, rgba(255,255,255,.3), rgba(240,240,240,.7)"
                  /> -->
                    <v-card elevation="0" color="transparent" class="d-flex flex-column justify-center rounded-lg" height="85%">
                      <h3 class="text-center mb-10">
                        Quienes {{ who.slide }}
                      </h3>
                      <p class="text text-center mx-auto">
                        {{ who.text }}
                      </p>
                    </v-card>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
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
  background: rgb(149,149,149);
  background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(149,149,149,0.5) 25%, rgba(233,233,233,1) 50%, rgba(149,149,149,0.5) 75%, rgba(149,149,149,1) 100%);
  h2, h3 {color: $wine;}
  .sheet-slider{
    background-image: url(https://images.unsplash.com/photo-1440317539597-ad354a025165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
    background-size: cover;
    background-position: center center;
    object-fit: cover;
    position: relative;
    .mask {
      position: absolute;
      background: rgba($color: #ffffff, $alpha: 0.55);
      min-height: 100%;
      width: 100%;
    }
    h3 {
      font-size: 3.2rem;
      font-weight: 700;
    }
    .text {
      font-size: 2.2rem;
      color: $gray-dark;
      font-weight: 700;
      text-align: center;
      max-width: 75%;
    }

  }
}
@include miniDesktop() {
    .gutter-p {
        padding-top: 12rem !important;
  }
}
</style>
