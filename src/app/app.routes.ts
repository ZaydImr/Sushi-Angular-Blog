import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/global-layout/global.component').then(res => res.GlobalComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home.component').then(res => res.HomeComponent)
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./layouts/auth-layout/auth.component').then(res => res.AuthComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/auth/login/login.component').then(res => res.LoginComponent)
            }
        ]
    },
    // {
    //     path: 'register',
    //     loadComponent: () => import('./layouts/auth/auth.component').then(res => res.AuthComponent),
    //     children: [
    //         {
    //             path: '',
    //             loadComponent: () => import('./pages/auth/register/register.component').then(res => res.RegisterComponent)
    //         }
    //     ]
    // },
    {
        path: 'forgot-password',
        loadComponent: () => import('./layouts/auth-layout/auth.component').then(res => res.AuthComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/auth/forgot-password/forgot-password.component').then(res => res.ForgotPasswordComponent)
            },
            {
                path: '{id}',
                loadComponent: () => import('./pages/auth/forgot-password/forgot-password.component').then(res => res.ForgotPasswordComponent)
            }
        ]
    },
    {
        path : 'admin', 
        loadComponent : () => import('./layouts/admin-layout/admin-layout.component').then(res => res.AdminLayoutComponent),
        children: [
            
        ]
    },
    {
        path: 'unauthorized',
        loadComponent: () => import('./pages/error/unauthorized/unauthorized.component').then(res => res.UnauthorizedComponent)
    },
    {
        path: 'forbidden',
        loadComponent: () => import('./pages/error/forbidden/forbidden.component').then(res => res.ForbiddenComponent)
    },
    {
        path: 'not-found',
        loadComponent: () => import('./pages/error/not-found/not-found.component').then(res => res.NotFoundComponent)
    },    
    {
        path: '**',
        redirectTo: 'not-found'
    }
];