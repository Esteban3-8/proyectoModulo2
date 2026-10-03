import { Component } from '@angular/core';
import { Application, EventData, Switch } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { FechasActualizacionService } from '../../services/fechas-actualizacion.service';
@Component({
  selector: 'ns-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
  standalone: false,
})
export class AreasComponent {

  readonly registros = [

    { nombre: 'IT', codigo: 'AR-001', actualizacion: '2026-05-02' },
    { nombre: 'RRHH', codigo: 'AR-002', actualizacion: '2026-08-28' },
    { nombre: 'Finanzas', codigo: 'AR-003', actualizacion: '2026-07-13' },
    { nombre: 'Operaciones', codigo: 'AR-004', actualizacion: '2026-09-10' },
    { nombre: 'Area comercial', codigo: 'AR-005', actualizacion: '2026-01-06' },
    { nombre: 'Gerencia', codigo: 'AR-006', actualizacion: '2026-09-09' }
    
  ];

  constructor(public fechas: FechasActualizacionService) {}
  cambiarFechas(evento: EventData): void { this.fechas.mostrarFechasDeActualizacion((evento.object as Switch).checked); }
  abrirMenu(): void { (Application.getRootView() as RadSideDrawer).showDrawer(); }
}