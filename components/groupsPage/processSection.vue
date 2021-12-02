<template>
  <section class="process">
    <v-container>
      <h2 class="text-center red-font mb-5">
        Proceso de implementación
      </h2>
      <p class="text-center text px-3">
        Nuestro proceso de implementación para grupos y congregaciones esta diseñado para garantizar la
        efectividad en todas sus actividades y lograr los objetivos propuestos.
      </p>
      <v-row justify="center">
        <v-col>
          <v-img :src="require('@/assets/img/infografiateo-copy.png')" max-width="1000" class="mx-auto" />
        </v-col>
      </v-row>
      <div class="centrar mt-5">
        <process-form
          v-model="process"
        >
          <template #activator="{ on, attrs}" class="mx-auto d-block">
            <v-btn v-bind="attrs" class="btn mt-2" v-on="on">
              Descargar ficha de servicio
            </v-btn>
          </template>
        </process-form>
      </div>
    </v-container>
  </section>
</template>
<script>
import processForm from '~/components/forms/processForm'

export default {
  components: {
    processForm
  },
  data () {
    return {
      process: false
    }
  }
}
</script>
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
