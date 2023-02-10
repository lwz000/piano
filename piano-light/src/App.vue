<template>
    <div class="top">
        <p>{{ time }}</p>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/page">XXX</router-link> |
            <router-link to="/piano">Piano</router-link>
        </nav>
    </div>
    <router-view />
</template>
<script setup>
import { ref } from "vue";

let date = new Date();
console.log(date);
let time =
    date.getFullYear() +
    " 年 " +
    (date.getMonth() + 1) +
    " 月 " +
    date.getDate() +
    " 日 ";
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style: none;
    user-select: none;
    text-decoration: none;
}
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    height: 10vh;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 30px;
}

nav a {
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
