import { createWebHistory, createRouter} from 'vue-router';

import HomeComponent from '@/components/Home.vue';
import GamesComponent from '@/components/Games.vue';
import RegisterComponent from '@/components/Register.vue';
import NotFoundComponent from '@/components/NotFound.vue';

const routes = [
    {path: '/', name:'Home', component: HomeComponent},
    {path: '/games', name: 'Games', component: GamesComponent},
    {path: '/register', name: 'Register', component: RegisterComponent}
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;