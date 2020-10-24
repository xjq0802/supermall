import Vue from 'vue'
import vueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const Categories = () => import('views/categoies/Categories')
const Cart = () => import('views/cart/Cart')


Vue.use(vueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/categories',
        component: Categories
    }
]


const router = new vueRouter({
    routes,
    mode: 'history'
})

export default router