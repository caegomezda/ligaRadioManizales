import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  constructor() { }

  private valorBanner: boolean[] = [];
  private valorCard: boolean[] = [];
  private valorDiccionario:string = "";

  private textData:any = {
    "historia": [
      {
        "tipo": "titulo",
        "texto": "HK6LRM 50 años"
      },
      {
        "tipo": "subtitulo",
        "texto": "Celebrando 50 años de la Liga de Radioaficionados de Manizales"
      },
      {
        "tipo": "titulo",
        "texto": "Datos de la tabla 1 prueba"
      }
    ],
    "estatutosLiga": [
      {
        "tipo": "titulo",
        "texto": "Estatutos Liga"
      },
      {
        "tipo": "subtitulo",
        "texto": "Celebrando 50 años de la Liga de Radioaficionados de Manizales"
      },
      {
        "tipo": "titulo",
        "texto": "Datos de la tabla 1 prueba"
      }
    ]
}


  setValorDiccionario(diccionario:any): void {
    this.valorDiccionario = diccionario;
  }

  async getValorDiccionario() {
    let result = await this.textData[this.valorDiccionario];
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
}
