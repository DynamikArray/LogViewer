import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        background: '#d9dbdf',
        surface: '#ffffff',
        primary: '#072969',
        secondary: '#5162b4',
        accent: '#212523',
        error: '#eb1a05',
        info: '#1f98be',
      },
    },
  },
  typography: {
    bodyFontFamily: ['Oswald', 'sans-serif'],
    headingFontFamily: ['Oswald', 'sans-serif'],
  },
})
