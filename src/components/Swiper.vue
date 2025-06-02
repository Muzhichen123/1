<template>
    <div class="swiper">
        <!-- <img src="@/assets/swiper/swiper0.jpg" alt="" v-show="indImg==0">
        <img src="@/assets/swiper/swiper1.jpg" alt="" v-show="indImg==1">
        <img src="@/assets/swiper/swiper2.jpg" alt="" v-show="indImg==2">
        <img src="@/assets/swiper/swiper3.jpg" alt="" v-show="indImg==3">
        <img src="@/assets/swiper/swiper4.jpg" alt="" v-show="indImg==4"> -->
        <template v-for="(item,ind) in imgs">
            <img :src="item" alt="" v-show="indImg==ind">
        </template>
    </div>
</template>

<script setup>
import { ref ,onMounted,onUnmounted} from 'vue';
const indImg=ref(1)
const imgs=ref(['/swiper/swiper0.jpg','/swiper/swiper1.jpg','/swiper/swiper2.jpg','/swiper/swiper3.jpg','/swiper/swiper4.jpg'])
// %
// indImg.value++
// if(indImg.value>4){
//     indImg.value=0
// }
// indImg.value=indImg.value%5
const fn=()=>{
    indImg.value++
    indImg.value=indImg.value%5
}
let timer=setInterval(fn,3000)
// lifecycle

onMounted(() => {
    console.log('swiper mounted');

})
onUnmounted(() => {
    console.log('swiper unmounted');

})
</script>

<style scoped></style>