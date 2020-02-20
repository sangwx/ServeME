import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';
import {ForgetPComponent} from './forget-p.component';

const routes: Routes = [
    {
        path: '',
        component: ForgetPComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ForgetPComponent]
})
export class ForgetPComponentModule {}
