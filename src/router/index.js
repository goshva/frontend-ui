import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import RegistrationForm from '../views/RegistrationForm.vue';
import DashboardPage from '../views/DashboardPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import UserShops from '../views/UserShops.vue';
import StoreManagement from '../views/StoreManagement.vue';
import SalesAnalytics from '../views/SalesAnalytics.vue';
import WorkerPage from '../views/WorkerPage.vue';
import WorkerEditing from '../views/WorkerEditing.vue';
import NewsPage from '../views/NewsPage.vue';
import NewsInfoPage from '../views/NewsInfoPage.vue';
import UsefulMaterialsPage from '../views/UsefulMaterialsPage.vue';
import AffiliateProgram from '../views/AffiliateProgram.vue';
import UploadingData from '../views/UploadingData.vue';
import HeatMap from '../views/HeatMap.vue';
import AbcPage from '../views/AbcPage.vue';
import AdvertisingReport from '../views/AdvertisingReport.vue';

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/login',
        name: 'LoginForm',
        component: LoginForm,
        meta: { requiresAuth: false },
    },
    {
        path: '/registration',
        name: 'RegistrationForm',
        component: RegistrationForm,
        meta: { requiresAuth: false },
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: DashboardPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: ProfilePage,
        meta: { requiresAuth: true },
    },
    {
        path: '/user-shops',
        name: 'UserShops',
        component: UserShops,
        meta: { requiresAuth: true },
    },
    {
        path: '/store-management',
        name: 'StoreManagement',
        component: StoreManagement,
        meta: { requiresAuth: true },
    },
    {
        path: '/sales-analytics',
        name: 'SalesAnalytics',
        component: SalesAnalytics,
        meta: { requiresAuth: true },
    },
    {
        path: '/worker',
        name: 'worker',
        component: WorkerPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/worker/editing/:id',
        name: 'WorkerEditing',
        component: WorkerEditing,
        meta: { requiresAuth: true },
    },
    {
        path: '/news',
        name: 'NewsPage',
        component: NewsPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/news/:id',
        name: 'NewsInfoPage',
        component: NewsInfoPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/useful-materials',
        name: 'UsefulMaterials',
        component: UsefulMaterialsPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/affiliate-program',
        name: 'AffiliateProgram',
        component: AffiliateProgram,
        meta: { requiresAuth: true },
    },
    {
        path: '/uploading-data',
        name: 'UploadingData',
        component: UploadingData,
        meta: { requiresAuth: true },
    },
    {
        path: '/heat-map',
        name: 'HeatMap',
        component: HeatMap,
        meta: { requiresAuth: true },
    },
    {
        path: '/abc',
        name: 'AbcPage',
        component: AbcPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/advertising-report',
        name: 'AdvertisingReport',
        component: AdvertisingReport,
        meta: { requiresAuth: true },
    },
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     // const isAuthenticated = localStorage.getItem('authToken');

//     // Пользователь не аутентифицирован и маршрут требует аутентификации, перенаправляем на страницу логина
//     // if (!isAuthenticated && to.meta.requiresAuth) {
//     //     next('/login');
//     // } else {
//     //     next(); // Пользователь аутентифицирован или маршрут не требует аутентификации, продолжаем
//     // }
//     next();
// });

export default router;


