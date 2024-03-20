import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular'; //Agregar el public antes del title, y deespues agregar los : mas el string, permite que se mejore la legibilidad del codigo. Asi mismo podre invocar el titulo, entros archivos
                                                      // esta relacion solo se podra hacer entre componentes de la misma carpeta

/*   public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  // decreaseBy( value: number ):void {
  //   this.counter -= value;
  // }

  resetBy( value: number ):void {
    this.counter = value;
  }
 */
}
