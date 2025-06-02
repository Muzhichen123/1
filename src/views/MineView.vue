<template>
    <div class="mine-view">
        <h1>mine view</h1>
        <div>path{{$route.path}}</div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route=useRoute()
console.log(route);
console.log(route.name);

</script>

<style scoped></style>