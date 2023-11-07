import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';
@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent {

  constructor(private dataService: LocalDataService) { }
  ngOnInit(){
    const valorBanner = [true, false, false, false, false, false]; // Ejemplo de un arreglo de booleanos
    this.dataService.setValorBanner(valorBanner);
    this.dataService.setValorDiccionario("historia");
  }
}
