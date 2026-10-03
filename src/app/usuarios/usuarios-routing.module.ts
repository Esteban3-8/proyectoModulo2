import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { UsuariosComponent } from './usuarios.component';
import { AreasComponent } from './areas/areas.component';
import { SubareasComponent } from './subareas/subareas.component';

const routes: Routes = [
    {
        path: '',
        component: UsuariosComponent
    },

    {
        path: 'areas',
        component: AreasComponent
    },
    
    {
        path: 'subareas',
        component: SubareasComponent
    }
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class UsuariosRoutingModule {
}