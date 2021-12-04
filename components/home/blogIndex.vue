<template>
  <section class="blog gutter-p mb-4 pb-5">
    <v-container>
      <h2 class="text-start ml-3">
        Nuestro Blog
      </h2>
      <v-row
        justify="center"
        class="mb-5"
      >
        <v-col>
          <v-slide-group
            arrows
            multiple
            class="my-3 my-slider mx-auto"
          >
            <v-slide-item
              v-for="(post, i) in posts"
              :key="i"
              class="slide ma-5"
            >
              <v-card
                elevation="5"
                max-width="315px"
                height="350px"
                max-height="400px"
                class="post-card d-flex align-end rounded-xl"
                @click="setPost(post)"
              >
                <v-img
                  :src="post.img"
                  height="100%"
                  class="rounded-xl"
                />
                <div class="card-overlay d-flex flex-column justify-space-around">
                  <h3 class="card-title text-center mb-3">
                    {{ post.title }}
                  </h3>
                  <div class="d-flex justify-center align-start px-2">
                    <v-avatar size="45" class="mb-4 mx-2">
                      <v-img :src="post.avatar" />
                    </v-avatar>
                    <div class="px-2 mr-3">
                      <h4 class="author">
                        {{ post.author }}
                      </h4>
                      <span class="date my-0">
                        {{ post.date }}
                      </span>
                    </div>
                  </div>
                  <div class="d-flex justify-center">
                    <v-btn class="btn-leer" :width=" $vuetify.breakpoint.mdAndUp ? '50%' : '80%'" @click="setPost(post)">
                      <v-icon class="eye-i">
                        mdi-eye
                      </v-icon> <br>
                      <span>Leer</span>
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-btn to="/blogPage" class="btn my-5">
          Ver todos los artículos
        </v-btn>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swipeDirection: 'None'
    }
  },
  methods: {
    swipe (direction) {
      this.swipeDirection = direction
    },
    setPost (post) {
      this.$router.push('/blog/' + post.slug)
    }
  }
}
</script>
<style lang="scss" scoped>
.blog {
  h2 {
    color: $wine;
  }
  .my-slider {
    border-top: 0.2rem solid $gray-light;
    border-bottom: 0.2rem solid $gray-light;
    max-height: 450px;
    width: 100%;
    max-width: 1500px;
    .slide {
      max-height: 400px;
      .blog-card {
        position: relative;
      }
      .card-overlay {
        background-color: rgba($gray-dark, $alpha: 0.6);
        height: 65%;
        position: absolute;
        width: 100%;
        border-bottom-left-radius: 24px;
        padding: 10px;
        .card-title,
        .date {
          color: #fff !important;
        }
        .card-title {
          font-size: 20px !important;
        }
        .author {
          font-size: 15px;
          color: #fff;
        }
        .date {
          font-size: $subtitle;
        }
        .btn-leer {
          width: 85px;
          height: 50px;
          color: white;
          background-color: rgba($gray-dark, $alpha: 0.5);
          text-transform: capitalize !important;
          font-size: $link;
          .eye-i {
            font-size: 25px;
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>
<style scoped>
.v-slide-group__wrapper {
    touch-action: auto !important;
}
</style>
