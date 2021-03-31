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
                <v-expansion-panel-header
                  disable-icon-rotate
                  expand-icon="mdi-plus-thick"
                  class=""
                >
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
        >
          <aside>
            <h3 class="gray-m-font font-weight-medium text-center">
              Recursos
            </h3>
          </aside>
        </v-col>
      </v-row>
    </v-container>
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
      ]
    }
  }
}
</script>
