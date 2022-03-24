<template>
  <div>
    <h3 class="gray-m-font font-weight-medium text-center mb-sm-10 mt-5">
      Lo más leído
    </h3>
    <v-container>
      <v-row
        v-for="(post, i) in latestPosts"
        :key="i"
      >
        <v-col
          cols="12"
          md="auto"
        >
          <v-card
            class="d-flex flex-column flex-sm-row my-3 rounded top__post"
            min-height="180"
            @click="$emit('set-post', post)"
          >
            <v-img
              :width=" $vuetify.breakpoint.smAndUp ? '50%' : '100%'"
              :src="post.img"
              class="img-post rounded"
            />
            <div class="d-flex flex-column justify-space-around">
              <h4 class="card-title text-center text-md-left gray-m-font">
                {{ post.title }}
              </h4>
              <p class="text-center blue-font">
                <v-icon>
                  mdi-calendar
                </v-icon>
                {{ post.date }}
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  props: {
    latestPosts: { type: Array, default: undefined }
  },
  data () {
    return {}
  }
}
</script>
