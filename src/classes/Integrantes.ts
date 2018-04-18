import { IntegrantesInterface } from "../interfaces/integrantes.interface";

export class Integrantes implements IntegrantesInterface {
  usuario: string;
  aceptado: boolean;

  constructor(usuario: string, aceptado: boolean = false) {
    this.usuario = usuario;
    this.aceptado = aceptado;
  }

  get getAceptado(): boolean {
    return this.aceptado;
  }

  get getUsuario(): string {
    return this.usuario;
  }

  set setAceptado(aceptado: boolean) {
    this.aceptado = aceptado;
  }

  set setUsuario(usuario: string) {
    this.usuario = usuario;
  }

}


