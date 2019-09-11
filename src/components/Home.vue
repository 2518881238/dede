<template>
  <div class="home">
    <Tabtop></Tabtop>
    <Tabbar></Tabbar>
    <div class="home-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import Tabbar from "./Tabbar";
  import Tabtop from "./Tabtop";

  export default {
    name: "home",
    components: {Tabtop, Tabbar}
  }
</script>

<style lang="scss" scoped>
  .home {
    min-height: 50rem;
    .home-content {
      margin-top: 4rem;
      width: 100%;
      background-color: #F5FAFA;
    }
  }
</style>
