<style>
#list {
  box-shadow: 1px 1px 10px rgba(0,0,0,.5);
}

.topic-item {
  padding: 0.9em 1em;
  border-left: 6px solid transparent;
  border-bottom: 1px solid #B6B6B6;
}

.topic-item.active {
  background: #eee;
}

.topic-item h5 {
  margin-left: 5px;
}

.load-more {
  display: block;
  padding: 10px;
  text-align: center;
}
</style>

<template>
  <div id="list" class="pure-u-1">
    <div class="topic-item pure-g"
         v-repeat="topic in topics"
         v-class="active: selectTopicId === topic.id">
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

    <a href="javascript:;"
       class="load-more"
       v-on="click: loadMore">加载更多</a>
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
  computed: {
    selectTopicId: function() {
      return this.params.topicId
    }
  },
  methods: {
    update: function() {
      var tab = this.params.tab
      if(!tab) return

      this.topics = []
      this.fetchTopics(tab)
    },
    fetchTopics: function(tab) {
      var page = this.params.page

      store.fetchTopics(tab, page)
        .then(function(result) {
          // console.log(result)
          // this.topics = result.data
          this.topics = this.topics.concat(result.data)
          this.params.page ++
        }.bind(this))
    },
    select: function(topicId) {
      this.params.topicId = topicId
    },
    loadMore: function() {
      this.fetchTopics(this.params.tab)
    }
  }
}
</script>