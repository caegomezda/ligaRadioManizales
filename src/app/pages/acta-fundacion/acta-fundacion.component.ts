import { Component } from '@angular/core';
import { LocalDataService } from "../../services/local-data.service";

@Component({
  selector: 'app-acta-fundacion',
  templateUrl: './acta-fundacion.component.html',
  styleUrls: ['./acta-fundacion.component.scss']
})
export class ActaFundacionComponent {
  constructor(private dataService: LocalDataService) { }

  ngOnInit(){
    const valorBanner = [true, false, false, false, false, false]; // Ejemplo de un arreglo de booleanos
    this.dataService.setValorBanner(valorBanner);
  }
}
