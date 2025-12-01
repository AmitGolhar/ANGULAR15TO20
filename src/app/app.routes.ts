  
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'v15', loadChildren: () => import('./versions/v15/v15-module').then(m => m.V15Module) },
      { path: 'v16', loadChildren: () => import('./versions/v16/v16-module').then(m => m.V16Module) },
      { path: 'v17', loadChildren: () => import('./versions/v17/v17-module').then(m => m.V17Module) },
      { path: 'v18', loadChildren: () => import('./versions/v18/v18-module').then(m => m.V18Module) },
      { path: 'v19', loadChildren: () => import('./versions/v19/v19-module').then(m => m.V19Module) },
      { path: 'v20', loadChildren: () => import('./versions/v20/v20-module').then(m => m.V20Module) },
      { path: '', redirectTo: 'v15', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
