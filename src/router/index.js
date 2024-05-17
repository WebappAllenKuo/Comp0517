import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/ViewA.vue"),
  },
  {
    path: "/view-b",
    component: () => import("../views/ViewB.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
