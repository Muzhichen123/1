<template>
    <div class="product-item">
        <!-- <img src="https://glpla.github.io/utils/coffee/coffee0.jpg" alt=""> -->
        <img class="img" :src="`https://glpla.github.io/utils${item.img}`" alt="">
        <div class="info">{{ item.title }}</div>
        <button @click="toDetails(item.id)">Details</button>
        <!-- <RouterLink>aasdf</RouterLink> -->
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
    item: {
        type: Object,
        default: {}
    }
})
const toDetails = (id) => {
    console.log('hi');
    router.push({ name: 'details', params: { id: id } })
}
</script>

<style scoped>
.product-item{
    display: flex;
    align-items: center;
    gap: 10px;
}
.img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>