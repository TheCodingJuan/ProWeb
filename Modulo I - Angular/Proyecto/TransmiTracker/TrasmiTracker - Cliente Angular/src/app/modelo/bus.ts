import { Ruta } from './ruta';
import { Conductor } from './conductor';

export class Bus {
  constructor(
    public id: number,
    public placa: string,
    public modelo: string,
    public rutas: Ruta[],
    public conductores: Conductor[]
  ) {}
}
