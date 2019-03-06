import Vue from 'vue'
import Router from 'vue-router'
import BikesComponent from '@/components/BikesComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BikesComponent',
      component: BikesComponent
    }
  ]
})
