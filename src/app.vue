<template>
  <div>
    <menu></menu>
    <topics tab="{{tab}}"></topics>
    <article></article>
  </div>
</template>

<script>
module.exports = {
  el: '#cnode',
  data: {
    tab: ''
  },
  components: {
    article: require('./components/article.vue'),
    menu: require('./components/menu.vue'),
    topics: require('./components/topics.vue')
  }
}
</script>

<style>

</style>
