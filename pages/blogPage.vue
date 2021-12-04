<template>
  <div id="blog">
    <v-container class="mt-10 pb-10 v-container ">
      <h2 class="my-5">
        Nuestro Blog:
      </h2>
      <!-- Flex Container -->
      <div class="d-flex flex-column flex-md-row">
        <!-- contenedor del main -->
        <v-col
          cols="12"
          md="8"
          lg="7"
          class="main-container"
        >
          <main>
            <v-container>
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
                  <div class="card-overlay py-4 pl-2 rounded-b-lg">
                    <h4 class="card-title text-center red-font my-4">
                      {{ post.title }}
                    </h4>
                    <div class="d-flex justify-space-between flex-sm-row align-center">
                      <div class="d-flex justify-center flex-column flex-md-row align-center">
                        <v-avatar size="65" class="my-1 mx-2 align-self-start align-self-md-center">
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
                      <div class="d-flex flex-column flex-sm-row ml-4">
                        <div class="px-3">
                          <v-row
                            v-for="(topic, j) in post.topics"
                            :key="j"
                            class="ma-0 pa-0 mini-row"
                          >
                            <v-chip
                              small
                              label
                              class="my-1"
                            >
                              <v-icon left>
                                mdi-label
                              </v-icon>
                              {{ topic }}
                            </v-chip>
                          </v-row>
                        </div>
                        <div class="mx-3 mt-3">
                          <v-btn
                            class="btn-leer"
                            width="100%"
                            @click="setPost(post)"
                          >
                            <v-icon class="eye-i">
                              mdi-eye
                            </v-icon> <br>
                            <span>Leer</span>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-row>
            </v-container>
          </main>
        </v-col>

        <!-- Aside container -->
        <v-col
          cols="12"
          md
          lg="5"
          class="mb-10 aside-container ml-0 ml-md-10"
        >
          <!-- Search container -->
          <div class="search-container">
            <v-row class="mb-5 pa-5 mt-5 " justify="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12" md="10">
                  <input type="text" style="display: none; visibility: hidden">
                  <v-text-field
                    v-model="query"
                    placeholder="Buscar artículo..."
                    solo
                    clearable
                    prepend-inner-icon="mdi-magnify"
                    autofocus
                  />
                </v-col>
                <v-col cols="12" md="10">
                  <v-select
                    v-model="sortPost"
                    :items="keyPost"
                    label="Filtrar por..."
                    hide-details
                    solo
                    clearable
                  />
                </v-col>
              </v-row>
            </v-row>
          </div>
          <h3 class="gray-m-font font-weight-medium text-center mb-10">
            Lo más leído
          </h3>
          <aside class="sidebar">
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
      </div>
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
      title: 'Contenido de temas cristiano y teologico a tu alcance - Universidad Teológica Interamericana'
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
    .main-container {
      order: 2;
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
            background-color: rgba(#ffffff, $alpha: 0.80);
            height: auto;
            position: absolute;
            display: block;
            width: 100%;
              h4.card-title {
                font-size: $section-title - 5px;
                  color: $wine;
              }
              .author {
                font-size: $body - 2px;
                  color: $gray-mid;
              }
              .date {
                font-size: $subtitle - 3px;
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
    }
    .top__post {
      .card-title {
        font-size: 14px;
      }
    }
  }
              @include tablet {
                .main-container {
                  order: 0 !important;
                  // flex: 0 1 60%
                  .blog-card {
                    .card-overlay {
                    // height: 40% !important;
                    h4.card-title {
                      font-size: $section-title !important;
                        color: $wine;
                    }
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
                .search-container {
                  // flex: 1 1 40% !important;
                  // height: 300px;
                  order: 1 !important;
                }
                .aside-container {
                  order: 2 !important;
                  // flex: 0 1 40%;
                  // height: 300px;
                  .top__post {
                    .card-title {
                      font-size: 18px;
                    }
                  }
                }
              }
  }
</style>
