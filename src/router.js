import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/page/1",
  },
  {
    path: "/page/:id",
    name: "Page",
    component: () => import("@/views/MainView.vue"),
  },
  {
    path: "/liked",
    name: "Liked",
    component: () => import("@/views/LikedCatsView.vue"),
  },

  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/foods",
    name: "Food",
    component: () => import("@/views/FoodView.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/SearchCatView.vue"),
  },
  {
    path: "/videos",
    name: "Videos",
    component: () => import("@/views/VideosView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotfoundOne",
    component: () => import("@/views/NotfoundView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
