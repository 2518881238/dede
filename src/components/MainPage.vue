<template>
  <div class="page">
    <Tabs value="name1">
      <TabPane label="记账" name="name1">
        <div class="carousel">
          <Carousel v-model="value1" autoplay loop>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="../assets/img/money.jpg">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="../assets/img/man.jpg">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="../assets/img/weizhuang.jpg">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="../assets/img/hanfei.jpg">
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        <div class="blank"></div>
        <div class="form">
          <Form ref="formValidate" :model="formValidate" :label-width="60">
            <FormItem label="价钱：" prop="name">
              <Input v-model="formValidate.name" placeholder="请输入您买菜的价格"></Input>
            </FormItem>
            <FormItem label="姓名：" prop="city">
              <Select v-model="formValidate.city" placeholder="请选择你的名字">
                <Option value="beijing">朱宏</Option>
                <Option value="shanghai">金彪</Option>
                <Option value="shenzhen">王浪</Option>
              </Select>
            </FormItem>
            <FormItem label="描述：" prop="desc">
              <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="添加备注"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">提交</Button>
              <Button style="margin-left: 8px">重置</Button>
            </FormItem>
          </Form>
        </div>
        <div class="animation">
          <div class="start">
            <img src="../assets/img/datou.png">
          </div>
        </div>
      </TabPane>
      <TabPane label="账单查询" name="name2">
        <div class="search">
          <div class="search-box">
            <Input search placeholder="提示：目前支持按名字查询账单" />
          </div>
          <br>
            <table width="90%" class="table">
              <caption>
                <h4>菜宝买菜统总计</h4>
              </caption>
              <thead>
              <tr>
                <th>姓名</th>
                <th>付费</th>
                <th>备注</th>
                <th>操作</th>
              </tr>
              </thead>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          <div>
            <Button type="primary" @click="modal1 = true">Display dialog box</Button>
            <Modal
              v-model="modal1"
              title="Common Modal dialog box title"
              @on-ok="ok"
              @on-cancel="cancel">
              <Form ref="formValidate" :model="formValidate" :label-width="60">
                <FormItem label="价钱：" prop="name">
                  <Input v-model="formValidate.name" placeholder="请输入您买菜的价格"></Input>
                </FormItem>
                <FormItem label="姓名：" prop="city">
                  <Select v-model="formValidate.city" placeholder="请选择你的名字">
                    <Option value="beijing">朱宏</Option>
                    <Option value="shanghai">金彪</Option>
                    <Option value="shenzhen">王浪</Option>
                  </Select>
                </FormItem>
                <FormItem label="描述：" prop="desc">
                  <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="添加备注"></Input>
                </FormItem>
              </Form>
            </Modal>
          </div>
        </div>
      </TabPane>
      <TabPane label="修改账单" name="name3">
        <div class="update">
          <span>木得办法，找管理员去</span><br><br>
          <span>这种造型</span>
          <img src="../assets/img/maer.gif">
          <br><br>
          <span>还有这种的</span>
          <img src="../assets/img/gaoxiao.gif">
          <span>小提示：去账单查询里查询出来相应的账单就可以修改了</span>
        </div>
      </TabPane>
      <TabPane label="关于" name="name4">
        一叶可以障目，一叶叶可知秋。
      </TabPane>
    </Tabs>
  </div>
</template>

<script>

  export default {
    name: "mainPage",
    data() {
      return {
        modal1: false,
        value1:0,
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        }
      }
    },
    methods:{
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      }
    }
  }
</script>

<style lang="scss">
  .page {
    .blank{
      width: 100%;
      height: 2rem;
    }
    .ivu-tabs-ink-bar {
      height: 2px;
      box-sizing: border-box;
      background-color: white;
      position: absolute;
      left: 0;
      bottom: 1px;
      z-index: 1;
      transition: transform .3s ease-in-out;
      transform-origin: 0 0;
    }
    .carousel{
      width: 100%;
      height: 20rem;
      img{
        width: 100%;
        height: 20rem;
      }
    }
    .form{
      margin-right: 2rem;
    }
    .animation{
      width: 100%;
      height: 10rem;
      .start{
        width:5rem;
        height:5rem;
        background:green;
        position:relative;
        left: -5rem;
        top: 0rem;
        animation:myfirst 5s linear 2s infinite alternate;
        img{
          width:5rem;
          height:5rem;
        }
      }
      @keyframes myfirst
      {
        0%   {background:red; left:-5rem; top:0rem;}
        10%  {background:yellow; left:5rem; top:0rem;-webkit-transform: rotate(90deg);}
        50%  {background:blue; left:25rem; top:0rem;-webkit-transform: rotate(180deg);}
        90%  {background:green; left:30rem; top:0rem;-webkit-transform: rotate(270deg);}
        100% {background:red; left:45rem; top:0rem;-webkit-transform: rotate(360deg);}
      }
    }
    .search{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .search-box{
        width: 90%;
      }
      table {
        border-collapse: collapse;
        margin: 0 auto;
        text-align: center;
      }
      table td, table th {
        border: 1px solid #cad9ea;
        color: #666;
        height: 30px;
      }

      table thead th {
        background-color: #2d8cf0;
        width: 100px;
      }

      table tr:nth-child(odd) {
        background: #fff;
      }

      table tr:nth-child(even) {
        background: #F5FAFA;
      }
    }
    .update{
      width: 100%;
      height: 50rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 100%;
        height: 20rem;
      }
    }
  }
</style>
