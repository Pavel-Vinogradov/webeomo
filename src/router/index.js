import { createRouter, createWebHistory } from "vue-router";
//import routes from "vue-auto-routing";
// import { createRouterLayout } from "vue-router-layout";

// const RouterLayout = createRouterLayout(layout => {
//   return import("@/layouts/" + layout + ".vue");
// });
function index() {
  return import(/* webpackChunkName: "index" */ "@/pages/index.vue");
}
function about() {
  return import(/* webpackChunkName: "about" */ "@/pages/about.vue");
}
function polyce() {
  return import(/* webpackChunkName: "polyce" */ "@/pages/polyce.vue");
}
function vacancies_index() {
  return import(
    /* webpackChunkName: "vacancies-index" */ "@/pages/vacancies/index.vue"
  );
}

function vacancies__id_index() {
  return import(
    /* webpackChunkName: "vacancies-id-index" */ "@/pages/vacancies/_id/index.vue"
  );
}

const routes = [
  {
    name: "index",
    path: "/",
    component: index
  },
  {
    name: "about",
    path: "/about",
    component: about
  },
  {
    name: "polyce",
    path: "/polyce",
    component: polyce
  },
  {
    name: "vacancies",
    path: "/vacancies",
    component: vacancies_index
  },
  {
    name: "vacancies-id",
    path: "/vacancies/:id",
    component: vacancies__id_index
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/default.vue"),
      children: routes
    }
  ]
});

export default router;
