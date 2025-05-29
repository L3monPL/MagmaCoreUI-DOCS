import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then(c=>c.HomePageModule)
    },
    {
        path: 'components',
        loadChildren: () => import('./pages/components-page/components-page.module').then(c=>c.ComponentsPageModule)
    }
];
