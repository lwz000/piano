<template>
    <div class="piano">
        <img src="@/assets/background.jpg" class="bg" alt="" />
        <ul @click="play" id="keys">
            <li>
                <div class="first-btn" data-index="w"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/re1.wav" />
                </audio>
            </li>
            <li>
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/mi1.wav" />
                </audio>
            </li>
            <li>
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/fa1.wav" />
                </audio>
            </li>
            <li>
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/sol1.wav" />
                </audio>
            </li>
            <li>
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="first-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="thr-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="sec-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
            <li>
                <div class="first-btn"></div>
                <audio controls="controls">
                    <source src="@/assets/do1.wav" />
                </audio>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";

window.onkeyup = function (e) {
    console.log(e.code);
    for (i in keys.children) {
        console.log(i);
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
}
.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    filter: brightness(0.8) contrast(125%);
}
audio {
    display: none;
}
ul {
    margin: 50px auto;
    width: 600px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
ul > li {
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
</style>