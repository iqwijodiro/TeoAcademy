<template>
  <section class="faq gutter-p pb-10">
    <h2 class="text-center red-font mb-3">
      Preguntas Frecuentes
    </h2>
    <v-container class="pb-15 mb-5">
      <v-row justify="center">
        <v-col
          lg="10"
          md="10"
        >
          <v-expansion-panels accordion focusable>
            <v-expansion-panel
              v-for="(question, i) in questions"
              :key="i"
              class="px-5"
            >
              <v-expansion-panel-header disable-icon-rotate expand-icon="mdi-plus-thick" class="card-title">
                <h4 class="red-font mr-5">
                  {{ question.header }}
                </h4>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="text">
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
          header: '¿Es UTI una congregación cristiana?',
          answer: 'UTI no es una congregación cristiana, por lo que no persigue ganar personas para propósitos particulares ni emite planteamientos de dónde deben  congregarse las personas. UTI es una organización cristiana apegada a la sana doctrina (sana enseñanza), que tiene por misión brindar los recursos, herramientas y contenidos de alta calidad a cualquier denominación o congregación cristiana para efectos de posibilitar y facilitar un proceso formativo efectivo, aportando valor a la labor gran comisionista de formar discípulos para Cristo.'
        },
        {
          header: '¿El programa UTI puede implementarse en cualquier denominación cristiana?',
          answer: 'Si, nuestro contenido esta apegado y sustentado en las sagradas escrituras (La Biblia),   como la única base de nuestra fe, la inefable Palabra escrita de Dios en todos sus libros del Antiguo y Nuevo Testamento. Creemos que fue única, verbal y totalmente inspirada por el Espíritu Santo y fue escrita sin error en los manuscritos originales y ella debe tenerse como suprema y final autoridad en todo aquello que enseña. Estamos afianzados en la creencia de un solo y verdadero Dios existente eternamente en tres personas distintas: Padre, Hijo y Espíritu Santo, cada una de las cuales posee todos los atributos de la Deidad. Prescindimos el ofrecer contenidos con mensajes doctrinales donde existen históricamente posiciones divergentes entre denominaciones, por ejemplo: la predestinación. Ante lo cual quedara ha criterio de la denominación cristiana respectiva impartir su mensaje.'
        },
        {
          header: '¿Se pueden hacer modificaciones o adecuaciones al programa UTI de acuerdo a las características y necesidades de cada iglesia?',
          answer: 'Si, nuestro programa formativo es una propuesta base, de la cual se puede prescindir unidades y temas a requerimiento y solicitud de cada congregación. De igual forma se podrán añadir las unidades y temas que creen convenientes. Esto es posible gracias al diseño modular de unidades y temas, a la plataforma tecnológica empleada y a la ejecución del proceso de diagnóstico e implementación diseñado por UTI a ser aplicado en cada congregación permitiendo la creación de programas adaptables a las necesidades particulares de quienes empleen nuestros recursos.'
        },
        {
          header: '¿Participando y aprobando en el programa UTI se obtiene un título en Teología Bíblica?',
          answer: 'No, sin embargo, al finalizar y aprobar cada sub-programa el participante recibe un certificado de participación y aprobación respectivo a cada nivel. Nuestro programa esta diseñado para brindar soluciones efectivas a las necesidades del individuo y del cuerpo de Cristo, su iglesia, garantizando el logro de los objetivos propuestos por el programa. No tenemos por misión el generar títulos académicos, aunque en ninguna circunstancia nos oponemos a aquellos quienes deseen obtenerlos por otros medios formales con el propósito de glorificar a Cristo.'
        },
        {
          header: '¿Qué se requiere para implementar UTI en un grupo ó congregación?',
          answer: 'Se requiere: Tener la visión correcta de como la enseñanza beneficia al cuerpo de Cristo. Comprender el alcance eterno que tiene un proceso formativo organizado y estructurado. Disposición para adoptar o mejorar acciones en materia formativa. Disposición para asumir los compromisos y generar cambios. Superar el espacio de confort creado por no adoptar medidas efectivas en materia formativa.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.faq {
  background: rgb(149,149,149);
  background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(193,193,193,.9) 25%, rgba(211,211,211,.75) 50%, rgba(231,231,231,.6) 75%, rgba(250,250,250,.2) 100%);
}
@include miniDesktop() {
    .gutter-p {
        padding-top: 12rem !important;
  }
}
</style>
