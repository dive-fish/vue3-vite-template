<script setup>
// script setup 不需要显式注册组件
import { Toast } from 'vant';
import HelloWorld from './components/HelloWorld.vue'

function updateCount(value) {
  Toast(`父级获取子组件emit传值：${value}`)
}

</script>

<template>
  <router-view />
  <HelloWorld msg="Hello Vue3  + vite" @updateCount="updateCount" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
