import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faPhone,faCopyright,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub,faGitAlt,faReact, faVuejs, faNodeJs} from '@fortawesome/free-brands-svg-icons'

library.add(faPhone,faCopyright,faEnvelope)
library.add(faLinkedin, faGithub,faGitAlt,faReact,faVuejs,faNodeJs)

const app = createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)

app.mount('#app')
