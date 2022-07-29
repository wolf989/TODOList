import Vue from 'vue'
import VueRouter from 'vue-router'

import DefaultView from '@/views/DefaultView'
import TodosPage from '@/pages/TodosPage'
import CompletedPage from '@/pages/CompletedPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: DefaultView,
    children: [
      {
        path: '',
        name: 'TodosPage',
        component: TodosPage,
      },
      {
        path: 'completed',
        name: 'CompletedPage',
        component: CompletedPage,
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
