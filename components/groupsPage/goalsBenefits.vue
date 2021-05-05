<template>
  <section class="goals gutter-p px-5">
    <v-container class="px-5">
      <v-row>
        <v-col
          lg="10"
          class="mx-auto"
        >
          <h2 class="text-center mb-5">
            <v-icon class="icon">
              mdi-bullseye-arrow
            </v-icon>
            Objetivos
          </h2>
          <ul v-for="goal in goals" :key="goal.id">
            <li class="text ml-3">
              <v-icon class="icon mr-3">
                mdi-check-circle
              </v-icon>{{ goal }}
            </li>
          </ul>
          <h2 class="text-center mt-15 mb-5">
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
.goals {
  h2, .icon {
    color: $gray-mid;
  }
  ul{
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
