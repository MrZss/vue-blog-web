import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载
const index = () => import ('@/views/About.vue')
Vue.use(Router)

export default new Router({
    router: [
        {
            path: '/index',
            name: 'index',
            component: index
        }
    ]
})