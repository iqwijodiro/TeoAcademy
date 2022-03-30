<template>
  <section class="our-team d-flex justify-center align-center ">
    <!-- <div class="mask" /> -->
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="6"
          sm="8"
          class="d-flex align-center"
        >
          <v-card
            :width="$vuetify.breakpoint.mdAndDown ? '85%' : '100%'"
            max-width="450"
            height="65%"
            class="bg-sheet mx-auto py-5 px-3 text-center rounded-xl"
          >
            <h2
              :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 25px' : ''"
              class="my-5 text-center"
            >
              Nuestro Equipo
            </h2>
            <v-carousel
              cycle
              hide-delimiters
              class="team-slider"
              height="500"
            >
              <!-- <template #prev="{ on, attrs }">
                <v-btn
                  color="warning"
                  v-bind="attrs"
                  small
                  class="carousel-control"
                  v-on="on"
                >
                  Previous
                </v-btn>
              </template>
              <template #next="{ on, attrs }">
                <v-btn
                  color="danger"
                  v-bind="attrs"
                  small
                  class="carousel-control"
                  v-on="on"
                >
                  Next
                </v-btn>
              </template> -->
              <v-carousel-item
                v-for="(partner, i) in partners"
                :key="i"
                class="card-member mx-auto slide-item"
                style="height: 60%; width: 100%;"
              >
                <v-card
                  width="100%"
                  flat
                  light
                  :max-height="$vuetify.breakpoint.mdAndDown ? '300' : '400'"
                  class="card-quote d-flex flex-column justify-space-between align-center mx-auto px-10"
                >
                  <v-avatar style="border-radius: 50%" size="140" class="mb-5">
                    <v-img :src="partner.avatar" />
                  </v-avatar>
                  <h3
                    :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 20px' : 'font-size: 28px'"
                    class="name"
                  >
                    {{ partner.member }}
                  </h3>
                  <h4
                    :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 16px' : 'font-size: 21px'"
                    class="job"
                  >
                    {{ partner.role }}
                  </h4>
                  <p class="member px-5 d-none">
                    {{ partner.text }}
                  </p>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
// import processForm from '~/components/forms/processForm'

export default {
  components: {
    // processForm
  },
  data () {
    return {
      dialogContact: false,
      partners: [
        {
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          member: 'Gustavo Campos',
          role: 'Desarrollo de Contenidos - Instructor',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
          member: 'Fredy Ocampo',
          role: 'Desarrollo de Contenidos - Instructor',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
          member: 'Alfonso Abreu',
          role: 'Desarrollo de Contenidos',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/63.jpg',
          member: 'Angel Molina',
          role: 'Instructor',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
          member: 'Vladimir Rueda',
          role: 'Desarrollo y Asistencia Tecnológica',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
          member: 'Winder Díaz',
          role: 'Desarrollo y Asistencia Tecnológica',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
          member: 'Alicia Rojas',
          role: 'Comunicación y Asistencia General',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
          member: 'Isabella Campos',
          role: 'Producción Audio Visual',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.our-team {
  position: relative !important;
  // background-image: url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80);
  // background-size: cover;
  // background-attachment: fixed;
  // background-position: center center;
  // min-height: 800px;
  background: rgb(240,38,58);
  background: linear-gradient(135deg, rgba(240,38,58,1) 0%, rgba(240,38,58,1) 15%, rgba(240,38,58,0.9780287114845938) 30%, rgba(190,30,46,1) 70%, rgba(190,30,46,1) 85%, rgba(190,30,46,1) 100%);
  height: 65vh;
  max-height: 1100px;
  padding: 0 !important;
  .mask {
    position: absolute;
    background: rgba($color: #ffffff, $alpha: 0.25);
    height: 100% !important;
    width: 100%;
  }
  h2 {
    color: $wine;
  }
  div.team-slider {
    // max-height: 400px;
    // .slide-item {
        .name, .job {
          padding: 0 10px !important;
          color: $gray-mid;
          font-weight: 300 !important;
          line-height: 1.4;
        }
        .name {
          color: $wine;
          font-weight: 400 !important;
        }
        .member {
          font-size: $link;
          text-align: center;
          line-height: 1.6;
          margin: 1rem;
          color: $gray-mid;
          max-width: 80%;
         }
    // }
  }
}
</style>
<style>
   div.team-slider div.v-window__container div.v-window__prev,
  div.team-slider div.v-window__container div.v-window__next {
      top: calc(20% - 20px) !important;
    }
</style>
