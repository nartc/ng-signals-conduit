import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../home/home.component'),
    },
    {
        path: 'login',
        loadComponent: () => import('../login/login.component'),
    },
    {
        path: 'register',
        loadComponent: () => import('../register/register.component'),
    },
];

export default routes;
