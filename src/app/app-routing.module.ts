import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './public/register/register.component';
import {LoginComponent} from './public/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login', component : LoginComponent
  },
  {
    path: 'register', component : RegisterComponent
  },
    {
        path: 'tab1',
        loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
    },
  {
    path: 'setup',
    loadChildren: () => import('./public/setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./public/help/help.module').then( m => m.HelpPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
