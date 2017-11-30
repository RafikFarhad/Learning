import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HelloWorld from '../components/HelloWorld.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard'
import Update from '../components/Update'
import View from '../components/View'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter (to, form, next) {
                if (store.getters.isAuthenticated) next()
                else next({name: 'login'})
            }
        },
        {
            path: '/update',
            name: 'update',
            component: Update,
            beforeEnter (to, form, next) {
                if (store.getters.isAuthenticated) next()
                else next({name: 'login'})
            }
        },
        {
            path: '/view',
            name: 'view',
            component: View,
            beforeEnter (to, form, next) {
                if (store.getters.isAuthenticated) next()
                else next({name: 'login'})
            }
        }
    ]
})
