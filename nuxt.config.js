export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Teamwork_app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap',
      },
    ], 
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios', 
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseUrl: 'http://localhost:3001/',
    credentials: false
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/sessions', mehtod: 'post', propertyName: 'data.token'}, 
          user: { url: 'me', method: 'get', propertyName: 'data' }, 
          logout: false
        }, 

        tokenRequired: true, 
        tokenType: 'Bearer'
      }
    }, 
    redirect: {
      login: '/?login=1', 
      logout: '/',
      user: '/profile'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
