import { createRouter, createWebHistory } from "vue-router";
import Courses from "../views/Courses.vue";
import Summary from "../views/Summary.vue";

const routes = [
  { path: "/", component: Courses },
  // TODO: สร้าง Route สำหรับหน้า Summary
  { path: "/summary", component: Summary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
