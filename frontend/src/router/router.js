import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import CreateVacationPage from '../views/CreateVacation.vue';
import ListAllVacationPage from '../views/ListAllVacation.vue';
import ProfilePage from '../views/Profile.vue';
import LoginPage from '../views/Login.vue';

const routes = [

    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/createVacation',
        name: 'CreateVacation',
        component: CreateVacationPage,
    },
    {
        path: '/listAllVacation',
        name: 'ListAllVacation',
        component: ListAllVacationPage,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfilePage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: { hideSidebar: true },
    }
    
];

const router = createRouter({

    history: createWebHistory(),
    routes,

});
  
export default router;
  