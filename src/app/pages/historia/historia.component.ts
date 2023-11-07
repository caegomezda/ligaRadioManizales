import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';
@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent {

  constructor(private dataService: LocalDataService) { }


  miDiccionario = [
    {
      tipo: 'titulo',
      texto: 'HK6LRM 50 años',
    },
    {
      tipo: 'subtitulo',
      texto: 'Celebrando 50 años de la Liga de Radioaficionados de Manizales',
    },
    {
      tipo: 'titulo',
      texto: 'Datos de la tabla 1',
      // tabla1: [
      //   // Datos de la tabla 1
      // ],
    },
    {
      tipo: 'titulo',
      texto: 'Dirección o coordenadas del mapa',
    },
    // Agregar más elementos según sea necesario
  ];
  
  ngOnInit(){
    const valorBanner = [true, false, false, false, false, false]; // Ejemplo de un arreglo de booleanos
    this.dataService.setValorBanner(valorBanner);
    this.dataService.setValorDiccionario("historia");
  }
}
