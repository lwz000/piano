<template>
    <div class="home">
        <index msg="Welcome to Your Vue.js App" />
        <div>
            <p>{{ message }}</p>
            <input
                type="text"
                placeholder="请输入传输的内容"
                v-model="message"
            />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import index from "@/components/HelloWorld.vue";

export default {
    name: "home",
    data() {
        return {
            message: "",
        };
    },
    components: {
        index,
    },
    updated() {
        console.log(this.data);
    },
};
</script>
