import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import World from '@/components/world/world'
import Blog from '@/components/blog/blog'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/world',
      name: 'home',
      component: World
    },
    {
      path: '/blog',
      name: 'home',
      component: Blog
    }
  ]
})
