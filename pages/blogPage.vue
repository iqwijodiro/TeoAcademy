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
          class="main-container pa-0 ma-0 order-1 order-md-0"
        >
          <main>
            <v-container>
              <v-row
                v-for="(post, i) in posts"
                :key="i"
              >
                <v-col>
                  <blog-card
                    :img="post.img"
                    :title="post.title"
                    :avatar="post.avatar"
                    :author="post.author"
                    :date="post.date"
                    :topics="post.topics"
                    @select-post="setPost(post)"
                  />
                </v-col>
              </v-row>
            </v-container>
          </main>
        </v-col>

        <!-- Aside container -->
        <v-col
          cols="12"
          md="4"
          lg="4"
          class="mb-10 aside-container ml-0 ml-md-10"
        >
          <!-- Search container -->
          <div class="search-container ">
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
          <aside v-if="$vuetify.breakpoint.mdAndUp && latestPosts.length > 0" class="sidebar">
            <latest-posts
              :latest-posts="latestPosts"
              @set-post="setPost"
            />
          </aside>
        </v-col>
      </div>
      <v-row v-if="$vuetify.breakpoint.smAndDown">
        <v-col>
          <latest-posts
            :latest-posts="latestPosts"
            @set-post="setPost"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import LatestPosts from '~/components/blog/latestPosts.vue'
import blogCard from '~/components/genericComponents/blogCard.vue'
export default {
  components: { LatestPosts, blogCard },
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
      title: 'Contenido de temas cristiano y teologico a tu alcance'
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
    .top__post {
      .post-title {
        font-size: 14px;
      }
    }
  }
              // @include tablet {
              //   .main-container {
              //     order: 0 !important;
              //   .search-container {
              //     // flex: 1 1 40% !important;
              //     // height: 300px;
              //     // order: 1 !important;
              //   }
              //   .aside-container {
              //     // order: 2 !important;
              //     // flex: 0 1 40%;
              //   }
              //   }
              // }
  }}
</style>
