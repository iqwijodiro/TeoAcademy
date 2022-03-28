<template>
  <div class="mt-10 ">
    <v-container v-if="singleCourse && singleCourse._id" class="px-5">
      <h2 class="text-uppercase font-weight-light text-start gray-m-font mb-3">
        Curso:
      </h2>
      <v-row>
        <v-col
          cols="12"
          md="8"
          class="col-container"
        >
          <main>
            <h1 class="red-font font-weight-light">
              {{ singleCourse.name }}
            </h1>
            <h3 class="gray-m-font text-blog">
              {{ singleCourse.subName }}
            </h3>
            <v-dialog
              v-model="dialogVideo"
              transition="dialog-top-transition"
              internal-activator
              width="90%"
              max-width="1000px"
            >
              <template #activator="{ on, attrs }">
                <div class="box-img">
                  <v-img
                    v-bind="attrs"
                    :src="singleCourse.imgUrl"
                    class="rounded-lg d-flex justify-center align-center my-5"
                    v-on="on"
                  >
                    <v-icon color="#959595" size="130" class="icon d-flex justify-center align-center opacity">
                      mdi-play-circle-outline
                    </v-icon>
                  </v-img>
                </div>
              </template>
              <v-card width="100%">
                <video width="100%" autoplay controls :src="singleCourse.videoUrl" />
              </v-card>
            </v-dialog>
            <h4 class="gray-m-font mb-4 mt-5">
              <span class="font-weight-medium">Descripción:</span>
            </h4>
            <p class="text">
              {{ singleCourse.description }}
            </p>
            <h3 class="gray-m-font mt-8 mb-5">
              Unidades
            </h3>
            <v-expansion-panels v-if="singleCourse.structure && singleCourse.structure.sections" accordion disabled>
              <v-expansion-panel
                v-for="(module, i) in singleCourse.structure.sections"
                :key="i"
              >
                <v-expansion-panel-header>
                  <h4 class="red-font text-start mr-5">
                    {{ module.name }}
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ul
                    v-for="(lesson, n) in module.lessons"
                    :key="n"
                  >
                    <li class="mb-5">
                      <p class="card-title">
                        {{ lesson.name }}
                      </p>
                    </li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
             <div class="centrar mt-10">
              <dialog-success
                v-model="dialogSuccess"
                header="¡Gracias por Descargar la ficha del curso!"
                message="En tu bandeja de correo electrónico recibirás el link de descarga. Esperamos sea de gran utilidad."
              >
                <template
                  #activator="{ on, attrs }"
                >
                  <v-btn
                    :attrs="attrs"
                    class="btn"
                    @on="on"
                    @click="dialogSuccess = true"
                  >
                    Descargar ficha del curso
                  </v-btn>
                </template>
              </dialog-success>
            </div>
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
                <span class="priceNew">$9.99</span>
                <!-- <span class="priceNew">Voluntario</span> -->
              </div>
            </v-card>
            <!-- <div class="centrar d-flex flex-column"> -->
            <v-btn width="95%" class="btn" @click="dialogContact = true">
              Matricular
            </v-btn>
            <v-btn width="95%" class="btn" disabled>
              <v-icon size="30" class="mr-3">
                mdi-gift
              </v-icon>
              Regalar Curso
            </v-btn>
            <purchase-form v-model="dialogContact" title="Formulario de Matrícula" />
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
              <h3 class="gray-m-font text-center my-2">
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
              <h3 class="gray-m-font text-center my-2">
                Requerimientos
              </h3>
              <div class="d-flex justify-center flex-column">
                <div class="d-flex flex-column text-mid text-center mb-5">
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
          </aside>
        </v-col>
      </v-row>
    </v-container>
    <section class="indicators">
      <v-container>
        <h3 class="sect-title gray-m-font text-center">
          Competencias
        </h3>
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
      </v-container>
    </section>
  </div>
</template>
<script>
import purchaseForm from '~/components/forms/purchaseForm.vue'
import dialogSuccess from '~/components/dialogSuccess.vue'
export default {
  components: {
    purchaseForm,
    dialogSuccess
  },
  data () {
    return {
      courseId: null,
      dialogVideo: false,
      dialogSuccess: false,
      dialogContact: false
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
.box-img {
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
    top: 40%;
    left: 40%;
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
    height: 95%;
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
