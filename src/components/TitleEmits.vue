<template>
    <div class="title-emits">
        <div>{{ props.title }}</div>
        <div @click="fn">查看更多 &gt;</div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})

const emits=defineEmits(['emitFn'])
const fn=()=>{
    console.log('title emits');
    emits('emitFn','hi.there.')
}
</script>

<style scoped>
.title-emits {
    display: flex;
    justify-content: space-between;
    background-color: #f40;
    color: #fff;
    padding: 10px;
}
</style>