export default [
  {
    path: "/yoga/",
    component: () => import(/* webpackChunkName: "page--src--pages--yoga-vue" */ "/Users/jeremieaubut/GitHub/IVY-gridsome/src/pages/yoga.vue")
  },
  {
    path: "/location/",
    component: () => import(/* webpackChunkName: "page--src--pages--location-vue" */ "/Users/jeremieaubut/GitHub/IVY-gridsome/src/pages/location.vue")
  },
  {
    path: "/evenements/",
    component: () => import(/* webpackChunkName: "page--src--pages--evenements-vue" */ "/Users/jeremieaubut/GitHub/IVY-gridsome/src/pages/evenements.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jeremieaubut/GitHub/IVY-gridsome/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/jeremieaubut/GitHub/IVY-gridsome/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jeremieaubut/GitHub/IVY-gridsome/node_modules/gridsome/app/pages/404.vue")
  }
]

