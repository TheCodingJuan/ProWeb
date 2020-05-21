import { Bus } from './bus';

export class Conductor {
  constructor(
    public id: number,
    public nombre: string,
    public cedula: string,
    public telefono: number,
    public direccion: string,
    public buses: Bus[]
  ) {}
}
