// import _ from "../node_modules/lodash-es/lodash.default.js";
import _ from "lodash-es";
import { createApp } from "vue";
import { sum } from "./js/math.js";
import mul from "./ts/mul.ts";
import App from './vue/App.vue';

import "./css/style.css";
import "./css/title.less";

import avatarUrl from "./img/avatar.png";

console.log("Hello Vite!");
console.log(sum(10, 20));
console.log(_.join(["hello", "vite"], "-"));
console.log(mul(10, 20));

const titleEl = document.createElement('div');
titleEl.className = "title";
titleEl.innerHTML = "Hello Vite";

const imgEl = document.createElement('img');
imgEl.src = avatarUrl;

document.body.appendChild(titleEl);
document.body.appendChild(imgEl);

createApp(App).mount('#app');
