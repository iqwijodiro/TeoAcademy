<template>
  <div id="home">
    <!-- <v-parallax
      height="700px"
      :src="require('../assets/img/banner-index.webp')"
    ></v-parallax> -->

    <div class="hero">
      <div class="mask" />
      <v-row>
        <v-card>
          <v-card-title>
            <h1>Formacion con alcance eterno</h1>
          </v-card-title>
          <v-card-text>
            <p class="text">
              Disfruta la maravillosa experiencia de la formación cristiana a
              través de los cursos y programas de Teo Academy
            </p>
          </v-card-text>
          <v-btn class="btn">
            Nuestros Cursos
          </v-btn>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url(./assets/img/banner-index.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  object-fit: cover;
  height: 95vh;
  .mask {
    background-color: rgba($color: #ffffff, $alpha: 0.5);
  }
}
</style>
