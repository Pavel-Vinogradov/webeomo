function index() {
  return import(/* webpackChunkName: "index" */ '@/pages/index.vue')
}
function about() {
  return import(/* webpackChunkName: "about" */ '@/pages/about.vue')
}
function polyce() {
  return import(/* webpackChunkName: "polyce" */ '@/pages/polyce.vue')
}
function vacancies_index() {
  return import(
    /* webpackChunkName: "vacancies-index" */ '@/pages/vacancies/index.vue'
  )
}
function policy_policy() {
  return import(
    /* webpackChunkName: "policy-policy" */ '@/pages/policy/policy.vue'
  )
}
function vacancies__id_index() {
  return import(
    /* webpackChunkName: "vacancies-id-index" */ '@/pages/vacancies/_id/index.vue'
  )
}

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
  {
    name: 'about',
    path: '/about',
    component: about,
  },
  {
    name: 'polyce',
    path: '/polyce',
    component: polyce,
  },
  {
    name: 'vacancies',
    path: '/vacancies',
    component: vacancies_index,
  },
  {
    name: 'policy-policy',
    path: '/policy/policy',
    component: policy_policy,
  },
  {
    name: 'vacancies-id',
    path: '/vacancies/:id',
    component: vacancies__id_index,
  },
]
