// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Layout from '~/layouts/Default.vue'
import '~/assets/styles.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', Layout),
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Barlow&display=swap'
  }),
  head.script.push({
    src: 'https://kit.fontawesome.com/e007d1f7cc.js',
    body: true
  })
}
