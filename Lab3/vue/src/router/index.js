import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/workspace',
        name: 'Workspace',
        props: true,
        component: () => import('../views/Workspace.vue')
    },
    {
        path: '/my_account',
        name: 'My account',
        component: () => import('../views/MyAccount')
    },
    {
        path: '/sign_in',
        name: 'Sign In',
        component: () => import('../views/SignIn')
    },
    {
        path: '/sign_up',
        name: 'Sign Up',
        component: () => import('../views/SignUp')
    },
    {
        path: '/full_chords',
        name: 'Full chords',
        props: true,
        component: () => import('../views/FullChords')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
