// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "aldinaldin/customer-home/home-page",
        name: "CustomerHome",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/CustomerHome.vue"),
      },
      {
        path: "aldinaldin/seller-home/home-page",
        name: "SellerHome",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/SellerHome.vue"),
      },
      {
        path: "aldinaldin/seller-home/urun-ekle",
        name: "UrunEkle",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/UrunEkle.vue"),
      },
      {
        path: "aldinaldin/customer-home/sepet",
        name: "sepet",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Basket.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
