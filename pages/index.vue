<template>
  <div id="index">
    <!--Seccion de Hero-->
    <hero />
    <!--Seccion del Ebook-->
    <ebook-index />
    <!--Seccion de los mejores cursos-->
    <top-courses />
    <!--Seccion de los mejores cursos-->
    <students />
    <!-- ProximosEventos -->
    <next-events />
    <!-- Nuestro Equipo de trabajo -->
    <our-team />
    <!-- Nuestro Blog -->
    <blog-index />
    <!-- Newsletter & inputEmail -->
    <newsletter />
  </div>
</template>
<script>
import hero from '~/components/home/hero'
import ebookIndex from '~/components/home/ebookIndex'
import topCourses from '~/components/home/topCourses'
import students from '~/components/home/students'
import nextEvents from '~/components/home/nextEvents'
import ourTeam from '~/components/home/ourTeam'
import blogIndex from '~/components/home/blogIndex'
import newsletter from '~/components/home/newsletter'

export default {
  components: {
    hero,
    ebookIndex,
    topCourses,
    students,
    nextEvents,
    ourTeam,
    blogIndex,
    newsletter
  },
  data () {
    return {
      title: 'Inicio'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}

</script>
