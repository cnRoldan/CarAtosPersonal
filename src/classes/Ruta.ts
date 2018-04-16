import { Day} from './Day';
import { Usuario } from './Usuario';

export class Ruta {
  destino: string;
  nombre: string;
  ocupantes: number;
  owner: Usuario;
  plazas: number;
  salida: string;
  descripcion:string;
  semana: Day[];

  constructor (  destino: string,nombre: string,ocupantes: number,owner: Usuario,plazas: number,salida: string,descripcion:string,semana: Day[]) {
    this.destino=destino;
    this.nombre=nombre;
    this.ocupantes=ocupantes;
    this.owner=owner;
    this.plazas=plazas;
    this.salida=salida;
    this.descripcion=descripcion;
    this.semana=semana;
  }
}
