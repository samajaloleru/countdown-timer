import { createWebHistory, createRouter} from 'vue-router';

import HomeComponent from '@/components/Home.vue';
import GamesComponent from '@/components/Games.vue';
import RegisterComponent from '@/components/Register.vue';
import NotFoundComponent from '@/components/NotFound.vue';
import UsersComponent from '@/components/Users.vue';

const routes = [
    {path: '/', name:'Home', component: HomeComponent},
    {path: '/games', name: 'Games', component: GamesComponent},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/register', name: 'Register', component: RegisterComponent},
    {path: '/:pathMatch(.*)*', component: NotFoundComponent}
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;