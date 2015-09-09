require('./styles/layout.css')
require('./styles/app.css')

var App = new Vue(require('./app.vue'))

function route () {
  App.params.tab = window.location.hash.slice(1) || 'all'
}

window.addEventListener('hashchange', route)
window.addEventListener('load', route)