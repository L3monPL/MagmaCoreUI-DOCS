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
      },
      {
        path: 'pagination',
        loadComponent: () => import('../../components/components/pagination/pagination.component').then(c=>c.PaginationComponent),
      },
      {
        path: 'datepicker',
        loadComponent: () => import('../../components/components/datepicker/datepicker.component').then(c=>c.DatepickerComponent),
      },
      {
        path: 'progress-spinner',
        loadComponent: () => import('../../components/components/progress-spinner/progress-spinner.component').then(c=>c.ProgressSpinnerComponent),
      },
      {
        path: 'timeline',
        loadComponent: () => import('../../components/components/timeline/timeline.component').then(c=>c.TimelineComponent),
      },
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
