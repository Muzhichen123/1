<template>
    <div class="product">
        <!-- item -->
        <ProductItem v-for="item in goodsStore.goods" :key="item.id" :item="item"></ProductItem>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductItem from './ProductItem.vue';
import { useGoodsStore } from '@/stores/goods';
const goodsStore = useGoodsStore()
console.log(goodsStore);

onMounted(() => {
   goodsStore.getAll()
    // callback/cb
    // console.log('product hi');
    // fetch('https://glpla.github.io/utils/data/coffee.json')
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data);
    //     items.value=data.cont
    // })

})
</script>

<style scoped></style>