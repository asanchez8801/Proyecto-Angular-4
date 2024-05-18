import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {

  formularioCredenciales = new FormGroup({
    user: new FormControl(""),
    password: new FormControl(""),
  })
  manejarEnvio(){
    console.log("formularioCredenciales: ", this.formularioCredenciales.value);
  }
}
