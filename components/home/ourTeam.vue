<template>
  <section class="our-team d-flex justify-center align-center">
    <div class="mask" />
    <v-container>
      <v-row justify="center" class="fill-height">
        <v-col
          md="9"
          lg="7"
          xl="5"
          sm="10"
          class="d-flex align-center"
        >
          <v-card
            rounded="xl"
            class="bg-sheet mx-auto py-5 px-3 text-center"
          >
            <h2 class="mt-5 mb-2 text-center">
              Nuestro Equipo
            </h2>
            <v-carousel
              cycle
              hide-delimiters
              class="team-slider my-slider"
            >
              <v-carousel-item v-for="(partner, i) in partners" :key="i" class="card-member mx-auto">
                <v-card elevation="0" light class="card-quote d-flex flex-column justify-space-between align-center mx-auto">
                  <v-avatar style="border-radius: 50%" size="125" class="mb-4">
                    <v-img :src="partner.avatar" />
                  </v-avatar>
                  <h3 class="name">
                    {{ partner.member }}
                  </h3>
                  <h3 class="job">
                    {{ partner.role }}
                  </h3>
                  <p class="member px-5">
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
export default {
  data () {
    return {
      partners: [
        {
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          member: 'Gustavo Campos',
          role: 'Fundador - Colaborador',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          member: 'Adriana Campos',
          role: 'Fundador - Colaborador',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
          member: 'Aquiles Campos',
          role: 'Fundador - Colaborador',
          text: 'Participar en la fundación y actividades de Teo Academy ha sido una experiencia única y enriquecedora para mi vida y la de mis allegados.'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
          member: 'Vladimir Rueda',
          role: 'CTO - Founder',
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
  background-image: url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80);
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  min-height: 800px;
  height: 80vh;
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
  .team-slider {
      .name, .job {
        font-family: $title-font;
        font-size: $link + .8rem;
        padding: 0 1rem !important;
        color: $gray-mid;
        font-weight: 300 !important;
        line-height: 1.4;
      }
      .name {
        color: $wine;
        font-weight: 400 !important;
      }
      .member {
        font-size: $link + .4rem;
        text-align: center;
        line-height: 1.6;
        margin: 1rem;
        color: $gray-mid;
        max-width: 80%;
       }
  }
}
 @include telefono {
    .our-team{
      .bg-sheet {
        height: 80%;
        max-height: 580px;
        .card-quote {
            font-size: $link + .6rem;
        }
      }
    }
  }
  @include tablet {
    .our-team {
      height: 70vh;
      .bg-sheet {
        max-height: 600px;
        height: 80%;
      }
    }
  }
  @include desktop {
    .bg-sheet {
      height: 75%;
    }
  }
  @include lgdesktop {
      .bg-sheet {
          height: 75%;
          .card-quote {
            font-size: $link + .4rem;
          }
      }
  }
</style>
