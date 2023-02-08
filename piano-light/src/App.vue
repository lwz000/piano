<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/piano">Piano</router-link>
    </nav>
    <router-view />
</template>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style: none;
    user-select: none;
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
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
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
