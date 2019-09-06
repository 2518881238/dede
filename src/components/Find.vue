<template>
<div class="find">
  <Divider>卡片</Divider>
<div style="width:100%;">
  <div class="items" v-for="n in 4">
    <div class="icon"><Icon type="ios-folder-outline" size="64"/></div>
    <span>文件</span>
  </div>
</div>
  <Divider>动态</Divider>
  <div class="find" v-for="i in 4">
    <div class="blank"></div>
    <div class="title">
      <div class="title-img"><Avatar icon="ios-person" size="large" /></div>
      <div class="title-right">
        <h3>天使的笑容</h3>
        <h4>朱宏 2019-9-5</h4>
      </div>
    </div>
    <div class="top">
      <div class="top-img">
        <img src="../assets/img/main.jpg">
      </div>
      如果笑容有颜色，他的笑容应该是橘黄色的，那是太阳的颜色，那笑容会让你觉得温暖。

      如果笑容有颜色，他的笑容应该是蓝色的，那是大海的颜色，那笑容会让你觉得舒服。

      如果笑容有颜色，他的笑容应该是绿色的，那是春天的颜色，那笑容会让你觉得清爽。

      如果笑容有颜色，他的笑容应该是红色的，那是火焰的颜色，那笑容会让你感觉到热情。

      如果笑容有颜色，他的笑容应该是紫色的，那是神秘的颜色，那笑容会让你想要一探究竟。
    </div>
    <div>
      <div class="card">
        <div class="title"></div>
        <div class="content"></div>
        <div class="foo">
        </div>
      </div>
    </div>
  </div>
  <div class="foo-blank"></div>
</div>
</template>

<script>
  export default {
    name: "Find"
  }
</script>

<style lang="scss" scoped>
.find{
  display: flex;
  flex-direction: column;
  align-items: center;
    .items{
      float: left;
      width: 5rem;
      margin-left: 3rem;
      color: #2d8cf0;
      icon{
        width: 10rem;
        height: 10rem;
      }
      span{
        font-size: 1.5rem;
        margin-left: 2rem;
      }
    }

  .foo-blank{
    width: 100%;
    height: 10rem;
  }
  .blank{
    width: 100%;
    height: 2rem;
  }
  .title{
    width: 90%;
    min-height: 2rem;
    .title-img{
      float: left;
    }
    .title-right{
      margin-left: 1rem;
      float: left;
    }
  }
  .top{
    margin-top: 1rem;
    width: 90%;
    min-height: 25rem;
    text-align: justify;
    .top-img{
      width: 50%;
      height: 25rem;
      float: left;
      margin-right: 2rem;
      img{
        width:100%;
        height: 100%;
      }
    }
  }
}
</style>
