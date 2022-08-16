import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  userRegistrado = false;

  guardarNombre(value:String) {

  }

  textRegistro = 'No hay nadie registrado';

  setUserRegistrado(event: Event) {
    if ((<HTMLInputElement>event.target).value == 'si') {
      // alert((<HTMLInputElement>event.target).value)
      this.textRegistro = 'Se a registrado alguien';
    } else {
      this.textRegistro = 'No hay nadie registrado';
    }
  }
}
