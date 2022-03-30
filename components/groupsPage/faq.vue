<template>
  <section class="faq gutter-p pb-10">
    <h2
      :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 25px' : ''"
      class="text-center red-font my-5"
    >
      Preguntas Frecuentes
    </h2>
    <v-container class="pb-15 mb-5">
      <v-row justify="center">
        <v-col
          cols="12"
          md="10"
        >
          <v-expansion-panels accordion focusable class="accordion-panels">
            <v-expansion-panel
              v-for="(question, i) in questions"
              :key="i"
              class="px-5"
            >
              <v-expansion-panel-header disable-icon-rotate expand-icon="mdi-plus-thick" class="card-title red-font mr-5">
                <!-- class="red-font mr-5" -->
                <h4
                  :class="$vuetify.breakpoint.smAndDown ? 'text-mid red-font mr-5' : 'text-blog red-font mr-5'"
                >
                  {{ question.header }}
                </h4>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p
                  :class="$vuetify.breakpoint.smAndDown ? 'text-mid' : 'text'"
                >
                  {{ question.answer }}
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data () {
    return {
      questions: [
        {
          header: '¿Es Teo Academy una congregación cristiana?',
          answer: 'Teo Academy es una organización cristiana apegada a la sana doctrina (sana enseñanza), que tiene por misión brindar los recursos, herramientas y contenidos de alta calidad a cualquier denominación o congregación cristiana para efectos de posibilitar y facilitar un proceso formativo efectivo, aportando valor a la labor gran comisionista de formar discípulos para Cristo. Teo Academy no es una congregación ni representa a alguna, por lo que no persigue ganar personas para propósitos organizacionales ni emite planteamientos de dónde deben congregarse las personas.'
        },
        {
          header: '¿Los programas Teo Academy pueden implementarse en cualquier denominación cristiana?',
          answer: 'Si, nuestro contenido esta apegado y sustentado en las sagradas escrituras (La Biblia), como la única base de nuestra fe, la inefable Palabra escrita de Dios en todos sus libros del Antiguo y Nuevo Testamento. Creemos que fue única, verbal y totalmente inspirada por el Espíritu Santo y fue escrita sin error en los manuscritos originales y ella debe tenerse como suprema y final autoridad en todo aquello que enseña. Estamos afianzados en la creencia de un solo y verdadero Dios existente eternamente en tres personas distintas: Padre, Hijo y Espíritu Santo, cada una de las cuales posee todos los atributos de la Deidad. Prescindimos el ofrecer contenidos con mensajes doctrinales donde existen históricamente posiciones divergentes entre denominaciones, por ejemplo: la predestinación. Ante lo cual quedara ha criterio de la denominación cristiana respectiva impartir su mensaje.'
        },
        {
          header: '¿Se pueden hacer modificaciones o adecuaciones a los programas Teo Academy de acuerdo a las características y necesidades de cada congregación?',
          answer: 'Si, nuestro programa formativo es una propuesta base, de la cual se puede prescindir unidades y temas a requerimiento y solicitud de cada congregación. De igual forma se podrán añadir las unidades y temas que creen convenientes. Esto es posible gracias al diseño modular de unidades y temas, a la plataforma tecnológica empleada y a la ejecución del proceso de diagnóstico e implementación diseñado por Teo Academy a ser aplicado en cada congregación permitiendo la creación de programas adaptables a las necesidades particulares de quienes empleen nuestros recursos.'
        },
        {
          header: '¿Participando en los programas Teo Academy se obtiene certificados y/o títulos?',
          answer: 'Nuestros programas están diseñados para brindar soluciones efectivas a las necesidades del individuo y del cuerpo de Cristo (su iglesia), a demás, al finalizar y aprobar cada programa el estudiante recibe un certificado de participación y aprobación respectivo a cada nivel. Nuestros programas están acreditados por la Universidad Teológica Interamericana con sede en Carolina del Norte (EE.UU.) y servirán para sumar Unidades de Crédito en las carreras de Licenciatura de acuerdo a sus políticas académicas.'
        },
        {
          header: '¿Qué se requiere para implementar los programas Teo Academy en un grupo o congregación?',
          answer: 'Se requiere: Tener la visión correcta de cómo la enseñanza beneficia al cuerpo de Cristo. Comprender el alcance eterno que tiene un proceso formativo organizado y estructurado. Disposición para adoptar o mejorar acciones en materia formativa. Disposición para asumir los compromisos y generar cambios. Contáctanos a través de nuestros medios de comunicación: servicios@teo-academy.com / EE.UU. +1 484 9255978 / Costa Rica y Centroamérica: +506-70176705 / Venezuela y Suramérica: +58 426 5758868 / Argentina + 54 911 30753752.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
// .faq {
//   // background: rgb(149,149,149);
//   // background: linear-gradient(180deg, rgba(149,149,149,1) 0%, rgba(193,193,193,.9) 25%, rgba(211,211,211,.75) 50%, rgba(231,231,231,.6) 75%, rgba(250,250,250,.2) 100%);
// }
.accordion-panels {
  box-shadow: 7px 7px 15px 3px rgba(0, 0, 0, 0.4) !important;;
}
@include miniDesktop() {
    .gutter-p {
        padding-top: 120px !important;
  }
}
</style>
