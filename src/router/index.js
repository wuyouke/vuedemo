import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: Index
    },
    {
    	path:'/content/:id',
    	component: Content
    }
  ]
})
