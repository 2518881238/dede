<template>
  <div class="tab-top">
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;<Icon type="logo-twitter" size="30" color="#07A6FF"/>
      欢迎来到菜宝平台APP
    </div>
    <div>
      <Icon type="md-reorder" size="30"/>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabtop"
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
