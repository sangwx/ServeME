import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypedRequestPage } from './typed-request.page';

const routes: Routes = [
  {
    path: '',
    component: TypedRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypedRequestPageRoutingModule {}
