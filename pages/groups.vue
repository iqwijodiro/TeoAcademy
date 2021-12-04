<template>
  <div id="groups">
    <!--Seccion del Hero-->
    <hero-groups />
    <!--Seccion del Ebook-->
    <!-- <ebook-groups /> -->
    <!--Seccion de Objetivos y Beneficios-->
    <goals-benefits class="mt-10" />
    <!--Seccion de Dirigido a:-->
    <adressed-to />
    <!--Seccion de Biblioteca de cursos / niveles-->
    <levels />
    <!--Seccion donde se habla de Sego School-->
    <link-to-sego />
    <!--Seccion donde se habla de asesoria-->
    <consulting />
    <!--Seccion proceso de implementacion-->
    <process-section />
    <!--Seccion preguntas frecuentes-->
    <faq />
  </div>
</template>
<script>
import heroGroups from '~/components/groupsPage/heroGroups'
// import ebookGroups from '~/components/groupsPage/ebookGroups'
import goalsBenefits from '~/components/groupsPage/goalsBenefits'
import adressedTo from '~/components/groupsPage/adressedTo'
import levels from '~/components/groupsPage/levels'
import linkToSego from '~/components/groupsPage/linkToSego'
import consulting from '~/components/groupsPage/consulting'
import processSection from '~/components/groupsPage/processSection'
import faq from '~/components/groupsPage/faq'
export default {
  components: {
    heroGroups,
    // ebookGroups,
    goalsBenefits,
    adressedTo,
    levels,
    linkToSego,
    consulting,
    faq,
    processSection
  },
  data () {
    return {
      title: 'Formación cristiana y teológica para grupos y congregaciones'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
