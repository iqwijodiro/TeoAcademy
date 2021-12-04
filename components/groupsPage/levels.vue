<template>
  <section class="levels gutter-p">
    <v-container>
      <h2 class="text-center red-font">
        De acuerdo a las necesidades y factibilidades de cada congregación, proveemos:
      </h2>
      <section class="library ">
        <h3 class="text-center red-font">
          Biblioteca de Cursos
        </h3>
        <v-container class="d-flex justify-center align-center">
          <v-row justify="center">
            <v-col
              v-for="level in levels"
              :key="level.id"
              cols="12"
              md="4"
            >
              <v-card
                elevation="5"
                width="100%"
                max-width="350"
                height="320"
                :to="level.to"
                class="level-card rounded-xl mx-auto d-flex align-end"
              >
                <v-img
                  :src="level.img"
                  height="100%"
                  class="rounded-xl"
                />
                <div class="card-overlay">
                  <h4 class="text-center card-title mb-4">
                    {{ level.mod }}
                  </h4>
                  <div class="centrar px-2">
                    <v-btn :to="level.to" width="75%" class="btn-leer rounded-lg px-5">
                      <v-icon class="eye-i">
                        mdi-eye
                      </v-icon> <br>
                      <span>Ver</span>
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <v-container>
        <h3 class="text-start gray-m-font">
          Con recursos formativos de excepcional calidad:
        </h3>
        <ul>
          <li
            v-for="(source, i) in sources"
            :key="i"
            class="list-item mr-7 gray-m-font my-5"
          >
            <v-icon class="icon mr-3 gray-m-font">
              mdi-{{ source.icon }}
            </v-icon>
            {{ source.title }}
          </li>
        </ul>
      </v-container>
    </v-container>
  </section>
</template>
<script>
export default {
  data () {
    return {
      levels: [
        {
          mod: 'Cursos',
          to: '/courses',
          img: 'https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80'
        },
        {
          mod: 'Programas',
          to: '/programs',
          img: 'https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'
        }
      ],
      sources: [
        {
          icon: 'play-circle-outline',
          title: 'Videos'
        },
        {
          icon: 'file-document-outline',
          title: 'Documentos'
        },
        {
          icon: 'square-edit-outline',
          title: 'Asignaciones'
        },
        {
          icon: 'magnify',
          title: 'Cuestionarios'
        },
        {
          icon: 'account-group',
          title: 'Foros'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.levels {
  h3 {
    font-size: 26px;
    font-weight: 400;
  }
  .level-card {
    position: relative;
    .card-overlay{
      background-color: rgba($gray-dark, $alpha: 0.650);
      height: 40%;
      position: absolute;
      width: 100%;
      .card-title {
        font-size: 26px !important;
        color: #fff;
      }
      .btn-leer {
        width: 85px;
        height: 50px;
        color: white;
        background-color: rgba($gray-dark, $alpha: 0.75);
        text-transform: capitalize !important;
        font-size: $link;
        .eye-i{
          font-size: 26px;
          margin-right: 6px;
        }
      }
    }
  }
  .list-item {
    display: inline-block;
    font-size: 25px;
    .icon {
      font-size: 35px;
    }
  }

}
</style>
