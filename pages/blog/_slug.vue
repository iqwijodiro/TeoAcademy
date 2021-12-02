<template>
  <div class="post pt-8 mt-10">
    <v-container>
      <v-row>
        <v-col>
          <article class="mx-auto">
            <h1>{{ post.title }}</h1>
            <div class="content-box my-5">
              <v-img
                :src="post.img"
                class="mx-auto my-5 rounded"
                width="100%"
                max-width="800px"
                :alt="post.title"
              />
              <div class="d-flex justify-center">
                <v-chip
                  class="ma-2"
                  label
                  color="#0b83bf"
                  text-color="#fff"
                >
                  <v-icon left>
                    mdi-account-circle-outline
                  </v-icon>
                  {{ post.author }}
                </v-chip>
                <v-chip
                  class="ma-2"
                  label
                >
                  <v-icon left>
                    mdi-calendar
                  </v-icon>
                  {{ post.date }}
                </v-chip>
              </div>
              <nuxt-content :document="post" class="text-blog my-10" />
            </div>
          </article>
        </v-col>
      </v-row>
      <div class="d-flex justify-center align-center">
        <v-btn class="minibtn" to="/blogPage">
          Ver otros artículos
        </v-btn>
        <v-btn class="minibtn" to="/courses">
          Ver Cursos
        </v-btn>
        <v-btn class="minibtn" to="/programs">
          Ver programas
        </v-btn>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    // await console.log('Esto es $content: ', $content)
    const post = await $content(`/blog/${params.slug}` || 'index').fetch()
    return { post }
  },
  head () {
    return {
      title: this.post.title
    }
  }
}
</script>
<style lang="scss" scoped>
  .post {
    article {
      max-width: 1000px;
      .content-box {
        border-top: 2px solid $gray-light;
        border-bottom: 1px solid $gray-light;
      }
    }
  }
</style>
