<template>
  <section class="next-events gutter-p pb-5 mb-5">
    <v-container class="line-rail pb-5">
      <h2
        :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 25px' : ''"
        class="text-md-left text-center"
      >
        Próximos Eventos
      </h2>
      <v-container>
        <v-row v-for="(event, i) in events" :key="i" justify="center" class="rail py-3">
          <v-col
            cols="12"
            sm="2"
            class="order-2 order-md-1 mr-2"
          >
            <div class="date-box">
              <div
                :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 70px' : ''"
                class="date mr-5"
              >
                {{ event.date }}
              </div>
              <div class="pt-2">
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
            cols="12"
            md="6"
            class="order-1 order-md-2 mx-auto"
          >
            <div class="event-center mx-auto mb-0">
              <h3
                :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 21px' : ''"
                class="event-title gray-m-font"
              >
                {{ event.title }}
              </h3>
              <p class="text-start text-mid evento-text mb-3">
                {{ event.text }}
              </p>
              <div class="centrar">
                <event-form
                  v-model="eventContact"
                >
                  <!-- <template #activator="{ on, attrs}" class="mx-auto d-block">
                  </template> -->
                </event-form>
                <v-btn class="minibtn mt-2" @click="eventContact = true">
                  Registrarse
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="3"
            class="order-0 order-md-3"
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
        // {
        //   title: 'Inicio Programa: Licenciatura en Consejería Familiar Cristiana',
        //   text: 'Para las personas que desean ser instrumentos de bendición en las manos de Dios y desarrollarse profesionalmente en la maravillosa labor de aconsejar a otros.',
        //   date: 9,
        //   month: 'Diciembre',
        //   day: 'Domingo',
        //   author: 'Natanael Valenzuela',
        //   category: 'Consejería',
        //   img: 'https://images.unsplash.com/photo-1577897113292-3b95936e5206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80'
        // },
        {
          title: 'Conferencia: Fundamentos de la Consejería Familiar Cristiana',
          text: 'En esta conferencia abordaremos los fundamentos de la Consejería Familiar Cristiana, su importancia, relevancia y aspectos a considerar para realizarla eficazmente.',
          date: 14,
          month: 'Diciembre',
          day: 'Martes',
          author: 'Natanael Valenzuela',
          category: 'Liderazgo',
          img: 'https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        },
        {
          title: 'Conferencia: Liderazgo Cristiano ¿Qué es y porqué es importante?',
          text: 'En esta conferencia abordaremos aspectos esenciales para comprender que es el liderazgo, su importancia e implicaciones en tiempos actuales, desde una perspectiva bíblica y cristocentrica.',
          date: 27,
          month: 'Enero',
          day: 'Jueves',
          author: 'Gustavo Campos',
          category: 'Liderazgo',
          img: 'https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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
      // margin-top: -8px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      height: 90px;
      .date {
        font-family: $title-font;
        color: $wine;
        font-size: 90px;
        font-weight: 400;
      }
      .month {
        font-family: $title-font;
        font-size: 24px;
        color: $gray-mid;
        align-self: center !important;
      }
      .day  {
        color: $gray-mid;
        font-size: 20px;
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
