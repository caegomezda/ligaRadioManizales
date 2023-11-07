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
    console.log(this.numeroAleatorioImg);
    this.numeroAleatorioImg = this.dataService.obtenerNumeroAleatorio();
  }


  enviarMensaje() {
    // Aquí puedes acceder a los valores del formulario utilizando this.contactForm.value
    console.log(this.contactForm.value);
    this.formService.setValorFormContac(this.contactForm.value)
    // Agrega la lógica para enviar el mensaje aquí
  }
}
