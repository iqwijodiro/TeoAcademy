<template>
  <div class="about mb-5">
    <section class="hero d-flex justify-center align-center">
      <div class="mask" />
      <!-- cycle -->
      <!-- show-arrows-on-hover -->
      <!-- <v-carousel
        hide-delimiters
        interval="5000"
      >
        <v-carousel-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-container fluid> -->
      <v-row justify="center" class="rail">
        <v-col cols="12" md="8" class="px-5 mx-auto">
          <!-- <v-img :src="item.src" height="550px" max-height="100%" class="align-center img-carousel">
                    <v-row justify="center">
                      <v-col cols="10" md="5"> -->
          <v-card elevation="5" max-width="900px" class="hero-card rounded-lg text-center mx-auto pa-5 mt-8">
            <v-card-title class="centrar mx-auto pa-0 mb-4">
              <h1 class="fw-300">
                ¿Quiénes Somos?
              </h1>
            </v-card-title>
            <h3 class="text-blog">
              Somos una institución universitaria creada con el propósito de formar líderes cristianos capaces de aportar soluciones efectivas en un mundo necesitado.
            </h3>
          </v-card>
        </v-col>
      </v-row>
      <!-- </v-img> -->
      <!-- </v-card> -->
      <!-- </v-col>
              <v-col /> -->
      <!-- </v-row> -->
      <!-- </v-container>
          <v-card flat color="transparent" width="100%">
            <div class="mask" />
          </v-card>
        </v-carousel-item>
      </v-carousel> -->
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // items: [
      //   {
      //     src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      //     title: 'En UTI Online',
      //     text: 'Utilizamos herramientas y métodos altamente calificados que pueden llevarte a tener una experiencia prácticamente presencial, serás acompañado, y dirigido tal como en una institución física.'
      //   },
      //   {
      //     src: 'https://images.unsplash.com/photo-1594686948539-2709857f7066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      //     title: 'UTI online es',
      //     text: 'Una universidad que ha graduado cientos de estudiantes y ha sido la madre de más de 15 universidades cristianas en Estados Unidos.'
      //   },
      //   {
      //     src: 'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      //     title: 'En UTI online',
      //     text: 'Nuestro personal, maestros y administradores aplican el Código Esdras que consiste en Estudiar, Vivir y Enseñar la Palabra de Dios.'
      //   },
      //   {
      //     src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      //     title: 'En UTI Online',
      //     text: 'Estamos localizados EE.UU, en el hermoso Estado de Carolina del Norte y tenemos representaciones internacionales en: Central América, Sur América, el Caribe y Europa.'
      //   }
      // ]
    }
  },
  head: {
    title: 'Acerca de Nosotros'
  }
}
</script>
<style lang="scss" scoped>
.about {
    .hero {
      background-image:
    url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
      height: 100%;
    min-height: 80vh;
    background-position: bottom;
    .hero-card {
      max-height: 500px;
    }
    }
    @include tablet {
    .hero{
      min-height: 50vh;
    }
    .text {
      line-height: 2;
    }
    .btn {
      display: block !important;
    }
  }
  @include miniDesktop {
    .hero {
      max-height: 40vh;
    }
    .text {
      display: block !important;
    }
  }
}

</style>
