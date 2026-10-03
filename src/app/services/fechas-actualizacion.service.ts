import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class FechasActualizacionService {
  mostrarFechas = false;
  mostrarFechasDeActualizacion(activar: boolean): void { this.mostrarFechas = activar; }
}