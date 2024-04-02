import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',///aqui agregamos el dbz, puesto que es importante diferenciar de donde proviene cada modulo y evitar confusiones
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() //Con este decoirador input, lo que hicimos fue meter las entradas que vienen desde el main-pages-component
  public characterList: Character[] = [];


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  // onDelete: number = 0;

  onDeleteCharacter(id?: string): void {
    // TODO: Emitir el ID del personaje
    if  ( !id ) return;
    console.log(id);
    this.onDelete.emit(id);
  }

}
