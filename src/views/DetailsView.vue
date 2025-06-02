<template>
    <div class="details-view">
        <h1>商品详细页面</h1>
        <div>params: {{ $route.params }}</div>
        <div>params: {{ $route.params.id }}</div>
        <div>{{ goodsStore.good.price }}</div>
        <div>{{ goodsStore.good.title }}</div>
        
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useGoodsStore } from '@/stores/goods';
const goodsStore = useGoodsStore()
const route = useRoute()
onMounted(() => {
    console.log(route.params.id);
    // fetch
    goodsStore.getById(route.params.id)
    // axois

})
</script>

<style scoped></style>