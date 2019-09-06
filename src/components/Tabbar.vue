<template>
  <div class="tab-bar">
    <ul>
    <li @click="addActive(index1,'/mainPage')">
      <Icon type="ios-home-outline" size="32"/>
      <span>首页</span>
    </li>
    <li @click="addActive(2,'/find')">
      <Badge dot>
        <Icon type="ios-leaf-outline" size="32"/>
      </Badge>
      <span>发现</span>
    </li>
    <li @click="addActive(3,'/info')">
      <Badge :count="3">
        <Icon type="ios-paper-plane-outline" size="32"/>
      </Badge>
      <span>消息</span>
    </li>
    <li @click="addActive(4,'/me')">
      <Icon type="md-contact" size="32"/>
      <span>我</span>
    </li>
  </ul>
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
    data() {
      return {
        index1:1,
        index2:2,
        index3:3,
        index4:4,
        link: ['/mainPage', '/find', '/info', '/me'],
        isActive: this.$store.state.tabIndex
      }
    },
    mounted() {
      if (this.isActive != 0) {
        this.$router.push(this.link[this.isActive-1]);
      }
    },
    methods: {
      addActive: function (index,links) {
        this.isActive = index;
        this.$router.push(links);
        this.$store.commit("changeTab", index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-bar {
    height: 8rem;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    box-shadow: -0.1rem -0.1rem 0.3rem #dadada;
    font-size: 1.5rem;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      list-style: none;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          font-size: 1.2rem;
        }
        }
        li:hover{
          color: #2d8cf0;
        }
      }
    }
</style>
