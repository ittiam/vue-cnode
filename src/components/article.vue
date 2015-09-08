<style>

</style>

<template>
  <div id="main" class="pure-u-1" v-show="topic.id">
    <div class="content" v-html="topic.content"></div>
  </div>
</template>

<script>
var store = require('../store')

module.exports = {
  props: ['params'],
  data: function() {
    return {
      topic: {}
    }
  },
  watch: {
    'params.topicId': 'update'
  },
  compiled: function() {
    this.update()
  },
  methods: {
    update: function() {
      var id = this.params.topicId
      if(!id) return

      this.fetchTopic(id)
    },
    fetchTopic: function(id) {
      store.fetchTopicById(id)
        .then(function(result) {
          this.topic = result.data
        }.bind(this))
    }
  }
}
</script>