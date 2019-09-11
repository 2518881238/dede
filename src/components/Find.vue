<template>
  <div class="find">
    <Divider>卡片</Divider>
    <div style="width:100%;">
      <div class="items" v-for="item in img">
        <div class="icon">
          <img :src="item">
        </div>
        <span>秦时明月</span>
      </div>
    </div>
    <Divider>动态</Divider>
    <div class="find" v-for="i in 6">
      <div class="blank"></div>
      <div class="title">
        <div class="title-img">
          <Avatar icon="ios-person" size="large"/>
        </div>
        <div class="title-right">
          <span style="font-size: 1.8rem">天行九歌</span><br>
          <span style="color: #999999">朱宏 2019-9-5</span>
        </div>
      </div>
      <div class="top">
        <div class="top-img">
          <img src="../assets/img/main.jpg">
        </div>
        六十年前，
        一对鬼谷弟子脱颖而出，张仪行连横玩弄诸侯，席卷巴蜀汉中；苏秦则以合纵把握天下，
        六国封相、慑服强秦...一怒而诸侯惧，安居则天下息。每一次鬼谷弟子在世间现身，都必掀起惊涛骇浪！
        在一潭死水中制造波澜，然后在乱局中纵横捭阖，不就是鬼谷一派的精义吗？
      </div>
    </div>
    <div class="foo-blank"></div>
  </div>
</template>

<script>
  export default {
    name: "Find",
    data() {
      return {
        img: [require("../assets/img/icon.png"),
          require("../assets/img/icon1.png"),
          require("../assets/img/icon2.png"),
          require("../assets/img/icon3.jpg"),
          require("../assets/img/icon4.jpg"),
          require("../assets/img/icon5.jpg"),
          require("../assets/img/icon6.jpg")
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .find {
    display: flex;
    flex-direction: column;
    align-items: center;

    .items {
      float: left;
      width: 5rem;
      margin-left: 3.3rem;

      icon {
        width: 5rem;
        height: 5rem;
      }

      img {
        width: 5rem;
        height: 5rem;
      }

      span {
        font-size: 0.8rem;
        margin-left: 0.6rem;
      }
    }

    .foo-blank {
      width: 100%;
      height: 8rem;
    }

    .blank {
      width: 100%;
      height: 0.5rem;
    }

    .title {
      width: 90%;
      min-height: 1rem;

      .title-img {
        float: left;
      }

      .title-right {
        margin-left: 1rem;
        float: left;
      }
    }

    .top {
      margin-top: 1rem;
      width: 90%;
      min-height: 10rem;
      text-align: justify;

      .top-img {
        width: 20%;
        height: 10rem;
        float: left;
        margin-right: 1rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
