export class Day {

  private inicial:string;
  private hora:string;
  private salida:string;

  constructor (inicial:string) {
    this.inicial=inicial;
  }

  get _hora():string {
    return this.hora;
  }

  set _hora(value:string){
    this.hora = value;
  }

  set _salida(value:string){
    this.salida = value;
  }

}


