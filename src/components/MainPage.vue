<template>
  <div class="page">
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" tag="div">
      <Tabs v-model="tabPath" @on-click="turnItem">
        <TabPane label="记账" name="name1">
          <div class="carousel">
            <Carousel v-model="value1" autoplay loop>
              <div v-for="item in imgList">
                <CarouselItem>
                  <div class="demo-carousel">
                    <img :src="item">
                  </div>
                </CarouselItem>
              </div>
            </Carousel>
          </div>
          <div style="font-size:0.2rem !important;">&nbsp;&nbsp;&nbsp;小提示：标识关闭的区域是和菜宝不相关功能模块</div>
          <div class="form">
            <Form ref="formValidate" :model="formValidate" :label-width="60">
              <FormItem label="价钱：" prop="name">
                <Input v-model="formValidate.price" placeholder="请输入您买菜的价格"></Input>
              </FormItem>
              <FormItem label="姓名：" prop="city">
                <Select v-model="formValidate.name" placeholder="请选择你的名字">
                  <Option value="朱宏">朱宏</Option>
                  <Option value="金彪">金彪</Option>
                  <Option value="王浪">王浪</Option>
                </Select>
              </FormItem>
              <FormItem label="描述：" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="添加备注"></Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="submitForm">提交</Button>
                <Button style="margin-left: 8px" @click="clearForm">重置</Button>
              </FormItem>
            </Form>
          </div>
          <div class="animation">
            <div class="start">
              <img src="../assets/img/datou.png">
            </div>
          </div>
          <div style="display: flex; flex-direction: column;align-items: center">
            <Card>本项目采用springBoot+vue实现的前后端分离，搭建了两个项目，github地址：<br>
            springBoot：https://github.com/2518881238/demo3.git<br>
              vue：https://github.com/2518881238/dede.git<br>
              数据库是mysql，建好数据库就行，表会通过spring data JPA自动生成。
              配置基本都配置好了，感兴趣的可以一起开发。<br>
            </Card>
          </div>
        </TabPane>
        <TabPane label="账单查/改" name="name2">
          <div class="search">
            <div class="search-box">
              <Input v-model="searchItem" search placeholder="提示：目前支持按名字查询账单" @on-search="searchByName"/>
            </div>
            <br>
            <table width="90%" class="table">
              <caption>
                个人总消费：朱宏：{{this.infoInstall.zhu}}&nbsp;金彪：{{this.infoInstall.jin}} &nbsp;王浪：{{this.infoInstall.wang}}
              </caption>
              <caption>
                多退少补：朱宏：{{this.infoInstall.zhu1}}&nbsp;金彪：{{this.infoInstall.jin1}} &nbsp;王浪：{{this.infoInstall.wang1}}
              </caption>
              <caption>
                <span>菜宝买菜统总计</span>
              </caption>
              <thead>
              <tr>
                <th>姓名</th>
                <th>付费</th>
                <th>备注</th>
                <th>时间</th>
                <th>操作</th>
              </tr>
              </thead>
              <tr v-for="item in this.infoList">
                <td>{{item.user_name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.re_mark}}</td>
                <td>{{item.date}}</td>
                <td><a href="#" type="primary" @click="modal1 = true">修改</a></td>
              </tr>
            </table>
            <br>
            <div style="width:100%; display: flex; justify-content: center">
              <Page :total="100" size="small"/>
            </div>
            <br>
            <div>
              <Modal
                v-model="modal1"
                title="非自己的账单不能修改"
                @on-ok="ok"
                @on-cancel="cancel">
                这个功能关闭了，找管理员去
<!--                                <Form ref="formValidate" :model="formValidate" :label-width="60">-->
<!--                                  <FormItem label="价钱：" prop="price">-->
<!--                                    <Input v-model="formValidate.price" placeholder="请输入您买菜的价格"></Input>-->
<!--                                  </FormItem>-->
<!--                                  <FormItem label="姓名：" prop="name">-->
<!--                                    <Select v-model="formValidate.name" placeholder="请选择你的名字">-->
<!--                                      <Option value="朱宏">朱宏</Option>-->
<!--                                      <Option value="金彪">金彪</Option>-->
<!--                                      <Option value="王浪">王浪</Option>-->
<!--                                    </Select>-->
<!--                                  </FormItem>-->
<!--                                  <FormItem label="描述：" prop="desc">-->
<!--                                    <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="添加备注"></Input>-->
<!--                                  </FormItem>-->
<!--                                </Form>-->
              </Modal>
            </div>
          </div>
        </TabPane>
        <TabPane label="关闭" name="name3">
          <div class="update">
            <span>
              <Card style="width: 90%;background-color: white;margin: 0 auto">
              周有幽王戏诸侯，只为博君一笑。三国枭雄曹阿瞒，赤壁三笑。唐有一骑红尘妃子笑，无人知是荔枝来。接着有李白仰天长笑，回眸一笑，禅师哈哈大笑，孔子莞尔一笑。
              </Card>
            </span>
            <span>这种造型</span>
            <img src="../assets/img/maer.gif">
            <span>还有这种的</span>
            <img src="../assets/img/gaoxiao.gif">
          </div>
        </TabPane>
        <TabPane label="关闭" name="name4">
          <Card style="width: 90%;background-color: white;margin: 0 auto">一叶可以障目，一叶亦可知秋。</Card>
          <br>
          <Card style="width: 90%;background-color: white;margin: 0 auto">
            提示：这个东西是没有注册功能的，这几个账号：<br>
            雪花飘飘/123<br>北风萧萧/456<br>一剪寒梅/789
            <br>也是不可以登录的，另外，每月算账可以实现新增数据来实现平衡，多退少补哪里都为0就可以了。这样既可以记录全部数据，又可以实现随时可以结账。
          </Card>
          <br>
          <Card style="width: 90%;background-color: white;margin: 0 auto">
            这个东西呢是为了方便记录各位买菜的账单，可以长时间用，方便记录所有的日常消费
          </Card>
          <br>
          <Card style="width: 90%;background-color: white;margin: 0 auto">
            匆匆<br>

            作者: 朱自清<br>

            燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？——是有人偷了他们罢：那是谁？又藏在何处呢？是他们自己逃走了罢：现在又到了哪里呢？<br>
            我不知道他们给了我多少日子；但我的手确乎是渐渐空虚了。在默默里算着，八千多日子已经从我手中溜去；像针尖上一滴水滴在大海里，我的日子滴在时间的流里，没有声音，也没有影子。我不禁头涔涔而泪潸潸了。<br>
            去的尽管去了，来的尽管来着；去来的中间，又怎样地匆匆呢？早上我起来的时候，小屋里射进两三方斜斜的太阳。太阳他有脚啊，轻轻悄悄地挪移了；我也茫茫然跟着旋转。于是——洗手的时候，日子从水盆里过去；吃饭的时候，日子从饭碗里过去；默默时，便从凝然的双眼前过去。我觉察他去的匆匆了，伸出手遮挽时，他又从遮挽着的手边过去，天黑时，我躺在床上，他便伶伶俐俐地从我身上跨过，从我脚边飞去了。等我睁开眼和太阳再见，这算又溜走了一日。我掩着面叹息。但是新来的日子的影儿又开始在叹息里闪过了。<br>
            在逃去如飞的日子里，在千门万户的世界里的我能做些什么呢？只有徘徊罢了，只有匆匆罢了；在八千多日的匆匆里，除徘徊外，又剩些什么呢？过去的日子如轻烟，被微风吹散了，如薄雾，被初阳蒸融了；我留着些什么痕迹呢？我何曾留着像游丝样的痕迹呢？我赤裸裸来到这世界，转眼间也将赤裸裸的回去罢？但不能平的，为什么偏要白白走这一遭啊？<br>
            你聪明的，告诉我，我们的日子为什么一去不复返呢？
          </Card>
          <div style="height: 8rem"></div>
        </TabPane>
      </Tabs>
    </v-touch>
  </div>
</template>

<script>
  export default {
    name: "mainPage",
    data() {
      return {
        imgList: [require('../assets/img/baifeng.jpg'),
          require('../assets/img/man.jpg'),
          require('../assets/img/hanfei.jpg'),
          require('../assets/img/hanfei1.jpg'),
          require('../assets/img/tianming.png'),
          require('../assets/img/baifeng.jpg'),
          require('../assets/img/hanfei2.jpg'),
          require('../assets/img/weizhuang1.jpg'),
          require('../assets/img/yingzheng.jpg'),
          require('../assets/img/honglian.jpg'),
          require('../assets/img/tianming.png')],
        modal1: false,
        searchItem: '',
        infoList: [{
          user_name: "",
          price: "",
          re_mark:"什么也没有...",
          date: ""
        }],
        infoInstall: {
          zhu: 0,
          zhu1: 0,
          jin: 0,
          jin1: 0,
          wang: 0,
          wang1: 0
        },
        value1: 0,
        tabPath: "name1",
        formValidate: {
          price: '',
          name: '',
          desc: ''
        },
        addMsg: {msg:"新增成功"}
      }
    },
    created: function () {
      this.tabPath = 'name1';
    },
    mounted: function () {
      this.searchAll();
      this.searchFir();
    },
    methods: {
      ok() {
        this.$Message.info('已确认');
      },
      cancel() {
        this.$Message.info('已取消');
      },
      submitForm() {

        const numReg = /^[-+]?[0-9]*\.?[0-9]+$/;
        const numRe = new RegExp(numReg);

        if ('' == this.formValidate.price || null == this.formValidate.price || '' == this.formValidate.name || null == this.formValidate.name) {
          alert("关键字段不能为空");
        } else if (!numRe.test(this.formValidate.price)) {
          alert("价格需要是数字");
        } else {
          const params = new URLSearchParams();
          params.append('name', this.formValidate.name);
          params.append('price', this.formValidate.price);
          params.append('desc', this.formValidate.desc);
          this.$axios.create({headers: {'content-type': 'application/x-www-form-urlencoded'}})
            .post('/api/add', params)
            .then(response =>(this.addMsg = response.data,alert(this.addMsg.msg)))
            .catch(function (error) {
              alert("新增失败"+error);
            })
          this.formValidate.price = '';
          this.formValidate.name = '';
          this.formValidate.desc = '';
        }
      },
      clearForm() {
        this.formValidate.price = '';
        this.formValidate.name = '';
        this.formValidate.desc = '';
      },
      onSwipeRight() {
        if (null == this.tabPath) {
          this.tabPath = "name1";
        } else if ("name1" == this.tabPath) {
          this.tabPath = this.tabPath;
        } else {
          this.tabPath = this.tabPath.substr(0, 4) + (parseInt(this.tabPath.substr(4, 5)) - 1)
        }
      },
      onSwipeLeft() {
        if (null == this.tabPath) {
          this.tabPath = "name1";
        } else if ("name4" == this.tabPath) {
          this.tabPath = this.tabPath;
        } else {
          this.tabPath = this.tabPath.substr(0, 4) + (parseInt(this.tabPath.substr(4, 5)) + 1)
        }
      },
      turnItem(name) {
        this.tabPath = name;
      },
      searchAll() {
        this.$axios.create({headers: {'content-type': 'application/x-www-form-urlencoded'}})
          .post('/api/zh')
          .then(response => (this.infoList = response.data.params))
          .catch(function (error) {
            alert("数据加载失败"+error);
          })
      },
      searchFir() {
        this.$axios.create({headers: {'content-type': 'application/x-www-form-urlencoded'}})
          .post('/api/zh1')
          .then(response => (this.infoInstall = response.data))
          .catch(function (error) {
            alert("数据统计失败"+error);
          })
      },
      searchByName() {
        const params1 = new URLSearchParams();
        params1.append('name', this.searchItem);
        this.$axios.create({headers: {'content-type': 'application/x-www-form-urlencoded'}})
          .post('/api/searchByName', params1)
          .then(response => (this.infoList = response.data.params))
          .catch(function (error) {
            alert("查询失败"+error);
          })
      }
    }
  }
</script>

<style lang="scss">
  .ivu-tabs-bar {
    border-bottom: 0rem solid #F5FAFA;
    margin-bottom: 0.5rem;
  }

  .page {
    .ivu-tabs-ink-bar {
      height: 0px;
      box-sizing: border-box;
      background-color: #F5FAFA;
      position: absolute;
      left: 0;
      bottom: 1px;
      z-index: 1;
      transition: transform .3s ease-in-out;
      transform-origin: 0 0;
    }

    .carousel {
      width: 100%;
      height: 20rem;

      img {
        width: 100%;
        height: 18rem;
      }
    }

    .form {
      margin-right: 2rem;
    }

    .animation {
      width: 100%;
      height: 10rem;

      .start {
        width: 4rem;
        height: 4rem;
        background: green;
        position: relative;
        left: -5rem;
        top: 0rem;
        animation: myfirst 5s linear 2s infinite alternate;

        img {
          width: 4rem;
          height: 4rem;
          -webkit-border-radius: 50%;
        }
      }

      @keyframes myfirst {
        0% {
          left: -5rem;
          top: 0rem;
        }
        10% {
          left: 5rem;
          top: 0rem;
          -webkit-transform: rotate(90deg);
        }
        50% {
          left: 25rem;
          top: 0rem;
          -webkit-transform: rotate(180deg);
        }
        90% {
          left: 30rem;
          top: 0rem;
          -webkit-transform: rotate(270deg);
        }
        100% {
          left: 45rem;
          top: 0rem;
          -webkit-transform: rotate(360deg);
        }
      }
    }

    .search {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .search-box {
        width: 90%;
      }

      table {
        border-collapse: collapse;
        margin: 0 auto;
        text-align: center;
        border-style: none;
      }

      table td, table th {
        border: none;
        color: #666;
        height: 30px;
      }

      table thead th {
        background-color: rgba(10, 151, 255, 0.75);
        width: 100px;
      }

      table tr:nth-child(odd) {
        background: rgba(227, 246, 255, 0.75);
      }

      table tr:nth-child(even) {
        background: rgba(248, 255, 224, 0.75);
      }
    }

    .update {
      width: 100%;
      height: 50rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 90%;
        height: 20rem;
      }
    }
  }
</style>
