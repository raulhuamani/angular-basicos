import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

   heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan América'];
   heroeBorrado: string = '';
   borrarHeroe() {
     console.log('Borrando héroee......');
     this.heroeBorrado = this.heroes.shift() || '';
   }
}
