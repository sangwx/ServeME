import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./public/register/register.module').then( m => m.RegisterPageModule)
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
