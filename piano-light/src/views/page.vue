<template>
    <div>
        <p>vuex简化</p>
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
import store from "@/store";
import { ref } from "vue";

let message = ref("123");
setTimeout(() => {
    message.value = store.state.vuex_message;
}, 2000);

store.dispatch("use_ac", "参数2");
</script>

<style>
</style>