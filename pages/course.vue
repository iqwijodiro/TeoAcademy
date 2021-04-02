<template>
  <div class="mt-10">
    <v-container>
      <h1 class="text-uppercase font-weight-light text-start gray-m-font mb-3">
        Curso:
      </h1>
      <v-row>
        <v-col
          xl="8"
          lg="8"
          md="8"
          class="pr-10"
        >
          <main>
            <h2 class="red-font font-weight-light">
              {{ courseTitle }}
            </h2>
            <h3 class="gray-m-font">
              {{ subtitle }}
            </h3>
            <v-img :src="imgCourse" class="rounded-lg my-5" />
            <h4 class="gray-m-font mb-4 mt-5">
              <span class="font-weight-medium">Descripción:</span>
            </h4>
            <p class="text">
              {{ description }}
            </p>
            <h2 class="gray-m-font">
              Temas
            </h2>
            <v-expansion-panels accordion>
              <v-expansion-panel
                v-for="(module, i) in modules"
                :key="i"
              >
                <v-expansion-panel-header>
                  <v-icon color="#2ec4b6" class="d-inline flex-grow-0 mr-5" size="30">
                    {{ module.icon }}
                  </v-icon>
                  <h4 class="red-font text-start mr-5">
                    {{ module.moduleTitle }}
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="text-mid">
                    {{ module.text }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </main>
        </v-col>
        <v-col
          xl="4"
          lg="4"
          md="4"
          class="pt-5"
        >
          <h3 class="gray-m-font font-weight-medium text-center">
            Recursos
          </h3>
          <aside class="sidebar pl-7 pr-3">
            <ul v-for="(item, i) in resources" :key="i">
              <li class="text">
                <v-icon class="text mr-3" size="35">
                  {{ item.icon }}
                </v-icon>
                {{ item.number }} {{ item.resource }}
              </li>
            </ul>
            <v-card elevation="3" height="55" class="mx-auto my-5 card-title rounded-lg d-flex justify-center align-center">
              <div>
                Costo:
                <span class="priceOld mr-3">$19.99</span>
                <span class="priceNew">$9.99</span>
              </div>
            </v-card>
            <!-- <div class="centrar d-flex flex-column"> -->
            <v-btn width="95%" class="btn">
              Comprar
            </v-btn>
            <v-btn width="95%" class="btn">
              <v-icon size="30" class="mr-3">
                mdi-gift
              </v-icon>
              Regalar Curso
            </v-btn>
            <div class="my-5 d-flex justify-center align-center">
              <v-icon size="40" class="mr-6 gray-m-font">
                mdi-account-group
              </v-icon>
              <div class="px-5">
                <h3 class="text-center gray-m-font font-weigth-bold">
                  Dirigido a:
                </h3>
                <ul class="text-mid adressed-list">
                  <li>
                    - Involucrados en general
                  </li>
                  <li>
                    - Simpatizantes en general
                  </li>
                  <li>
                    - Personas con poco o moderado conocimiento bíblico
                  </li>
                </ul>
              </div>
            </div>
            <!-- </div> -->
          </aside>
        </v-col>
      </v-row>
    </v-container>
    <section class="indicators">
      <v-container>
        <h2 class="text-start gray-m-font">
          Indicadores
        </h2>
        <v-row no-gutters>
          <v-col
            xl="4"
            lg="4"
            md="4"
            sm="6"
            class="wrapper-col px-5"
          >
            <ul
              v-for="(ind, j) in indicators"
              :key="j"
              class="d-inline pa-0"
            >
              <li>
                <v-icon size="30" class="flex-grow-0 gray-m-font mr-2">
                  mdi-check-circle
                </v-icon>
                <p class="text mt-2">
                  {{ ind }}
                </p>
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
      titlePage: 'Curso X',
      courseTitle: 'El proceso de iniciación cristiana',
      subtitle: 'Conoce los primeros pasos de un cristiano en el desarrollo de una fe firme y trascendental',
      imgCourse: require('../assets/img/IniciacionCristiana.webp'),
      description: 'En este curso se abordan los aspectos fundamentales de la vida espiritual cristiana, Duis sit amet ligula varius, interdum quam ut, rutrum tellus. Suspendisse pulvinar lectus sed quam hendrerit fermentum. Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus',
      modules: [
        {
          icon: 'mdi-play-circle-outline',
          moduleTitle: 'Los cuatro principios de la vida espiritual',
          text: 'Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus.'
        },
        {
          icon: 'mdi-play-circle-outline',
          moduleTitle: 'La seguridad de la salvación',
          text: 'Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus.'
        },
        {
          icon: 'mdi-play-circle-outline',
          moduleTitle: 'El papel de la Biblia',
          text: 'Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus.'
        },
        {
          icon: 'mdi-file-document-outline',
          moduleTitle: 'La respiración espiritual',
          text: 'Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus.'
        },
        {
          icon: 'mdi-file-document-outline',
          moduleTitle: 'El cristiano y la oración',
          text: 'Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus.'
        },
        {
          icon: 'mdi-play-circle-outline',
          moduleTitle: 'Conociendo la voluntad de Dios',
          text: 'Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus.'
        },
        {
          icon: 'mdi-play-circle-outline',
          moduleTitle: 'Administrándose a usted mismo',
          text: 'Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus.'
        },
        {
          icon: 'mdi-play-circle-outline',
          moduleTitle: 'El compañerismo cristiano',
          text: 'Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus.'
        },
        {
          icon: 'mdi-play-circle-outline',
          moduleTitle: 'Participando en una célula de éxito',
          text: 'Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus.'
        }
      ],
      indicators: [
        'Identifica y comprende las llaves de la vida espiritual, importantes para tomar la voluntaria decisión de recibir a Cristo en el corazón.',
        'Identifica y comprende cinco (5) pilares esenciales de la fe cristiana.',
        'Identifica y practica las vías de alimentación para ser nutrido espiritualmente.',
        'Comprende y realiza de manera correcta y continua la confesión del pecado y  apropiarse del perdón de Dios.',
        'Identifica y comprende la manera correcta de practicar el hábito de la oración a Dios.',
        'Identifica y comprende las vías esenciales para conocer y aceptar la voluntad de Dios.',
        'Identifica la importancia de la correcta administración de todo el ser y en consecuencia establecer correctas prioridades a su vida.',
        'Identifica y establece correctas relaciones interpersonales para una sana edificación de su vida y el  desarrollo del cuerpo de Cristo.',
        'Comprende la importancia y los beneficios de su participación en el ambiente celular cristiano para su vida, su entorno y el mundo.'
      ],
      resources: [
        {
          icon: 'mdi-play-circle-outline',
          number: 10,
          resource: 'Videos'
        },
        {
          icon: 'mdi-file-document-outline',
          number: 10,
          resource: 'Documentos'
        },
        {
          icon: 'mdi-magnify',
          number: 9,
          resource: 'Cuestionarios'
        },
        {
          icon: 'mdi-note-search-outline',
          number: 9,
          resource: 'Asignaciones'
        },
        {
          icon: 'mdi-link-variant',
          number: 4,
          resource: 'Enlaces'
        },
        {
          icon: 'mdi-book-cross',
          number: 16,
          resource: 'Versiculos a memorizar'
        },
        {
          icon: 'mdi-help-circle-outline',
          number: 16,
          resource: 'Preguntas Frecuentes'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
// .indicators{
//   max-height: 500px;
//   height: 40vh;
//   .row-sect {
//     display: flex;
//     flex-direction: column;
//     flex-wrap: wrap;
//   }
// }
.sidebar {
  height: 100%;
  border-left-color: $gray-light;
  border-left-width: 2px;
  border-left-style: solid;
}
.wrapper-col {
  max-height: 450px;
  display: flex;
  flex-flow: column wrap;
  p.text {
    text-indent: -4rem;
  }
}
.adressed-list {
  li {
    margin-bottom: 1rem;
  }
}

</style>
