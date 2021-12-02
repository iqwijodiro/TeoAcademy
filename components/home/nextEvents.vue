<template>
  <section class="next-events gutter-p pb-5 mb-5">
    <v-container>
      <h2 class="d-flex align-start ml-5">
        Próximos Eventos
      </h2>
      <v-container>
        <v-row v-for="(event, i) in events" :key="i" justify="center" class="rail py-3">
          <v-col
            cols="12"
            sm="2"
            class="order-1 order-lg-1 mr-2"
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
            cols="12"
            md="6"
            class="order-3 order-lg-2 mx-auto"
          >
            <div class="event-center mx-auto mb-0">
              <h3 class="event-title gray-m-font">
                {{ event.title }}
              </h3>
              <p class="text-start text-mid evento-text mb-3">
                {{ event.text }}
              </p>
              <!-- <div class="d-flex">
                <v-chip
                  small
                  class="ma-2"
                  label
                  color="#e9e9e9"
                  text-color="#be1e2d"
                >
                  <v-icon left>
                    mdi-account-circle-outline
                  </v-icon>
                  {{ event.author }}
                </v-chip>
                <v-chip
                  small
                  class="ma-2"
                  label
                >
                  <v-icon left>
                    mdi-label
                  </v-icon>
                  {{ event.category }}
                </v-chip>
              </div> -->
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
            cols="12"
            md="3"
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
          title: 'Inicio Programa: Licenciatura en Consejería Familiar Cristiana',
          text: 'Para las personas que desean ser instrumentos de bendición en las manos de Dios y desarrollarse profesionalmente en la maravillosa labor de aconsejar a otros.',
          date: 9,
          month: 'Diciembre',
          day: 'Domingo',
          author: 'Natanael Valenzuela',
          category: 'Consejería',
          img: 'https://images.unsplash.com/photo-1577897113292-3b95936e5206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80'
        },
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
      margin-top: -8px;
      span.date {
        font-family: $title-font;
        color: $ocean;
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
