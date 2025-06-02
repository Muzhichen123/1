<template>
    <div class="title">
        <div>{{ props.title }}</div>
        <div @click="fn">查看更多 &gt;</div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    fn: {
        type: Function,
        default: () => { }
    }
})
</script>

<style scoped>
.title {
    display: flex;
    justify-content: space-between;
    background-color: #f40;
    color: #fff;
    padding: 10px;
}
</style>