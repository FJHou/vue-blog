import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import World from '@/components/world/world'
import Blog from '@/components/blog/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/:id:type',
      name: 'home',
      component: Home
    },
    {
      path: '/world',
      name: 'world',
      component: World,
      props: {route: true}
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})
