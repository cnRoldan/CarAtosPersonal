import { UsuarioInterface } from "../interfaces/usuario.interface";

export class Usuario implements UsuarioInterface{
  nombre:string;
  apellidos:string;
  das:string;
  avatar:string;
  movil:number;
  correo:string;
  password:string;
}
