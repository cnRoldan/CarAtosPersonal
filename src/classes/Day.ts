export class Day {
  private horaLl:string;
  private horaS:string;
  private nombre:string;

  constructor (nombre:string) {
    this.nombre=nombre;
  }

  get _horaLl():string {
    return this.horaLl;
  }

  set _horaLl(value:string){
    this.horaLl = value;
  }

  set _salidaS(value:string){
    this.horaS = value;
  }

}


