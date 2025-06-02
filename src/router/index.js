import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundComponent from '@/components/NotFoundComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: "/menu",
      name: "menu",
      // redirect: "/menu/goods",
      redirect: { name: "goods" },
      component: () => import("@/views/MenuView.vue"),
      meta: { showNav: true, title: "菜单" },
      children: [
        {
          path: "goods",
          name: "goods",
          component: () => import("@/components/Goods.vue"),
          meta: { title: "菜单-商品列表" },
        },
        {
          path: "vip",
          name: "vip",
          component: () => import("@/components/Vip.vue"),
          meta: { title: "菜单-会员卡" },
        },
        {
          path: "rank",
          name: "rank",
          component: () => import("@/components/Rank.vue"),
          meta: { title: "菜单-年度封神榜" },
        },
        {
          path: "favorite",
          name: "favorite",
          component: () => import("@/components/Favorite.vue"),
          meta: { title: "菜单-我的常点" },
        },
      ],
    },
    {
      path: '/mall',
      name: 'mall',
      component: () => import('@/views/MallView.vue'),
    },
    {
      path: '/memeber',
      name: 'memeber',
      component: () => import('@/views/MemeberView.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/MineView.vue'),
      // beforeEnter:()=>{}
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('@/views/DetailsView.vue'),
      meta: { showNav: false, title: "商品详情" },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFoundComponent
    }
  ],
  // linkActiveClass:'',
  // linkExactActiveClass:''
})

router.afterEach((to, from) => {
  console.log({ to, from });
  console.log(to.meta.title);
 
  document.title = to.meta.title || 'Luckin coffee'

})

export default router
