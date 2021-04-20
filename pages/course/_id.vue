<template>
  <div class="mt-10 ">
    <v-container class="px-5">
      <h1 class="text-uppercase font-weight-light text-start gray-m-font mb-3">
        Curso:
      </h1>
      <v-row>
        <v-col
          xl="8"
          lg="8"
          md="8"
          class="col-container"
        >
          <main>
            <h2 class="red-font font-weight-light">
              {{ singleCourse.name }}
            </h2>
            <h3 class="gray-m-font">
              {{ singleCourse.subName }}
            </h3>
            <v-dialog
              v-model="dialogVideo"
              transition="dialog-top-transition"
              fullscreen
              internal-activator
            >
              <template #activator="{ on, attrs }">
                <div class="box">
                  <v-img
                    v-bind="attrs"
                    :src="singleCourse.imgUrl"
                    class="rounded-lg my-5 relative"
                    v-on="on"
                  />
                  <v-icon size="50" class="icon gray-font absolute">
                    mdi-play-circle-outline
                  </v-icon>
                </div>
              </template>
              <v-card width="100%">
                <video :src="singleCourse.videoUrl" />
              </v-card>
            </v-dialog>
            <h4 class="gray-m-font mb-4 mt-5">
              <span class="font-weight-medium">Descripción:</span>
            </h4>
            <p class="text">
              {{ singleCourse.description }}
            </p>
            <h2 class="gray-m-font mt-8 mb-5">
              Temas
            </h2>
            <v-expansion-panels v-if="singleCourse.structure && singleCourse.structure.sections" accordion>
              <v-expansion-panel
                v-for="(module, i) in singleCourse.structure.sections"
                :key="i"
              >
                <v-expansion-panel-header>
                  <!-- <v-icon color="#2ec4b6" class="d-inline flex-grow-0 mr-5" size="30">
                    {{ module.icon }}
                  </v-icon> -->
                  <h4 class="red-font text-start mr-5">
                    {{ module.name }}
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="text-mid">
                    Praesent laoreet turpis libero, at lacinia lectus elementum lacinia. Nullam sed sem velit. Sed quis aliquam ante. Quisque quis justo laoreet, interdum nibh et, imperdiet eros. Duis feugiat tristique purus
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
          <aside class="sidebar">
            <div v-if="singleCourse.features.resources">
              <ul v-for="(item, i) in singleCourse.features.resources" :key="i">
                <li class="text">
                  <v-icon class="text mr-3" size="35">
                    {{ singleCourse.features.resources[i].icon }}
                  </v-icon>
                  {{ singleCourse.features.resources[i].quantity }} {{ singleCourse.features.resources[i].text }}
                </li>
              </ul>
            </div>
            <v-card elevation="3" height="55" class="mx-auto my-5 card-title rounded-lg d-flex justify-center align-center">
              <div>
                Aporte:
                <span class="priceOld mr-3">$19.99</span>
                <!-- <span class="priceNew">$9.99</span> -->
                <span class="priceNew">Voluntario</span>
              </div>
            </v-card>
            <!-- <div class="centrar d-flex flex-column"> -->
            <v-btn width="95%" class="btn">
              Matricular
            </v-btn>
            <v-btn width="95%" class="btn">
              <v-icon size="30" class="mr-3">
                mdi-gift
              </v-icon>
              Regalar Curso
            </v-btn>
            <section class="my-5 d-flex justify-center align-center">
              <v-icon size="40" class="mr-6 gray-m-font">
                mdi-account-group
              </v-icon>
              <div class="pl-5">
                <h3 class="text-start ml-5 gray-m-font font-weigth-bold">
                  Dirigido a:
                </h3>
                <ul v-for="(item, i) in singleCourse.features.addressed" :key="i" class="text-mid adressed-list">
                  <li>
                    {{ singleCourse.features.addressed[i] }}
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <h3 class="gray-m-font text-center">
                Modalidad
              </h3>
              <ul v-for="(item, i) in singleCourse.features.modality" :key="i" class="text d-inline">
                <li class="text mb-2 ml-3">
                  <v-icon size="35" class="mr-3 flex-grow-0">
                    {{ singleCourse.features.modality[i].icon }}
                  </v-icon>
                  <p class="d-inline">
                    {{ singleCourse.features.modality[i].quantity }} {{ singleCourse.features.modality[i].text }}
                  </p>
                </li>
              </ul>
            </section>
            <section>
              <h3 class="gray-m-font text-center">
                Requerimientos
              </h3>
              <div class="d-flex justify-center">
                <div class="d-flex flex-column text-mid text-center">
                  <v-icon size="30">
                    mdi-school
                  </v-icon>
                  <span class="mt-3 text-mid font-weight-bold gray-m-font">
                    Conocimientos previos:
                  </span>
                  {{ singleCourse.features.requirements[0].reqList[0] }}
                </div>
                <div class="d-flex flex-column text-mid text-center">
                  <v-icon size="30">
                    mdi-wifi
                  </v-icon>
                  <span class="mt-3 text-mid font-weight-bold gray-m-font">
                    Tecnológicos:
                  </span>
                  {{ singleCourse.features.requirements[0].reqList[0] }} <br>
                  {{ singleCourse.features.requirements[1].reqList[1] }}
                  {{ singleCourse.features.requirements[1].reqList[2] }}
                </div>
              </div>
            </section>
            <!-- <section class="text-center">
              <div>
                <v-icon size="35" class="mr-3">
                  mdi-medal
                </v-icon>
                <h4 class="d-inline gray-m-font">
                  Competencias
                </h4>
              </div>
              <p class="text-mid mt-3">
                Identifica y experimenta el proceso de transformación cristiana y establece una sana relación con Dios Padre, Hijo y Espíritu Santo.
              </p>
            </section> -->
            <!-- </div> -->
          </aside>
        </v-col>
      </v-row>
    </v-container>
    <section class="indicators mt-5">
      <v-container>
        <h2 class="sect-title gray-m-font">
          Competencias
        </h2>
        <v-row no-gutters>
          <v-col
            class="px-5"
          >
            <section v-if="singleCourse.provides && singleCourse.provides.skills" class="wrapper-col">
              <ul
                v-for="(ind, j) in singleCourse.provides.skills"
                :key="j"
                class="pa-0"
              >
                <li class="d-flex align-start mb-3">
                  <v-icon size="25" class="flex-grow-0 gray-m-font mr-3 mt-2">
                    mdi-check-circle
                  </v-icon>
                  <p class="text mt-0">
                    {{ singleCourse.provides.skills[j].skill.name }}
                  </p>
                </li>
              </ul>
            </section>
          </v-col>
        </v-row>
        <div class="centrar">
          <v-btn class="btn">
            Descargar ficha del curso
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      courseId: null,
      dialogVideo: false
      // indicators: [
      //   'Identifica y comprende las llaves de la vida espiritual, importantes para tomar la voluntaria decisión de recibir a Cristo en el corazón.',
      //   'Identifica y comprende cinco (5) pilares esenciales de la fe cristiana.',
      //   'Identifica y practica las vías de alimentación para ser nutrido espiritualmente.',
      //   'Comprende y realiza de manera correcta y continua la confesión del pecado y  apropiarse del perdón de Dios.',
      //   'Identifica y comprende la manera correcta de practicar el hábito de la oración a Dios.',
      //   'Identifica y comprende las vías esenciales para conocer y aceptar la voluntad de Dios.',
      //   'Identifica la importancia de la correcta administración de todo el ser y en consecuencia establecer correctas prioridades a su vida.',
      //   'Identifica y establece correctas relaciones interpersonales para una sana edificación de su vida y el  desarrollo del cuerpo de Cristo.',
      //   'Comprende la importancia y los beneficios de su participación en el ambiente celular cristiano para su vida, su entorno y el mundo.'
      // ]
    }
  },
  head () {
    return {
      title: this.$store.state.course.shortName
    }
  },
  computed: {
    singleCourse () {
      return this.$store.state.course
    }
  },
  mounted () {
    this.courseId = this.$route.params.id
    if (!this.singleCourse._id) {
      this.getCourseId()
    }
  },
  methods: {
    async getCourseId () {
      const data = await this.$axios.$get(`${this.$store.state.urlAPI}/course/id${this.courseId}`)
      this.$store.commit('setCourse', data.course)
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
}
.col-container{
  padding-right: 1.5rem;
}
.indicators{
  background: rgb(149,149,149);
  background: linear-gradient(180deg, #fff 0%, #e9e9e9 100%);
  h2.sect-title {
    text-align: center;
  }
}
.sidebar {
  height: 100%;
  border: none;
  padding: 0;
}

.wrapper-col {
  display: block;
  p.text {
    margin-top: -2rem;
  }
}
.adressed-list {
  li {
    margin-bottom: 1rem;
  }
}

// @include tablet {
//   .wrapper-col {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 2rem;
//     flex-flow: column;
//   }
// }
@include telefono {
  .col-container{
    padding-right: 4rem;
  }
  .sidebar {
    height: 100%;
    border-left-color: $gray-light;
    border-left-width: 2px;
    border-left-style: solid;
    padding: 0 1.2rem 0 3.5rem;
  }
  .indicators{
    h2.sect-title{
      text-align: start;
    }
  }
}
</style>
