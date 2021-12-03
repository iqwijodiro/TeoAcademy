<template>
  <div id="blog">
    <v-container class="mt-10 pb-10 v-container ">
      <h2 class="my-5">
        Nuestro Blog:
      </h2>
      <v-row>
        <v-col
          cols="12"
          md="8"
          lg="7"
        >
          <main>
            <v-container>
              <v-row class="ma-0 pa-0" justify="start">
                <v-col cols="12" md="7" class="ml-3">
                  <input type="text" style="display: none; visibility: hidden">
                  <v-text-field
                    v-model="query"
                    placeholder="Buscar artículo..."
                    solo
                    dense
                    clearable
                    prepend-inner-icon="mdi-magnify"
                    autofocus
                  />
                </v-col>
                <v-col cols="12" md="4" class="mr-3">
                  <v-select
                    v-model="sortPost"
                    dense
                    :items="keyPost"
                    label="Filtrar por..."
                    hide-details
                    solo
                    clearable
                  />
                </v-col>
              </v-row>
              <v-row
                v-for="(post, i) in posts"
                :key="i"
              >
                <v-card
                  :min-height="$vuetify.breakpoint.mdAndDown ? '700px' : '550px'"
                  class="blog-card d-flex align-end rounded-lg pa-0 my-5"
                  @click="setPost(post)"
                >
                  <v-img
                    :src="post.img"
                    height="100%"
                    class="rounded-lg img-post"
                  />
                  <div class="card-overlay pa-2 rounded-b-lg">
                    <h4 class="card-title text-center red-font my-4">
                      {{ post.title }}
                    </h4>
                    <div class="d-flex justify-space-around flex-sm-row align-center px-2">
                      <div class="d-flex justify-center flex-column flex-md-row align-center">
                        <v-avatar size="65" class="my-0 mx-2">
                          <v-img :src="post.avatar" />
                        </v-avatar>
                        <div class="px-1 mx-sm-5">
                          <h4 class="author">
                            {{ post.author }}
                          </h4>
                          <span class="date text-center">
                            <v-icon>
                              mdi-calendar
                            </v-icon>
                            {{ post.date }}
                          </span>
                        </div>
                      </div>
                      <div class="d-flex flex-column">
                        <v-row
                          v-for="(topic, j) in post.topics"
                          :key="j"
                          class="ma-0 pa-0 mini-row"
                        >
                          <v-chip
                            small
                            label
                            class="ma-2"
                          >
                            <v-icon left>
                              mdi-label
                            </v-icon>
                            {{ topic }}
                          </v-chip>
                        </v-row>
                      </div>
                      <div class="align-self-end mt-3">
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
          cols="12"
          lg="5"
        >
          <h3 class="gray-m-font font-weight-medium text-center mb-5">
            Lo más leído
          </h3>
          <aside class="sidebar ml-10">
            <v-row
              v-for="(post, i) in latestPosts"
              :key="i"
            >
              <v-card
                class="d-flex my-3 rounded top__post"
                @click="setPost(post)"
              >
                <v-img width="45%" height="130px" :src="post.img" class="img-post rounded" />
                <div class="d-flex flex-column">
                  <h4 class="card-title">
                    {{ post.title }}
                  </h4>
                  <p class="text-small text-center">
                    <v-icon>
                      mdi-calendar
                    </v-icon>
                    {{ post.date }}
                  </p>
                </div>
              </v-card>
            </v-row>
          </aside>
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
      .sortBy('title', 'asc')
      .fetch()
    const latestPosts = JSON.parse(JSON.stringify(posts))
    return { posts, latestPosts }
  },
  data () {
    return {
      sortPost: null,
      query: '',
      keyPost: [
        'Consejería',
        'Eclesiología',
        'Evangelismo',
        'Hermenéutica',
        'Homilética',
        'Liderazgo Cristiano',
        'Teología',
        'Enseñanza',
        'Evangelismo',
        'Historia del Cristianismo',
        'Exégesis'
      ]
    }
  },
  head () {
    return {
      title: 'Contenido de temas cristiano y teologico a tu alcance - Teo Academy '
    }
  },
  watch: {
    async query (query) {
      this.posts = await this.$content('/blog', {})
        .search(query)
        .fetch()
    },
    async sortPost () {
      if (this.sortPost) {
        this.posts = await this.$content('/blog', {})
          .where({ topics: { $contains: this.sortPost } })
          .fetch()
      } else {
        await this.getPosts()
      }
    }
  },
  methods: {
    setPost (post) {
      this.$router.push('/blog/' + post.slug)
    },
    async getPosts () {
      this.posts = await this.$content('/blog', {})
        .without(['body'])
        .sortBy('title', 'asc')
        .fetch()
    }
  }
}
</script>
<style lang="scss" scoped>
#blog {
  h2 {
    color: $wine;
  }
  .v-container{
    border-bottom: 3px solid $gray-light;
  }
  main {
    .blog-card, .top__post{
      .img-post {
          filter: grayscale(70%);
          opacity: 0.75;
        }
        box-shadow: 10px 5px 10px -5px rgba(0, 0, 0, 0.4) !important;
        position: relative;
        &:hover {
          transform: translateY(-5px);
          transition: all 0.4s ease-in-out;
          box-shadow: 15px 8px 15px -5px rgba(0, 0, 0, 0.4) !important;
          .img-post {
            filter: none;
            transition: all 0.4s ease-in-out;
            opacity: 1;
          }
        }
        .card-overlay{
          background-color: rgba(#ffffff, $alpha: 0.90);
          height: auto;
          position: absolute;
          width: 100%;
        h4.card-title {
          font-size: $section-title;
            color: $wine;
        }
        .author {
          font-size: $body + 2px;
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
              font-size: 25px;
                margin-right: 6px;
            }
        }
    }
    }
    }
              @include tablet {
                .card-overlay {
                  height: 40% !important;
                  .author {
                      font-size: $body;
                        color: $gray-mid;
                    }
                    .date {
                      font-size: $subtitle;
                        color: $gray-mid;
                    }
                }
              }
  }
</style>
