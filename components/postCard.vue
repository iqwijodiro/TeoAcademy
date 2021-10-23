<template>
  <v-card elevation="5" max-width="310px" height="310px" class="blog-card d-flex align-end rounded-xl">
    <v-img
      :src="post.img"
      height="100%"
      class="rounded-xl"
      :alt="post.title"
    />
    <div class="card-overlay">
      <v-card-title class="card-title text-center mb-4">
        {{ post.title }}
      </v-card-title>
      <div class="d-flex justify-start align-start px-2">
        <v-avatar size="45" class="mb-4 mx-2">
          <v-img :src="post.avatar" />
        </v-avatar>
        <div class="px-2 mr-3">
          <h4 class="author mb-2">
            {{ post.author }}
          </h4>
          <span class="date">
            {{ post.createdAt }}
          </span>
        </div>
        <div>
          <v-btn to="/" class="btn-leer">
            <v-icon class="eye-i">
              mdi-eye
            </v-icon> <br>
            <span>Leer</span>
          </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'PostCard',
  props: {

  }
}
</script>
