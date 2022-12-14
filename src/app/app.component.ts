import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35-EJ2';
  nombre = "";
  email = "";
  mensaje = "";
  respuesta:number = 0;
  datos:any;

  datosForm(){
    this.datos = {
      nombre:this.nombre,
      email:this.email,
      mensaje:this.mensaje,
      respuesta:this.respuesta
    };
  }
}
