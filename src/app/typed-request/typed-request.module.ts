import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypedRequestPageRoutingModule } from './typed-request-routing.module';

import { TypedRequestPage } from './typed-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypedRequestPageRoutingModule
  ],
  declarations: [TypedRequestPage]
})
export class TypedRequestPageModule {}
