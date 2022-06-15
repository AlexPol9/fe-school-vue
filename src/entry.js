import App from './App.vue'

import Api from '@/api'

import router from '@/router'
import store from '@/store'
import '@/plugins/message'

import vClickOutside from 'v-click-outside'

Vue.use(Api)

Vue.use(vClickOutside)

// Register local assets & components globally
require('@/utils/register-assets')
require('@/utils/register-components')

new Vue({
    el: '.vue-app',
    router: router(),
    store: store(),
    render: h => h(App),
  })