export class Day {
  private horaLl:string;
  private horaS:string;
  private nombre:string;

  constructor (nombre:string) {
    this.nombre=nombre;
  }

  get getHoraLl():string {
    return this.horaLl;
  }

  get getHoraS():string {
    return this.horaS;
  }

  set setHoraLl(value:string){
    this.horaLl = value;
  }

  set setSalidaS(value:string){
    this.horaS = value;
  }

}


