<template>
  <section class="software">
    <v-container>
      <v-row>
        <v-col>
          <h2
            :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 25px' : ''"
            class="text-center red-font mb-5"
          >
            Software para gestión de procesos formativos
          </h2>
          <p class="text-center text px-2">
            Ponemos a disposición de grupos y congregaciones las mejores tecnologías al servicio de la educación, desarrolladas para satisfacer las más exigentes necesidades en materia de gestión de procesos formativos, haciendo posible el acceder metodológicamente a un universo de contenidos de alto valor y hacer de la participación de tutores y estudiantes una experiencia enriquecedora, amena y efectiva.
          </p>
          <div class="centrar mt-5">
            <v-btn href="https://www.segoschool.com/" target="_blank" class="btn" rel="noopener noreferrer">
              Descubre más
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.btn {
  height: 50px !important;
  border-radius: 9px !important;
  background-color: $ocean !important;
  color: #ffffff;
  text-transform: capitalize !important;
  font-size: $link;
  padding: 12px 20px !important;
  margin: 7px;
  font-family: $title-font !important;
  &:hover {
    color: #fff;
    font-weight: 400;
    background: rgba( $wine, .75) !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, .4);
    transition: .5s;
  }
  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 9px !important;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .3s;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  }
}
</style>
