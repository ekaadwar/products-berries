import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "@/views/ProductsView.vue";
import BerriesView from "@/views/BerriesView.vue";

const routes = [
  { path: "/", redirect: "/products" },
  { path: "/products", component: ProductsView },
  { path: "/berries", component: BerriesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
