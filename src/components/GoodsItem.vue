<template>
    <div class="goods-item">
        <div class="img">
            <!-- <img :src="src" alt=""> -->
            <img :src="`https://glpla.github.io/utils${item.img}`" alt="">
        </div>
        <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
            <div class="price">&yen;{{ item.price }} <span>(市场价{{ item.priceOrignal }})</span> </div>
            <div class="final-price">预估到手: <span>&yen;{{ final }}</span> </div>
        </div>
        <div class="cart">
            <span class="iconfont icon-cart"></span>
        </div>
    </div>

</template>

<script setup>
import src from '@/assets/'
import { ref, reactive, computed } from 'vue';
const final = computed(() => {
    return (props.item.price * (1 - props.item.discount)).toFixed(2)
})
const props = defineProps({
    item: {
        type: Object,
        dafault: {}
    }
})

</script>

<style scoped>
.goods-item {
    display: flex;
    align-items: center;
    gap: 20px;
    overflow: hidden;
}

.img {
    width: 30%;
}

img {
    width: 100%;
    border-radius: 50%;
}

.info {
    overflow: hidden;
    flex: 1;
}

.title {
    font-weight: 600;
    margin-bottom: 10px;
}

.desc {
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 10px;
    text-overflow: ellipsis;
}

.price {
    color: var(--warn-color);
    margin-bottom: 10px;
}

.price span {
    color: #666;
}

.final-price {
    color: var(--warn-color);
}

.final-price span {
    background-color: var(--warn-color);
    color: #fff;
    border-radius: 16px;
    padding: 0 10px;
}

.cart {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0022aa;
    color: #fff;
    overflow: hidden;
}
</style>