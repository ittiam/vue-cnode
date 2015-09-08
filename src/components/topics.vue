<style>

</style>

<template>
  <div id="list" class="pure-u-1">
    <div class="email-item pure-g"
         v-repeat="topic in topics">
      <div class="pure-u-1">
        {{topic.title}}
      </div>
    </div>
  </div>
</template>

<script>
var store = require('../store')

module.exports = {
  props: ['tab'],
  data: function() {
    return {
      topics: []
    }
  },
  compiled: function() {
    this.update()
  },
  methods: {
    update: function() {
      store.fetchTopics()
        .then(function(result) {
          // console.log(result)
          this.topics = result.data
        }.bind(this))
    }
  }
}
</script>