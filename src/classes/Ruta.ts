import { Day } from './Day';
import { Integrantes } from './Integrantes';
import { RutaInterface } from "../interfaces/ruta.interface";


export class Ruta implements RutaInterface {
  lati: number;
  long: number;
  destino: string;
  nombre: string;
  ocupantes: number;
  owner: string;
  plazas: number;
  origen: string;
  descripcion: string;
  semana: Day[];
  integrantes: Integrantes[];

  constructor(
    long: number,
    lati: number,
    destino: string,
    nombre: string,
    ocupantes: number,
    owner: string,
    plazas: number,
    origen: string,
    descripcion: string,
    semana: Day[]) {
      this.lati = lati;
      this.long = long;
      this.destino = destino;
      this.nombre = nombre;
      this.ocupantes = ocupantes;
      this.owner = owner;
      this.plazas = plazas;
      this.origen = origen;
      this.descripcion = descripcion;
      this.semana = semana;
      this.integrantes = [];
  }

  //getter
  public get getLati(): number {
    return this.lati;
  }
  public get getLong(): number {
    return this.long;
  }
  public get getDestino(): string {
    return this.destino;
  }
  public get getNombre(): string {
    return this.nombre;
  }
  public get getOcupantes(): number {
    return this.ocupantes;
  }
  public get getowner(): string {
    return this.owner;
  }
  public get getPlazas(): number {
    return this.plazas;
  }
  public get getOrigen(): string {
    return this.origen;
  }
  public get getDescripcion(): string {
    return this.descripcion;
  }
  public get getSemana(): Day[] {
    return this.semana;
  }
  public get getItegrantes(): Integrantes[] {
    return this.integrantes;
  }
  //setter
  public set setLati(input: number) {
    this.lati = input;
  }
  public set setLong(input: number) {
    this.long = input;
  }
  public set setDestino(input: string) {
    this.destino = input;
  }
  public set setNombre(input: string) {
    this.nombre = input;
  }
  public set setOcupantes(input: number) {
    this.ocupantes = input;
  }
  public set setowner(input: string) {
    this.owner = input;
  }
  public set setPlazas(input: number) {
    this.plazas = input;
  }
  public set setOrigen(input: string) {
    this.origen = input;
  }
  public set setDescripcion(input: string) {
    this.descripcion = input;
  }
  public set setSemana(input: Day[]) {
    this.semana = input;
  }
  public set setItegrantes(input: Integrantes[]) {
    this.integrantes = input;
  }
}
