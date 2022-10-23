import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: String[] = ['Ironman','Hulk','Hawkeye','Spiderman','Antman'];
  borrado:String = '';

  borrarHeroe():void{
    this.borrado = this.heroes.shift() || '';
  }
}
