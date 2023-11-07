import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  private textData:any = {}
  private dataUrl = 'assets/data.json'; // Ruta al archivo JSON
  constructor( private http: HttpClient,) { }

  private valorBanner: boolean[] = [];
  private valorCard: boolean[] = [];
  private valorDiccionario:string = "";

  setValorDiccionario(diccionario:any): void {
    this.valorDiccionario = diccionario;
    this.getTextData()
  }

  async getValorDiccionario() {
    let result = this.textData[this.valorDiccionario]
    return result;
  }

  setValorBanner(valor: boolean[]): void {
    this.valorBanner = valor;
  }

  getValorBanner(): boolean[] {
    return this.valorBanner;
  }

  setValorCard(valor: boolean[]): void {
    this.valorCard = valor;
  }

  getValorCard(): boolean[] {
    return this.valorCard;
  }

  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  obtenerNumeroAleatorio(): number {
    return this.generarNumeroAleatorio(1, 4);
  }

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  async getTextData(){
    try {
      this.textData = await this.getData().toPromise();
      console.log("this.textData", this.textData);
    } catch (error) {
      // Maneja los errores, por ejemplo:
      console.error('Error al cargar los datos:', error);
    }
  }
}
