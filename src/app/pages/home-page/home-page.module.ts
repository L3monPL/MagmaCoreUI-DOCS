import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeaderComponent } from '../../components/home/home-header/home-header.component';
import { HomeComponentsSectionComponent } from '../../components/home/home-components-section/home-components-section.component';

const routes: Routes = [
  {
    path: '', 
    component:  HomePageComponent,
    children: [
      // {
        // path: 'components',
        // loadChildren: () => import('../list-admins-page/list-admins-page.module').then(c=>c.ListAdminsPageModule),
      // }
    ]
  }
]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeHeaderComponent,
    HomeComponentsSectionComponent  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
