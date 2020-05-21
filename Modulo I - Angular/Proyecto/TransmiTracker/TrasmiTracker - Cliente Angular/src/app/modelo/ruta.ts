import { Estacion } from './estacion';
import { Dia } from './dia';

export class Ruta {

    constructor(
        public id: number,
        public codigo: string,
        public estaciones: Estacion[],
        public dias: Dia[],
        public horaInicio: any,
        public horaFin: any,
    ){};
}
