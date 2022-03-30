<template>
  <section class="cta mb-5">
    <v-container>
      <div class="d-flex flex-column flex-sm-row justify-center align-center">
        <v-btn class="btn mt-2" href="@/assets/files/file.pdf" download="Ficha_Servicios_Teoacademy.pdf">
          Descargar ficha de servicio
        </v-btn>
        <v-btn class="btn mt-2" @click="dialogContact = true">
          Solicitar más información
        </v-btn>
        <contact-form
          v-model="dialogContact"
        />
      </div>
    </v-container>
  </section>
</template>
<script>
import contactForm from '~/components/forms/contactForm'

export default {
  components: {
    contactForm
  },
  data () {
    return {
      dialogContact: false
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
