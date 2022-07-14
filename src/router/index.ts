import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/GetStarted.vue"),
    },
    {
      path: "/info",
      component: () => import("../components/RandomAnimal.vue"),
    }
  ],
});
