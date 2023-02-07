<template>
    <div class="about">
        <button @click="sing">test</button>
        <p>{{ AAAA }}</p>
    </div>
    <div>
        <audio src=""></audio>
    </div>
</template>

<script setup>
import { ref } from "vue";

let AAAA = ref(123);

function sing() {
    console.log("123");
}
</script>

<style>
</style>