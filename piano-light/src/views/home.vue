<template>
    <div id="time">
        <h1>时差表</h1>
        <ul>
            <li>
                <p>国内时间</p>
                <div class="watch">
                    <img src="../assets/R.png" alt="" />
                    <i
                        class="hour line"
                        :style="{ transform: `rotate(${hour_angle - 90}deg)` }"
                    ></i>
                    <i
                        class="min line"
                        :style="{ transform: `rotate(${min_angle - 90}deg)` }"
                    ></i>
                    <i
                        class="sec line"
                        :style="{ transform: `rotate(${sec_angle - 90}deg)` }"
                    ></i>
                </div>
                <div>{{ hour }} : {{ min }} : {{ sec }}</div>
            </li>
            <li>
                <p>欧洲时间</p>
                <div class="watch">
                    <img src="../assets/R.png" alt="" />
                    <i
                        class="hour line"
                        :style="{ transform: `rotate(${hour_angle + 60}deg)` }"
                    ></i>
                    <i
                        class="min line"
                        :style="{ transform: `rotate(${min_angle - 90}deg)` }"
                    ></i>
                    <i
                        class="sec line"
                        :style="{ transform: `rotate(${sec_angle - 90}deg)` }"
                    ></i>
                </div>
                <div>
                    {{ hour - 7 < 0 ? hour - 7 + 24 : hour - 7 }} : {{ min }} :
                    {{ sec }}
                </div>
            </li>
            <li>
                <p>太平洋标准时间</p>
                <div class="watch">
                    <img src="../assets/R.png" alt="" />
                    <i
                        class="hour line"
                        :style="{ transform: `rotate(${hour_angle - 210}deg)` }"
                    ></i>
                    <i
                        class="min line"
                        :style="{ transform: `rotate(${min_angle - 90}deg)` }"
                    ></i>
                    <i
                        class="sec line"
                        :style="{ transform: `rotate(${sec_angle - 90}deg)` }"
                    ></i>
                </div>
                <div>
                    {{ hour + 8 > 24 ? hour + 8 - 24 : hour + 8 }} : {{ min }} :
                    {{ sec }}
                </div>
            </li>
        </ul>
    </div>
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
            hour: "",
            min: "",
            sec: "",
            hour_angle: "",
            min_angle: "",
            sec_angle: "",
        };
    },
    methods: {
        hourAngle() {
            this.hour_angle =
                (((this.hour > 12 ? this.hour - 12 : this.hour) * 3600 +
                    this.min * 60 +
                    this.sec) /
                    (3600 * 12)) *
                360;
        },
        minAngle() {
            this.min_angle = ((this.min * 60 + this.sec) / 3600) * 360;
        },
        secAngle() {
            this.sec_angle = (this.sec / 60) * 360;
        },
    },
    components: {
        index,
    },
    updated() {},
    mounted() {
        setInterval(() => {
            let time = new Date();
            this.hour = time.getHours();
            this.min = time.getMinutes();
            this.sec = time.getSeconds();
            this.hourAngle();
            this.minAngle();
            this.secAngle();
        }, 1000);
    },
};
</script>

<style scoped>
#time {
    margin: 20px 0;
}
#time > h1 {
    margin-bottom: 20px;
}
#time img {
    width: 200px;
}
#time > ul {
    display: flex;
    justify-content: space-evenly;
}
#time > ul > li > p {
    margin-bottom: 20px;
    font-size: 20px;
}
.watch {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
}
.line {
    display: inline-block;
    position: absolute;
    background-color: #0000007a;
}
.hour {
    width: 40px;
    height: 6px;
    left: 100px;
    top: 97px;
    transform-origin: 0px 3px;
}
.min {
    width: 50px;
    height: 4px;
    left: 100px;
    top: 98px;
    transform-origin: 0px 2px;
}
.sec {
    width: 60px;
    height: 2px;
    left: 100px;
    top: 99px;
    transform-origin: 0px 1px;
}
</style>