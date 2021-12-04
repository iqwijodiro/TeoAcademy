<template>
  <div id="index">
    <!--Seccion de Hero-->
    <hero />
    <!--Seccion del Ebook-->
    <ebook-index />
    <top-courses />
    <!--Seccion de los mejores cursos-->
    <!--Seccion de los mejores cursos-->
    <!-- <students /> -->
    <!-- ProximosEventos -->
    <next-events />
    <!-- Nuestro Equipo de trabajo -->
    <!-- <our-team /> -->
    <!-- Nuestro Blog -->
    <blog-index :posts="posts" />
    <!-- Newsletter & inputEmail -->
    <newsletter />
  </div>
</template>
<script>
import hero from '~/components/home/hero'
import ebookIndex from '~/components/home/ebookIndex'
import topCourses from '~/components/home/topCourses'
// import students from '~/components/home/students'
import nextEvents from '~/components/home/nextEvents'
// import ourTeam from '~/components/home/ourTeam'
import blogIndex from '~/components/home/blogIndex'
import newsletter from '~/components/home/newsletter'

export default {
  components: {
    hero,
    ebookIndex,
    topCourses,
    // students,
    nextEvents,
    // ourTeam,
    blogIndex,
    newsletter
  },
  async asyncData ({ $content }) {
    const posts = await $content('/blog', {})
      .without(['body'])
      .sortBy('title', 'asc')
      .fetch()
    return { posts }
  },
  head () {
    return {
      title: 'Formación cristiana y teológica online'
    }
  }
}
</script>
