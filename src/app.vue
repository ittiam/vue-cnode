<template>
  <div>
    <menu params="{{params}}"></menu>
    <topic-list params="{{params}}"></topic-list>
    <article params="{{params}}"></article>
  </div>
</template>

<script>
module.exports = {
  el: '#cnode',
  data: {
    params: {
      tab: '',
      topicId: ''
    }
  },
  components: {
    'article': require('./components/article.vue'),
    'menu': require('./components/menu.vue'),
    'topic-list': require('./components/topic-list.vue')
  }
}
</script>

<style>

</style>
