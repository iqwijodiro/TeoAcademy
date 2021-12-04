<template>
  <div>
    <h3 class="gray-m-font font-weight-medium text-center mb-10">
      Lo más leído
    </h3>
    <v-row
      v-for="(post, i) in latestPosts"
      :key="i"
    >
      <v-card
        class="d-flex my-3 rounded top__post"
        @click="$emit('set-post', post)"
      >
        <v-img
          width="45%"
          max-width="100%"
          height="auto"
          min-height="100%"
          :src="post.img"
          class="img-post rounded"
        />
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
