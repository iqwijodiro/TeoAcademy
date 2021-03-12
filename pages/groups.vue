<template>
  <div id="groups">
    <div class="hero d-flex justify-center align-center">
      <div class="mask" />
      <v-row justify="center" class="rail">
        <v-col
          cols="12"
          lg="10"
          sm="10"
          xs="10"
          class="px-5"
        >
          <v-card elevation="5" class="hero-card rounded-lg text-center py-3 ma-5">
            <v-card-title class="mx-auto pb-0">
              <h1 class="fw-300">
                Implemente un proceso de formación cristiana en su congregación.
              </h1>
            </v-card-title>
            <v-card-text class="my-3 mx-auto px-5 py-0">
              <p class="text">
                Teo Academy pone a su disposición los recursos (tecnologías y contenidos) y la experiencia (personas y métodos), para hacer del proceso formativo una experiencia de éxito y así brindar a los miembros del cuerpo de Cristo todos los beneficios que brinda la instrucción cristiana.
              </p>
            </v-card-text>
            <v-btn to="/groups" class="btn mt-5">
              Descargar ficha de servicios
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <section class="ebook gutter-p">
      <v-container>
        <v-row class="justify-around align-center pt-5 mt-5 mx-auto flex-row-reverse">
          <v-col
            cols="12"
            xl="4"
            lg="4"
            md="6"
            sm="10"
            class="mx-auto"
          >
            <v-card class="pa-5 rounded-xl mx-auto">
              <h2 class="text-capitalize text-center">
                Descarga gratis nuestro ebook
              </h2>
              <div class="centrar">
                <v-btn class="btn">
                  Descargar
                </v-btn>
              </div>
            </v-card>
          </v-col>
          <v-col lg="4" md="6" sm="10" class="mx-auto">
            <img lazy src="../assets/img/ebook2.webp" class="rounded">
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--Seccion del Ebook-->
    <section class="goals gutter-p px-5">
      <v-container class="px-5">
        <v-row>
          <v-col>
            <h2 class="text-center mb-5">
              <v-icon class="icon">
                mdi-bullseye-arrow
              </v-icon>
              Objetivos
            </h2>
            <ul v-for="(goal, i) in goals" :key="i">
              <li class="text ml-3">
                <v-icon class="icon mr-3">
                  mdi-check-circle
                </v-icon>{{ goal }}
              </li>
            </ul>
            <h2 class="text-center my-5">
              <v-icon class="icon">
                mdi-medal
              </v-icon>
              Beneficios
            </h2>
            <ul v-for="(benefit, i) in benefits" :key="i">
              <li class="text ml-3">
                <v-icon class="icon mr-3">
                  mdi-seal
                </v-icon>{{ benefit }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goals: [
        'Fomentar el desarrollo saludable del creyente en las tres áreas del ser (espíritu, alma y cuerpo).',
        'Desarrollar competencias de carácter espiritual en el participante, a través del estudio sistemático de la Biblia (ver competencias por curso).',
        'Fomentar el conocimiento y práctica de los principios escriturales como medio para la mejora de la calidad de vida del participante.',
        'Fomentar y desarrollar en el participante disciplinas cristocentricas (lectura de la Palabra, oración, adoración, otros).',
        'Desarrollar lideres fieles e idóneos para instruir y acompañar a otros en el conocimiento de la Palabra de Dios.',
        'Construir bases solidas para el crecimiento, desarrollo y expansión de la iglesia.'
      ],
      benefits: [
        'Acompañamiento para la implementación efectiva de un pilar importante para el desarrollo saludable del cuerpo de Cristo.',
        'Acceso a un modelo educativo diseñado para lograr el efecto de cambio, transformación y mejora de los miembro de la iglesia.',
        'Acceso a compendio de recursos educativos de alta calidad, lo que permite hacer del proceso formativo una experiencia amena y exitosa.',
        'Acceso a plataforma tecnológica de clase mundial, lo que facilita disponer de todo el programay materiales desde cualquier lugar, espacio y tiempo con recursos que hoy se encuentran al alcance de hogares e iglesias.',
        'Ahorro significativo de tiempo, recursos humanos y monetarios.'
      ]
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
  background-image: url(../assets/img/hero-groups.webp);
  min-height: 600px;
  .text {
    display: none;
  }
  .btn {
    display: block;
  }
  @include tablet {
    .btn {
      display: inline-block !important;
    }
    .rail {
      .hero-card {
        min-height: 330px !important;
      }
    }
  }

  @include miniDesktop {
    .text {
      display: block !important;
    }
    .rail {
      max-width: 1000px;
      width: 75% !important;
      display: flex !important;
      justify-content: center !important;
    }
  }
}
.goals {
  h2, .icon {
    color: $gray-mid;
  }
  ul{
    list-style-type: none;
    padding: 0 !important;
    text-indent: -4rem;
    li {
      margin: 1rem 0 0 1rem !important;
      .icon{
        color: $ocean;
      }
    }
  }
  .icon {
    font-size: 3rem;
  }
}
</style>
