<script setup>
const navs=[
  {id:'100',icon:'icon-fl-jia',label:'首页',path:'/'},
  {id:'101',icon:'icon-aihao',label:'菜单',path:'/menu'},
  {id:'102',icon:'icon-weizhi',label:'电商',path:'/mall'},
  {id:'103',icon:'icon-jibenxinxi',label:'会员',path:'/memeber'},
  {id:'104',icon:'icon-xingming',label:'我的',path:'/mine'},
  ]
</script>

<template>

  <nav class="main-nav">


    <RouterLink class="nav-item"  v-for="nav in navs" :to="nav.path">
      <span class="iconfont" :class="nav.icon"></span>
      <span>{{nav.label}}</span>
    </RouterLink>  
  </nav>

  <RouterView />
</template>

<style scoped>
.main-nav{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: var(--main-nav-h);
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px var(--p-m-g);
}
.nav-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
