<style>
.content {
  padding: 10px;
}

.content img {
  max-width: 100%;
}

.markdown-text p,.preview p {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  line-height: 2em;
  margin: 1em 0
}

.markdown-text>:first-child,.preview>:first-child {
  margin-top: 0
}

.markdown-text>:last-child,.preview>:last-child {
  margin-bottom: 1em
}

.markdown-text li,.preview li {
  font-size: 14px;
  line-height: 2em
}

.markdown-text li code,.markdown-text p code,.preview li code,.preview p code {
  color: #000;
  background-color: #fcfafa;
  padding: 4px 6px
}

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
      this.topic = {}

      store.fetchTopicById(id)
        .then(function(result) {
          this.topic = result.data
        }.bind(this))
    }
  }
}
</script>