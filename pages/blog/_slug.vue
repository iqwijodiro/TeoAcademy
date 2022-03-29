<template>
  <div class="post pt-8 mt-10">
    <v-container>
      <v-row>
        <v-col>
          <article class="mx-auto px-3">
            <h1
              class="fw-300 text-center text-md-left"
              :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 30px' : ''"
            >
              {{ post.title }}
            </h1>
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
      <div class="d-flex flex-column flex-sm-row justify-center align-center">
        <v-col
          cols="12"
          md="3"
        >
          <v-btn width="100%" class="minibtn mx-3" to="/blogPage">
            Ver otros artículos
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-btn to="/courses" width="100%" class="minibtn mx-3">
            Ver Cursos
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-btn width="100%" class="minibtn mx-3" to="/programs">
            Ver programas
          </v-btn>
        </v-col>
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
        h2 {
          font-size: 20px;
        }
      }
    }
  }
  @include tablet {
    h2 {
      font-size: 30px;
    }
  }
</style>
