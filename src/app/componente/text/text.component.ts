import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
diccionario:any = [];  
constructor(private dataService: LocalDataService) { }

ngOnInit(){
 this.getdiccionarioData()
}

async getdiccionarioData(){
  this.diccionario = await this.dataService.getValorDiccionario();
}

}
