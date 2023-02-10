<template>
    <div class="hello">
        <h1>只是个标题</h1>
    </div>
</template>

<script>
export default {
    name: "index",
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin-top: 20px;
}
</style>
