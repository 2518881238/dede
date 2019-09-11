<template>
  <div class="personal">
    <div class="personal-logo">
      <div class="logo">
        <span class="logo_img"><img src="../assets/img/logo.jpg" alt=""></span>
        <span>登录</span>
      </div>
    </div>
    <div class="personal-main">
      <div class="personal-main_menu">
        <ul>
          <li><i class="fa fa-thumbs-o-up"></i><span>图标查看</span></li>
          <li><i class="fa fa-heart-o"></i><span>我的预算</span></li>
          <li><i class="fa fa-folder-open-o"></i><span>我的日记</span></li>
        </ul>
      </div>
      <div class="personal-main_list">
        <ul>
          <li><i class="fa fa-bell-o"></i><span>账单查询</span><i class="fa fa-angle-right">
            <Icon type="ios-arrow-forward"/>
          </i></li>
          <li><i class="fa fa-bullhorn"></i><span>我的账单</span><i class="fa fa-angle-right">
            <Icon type="ios-arrow-forward"/>
          </i></li>
          <li><i class="fa fa-meh-o"></i><span>本月支出</span><i class="fa fa-angle-right">
            <Icon type="ios-arrow-forward"/>
          </i></li>
          <li><i class="fa fa-bell-o"></i><span>全部支出</span><i class="fa fa-angle-right">
            <Icon type="ios-arrow-forward"/>
          </i></li>
          <li><i class="fa fa-bullhorn"></i><span>个人中心</span><i class="fa fa-angle-right">
            <Icon type="ios-arrow-forward"/>
          </i></li>
          <li><i class="fa fa-meh-o"></i><span>关于</span><i class="fa fa-angle-right">
            <Icon type="ios-arrow-forward"/>
          </i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Me"
  }
</script>

<style lang="scss">
  .personal {
    background: #eee;
    overflow: auto;
    height: 100%;

    .personal-logo {
      min-height: 25rem;
      background: #F5FAFA;

      .logo {
        width: 8rem;
        height: 8rem;
        margin: 0 auto;
        position: relative;
        text-align: center;
        top: 5rem;
      }

      .logo_img {
        display: inline-block;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

      }
    }

    .personal-main {
      position: relative;
      color: #111;

      .personal-main_menu {
        width: 90%;
        margin-left: 5%;
        background: #fff;
        overflow: hidden;
        padding: 1rem;
        box-shadow: 0.1rem 0.1rem 0.1rem #ddd;
        position: relative;
        top: -10rem;

        ul {
          list-style: none;
        }

        li {
          float: left;
          width: 33.33%;
          text-align: center;
        }

        i {
          display: block;
        }

      }

      .personal-main_list {
        padding: 0 1rem;
        background: #fff;
        margin-top: -7rem;
        ul{
          list-style: none;
          li {
            line-height: 4rem;
            width: 90%;
            margin: 0 auto;
            border-bottom: 0.01rem solid #ddd;

            i {
              margin-right: 0rem;
            }
        }
          .fa-angle-right {
            float: right;
            line-height: 4rem;
          }

        }
      }
    }
  }
</style>
