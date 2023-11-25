import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import EventPage from '@/views/EventPage.vue';
import EventCreatePage from '@/views/EventCreatePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: SignupPage
  },
  {
    path: '/eventos/:eventName',
    name: 'evento',
    component: EventPage
  },
  {
    path: '/novo-evento',
    name: 'Novo evento',
    component: EventCreatePage
  },
  {
    path: "/:caminho(.*)",
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/cadastro'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  if (loggedIn && publicPages.includes(to.path)) {
    return next('/home');
  }

  next();
});

export default router
