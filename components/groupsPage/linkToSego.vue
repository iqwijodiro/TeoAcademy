<template>
  <section class="software">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-center red-font mb-5">
            Software para gestión de procesos formativos
          </h2>
          <p class="text-center text px-2">
            Ponemos a disposición de grupos y congregaciones las mejores tecnologías al servicio de la educación,desarrolladas para satisfacer las más exigentes necesidades en materia de gestión de procesos formativos, haciendo posible el acceder metodológicamente a un universo de contenidos de alto valor y hacer de la participación de tutores y estudiantes una experiencia enriquecedora, amena y efectiva.
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
  height: 4.5rem !important;
//   border-radius: 0.5rem;
  background-color: $ocean !important;
  color: #ffffff;
  text-transform: capitalize !important;
  font-size: $link + 0.1rem;
  padding: 1.2rem 1.5rem !important;
  margin: 0.7rem;
  font-family: $title-font !important;
  &:hover {
    color: $wine;
    font-weight: 700;
    background: #ffffff !important;
  }
}
</style>
