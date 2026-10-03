import { Component } from '@angular/core';
import { Application, EventData, Switch, isAndroid } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { FechasActualizacionService } from '../services/fechas-actualizacion.service';
@Component({
  selector: 'ns-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  standalone: false,
})
export class UsuariosComponent {
  readonly registros = [
    { nombre: 'Usuario prueba 1', correo: 'usuario1@example.com', subarea: 'Desarrollo', creacion: '2024-04-09', actualizacion: '2026-08-02' },
    { nombre: 'Usuario prueba 2', correo: 'usuario2@example.com', subarea: 'Soporte', creacion: '2024-12-17', actualizacion: '2026-09-06' },
    { nombre: 'Usuario prueba 3', correo: 'usuario3@example.com', subarea: 'Marquetin', creacion: '2025-06-18', actualizacion: '2026-09-12' },
    { nombre: 'Usuario prueba 4', correo: 'usuario4@example.com', subarea: 'Contabilidad', creacion: '2024-11-29', actualizacion: '2026-09-07' },
    { nombre: 'Usuario prueba 5', correo: 'usuario5@example.com', subarea: 'Desarrollo', creacion: '2025-012-01', actualizacion: '2026-08-01' },
    { nombre: 'Usuario prueba 6', correo: 'usuario6@example.com', subarea: 'Soporte', creacion: '2025-03-23', actualizacion: '2026-09-02' },
    { nombre: 'Usuario prueba 7', correo: 'usuario7@example.com', subarea: 'Marquetin', creacion: '2026-01-12', actualizacion: '2026-09-13' },
    { nombre: 'Usuario prueba 8', correo: 'usuario8@example.com', subarea: 'Contabilidad', creacion: '2025-09-22', actualizacion: '2026-08-28' }
  ];
  readonly esAndroid = isAndroid;
  mostrarTodos = false;
  get registrosVisibles() {
    return this.esAndroid && !this.mostrarTodos ? this.registros.slice(0, 5) : this.registros;
  }
  constructor(public fechas: FechasActualizacionService) {}
  cambiarFechas(evento: EventData): void { this.fechas.mostrarFechasDeActualizacion((evento.object as Switch).checked); }
  abrirMenu(): void { (Application.getRootView() as RadSideDrawer).showDrawer(); }
}