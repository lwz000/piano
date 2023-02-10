<template>
    <div class="piano">
        <ul @click="play" id="keys">
            <li :data-index="play_btn[0]">
                <div class="first-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.mp3" />
                </audio>
            </li>
            <li :data-index="play_btn[1]">
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/re1.mp3" />
                </audio>
            </li>
            <li :data-index="play_btn[2]">
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/mi1.mp3" />
                </audio>
            </li>
            <li :data-index="play_btn[3]">
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/fa1.mp3" />
                </audio>
            </li>
            <li :data-index="play_btn[4]">
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/sol1.mp3" />
                </audio>
            </li>
            <li :data-index="play_btn[5]">
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/la1.mp3" />
                </audio>
            </li>
            <li :data-index="play_btn[6]">
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/si1.mp3" />
                </audio>
            </li>
            <li :data-index="play_btn[7]">
                <div class="first-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do2.wav" />
                </audio>
            </li>
            <li :data-index="play_btn[8]">
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/re2.wav" />
                </audio>
            </li>
            <li :data-index="play_btn[9]">
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/mi2.wav" />
                </audio>
            </li>
            <li :data-index="play_btn[10]">
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/fa2.wav" />
                </audio>
            </li>
            <li :data-index="play_btn[11]">
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/sol2.wav" />
                </audio>
            </li>
            <li :data-index="play_btn[12]">
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/la2.wav" />
                </audio>
            </li>
            <li :data-index="play_btn[13]">
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/si2.wav" />
                </audio>
            </li>
            <li :data-index="play_btn[14]">
                <div class="first-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do3.mp3" />
                </audio>
            </li>
        </ul>
        <div class="change-btn">
            <p>键位更改</p>
            <ul id="color_btn">
                <li v-for="(o, i) in play_btn" :key="i">
                    <input type="text" v-model="play_btn[i]" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

let play_btn = ref([
    "W",
    "E",
    "R",
    "T",
    "Y",
    "S",
    "D",
    "F",
    "G",
    "H",
    "X",
    "C",
    "V",
    "B",
    "N",
]);
let color = ["#000000"];

window.onkeyup = function (e) {
    for (let i = 0; i < keys.children.length; i++) {
        if (e.code.split("Key")[1] == keys.children[i].dataset.index) {
            color_btn.children[i].children[0].style.background =
                "rgba(255,255,255,.3)";

            let music = keys.children[i].children[1];
            keys.children[i].style.transform = "rotateY(180deg)";
            setTimeout(() => {
                keys.children[i].style.transform = "rotateY(0deg)";
                color_btn.children[i].children[0].style.background =
                    "rgba(255,255,255)";
            }, 250);
            music.load();
            music.play();
        }
    }
};

// 播放
function play(e) {
    let parent = e.target.parentNode;
    let music = e.target.nextElementSibling;
    if (e.target.nodeName == "DIV") {
        parent.style.transform = "rotateY(180deg)";
        setTimeout(() => {
            parent.style.transform = "rotateY(0deg)";
        }, 250);
        music.load();
        music.play();
    }
}
</script>

<style scoped>
.piano {
    width: 100%;
    height: 90vh;
    overflow: hidden;
    background-color: #999999;
}
audio {
    display: none;
}
.piano > ul {
    margin: 50px auto;
    width: 600px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.piano > ul > li {
    box-sizing: border-box;
    margin: 10px;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.25s;
}
.first-btn {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border: 3px solid rgb(235 218 218);
    transform: rotate(45deg);
    position: relative;
}
.first-btn::after {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    border: 3px solid rgb(235 218 218);
    border-radius: 50%;
    width: 57px;
    height: 57px;
}
.sec-btn {
    margin: 0 auto;
    width: 55px;
    height: 55px;
    border: 3px solid rgb(235 218 218);
    transform: rotate(45deg);
}
.thr-btn {
    margin: 0 auto;
    border: 3px solid rgb(235 218 218);
    border-radius: 50%;
    width: 57px;
    height: 57px;
}
.change-btn {
    width: 280px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
}
.change-btn > p {
    padding: 20px 0;
}
.change-btn > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.change-btn > ul input {
    width: 40px;
    height: 40px;
    margin: 10px 5px;
    border: none;
    border-radius: 10px;
    text-align: center;
}
</style>