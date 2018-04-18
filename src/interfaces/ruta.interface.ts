import { UsuarioInterface } from "./usuario.interface";
import { DayInterface } from "./dia.interface";
import { IntegrantesInterface } from "./integrantes.interface";


export interface RutaInterface{
    lati:number;
    long:number;
    destino: string;
    nombre: string;
    ocupantes: number;
    owner: string;
    plazas: number;
    origen: string;
    descripcion:string;
    semana: DayInterface[];
    integrantes:IntegrantesInterface[];
}
