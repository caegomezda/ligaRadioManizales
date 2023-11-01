import { Component } from '@angular/core';
import { LocalDataService } from "../../services/local-data.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  constructor(private dataService: LocalDataService) { }

  ngOnInit(){
    const valorBanner = [true, false, true, false, true, true]; // Ejemplo de un arreglo de booleanos
    this.dataService.setValorBanner(valorBanner);
  }
}
