<template>
  <div id="blog">
    <v-container class="mt-10">
      <h2 class="my-5">
        Nuestro Blog:
      </h2>
      <v-row>
        <v-col
          xl="7"
          lg="7"
          md="8"
        >
          <main>
            <v-container>
              <v-row
                v-for="(post, i) in posts"
                :key="i"
              >
                <v-card height="500px" class="blog-card d-flex align-end rounded-lg pa-0 my-5">
                  <v-img
                    :src="post.img"
                    height="100%"
                    class="rounded-lg"
                  />
                  <div class="card-overlay pa-0 rounded-b-lg">
                    <h4 class="card-title text-center red-font my-4">
                      {{ post.title }}
                    </h4>
                    <div class="d-flex justify-center align-center px-2">
                      <v-avatar size="65" class="my-0 mx-3">
                        <v-img :src="post.avatar" />
                      </v-avatar>
                      <div class="px-2 mx-5">
                        <h4 class="author mb-2">
                          {{ post.author }}
                        </h4>
                        <span class="date text-center">
                          {{ post.date }}
                        </span>
                      </div>
                      <div>
                        <v-btn class="btn-leer" @click="setPost(post)">
                          <v-icon class="eye-i">
                            mdi-eye
                          </v-icon> <br>
                          <span>Leer</span>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-row>
            </v-container>
          </main>
        </v-col>
        <v-col
          xl="4"
          lg="4"
          md="4"
        >
          <h3 class="gray-m-font font-weight-medium text-center mb-5">
            Lo más leído
          </h3>
          <!-- <aside class="sidebar ml-10">
            <v-row
              v-for="(topPost, i) in topPosts"
              :key="i"
            >
              <v-card class="d-flex my-3">
                <v-img width="40%" :src="topPost.img" />
                <div class="d-flex flex-column">
                  <h4 class="card-title">
                    {{ topPost.title }}
                  </h4>
                  <p class="text-small text-center">
                    {{ topPost.date }}
                  </p>
                </div>
              </v-card>
            </v-row>
          </aside> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('/blog', {})
      .without(['body'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return { posts }
  },
  head () {
    return {
      title: 'Nuestro Blog'
    }
  },
  methods: {
    setPost (post) {
      this.$router.push('/blog/' + post.slug)
    }
  }
}
</script>
<style lang="scss" scoped>
#blog {
  h2 {
    color: $wine;
  }
    .blog-card{
        position: relative;
    }
    .card-overlay{
        background-color: rgba(#ffffff, $alpha: 0.90);
    height: 30%;
    position: absolute;
    width: 100%;
    h4.card-title {
        font-size: 2.4rem;
        color: $wine;
    }
    .author {
        font-size: 1.8rem;
        color: $gray-mid;
    }
    .date {
        font-size: $subtitle;
        color: $gray-mid;
    }
    .btn-leer {
        width: 85px;
        height: 50px;
        color: white;
        background-color: rgba($gray-dark, $alpha: 0.50);
        text-transform: capitalize !important;
        font-size: $link;
        .eye-i{
            font-size: 2.5rem;
            margin-right: .6rem;
        }
    }
    }
    }
</style>
