import { Component } from '@angular/core';
import { LocalDataService } from "../../services/local-data.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactEmailService } from 'src/app/services/contact-email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent {
  numeroAleatorioImg:Number=1;
  contactForm: FormGroup;
  constructor(
    private dataService: LocalDataService,
    private formBuilder: FormBuilder,
    private formService: ContactEmailService,
    ) {
    this.contactForm = this.formBuilder.group({
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: '',
      politicas: ''
    });
   }

  ngOnInit() {
    this.numeroAleatorioImg = this.dataService.obtenerNumeroAleatorio();
  }

  enviarMensaje() {
    this.formService.setValorFormContac(this.contactForm.value)
  }
}
