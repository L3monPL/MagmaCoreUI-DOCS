import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPageComponent } from './components-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component:  ComponentsPageComponent,
    children: [
      {
        path: 'card',
        loadComponent: () => import('../../components/components/card/card.component').then(c=>c.CardComponent),
      },
      {
        path: 'input',
        loadComponent: () => import('../../components/components/input/input.component').then(c=>c.InputComponent),
      },
      {
        path: 'table',
        loadComponent: () => import('../../components/components/table/table.component').then(c=>c.TableComponent),
      },
      {
        path: 'button',
        loadComponent: () => import('../../components/components/button/button.component').then(c=>c.ButtonComponent),
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
  ],
  exports: [
    ComponentsPageComponent
  ]
})
export class ComponentsPageModule { }
