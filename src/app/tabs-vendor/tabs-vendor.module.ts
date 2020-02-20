import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsVendorPageRoutingModule } from './tabs-vendor-routing.module';

import { TabsVendorPage } from './tabs-vendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsVendorPageRoutingModule
  ],
  declarations: [TabsVendorPage]
})
export class TabsVendorPageModule {}
