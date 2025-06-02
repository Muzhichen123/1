<template>
    <div class="title-slot">
        <!-- placeholder -->
        <slot></slot>
        <slot name="title"></slot>
        <slot name="left"></slot>
        <span>&gt;</span>
    </div>
</template>

<script setup>

</script>

<style scoped>

.title-slot{
    display: flex;
    justify-content: space-between;
    background-color: #f40;
    color: #fff;
    padding: 0 10px;
}

</style>