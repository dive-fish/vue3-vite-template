import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "index",
    component: import("@views/index.vue"),
    meta: {
      title: "主页"
    },
    chidren: []
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})