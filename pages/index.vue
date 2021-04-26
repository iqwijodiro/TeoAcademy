<template>
  <div id="index">
    <div class="hero d-flex justify-center align-center">
      <div class="mask" />
      <v-container>
        <v-row class="rail">
          <v-col
            lg="5"
            xl="5"
            md="6"
            sm="10"
            class="px-5"
          >
            <v-card elevation="5" max-width="450px" min-height="320px" class="hero-card rounded-lg text-center py-3">
              <v-card-title class="mx-auto pb-0">
                <h1 class="fw-700 text-center mx-4">
                  Formación con alcance eterno
                </h1>
              </v-card-title>
              <v-card-text class="my-3 mx-auto px-5 py-0">
                <p class="text">
                  Disfruta la maravillosa experiencia de la formación cristiana a través de los cursos y programas de Teo Academy
                </p>
              </v-card-text>
              <div class="d-block mx-auto d-sm-flex justify-sm-center px-2">
                <v-btn to="/courses" class="btn">
                  Nuestros Cursos
                </v-btn>
                <div class="centrar">
                  <v-dialog
                    v-model="dialogContact"
                    transition="dialog-top-transition"
                    persistent
                    max-width="650px"
                  >
                    <template #activator="{ on, attrs }" class="d-block mx-auto">
                      <v-btn
                        class="btn d-block"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Contáctanos
                      </v-btn>
                    </template>
                    <v-card class="py-5 px-3 rounded-xl">
                      <h2 class="text-center red-font">
                        Contáctanos
                      </h2>
                      <v-form
                        v-model="validForm"
                      >
                        <v-container>
                          <v-row justify="center">
                            <v-col
                              xl="10"
                              lg="10"
                            >
                              <v-text-field
                                v-model="lead.name"
                                :rules="[validationRules.required]"
                                solo
                                clearable
                                label="Nombre"
                                required
                              />
                              <v-text-field
                                v-model="lead.contactInfo.email"
                                :rules="[validationRules.required, validationRules.email]"
                                solo
                                clearable
                                label="Email"
                                required
                              />
                              <v-text-field
                                v-model="lead.contactInfo.masterLocation.country"
                                :rules="[validationRules.required]"
                                solo
                                clearable
                                label="País"
                                required
                              />
                              <v-text-field
                                v-model="lead.contactInfo.phoneNumber"
                                solo
                                clearable
                                label="Teléfono (opcional)"
                                type="number"
                              />
                              <v-textarea
                                v-model="lead.request"
                                :rules="[validationRules.required]"
                                solo
                                clearable
                                label="Coméntanos tu solicitud (requerido)"
                                auto-grow
                              />
                            </v-col>
                          </v-row>
                          <v-container>
                            <v-dialog
                              v-model="privacy"
                            >
                              <template #activator="{ on, attrs }">
                                <p class="text-mid" style="line-height: 2">
                                  Al hacer click en <span class="minibtn">Enviar</span>, usted está confirmando que acepta los términos de nuestras
                                  <a v-bind="attrs" class="text-decoration-underline red-font" v-on="on"> políticas y condiciones</a>
                                </p>
                              </template>
                              <v-card>
                                <v-toolbar
                                  flat
                                  dense
                                  app
                                  color="transparent"
                                >
                                  <v-spacer />
                                  <v-btn
                                    icon
                                    @click="privacy = false"
                                  >
                                    <v-icon size="30" class="icon gray-light-font">
                                      mdi-close-circle-outline
                                    </v-icon>
                                  </v-btn>
                                </v-toolbar>
                                <Privacy />
                              </v-card>
                            </v-dialog>
                          </v-container>
                        </v-container>
                      </v-form>
                      <v-container>
                        <v-row justify="end">
                          <!-- <v-alert
                            v-model="alertForm"
                            color="#2ec4b6"
                            dense
                            outlined
                            elevation="0"
                            class="my-2"
                          >
                            <span>Tus datos han sido registrados exitosamente</span>
                          </v-alert> -->
                          <!-- <v-alert
                            v-model="errorForm"
                            color="#be1e2d"
                            dense
                            outlined
                            elevation="0"
                            class="my-2 mr-1"
                          >
                            <span>No pudimos registrar sus datos. Intente de nuevo</span>
                          </v-alert> -->
                          <v-btn
                            class="btn"
                            @click="requestForm"
                          >
                            Enviar
                          </v-btn>
                          <v-btn
                            class="btn"
                            @click="dialogContact = false"
                          >
                            Cerrar
                          </v-btn>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-dialog>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar
          v-model="snackbar.status"
          timeout="2500"
          text
          top
          :color="snackbar.color"
          content-class="snackbar-text"
          absolute
          class="snackbar"
        >
          <template #default>
            <span
              style="font-size: 1.8rem"
            >
              {{ snackbar.text }}
            </span>
          </template>
          <!-- <template #action="{ attrs }">
            <v-btn
              color="#2ec4b6"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              <v-icon class="icon">
                mdi-close-circle-outline
              </v-icon>
            </v-btn>
          </template> -->
        </v-snackbar>
      </v-container>
    </div>
    <!--Seccion de Hero-->
    <section class="ebook gutter-p">
      <v-container>
        <v-row class="justify-space-around align-center pt-5 mt-5 mx-auto">
          <v-col
            xl="4"
            lg="4"
            md="6"
            sm="10"
            class="mx-auto px-5"
          >
            <v-card class="pa-5 rounded-xl mx-auto">
              <h2 class="text-capitalize text-center">
                Descarga gratis nuestro ebook
              </h2>
              <div class="centrar">
                <v-dialog
                  v-model="dialogEbook"
                  transition="dialog-top-transition"
                  persistent
                  max-width="350px"
                >
                  <template #activator="{ on, attrs}" class="mx-auto d-block">
                    <v-btn
                      class="btn d-block"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Descargar
                    </v-btn>
                  </template>
                  <v-card class="pa-5">
                    <h2 class="text-center red-font">
                      Solicita nuestro ebook gratis
                    </h2>
                    <v-form
                      v-model="validForm"
                    >
                      <v-container>
                        <v-row justify="center">
                          <v-col
                            xl="10"
                            lg="10"
                            class="pa-0"
                          >
                            <v-text-field
                              :rules="[validationRules.required]"
                              solo
                              clearable
                              label="Nombre"
                              required
                            />
                            <v-text-field
                              v-model="email"
                              :rules="[validationRules.required, validationRules.emailPattern]"
                              solo
                              clearable
                              label="Email"
                              required
                            />
                            <v-text-field
                              :rules="[validationRules.required]"
                              solo
                              clearable
                              label="País"
                              required
                            />
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                    <v-card-actions class="d-flex justify-center">
                      <div class="centrar">
                        <v-btn
                          class="btn"
                          @click="dialogEbook = false"
                        >
                          Enviar
                        </v-btn>
                        <v-btn
                          class="btn"
                          @click="dialogEbook = false"
                        >
                          Cerrar
                        </v-btn>
                      </div>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-card>
          </v-col>
          <v-col xl="6" lg="6" md="6" sm="10" class="mx-auto">
            <v-img max-width="500px" :src="require('../assets/img/ebook_index.jpeg')" class="rounded" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--Seccion del Ebook-->
    <section class="top-cursos gutter-p">
      <v-container>
        <h2 class="text-start">
          Nuestros cursos más populares
        </h2>
        <v-row justify="center">
          <v-col
            cols="12"
          >
            <v-slide-group multiple arrows class="my-3 my-slider">
              <v-slide-item v-for="course in courses" :key="course._id" class="slides">
                <v-card elevation="5" height="100%" max-height="520px" max-width="315px" class="card rounded-lg mx-4 my-5 pb-2 d-flex flex-column justify-space-between">
                  <v-img
                    :src="course.imgUrl"
                    height="45%"
                    max-height="220px"
                    class="mb-2"
                  />
                  <v-card-title class="card-title">
                    {{ course.name }}
                  </v-card-title>
                  <v-card-text class="text-card">
                    {{ course.subName }}
                  </v-card-text>
                  <v-row class="minirow d-flex justify-center align-center py-1">
                    <div v-if="course.structure && course.structure.sections" class="my-2 mr-2">
                      <p class="ma-0 px-3">
                        {{ course.structure.sections.length }} <br>
                        Módulos
                      </p>
                    </div>
                    <div v-if="course.features && course.features.resources" class="my-2 mr-2">
                      <p class="ma-0 px-3">
                        {{ course.features.resources.length }} <br>
                        Recursos
                      </p>
                    </div>
                    <div>
                      <span class="priceOld mr-2">
                        ${{ parseInt(course.features.priceInfo.price) }}
                      </span>
                      <span class="priceNew mr-2">
                        ${{ parseInt(course.features.priceInfo.finalPrice) }}
                      </span>
                    </div>
                  </v-row>
                  <div class="centrar mt-2">
                    <v-btn class="minibtn mt-3" @click="setCourse(course)">
                      Ver Curso
                    </v-btn>
                  </div>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
          <v-btn to="/courses" class="btn my-5">
            Ver todos los cursos
          </v-btn>
        </v-row>
      </v-container>
    </section>
    <!--Seccion de los mejores cursos-->
    <section class="students mt-5 py-5 px-2 d-flex justify-center align-center">
      <v-container class="d-flex justify-center align-center">
        <v-row justify="center" class="fill-height">
          <v-col
            md="9"
            lg="7"
            xl="5"
            sm="10"
            class="d-flex align-center"
          >
            <v-card elevation="5" rounded="xl" class="bg-sheet mx-auto py-5 px-3 text-center">
              <h2 class="mt-5 mb-3 px-5 text-center">
                Lo que dicen los Teo estudiantes
              </h2>
              <v-carousel
                cycle
                hide-delimiters
                class="quote-slider my-slider mt-5"
              >
                <v-carousel-item
                  v-for="(quote, i) in quotes"
                  :key="i"
                  class="fill-height"
                >
                  <v-card light elevation="0" class="card-quote d-flex flex-column justify-space-between align-center mx-auto">
                    <p class="quote">
                      {{ quote.text }}
                    </p>
                    <v-avatar size="95" class="mb-5">
                      <v-img :src="quote.avatar" />
                    </v-avatar>
                    <h3 class="name">
                      {{ quote.name }}
                    </h3>
                    <h3 class="job">
                      {{ quote.job }}
                    </h3>
                  </v-card>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- ProximosEventos -->
    <section class="next-events gutter-p pb-5 mb-5">
      <v-container>
        <h2 class="d-flex align-start ml-5">
          Próximos Eventos
        </h2>
        <v-container>
          <v-row v-for="(evento, i) in eventos" :key="i" justify="center" class="rail py-3">
            <v-col
              xl="2"
              lg="2"
              md="2"
              class="order-1 order-lg-1"
            >
              <div class="date-box d-flex justify-center align-start">
                <span class="date mr-4 d-block"> {{ evento.date }} </span>
                <div class="d-block pt-4">
                  <p class="month ma-0 pa-0">
                    {{ evento.month }}
                  </p>
                  <p class="day">
                    {{ evento.day }}
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
                  {{ evento.title }}
                </h3>
                <p class="text-start text evento-text">
                  {{ evento.text }}
                </p>
                <div class="centrar">
                  <v-btn class="minibtn mt-2">
                    Registrarse
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col
              xl="4"
              lg="4"
              md="4"
              class="order-2 order-lg-3"
            >
              <v-img :src="evento.img" class="rounded fill-height" min-height="200px" />
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </section>
    <!-- Nuestro Equipo de trabajo -->
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
                <v-carousel-item v-for="(partner, i) in partners" :key="i" class="card-member mx-auto fill-height">
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
                    <p class="member">
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
    <!-- Nuestro Blog -->
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
    <!-- Newsletter & inputEmail -->
    <section class="newsletter mt- pt-5">
      <v-container>
        <v-row class="d-flex justify-center align-center">
          <v-col
            cols="12"
            xl="4"
            lg="4"
            md="6"
            sm="6"
            class="mr-5"
          >
            <v-img
              :src="require('../assets/img/logo-white-full.webp')"
              contain
            />
          </v-col>
          <v-col
            cols="12"
            xl="5"
            lg="5"
            md="6"
            sm="10"
          >
            <div class="container mx-auto">
              <h3 class="mb-5">
                Recibe información acerca de nuestros eventos y contenidos
              </h3>
              <v-form v-model="valid" action="" class="form-box">
                <v-text-field
                  v-model="email"
                  :rules="[validationRules.required, validationRules.emailPattern]"
                  label="E-mail"
                  required
                  clearable
                  class="input-email rounded-l-lg"
                />
                <button type="submit" class="btn-input rounded-lg">
                  Enviar
                </button>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
import Privacy from '~/components/Privacy'
export default {
  components: { Privacy },
  data () {
    return {
      title: 'Inicio',
      valid: false,
      dialogContact: false,
      dialogEbook: false,
      alertForm: false,
      errorForm: false,
      privacy: false,
      courses: [],
      // snackbar: false,
      snackbar: {
        status: false,
        text: '',
        color: ''
      },
      lead: {
        name: '',
        request: '',
        contactInfo: {
          masterPhone: {
            phoneType: 'Principal',
            code: '',
            number: '',
            ext: ''
          },
          masterLocation: {
            _id: 'Principal',
            name: 'Principal',
            building: {
              typeBuilding: 'Casa',
              name: 'Principal',
              floor: null,
              number: null
            },
            route1: {
              typeRoute: 'CL',
              name: null
            },
            route2: {
              typeRoute: 'AV',
              name: null
            },
            neighborhood: null,
            adminArea1: null,
            city: null,
            adminArea2: null,
            country: 'Costa Rica',
            postalCode: null,
            formatted: null,
            location: {
              lat: null,
              lng: null
            }
          },
          email: null,
          aditional: {
            phones: [],
            infoWeb: [],
            locations: []
          }
        }
      },
      email: '',
      apiResponse: false,
      validForm: false,
      validationRules: {
        required: v => !!v || 'Campo Requerido',
        emailPattern: (v) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'E-mail inválido'
        }
      },
      quotes: [
        {
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Adriana Campos',
          job: 'Lic. Business Management'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Gustavo Campos',
          job: 'Lic. Business Management'
        },
        {
          avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu92UHJOEtoubLZW2b6fItrHIOvxKRUtHvIIMVuAEg=s83-c-mo',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Winder Díaz',
          job: 'Frontend Developer'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
          text:
            '"Hacer el programa Teo 100 ha representado para mi vida una gran oportunidad de cambio. La experiencia ha sido super enriquecedora y amena. Agradezco mucho el acompañamiento que me dieron. Los recursos son de mucha calidad. Voy por mas."',
          name: 'Aquiles Campos',
          job: 'Cardiologist M.D.'
        }
      ],
      eventos: [
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
      ],
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
      ],
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
  },
  head () {
    return {
      title: this.title
    }
  },
  mounted () {
    this.getTopCourses()
  },
  methods: {
    async getTopCourses () {
      const data = await this.$axios.$get(`${this.$store.state.urlAPI}/courses/client6049278bc32f0d0015e108e9/all`)
      this.courses = data.courses
    },
    requestForm () {
      // const that = this
      if (this.validForm) {
        // Se realiza el post a la api
        // Se recibe respuesta de la api
        this.apiResponse = true
        if (this.apiResponse) {
          this.dialogContact = false
          this.snackbar.status = true
          this.snackbar.text = 'Los datos fueron registrados exitosamente'
          this.snackbar.color = '#2ec4b6'
          // Mensaje de éxito
          /* this.alertForm = true
          this.errorForm = false
          setTimeout(() => {
            that.alertForm = false
          }, 3000) */
        } else {
          // Mensaje de error
          this.dialogContact = false
          // this.errorForm = true
          // this.alertForm = false
          this.snackbar.status = true
          this.snackbar.text = 'No se pudo ingresar los datos, intente de nuevo'
          this.snackbar.color = '#be1e2d'
          // setTimeout(() => {
          //   that.errorForm = false
          // }, 3000)
        }
      } else {
        this.dialogContact = false
        // this.errorForm = true
        // this.alertForm = false
        this.snackbar.status = true
        this.snackbar.text = 'No se pudo ingresar los datos, intente de nuevo'
        this.snackbar.color = '#be1e2d'
        // setTimeout(() => {
        //   that.errorForm = false
        // }, 3000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.hero{
  background-image: url(../assets/img/banner-indexmod.webp);
  min-height: 650px;
  background-color: rgba($color: $gray-mid, $alpha: 0.37);
  .rail {
    display: flex;
    justify-content: center;
    // .hero-card{
      // .btn {
      //   display: block;
      //   width: 80%;
      //   overflow: unset;
      // }
    // }
  }
}
  @include tablet {
    .hero{
      .rail {
        display: flex;
        justify-content: center;
        .hero-card {
          margin: 0 auto;
        }
      }
    }
  }
@include miniDesktop {
  .hero{
    .rail {
      display: flex;
      justify-content: center;
    }
  }
}
@include desktop {
  .hero {
    .rail {
      justify-content: flex-end;
    }
  }
  .gutter-p {
    padding-top: 12rem !important;
  }
}

.ebook {
  background-image: url(../assets/img/wave.svg);
  background-size: cover;
  min-height: 80vh;
  h2 {
    color: $gray-mid;
  }
  .rounded {
    max-width: 100%;
    border-radius: 2.5rem!important;
  }
}
.top-cursos {
  h2 {
    color: $wine;
    text-align: center;
  }
    .my-slider {
      height: 550px;
    }
  @include miniDesktop {
    h2 {
      margin-left: 7rem !important;
      text-align: left;
    }
  }
  .slides{
    .text-card {
      font-size: $body - .15rem;
      color: $gray-mid;
      font-weight: 300;
      line-height: 1.5;
      padding: 0 1.5rem !important;
      margin: 1.2rem 0 !important;
    }
    .minirow div {
      font-size: $miniLink + .3rem !important;
      font-weight: 400;
      color: $gray-mid;
      &:nth-child(1) {
        border-right: .2rem solid $gray-light;
      }
    }
  }
}
.students{
  background: rgb(149,149,149);
  background: linear-gradient(0deg, rgba(149,149,149,1) 0%, rgba(193,193,193,1) 25%, rgba(211,211,211,1) 50%, rgba(231,231,231,1) 75%, rgba(250,250,250,1) 100%);
  padding: 5rem 2rem;
  min-height: 600px;
  height: 120vh;
  max-height: 900px;
  .bg-sheet {
    height: 95%;
    min-height: 300px;
    max-height: 1000px;
    overflow: hidden;
    h2 {
      color: $wine;
      line-height: 1.4;
      font-size: 2.2rem;
    }
    .quote-slider {
      .card-quote {
        width: 90%;
        max-width: 500px;
      }
      .quote {
        color: $gray-mid;
        font-size: $link + .2rem;
        line-height: 1.7;
        margin-bottom: 3rem;
      }
    }
    .name, .job {
      font-family: $title-font;
      font-size: $link +.5rem;
      padding: 0 1rem !important;
      color: $gray-mid;
      font-weight: 300;
      line-height: 1.4;
      margin: 0 !important;
    }
  }
}
  @include telefono {
    .students{
      .bg-sheet {
        height: 85%;
        max-height: 600px;
      }
    }
    .quote {
        font-size: $link + .6rem;
      }
  }
  @include tablet {
    .students {
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
      .quote {
        font-size: $link + .4rem;
      }
      .bg-sheet {
        height: 75%;
      }
  }
.next-events{
  h2 {
    color: $wine;
  }
  .rail {
    border-bottom: .2rem solid $gray-light;
    &:last-child {
      border-bottom: none;
    }
    .date-box {
      span.date {
        font-family: $title-font;
        color: $ocean;
        font-size: 9rem;
        font-weight: 400;
      }
      .month {
        font-family: $title-font;
        font-size: 2.8rem;
        color: $gray-mid;
        align-self: center !important;
      }
      .day  {
        color: $gray-mid;
        font-size: 2.2rem;
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
      padding: .5rem;
      .evento-text.text {
        font-size: $link + .2rem !important;
        margin: 1rem 0 !important;
        line-height: 1.5;
        color: $gray-mid;
      }
    }
  }
}

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
        font-size: $link + .5rem;
        text-align: center;
        line-height: 1.6;
        margin: 1rem;
        padding: 1rem;
        color: $gray-mid;
       }
  }
}
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
.newsletter {
  display: flex;
  align-items: center !important;
  min-height: 50vh !important;
  background: rgb(190,30,45);
  background: linear-gradient(90deg, #be1e2d 0%, rgba(142,22,34,1) 50%, rgba(95,15,23,1) 100%);
  h3 {
    color: #ffffff;
  }
  .form-box {
    height: 45px !important;
    padding: 0 !important;
    width: 100%;
    display: flex !important;
    justify-content: center !important;

    .input-email {
      background: rgba($color: #f0f0f0, $alpha: 1.0);
      min-height: 100% !important;
      font-size: $body;
      font-family: $title-font;
      border: none;
      margin: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      padding: 1rem !important;
      max-width: 80% !important;

      /* Elemento | http://localhost:3000/ */

        .v-messages__message {
          background: transparent;
          color: $gray-light !important;
          font-size: 1.3rem !important;
        }

        /* En línea #5 | http://localhost:3000/ */

        .v-application .error--text {
          color: $gray-light !important;
          font-weight: 700;
          caret-color: rgba($gray-light, $alpha: 0.60) !important;
        }

        .v-application .error--text {
          /* color: #ff5252 !important; */
          color: $gray-mid !important;
        }
    }
    .btn-input {
      min-height: 100% !important;
      border-top-left-radius: 0rem !important;
      border-bottom-left-radius: 0rem !important;
      border: transparent !important;
      background-color: $ocean !important;
      color: #ffffff;
      text-transform: capitalize !important;
      font-size: $link + 0.1rem;
      padding: 1.2rem 1.5rem !important;
      font-family: $title-font !important;
      margin-left: -.5rem !important;
      &:hover {
        color: $wine;
        font-weight: 700;
        background: #ffffff !important;
    }
    }
  }
}
</style>
<style lang="scss">

/* En línea #13 | http://localhost:3000/ */

.my-slider {
  .v-icon.v-icon {
    /* font-size: 24px; */
    font-size: 45px;
  }
}

/* Elemento | http://localhost:3000/ */

// .my-slider > div:nth-child(3) > i:nth-child(1) {
//   border: 1px solid $gray-light;
//   color: $gray-mid;
//   border-radius: 50%;
//   // background-color: rgba($color: $gray-light, $alpha: 0.45);
// }
.mdi-chevron-left,
.mdi-chevron-right {
  transform-origin: center top 0px;
  border: 1px solid $gray-light;
  color: $gray-light;
  border-radius: 50%;
  background-color: rgba($color: $gray-light, $alpha: 0.25);
}

</style>
