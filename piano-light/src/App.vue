<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/piano">About</router-link>
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
    background-color: rgba(255, 255, 255, 0.1);
    padding: 30px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
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
