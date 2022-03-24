<template>
  <div>
    <v-card
      elevation="5"
      :min-height="$vuetify.breakpoint.mdAndDown ? '500px' : '450px'"
      class="blog-card d-flex flex-column align-end rounded-xl pa-0 my-5"
      @click="selectPost(post)"
    >
      <v-img
        :src="img"
        height="100%"
        max-width="100%"
        class="rounded-tr-xl img-post white--text align-end"
      >
        <div class="card-overlay pa-3">
          <v-card-title>
            <h2 class="post-title text-center my-4">
              {{ title }}
            </h2>
          </v-card-title>
        </div>
      </v-img>
      <div class="py-4 px-sm-10 pl-2 rounded-b-lg">
        <div class="d-flex justify-space-between flex-sm-row align-center">
          <div class="d-flex justify-center flex-column flex-md-row align-center">
            <v-avatar size="60" class="my-1 mx-2 align-self-start align-self-md-center">
              <v-img :src="avatar" />
            </v-avatar>
            <div class="px-1 mx-sm-5">
              <h3 class="author gray-m-font text-mid">
                {{ author }}
              </h3>
              <span class="date text-center blue-font">
                <v-icon>
                  mdi-calendar
                </v-icon>
                {{ date }}
              </span>
            </div>
          </div>
          <div class="d-flex flex-column flex-sm-row ml-4">
            <div class="px-3">
              <v-row
                v-for="(topic, j) in topics"
                :key="j"
                class="ma-0 pa-0 mini-row"
              >
                <v-chip
                  small
                  label
                  class="my-1"
                >
                  <v-icon small left>
                    mdi-label
                  </v-icon>
                  {{ topic }}
                </v-chip>
              </v-row>
            </div>
            <div class="mx-3 mt-3">
              <v-btn
                class="btn-leer"
                @click="selectPost(post)"
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
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: '',
      required: true
    },
    date: {
      type: String,
      default: ''
    },
    topics: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      posts: {}
    }
  },
  methods: {
    selectPost (post) {
      this.$emit('select-post', post)
    }
  }
}
</script>

<style lang="scss" scoped>
    .blog-card {
        .img-post {
            // position: relative;
            filter: grayscale(50%);
            // opacity: 0.75;
            .card-overlay {
                background: rgb(0,0,0);
                background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%);
                width: 100%;
                // border-bottom-left-radius: 24px;
                padding: 10px;
                h2 {
                  font-size: $section-subtitle;
                }
            }
          }
          // box-shadow: 10px 5px 10px -5px rgba(0, 0, 0, 0.4) !important;
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
          .date {
            font-size: 13px;
          }
            .btn-leer {
        //   width: 70px;
          height: 50px;
          color: #fff;
          background-color: rgba($ocean, $alpha: 0.65);
          text-transform: capitalize !important;
          font-size: $link;
          .eye-i {
            font-size: 20px;
            margin-right: 6px;
          }
        }
          }
</style>
