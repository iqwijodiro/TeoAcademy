<template>
  <section class="blog gutter-p mb-4 pb-5">
    <v-container>
      <h2 class="text-start ml-3">
        Nuestro Blog
      </h2>
      <v-row justify="center" class="mb-5">
        <v-col>
          <v-slide-group arrows class="my-3 my-slider">
            <v-slide-item v-for="(entry, i) in entries" :key="i" class="slide ma-5">
              <v-card elevation="5" max-width="310px" height="310px" class="blog-card d-flex align-end rounded-xl">
                <v-img
                  :src="entry.img"
                  height="100%"
                  class="rounded-xl"
                />
                <div class="card-overlay">
                  <v-card-title class="card-title text-center mb-4">
                    {{ entry.title }}
                  </v-card-title>
                  <div class="d-flex justify-start align-start px-2">
                    <v-avatar size="45" class="mb-4 mx-2">
                      <v-img :src="entry.avatar" />
                    </v-avatar>
                    <div class="px-2 mr-3">
                      <h4 class="author mb-2">
                        {{ entry.author }}
                      </h4>
                      <span class="date">
                        {{ entry.date }}
                      </span>
                    </div>
                    <div>
                      <v-btn to="/" class="btn-leer">
                        <v-icon class="eye-i">
                          mdi-eye
                        </v-icon> <br>
                        <span>Leer</span>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-btn to="/blog" class="btn my-5">
          Ver todos los articulos
        </v-btn>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data () {
    return {
      entries: [
        {
          img: 'https://images.unsplash.com/photo-1555935288-ad7bad5d006b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          title: 'Fundamentos de la fe cristiana',
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          author: 'Gustavo Campos',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1590363763899-f0b78a7bb968?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          title: 'Fundamentos de la fe cristiana',
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          author: 'Adriana Campos',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1611525464734-aa4126eb6a8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          title: 'Fundamentos de la fe cristiana',
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          author: 'Gustavo Campos',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1482920387559-08269818bcfc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
          title: 'Fundamentos de la Teología Biblica',
          avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
          author: 'Winder Díaz',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1577760263010-ebfa5798337c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          title: 'Beneficios de la educación online',
          avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
          author: 'Vladimir Rueda',
          date: '01/03/2021'
        },
        {
          img: 'https://images.unsplash.com/photo-1602058176018-7915d6bd37ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          title: 'Conflictos de la personalidad',
          avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
          author: 'Aquiles Campos',
          date: '01/03/2021'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.blog {
  h2 {
    color: $wine;
  }
  .my-slider {
    border-top: .2rem solid $gray-light;
    border-bottom: .2rem solid $gray-light;
    .slide {
      .blog-card{
        position: relative;
      }
      .card-overlay{
        background-color: rgba($gray-dark, $alpha: 0.60);
        height: 47.5%;
        position: absolute;
        width: 100%;
        border-bottom-left-radius: 2.4rem;
        .card-title, .date {
          color: #fff !important;
        }
        .card-title {
          font-size: 2rem !important;

        }
        .author {
          font-size: 1.5rem;
          color: #fff;
        }
        .date {
            font-size: $subtitle;
        }
        .btn-leer {
          width: 85px;
          height: 50px;
            color: white;
            background-color: rgba($gray-dark, $alpha: 0.50);
            text-transform: capitalize !important;
            font-size: $link;
            .eye-i{
              font-size: 2.5rem;
              margin-right: .6rem;
            }
        }
      }
    }
  }
}
</style>
