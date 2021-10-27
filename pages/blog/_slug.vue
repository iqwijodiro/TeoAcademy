<template>
  <div class="post pt-8 mt-5">
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
                max-width="1000px"
                :alt="post.title"
              />
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
    article {
      max-width: 1000px;
      .content-box {
        border-top: 2px solid $gray-light;
        border-bottom: 1px solid $gray-light;
        .text{
          p {
            line-height: 1.7 !important;
          }
        }
      }
    }
  }
</style>
