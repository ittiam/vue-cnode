<style>

</style>

<template>
  <div id="nav" class="pure-u" v-class="active: isSlide">
    <a href="#" class="nav-menu-button" v-on="click: isSlide = !isSlide">Menu</a>
    <div class="nav-inner">
      <div class="pure-menu">
        <ul class="pure-menu-list">
          <li class="pure-menu-item" v-repeat="tab in tabs">
            <a href="#" class="pure-menu-link"> {{tab.name}} </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

module.exports = {
  data: function() {
    return {
      tabs: [{
        name: '全部',
        id: 'all'
      },{
        name: '精华',
        id: 'good'
      },{
        name: '分享',
        id: 'share'
      },{
        name: '问答',
        id: 'ask'
      },{
        name: '招聘',
        id: 'job'
      }],
      isSlide: false
    }
  },
  compiled: function() {
    this.update()
  },
  methods: {
    update: function() {
    }
  }
}
</script>