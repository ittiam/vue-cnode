<style>
#list {
  box-shadow: 2px 1px 10px rgba(0,0,0,.8);
}

.topic-item {
  padding: 0.9em 1em;
  border-left: 6px solid transparent;
}
</style>

<template>
  <div id="list" class="pure-u-1">
    <div class="topic-item pure-g"
         v-repeat="topic in topics">
      <div class="pure-u-1"
           v-on="click: select(topic.id)">
        <div class="pure-g">
          <div class="pure-u">
            <img src="{{topic.author.avatar_url}}" alt="{{topic.author.loginname}}" width="64" height="64">
          </div>
          <div class="pure-u-3-4">
            <h5>{{topic.title}}</h5>
          </div>
        </div>
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