import { Usuario } from "./usuario.interface";
import { Dia } from "./dia.interface";
export interface Ruta {

    destino: string;
    nombre: string;
    ocupantes: number;
    owner: Usuario;
    plazas: number;
    salida: string
    semana: Dia[];
    key$?: string;
}
