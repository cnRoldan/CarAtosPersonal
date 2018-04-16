import { Day} from './Day';
import { Usuario } from './Usuario';

export class Ruta {
  nombre:string;
  recorrido:string;
  ocupantes:Usuario[];
  rutahoraria:Day[];
}
