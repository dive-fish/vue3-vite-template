<script setup>
// https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
// beforeCreate created 废弃
import { ref, watch, computed, getCurrentInstance, onMounted } from "vue";
// Vue 2.x Vue.prototype的代替api setup没有this指向
// 用 getCurrentInstance 获取 globalProperties() 参数
const { appContext: { config: { globalProperties: { axios } } } } = getCurrentInstance();

import { Toast } from 'vant';

// props
defineProps({
  msg: String,
});
// <script setup> 中可以使用顶层 await
// const reqest = await axios.get();
console.log(axios);
// emit
const emit = defineEmits(['updateCount']);
// 计算属性
let vite = computed(() => `computed: count: ${count.value + 1024}`);
// ref响应式绑定
const count = ref(0);

function addCount() {
  count.value++;
  emit("updateCount", count.value);
}


// 监控
watch(
  count,
  (newVal, oldVal) => {
    console.log('监听器：', newVal, oldVal)
  },
  {
    deep: true
  }
)

// 生命周期
onMounted(() => {
  Toast('Component is mounted!');
})

</script>

<template>
  <!-- vue3允许template下有多个标签 -->
  <h1>{{ msg }}</h1>
  <p>{{ vite }}</p>
  <button type="button" @click="addCount">count is: {{ count }}</button>
</template>

<style lang="less" scoped>
</style>
