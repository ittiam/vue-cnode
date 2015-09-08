<style>

</style>

<template>
  <div id="list" class="pure-u-1">
    <div class="email-item pure-g"
         v-repeat="topic in topics">
      <div class="pure-u-1"
           v-on="click: select(topic.id)">
        {{topic.title}}
      </div>
    </div>
  </div>
</template>

<script>
var store = require('../store')

module.exports = {
  props: ['params'],
  data: function() {
    return {
      topics: []
    }
  },
  watch: {
    'params.tab': 'update'
  },
  compiled: function() {
    this.update()
  },
  methods: {
    update: function() {
      var tab = this.params.tab

      this.fetchTopics(tab)
      this.params.topicId = ''
    },
    fetchTopics: function(tab) {
      store.fetchTopics(tab)
        .then(function(result) {
          // console.log(result)
          this.topics = result.data
        }.bind(this))
    },
    select: function(topicId) {
      this.params.topicId = topicId
    }
  }
}
</script>