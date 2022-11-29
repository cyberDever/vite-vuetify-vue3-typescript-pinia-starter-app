import Vue from 'vue'
import Vuetify from 'vuetify'

import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: false,
  },
  themes: {
    light: {
      darknavyblue: '#182C4F',
      navyblue: '#1A3056',
      brandblue: '#5194E4',
      highlightblue: '#F2F7FD',
      linkblue: '#4A90E2',
      lightgrey: '#FAFAFA',
      subheadgrey: '#9B9B9B',
      attachmentgrey: '#F6F6F6',
      placeholdergrey: '#C4C4C4',
      fieldgrey: '#D8D8D8',
      bordergrey: '#E5E5E5',
      fadedwhite: '#919BAE',
      error: '#F17F74',
      warning: '#FCC35B',
      info: '#2196F3',
      success: '#55D19A',
    },
  },
})
