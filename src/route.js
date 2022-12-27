import { createWebHistory, createRouter} from 'vue-router';

import HomeComponent from '@/components/Home.vue';
import GamesComponent from '@/components/Games.vue';
import NotFoundComponent from '@/components/NotFound.vue';

const routes = [
    {path: '/', name:'Home', component: HomeComponent},
    {path: '/games', name: 'Games', component: GamesComponent}
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;