import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Teo Academy',
    title: 'teoacademy',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Somos una plataforma digital de teología cristiana con el propósito de poner al alcance del usuario clases de formación bíblica de alta calidad' },
      { hid: 'keywords', name: 'keywords', content: 'Teología, Teológica, Formación, Enseñanza, Estudio, Curso, Cursos, Biblia, Iglesia, Evangelico , Protestante, Reforma, Reformada, Versículo, Versículos, Evangelio, Testamento, Antiguo testamento, Nuevo testamento, Interpretación, Bíblico, Concilio, Historia, Jesús, Jesucristo, Apóstoles, Apóstol, Epístola , Epístolas , Teología, Teología Sistemática, Enseñanza cristiana, Escuela Dominical, Liderazgo Cristiano, Consejería Bíblica, Teología Bíblica, Liderazgo Ministerial, Consejería Familiar, Teología Pastoral, Liderazgo Familiar, Eclesiología, Hermenéutica, Homilética, Enseñanza , Enseñanza Bíblica, Evangelismo, Historia del Cristianismo, Exégesis , Liderazgo Ministerial, Liderazgo y Familia, Consejería para Matrimonios, Consejería para Padres, Consejería para Jóvenes, Ministerio Infantil, Ministerio Juvenil, Ministerio Matrimonial, Ministerio Familiar, Ministerio Alabanza, Ministerio Social, Discípulo , Discipulado , Sociedad y Cultura, Administración de Recursos Eclesiásticos , Arqueología Bíblica, Misionología, Ceremonias , Escatología , Apologetica , Evangelismo , Exégesis, Principios de la Exégesis , Exégesis del Libro a los Romanos, Exégesis de los Libros a los Corintios, Métodos de Investigación, Estudio de los Evangelios , Estudio de los Hechos, Estudio de las Epístolas , Gramatica, Redacción, Cristología , Pneumatología , Angelología , Antropología, Hamartiología, Soteriología, Demonología , Alabanza, Adoración, Sectas y Religiones , Literatura, Literatura Extracanonica , Literatura Poética, Literatura Sapiensal , Apologética , Hebreo , Griego' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;900&display=swap' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@100;300;400;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css' }
    ]
  },
  env: {
    api: process.env.SEGO_API_PUBLIC
  },
  layoutTransition: {
    name: 'scroll-y-reverse-transition',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'slide-x-transition',
    mode: 'out-in'
  },
  router: {
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'scss',
    // '@/assets/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/animateOnScroll.client.js',
    '~/plugins/animationEntering.client.js',
    '~/plugins/vueHorizontal.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    '@nuxt/content',
    '@nuxtjs/recaptcha'
  ],

  recaptcha: {
    language: 'es',
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 2
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // treeShake: true,
    theme: {
      light: false,
      dark: false,
      breakpoint: {
        scrollBarWidth: 8,
        thresholds: {
          xs: 340,
          sm: 600,
          md: 960,
          lg: 1264,
          xl: 1440
        }
      },
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Babel config
    // analyze: true,
    // extend (config, ctx) {},
    // babel: {
    //   presets: [
    //     [
    //       '@babel/preset-env',
    //       {
    //         useBuiltIns: 'entry',
    //         corejs: 3
    //       }
    //     ]
    //   ],
    //   plugins: ['@babel/transform-runtime']
    // }
    /*
      You can extend webpack config here
    */
  //   extend (config, ctx) {
  //     // Run ESLint on save
  //     if (ctx.isDev && ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue|ts)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
  }
}
