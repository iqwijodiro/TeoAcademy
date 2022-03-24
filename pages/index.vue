<template>
  <div id="index">
    <!--Seccion de Hero-->
    <hero />
    <!-- <students /> -->
    <!--Seccion de los mejores cursos-->
    <top-courses />
    <!-- ProximosEventos -->
    <next-events />
    <!-- Nuestro Equipo de trabajo -->
    <!-- <our-team /> -->
    <!-- Nuestro Blog -->
    <blog-index :posts="posts" />
    <!--Seccion del Ebook-->
    <newsletter />
    <!-- Newsletter & inputEmail -->
    <ebook-index />
  </div>
</template>
<script>
import hero from '~/components/home/hero'
import ebookIndex from '~/components/home/ebookIndex'
import topCourses from '~/components/home/topCourses'
// import students from '~/components/home/students'
import nextEvents from '~/components/home/nextEvents'
import blogIndex from '~/components/home/blogIndex'
import newsletter from '~/components/home/newsletter'

export default {
  components: {
    hero,
    ebookIndex,
    topCourses,
    // students,
    nextEvents,
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
