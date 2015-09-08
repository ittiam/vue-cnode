<style>

</style>

<template>
  <div id="main" class="pure-u-1">
    <div class="content" v-html="topic.content"></div>
  </div>
</template>

<script>
var store = require('../store')

module.exports = {
  data: function() {
    return {
      topic: {}
    }
  },
  compiled: function() {
    this.update()
  },
  methods: {
    update: function() {
      store.fetchTopicById('5433d5e4e737cbe96dcef312')
        .then(function(result) {
          this.topic = result.data
        }.bind(this))
    }
  }
}
</script>