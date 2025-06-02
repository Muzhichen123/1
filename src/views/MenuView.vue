<template>
    <div class="menu-view">
    
        <h1>菜单界面</h1>
        <div>title:{{ $route.meta.title }}</div>
        <div class="nav">
            <!-- path --> 
        
            <RouterLink to="/menu/product">经典菜单</RouterLink>
            <RouterLink to="/menu/card">我的会员卡</RouterLink>
            <RouterLink to="/menu/rank">年度封神榜</RouterLink>
            <RouterLink to="/menu/love">我的常点</RouterLink>

         
        </div>
      
        <RouterView></RouterView>
       
    </div>
</template>

<script setup>
import Goods from '@/components/Goods.vue';
import Swiper from '@/components/Swiper.vue';
</script>
<style scoped>
:root {
    --main-color: #0022aa;
    --p-m-g: 15px;
}

.nav {
    display: flex;
    justify-content: space-between;
    padding: var(--p-m-g);
    border-bottom: 1px solid #eee;
}

.nav a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    padding: 5px 0;
    position: relative;
}

.nav a.router-link-exact-active {
    color: var(--main-color);
}

.nav a.router-link-exact-active::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--main-color);
}
</style>