import { DayInterface } from "../interfaces/dia.interface";

export class Day implements DayInterface {
  
  horaLl: string;
  horaS: string;
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  get getHoraLl(): string {
    return this.horaLl;
  }

  get getHoraS(): string {
    return this.horaS;
  }

  set setHoraLl(value: string) {
    this.horaLl = value;
  }

  set setSalidaS(value: string) {
    this.horaS = value;
  }

}


