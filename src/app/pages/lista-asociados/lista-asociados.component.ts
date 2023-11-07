import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-lista-asociados',
  templateUrl: './lista-asociados.component.html',
  styleUrls: ['./lista-asociados.component.scss']
})
export class ListaAsociadosComponent {
  constructor(private dataService: LocalDataService) { }
  ngOnInit(){
    const valorBanner = [true, false, false, false, false, false]; // Ejemplo de un arreglo de booleanos
    this.dataService.setValorBanner(valorBanner);
    this.dataService.setValorDiccionario("listaAsociados");
  }
}
