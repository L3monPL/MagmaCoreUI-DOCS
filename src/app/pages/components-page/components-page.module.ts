import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPageComponent } from './components-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../../components/components/card/card.component';

const routes: Routes = [
  {
    path: '', 
    component:  ComponentsPageComponent,
    children: [
      {
        path: 'card',
        loadComponent: () => import('../../components/components/card/card.component').then(c=>c.CardComponent),
      }
    ]
  }
]

@NgModule({
  declarations: [
    ComponentsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardComponent
  ],
  exports: [
    ComponentsPageComponent
  ]
})
export class ComponentsPageModule { }
