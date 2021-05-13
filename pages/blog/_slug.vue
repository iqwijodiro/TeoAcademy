<template>
  <div class="post pt-5 mt-5">
    <v-container>
      <v-row>
        <v-col>
          <article>
            <h1>{{ post.title }}</h1>
            <div class="content-box my-5">
              <v-img :src="post.img" class="mx-auto my-5 rounded" :alt="post.title" max-width="800px" />
              <nuxt-content :document="post" class="text my-10" />
            </div>
          </article>
        </v-col>
      </v-row>
      <div class="centrar">
        <v-btn class="minibtn" to="/blogPage">
          Ver otros articulos
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
    .content-box {
     border-top: 1px solid $gray-light;
     border-bottom: 1px solid $gray-light;
    }
  }
</style>
