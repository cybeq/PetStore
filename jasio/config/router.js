import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from "@/components/widgets/LoginComponent.vue";
import PanelComponent from "@/components/widgets/PanelComponent.vue";
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const routes = [
    // Your existing routes go here
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
        meta: {
            requiresAuth: true
        },
        beforeEnter: guest
    },
    {
        path:'/panel',
        name:'panel',
        component: PanelComponent,
        meta: {
            requiresAuth: true
        },
        beforeEnter: auth
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router