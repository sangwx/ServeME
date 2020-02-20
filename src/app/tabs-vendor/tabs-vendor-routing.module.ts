import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsVendorPage } from './tabs-vendor.page';


const routes: Routes = [
    {
        path: 'tabs-vendor',
        component: TabsVendorPage,
        children: [
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab4/tab4.module').then(m => m.Tab4PageModule)
                    }
                ]
            },

            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab3/tab3.module').then(m => m.Tab3PageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs-vendor/tab4',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs-vendor/tab4',
        pathMatch: 'full'
    }
];

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsVendorPageRoutingModule {}
