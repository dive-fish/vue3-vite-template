<template>
  <div id="index">
    <img src="../assets/images/logo.png" @click="a" />
  </div>
  <van-rate v-model="value" />
  <p @click="b($event)">{{ hello }} {{  name }}</p>
</template>
<script>
import { ref } from "vue";
import { Rate, Toast } from 'vant';
export default {
  components: {
    [Rate.name]: Rate
  },
  props: {
    name: {
      default: "vite",
      type: String
    }
  },
  // setup 没有this
  setup(props, { attrs, slots, emit, expose }) {
    const value = ref(3);

    console.log(props);
    // $attrs
    console.log(attrs);
    // $slots
    console.log(slots);
    // $emit
    console.log(emit);
    // 把值暴露给父级 ref="a" 
    // a.value.xx
    console.log(expose);

    const b = (e) => {
      console.log(e);
      console.log(this);
    }
    return { value, b };
  },
  methods: {
    a() {
      console.log(this.value);
      this.value = 1
    }
  },
  watch: {
    value(n, o) {
      Toast(`watch: new:${n}  old:${o}`);
    }
  },
  computed: {
    hello() {
      return "hello"
    }
  }
}
</script>
<style lang="less" scoped>
</style>