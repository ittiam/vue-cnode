/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-09-08 14:10:45
 * @version $Id$
 */
var store = {}

store.fetchTopics = function(tab, page) {
  return fetch('https://cnodejs.org/api/v1/topics?tab=' + tab + '&page=' + page)
  .then(function(response) {
    return response.json()
  })
}

store.fetchTopicById = function(id) {
  return fetch('https://cnodejs.org/api/v1/topic/' + id)
    .then(function(response) {
      return response.json()
    })
}

module.exports = store