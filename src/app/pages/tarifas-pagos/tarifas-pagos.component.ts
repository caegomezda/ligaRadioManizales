import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-tarifas-pagos',
  templateUrl: './tarifas-pagos.component.html',
  styleUrls: ['./tarifas-pagos.component.scss']
})
export class TarifasPagosComponent {
  constructor(private dataService: LocalDataService) { }
  ngOnInit(){
    const valorBanner = [true, false, false, false, false, false]; // Ejemplo de un arreglo de booleanos
    this.dataService.setValorBanner(valorBanner);
    this.dataService.setValorDiccionario("tarifasPagos");
  }
}