import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { UsuariosRoutingModule } from './usuarios-routing.module';

import { UsuariosComponent } from './usuarios.component';
import { AreasComponent } from './areas/areas.component';
import { SubareasComponent } from './subareas/subareas.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        UsuariosRoutingModule
    ],
    declarations: [
        UsuariosComponent,
        AreasComponent,
        SubareasComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class UsuariosModule {
}