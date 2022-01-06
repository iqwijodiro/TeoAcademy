<template>
  <div class="value-plan pt-10 mt-5">
    <!-- <h2 class="red-font fw-300 text-center">
      Propuesta de Valor
    </h2> -->
    <v-container class="py-5">
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="3"
        >
          <v-card light height="100%">
            <v-img
              :src="feature.img"
              class="feature-img"
            />
            <v-card-title class="text-center">
              <p class="text">
                {{ feature.text }}
              </p>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-5 pt-5">
      <h2 class="red-font fw-300 text-center my-10 banner-title">
        Nuestras clases semanales son 100% virtuales
      </h2>
      <v-row
        v-for="plan in plans"
        :key="plan.src"
        justify="center"
        no-gutters
      >
        <v-card v-if="plan.src" flat class="d-flex justify-center plan-card align-center my-5">
          <v-col cols="10" md="5" :class="plan.order">
            <v-img :src="plan.src" class="img-card rounded-lg" />
          </v-col>
          <v-col cols="10" md="5">
            <v-card-text class="text-center">
              <p class="text-blog card-text font-weight-bold">
                {{ plan.text }}
              </p>
            </v-card-text>
          </v-col>
          <!-- <v-card-text class="text-center">
            </v-card-text> -->
        </v-card>
        <v-card v-else flat class="d-block">
          <h2 class="fw-700 red-font">
            {{ plan.text }}
          </h2>
        </v-card>
      </v-row>
    </v-container>
    <v-container>
      <!-- <h2 class="red-font fw-300 text-center">
        Avales y Afiliaciones
      </h2> -->
      <v-col cols="12" md="8" class="mx-auto text-center">
        <h2 class="red-font fw-300">
          Avalada y reconocida por: <br>
        </h2>
        <p class="text-blog text-center">
          Transworld Accrediting Commission International <br>
        </p>
        <h2 class="red-font fw-300 mt-5">
          Afiliados a: <br>
        </h2>
        <p class="text-blog text-center">
          (ATS) a través de Asociación para la Educación Teológica Hispana (AETH) y a la Asociación Americana de Consejeros Cristianos (AACC)
        </p>
      </v-col>
    </v-container>
    <v-container>
      <h2 class="red-font fw-300 text-center">
        Admisión
      </h2>
      <p class="text-blog">
        Para ser admitido, todo candidato deberá haber completado la aplicación y cumplir con los requerimientos siguientes:
      </p>
      <ul
        v-for="item in list"
        :key="item"
        class="text-blog ml-5"
      >
        <li>
          <v-icon color="#959595" class="mr-2">
            mdi-check-underline-circle-outline
          </v-icon>
          {{ item }}
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      features: [
        {
          img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          text: 'En UTI ONLINE, utilizamos herramientas y métodos altamente calificados que pueden llevarte a tener una experiencia prácticamente presencial, serás acompañado, y dirigido tal como en una institución física.'
        },
        {
          img: 'https://images.unsplash.com/photo-1594686948539-2709857f7066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          text: 'Nuestra Universidad ha graduado cientos de estudiantes y ha sido la madre de más de 15 universidades cristianas en Estados Unidos.'
        },
        {
          img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          text: 'Nuestro personal, maestros y administradores aplican el Código Esdras que consiste en Estudiar, Vivir y Enseñar la Palabra de Dios. Esdras 7:10'
        },
        {
          img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
          text: 'Estamos localizados en EE.UU, en el hermoso Estado de Carolina del Norte y tenemos representaciones Internacionales en: Centro América, Sur América, el Caribe y Europa.'
        }

      ],
      plans: [
        {
          order: 'order-0',
          src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          text: 'Para el desarrollo de nuestros programas (Cursos, Diplomados, Licenciaturas, Maestrías y Doctorados) empleamos métodos, recursos y tecnologías vanguardistas para hacer de la formación cristiana una experiencia enriquecedora para todos nuestros estudiantes.'
        },
        {
          order: 'order-1',
          src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          text: 'No solo impartimos conocimiento, los recursos y métodos que empleamos se orientan a la construcción y desarrollo del aprendizaje del participante en los diferentes programas, a efectos de ser aplicados en su vida personal y ministerial con eficacia y excelencia.'
        },
        {
          order: 'order-0',
          src: 'https://images.unsplash.com/photo-1482920387559-08269818bcfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          text: 'Nuestros costos han sido optimizados para brindar una oportunidad de excelencia a todos quienes se dispongan a iniciar sus estudios en Teología, Consejería Cristiana, Ministerio y Liderazgo Cristiano.'
        }
      ],
      list: [
        'Haber cumplido 18 años.',
        'Certificado: estudios generales en la escuela (no importa el país).',
        'Licenciatura: diploma de secundaria, GED o equivalente (no importa el país).',
        'Maestría: prueba académica de Licenciatura.',
        'Doctorado: prueba académica de Maestría.'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.img-card, .feature-img {
    opacity: .75;
}
.banner-title {
  font-size: 32px;
}
// .card-text::first-letter {
//     color: $wine;
//     font-size: 30px;
//     font-weight: 700;
//     font-family: $title-font;
// }
</style>
