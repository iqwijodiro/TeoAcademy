<template>
  <section class="next-events gutter-p pb-5 mb-5">
    <v-container>
      <h2 class="d-flex align-start ml-5">
        Próximos Eventos
      </h2>
      <v-container>
        <v-row v-for="(event, i) in events" :key="i" justify="center" class="rail py-3">
          <v-col
            xl="2"
            lg="2"
            md="2"
            class="order-1 order-lg-1"
          >
            <div class="date-box d-flex justify-center align-start">
              <span class="date mr-4 d-block"> {{ event.date }} </span>
              <div class="d-block pt-4">
                <p class="month ma-0 pa-0">
                  {{ event.month }}
                </p>
                <p class="day">
                  {{ event.day }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col
            xl="4"
            lg="6"
            md="6"
            sm="12"
            class="order-3 order-lg-2 mx-auto"
          >
            <div class="event-center mx-auto">
              <h3 class="event-title gray-m-font">
                {{ event.title }}
              </h3>
              <p class="text-start text-mid evento-text mb-3">
                {{ event.text }}
              </p>
              <div class="centrar">
                <event-form
                  v-model="eventContact"
                >
                  <template #activator="{ on, attrs}" class="mx-auto d-block">
                    <v-btn v-bind="attrs" class="minibtn mt-2" v-on="on">
                      Registrarse
                    </v-btn>
                  </template>
                </event-form>
              </div>
            </div>
          </v-col>
          <v-col
            xl="4"
            lg="4"
            md="4"
            class="order-2 order-lg-3"
          >
            <v-img :src="event.img" class="rounded fill-height" min-height="200px" :alt="event.title" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </section>
</template>
<script>
import eventForm from '~/components/forms/eventForm'

export default {
  components: {
    eventForm
  },
  data () {
    return {
      eventContact: false,
      events: [
        {
          title: 'Importancia de la formación bíblica para el desarrollo del cristiano',
          text: 'Para las personas que desean conocer y comprender la importancia del estudio metódico y sistemático de las sagradas escrituras.',
          date: 1,
          month: 'Abril',
          day: 'Jueves',
          img: 'https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'El proceso de la iniciación cristiana',
          text: 'En esta conferencia abordaremos los aspectos básicos de la fe cristiana, esenciales para un sano proceso de cambio y sanidad en él ser interior y para establecer una adecuada relación espiritual (no religiosa) con Dios (Padre, Hijo y Espíritu Santo).',
          date: 6,
          month: 'Mayo',
          day: 'Jueves',
          img: 'https://images.unsplash.com/photo-1502101872923-d48509bff386?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
        },
        {
          title: 'Importancia de la formación bíblica para el desarrollo del cristiano',
          text: 'En esta conferencia abordaremos los principios y fundamentos bíblicos sobre la paternidad de Dios y como esta interviene en la vida de quienes han decidido creer en Su poder y anhelan experimentar una relación personal e intima con el autor de la vida.',
          date: 3,
          month: 'Junio',
          day: 'Jueves',
          img: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.next-events{
  h2 {
    color: $wine;
  }
  .rail {
    border-bottom: 2px solid $gray-light;
    &:last-child {
      border-bottom: none;
    }
    .date-box {
      margin-top: -8px;
      span.date {
        font-family: $title-font;
        color: $ocean;
        font-size: 90px;
        font-weight: 400;
      }
      .month {
        font-family: $title-font;
        font-size: 28px;
        color: $gray-mid;
        align-self: center !important;
      }
      .day  {
        color: $gray-mid;
        font-size: 22px;
        font-family: $title-font;
        text-align: center;
      }
      @include telefono {
        .day {
          text-align: left;
        }
      }
    }
    .event-center {
      max-width: 650px;
      width: 100%;
      padding: 5px;
    }
  }
}
</style>
