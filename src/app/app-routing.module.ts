import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './public/register/register.component';
import {LoginComponent} from './public/login/login.component';
import { ForgetPComponent } from './public/forget-p/forget-p.component';
import { UpdatePComponent } from './public/update-p/update-p.component';



const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
    {
        path: '',
        loadChildren: () => import('./tabs-vendor/tabs-vendor.module').then(m => m.TabsVendorPageModule)
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
        path: 'forget', component : ForgetPComponent
    },
  {
    path: 'help',
    loadChildren: () => import('./public/help/help.module').then( m => m.HelpPageModule)
  },
    {
        path: 'update', component : UpdatePComponent
    },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
