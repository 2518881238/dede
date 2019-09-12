<template>
  <div class="tab-top">
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;<Icon type="logo-twitter" size="30" color="#07A6FF"/>
      欢迎来到菜宝平台APP
    </div>
    <div style="display: flex;flex-direction: row;align-items: center">
      <div @click="register">
        注册
      </div>
      &nbsp;&nbsp;
      <div @click="login" v-show="!this.status">
        登录
      </div>
      <div v-show="this.status">欢迎：{{form.name}}</div>
      &nbsp;&nbsp;
      <div v-show="this.status" @click="logout">退出</div>
      <div>
        <Icon type="md-reorder" size="30"/>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
    <Modal
      v-model="modal1"
      title="欢迎来到菜宝登录界面"
      @on-ok="ok"
      @on-cancel="cancel">
      <Form ref="formValidate" :model="form" :label-width="60">
        <FormItem label="用户名：" prop="name">
          <Input v-model="form.name" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码：" prop="pass">
          <Input v-model="form.pass" placeholder="请输入密码"></Input>
        </FormItem>
      </Form>
      <div style="color: red">警告：没做安全验证，请不要用非法手段（sql注入）来恶意登录</div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "Tabtop",
    data(){
      return {
        modal1:false,
        form:{
          name: "",
          pass: ""
        },
        status: false,
      }
    },
    //页面加载调用获取cookie值
    mounted(){
      this.getCookie()
    },
    methods:{
      register(){
        alert("sorry,no registration function. You can log in using this tourist account if you are a tourist: 北风萧萧/123456");
      },
      login(){
        this.modal1 = true
      },
      logout(){
        this.status = false
      },
      ok(){
          const params = new URLSearchParams();
          params.append('name', this.form.name);
          params.append('pass', this.form.pass);
          this.$axios.create({headers: {'content-type': 'application/x-www-form-urlencoded'}})
            .post('/api/login', params)
            .then(response => (this.status = response.data.params))
            .catch(function (error) {
              alert("登录失败"+error);
            })
        this.setCookie(this.form.name,this.form.pass,7);//设置cookie
      },
      cancel(){
        this.$Message.info("已取消登录")
      },
      //设置cookie
      setCookie(c_name,c_pwd,exdays) {
        var exdate=new Date();//获取时间
        exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
        //字符串拼接cookie
        window.document.cookie="userName"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
        window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
      },
      //读取cookie
      getCookie:function () {
        if (document.cookie.length>0) {
          var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
          for(var i=0;i<arr.length;i++){
            var arr2=arr[i].split('=');//再次切割
            //判断查找相对应的值
            if(arr2[0]=='userName'){
              this.form.name=arr2[1];//保存到保存数据的地方
            }else if(arr2[0]=='userPwd'){
              this.form.pass=arr2[1];
            }
          }
        }
      },
      //清除cookie
      clearCookie:function () {
        this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
      }
    }
  }
</script>

<style scoped>
.tab-top{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #cad9ea;
  z-index: 999;
}
</style>
