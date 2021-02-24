import config from './utils/project-config'
import { CST_BACKEND_URL } from './utils/consts';

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  env: {
    example: 'ex1'
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'USA CHECK SHOP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      // see [200827125000]
      // class: 'has-navbar-fixed-top'
    }
  },
  /*
  ** Global CSS
  */
  css: [
    "~assets/scss/main.scss",
    {
      // src: 'ant-design-vue/dist/antd.less',
      src: '~assets/less/ant-my-main.less',
      lang: 'less'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/vee-validate.js' },
    { src: '~/plugins/vue-tooltips' },
    { src: '~/plugins/vue-notification', ssr: false },
    { src: '~/plugins/antd-ui' },
    { src: '~/plugins/vue-loading-overlay' },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-buefy',
    'nuxt-fontawesome',
    '@nuxtjs/apollo',
    '@nuxtjs/dayjs'
  ],
  // see https://github.com/nuxt-community/apollo-module
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${CST_BACKEND_URL}/graphql`,
      }
    },
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
    },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    // for 'vee-validate'
    transpile: [
      "vee-validate/dist/rules"
    ],
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  // see https://fontawesome.com/icons?d=gallery
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: [
          'faCookieBite',
          'faCommentDots',
          'faEnvelope',
          'faGrinWink',
          'faHeart',
          'faArrowDown'
        ]
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: [
          'faVk',
          'faTelegram',
          'faTelegramPlane',
          'faFacebook',
          'faTwitter',
          'faViber',
          'faInstagram',
          'faYoutube',
          'faGithub'
        ]
      },
    ]
  },
}
