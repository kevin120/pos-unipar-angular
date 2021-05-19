import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemTodo } from './item-todo.model';

@Component({
  selector: 'app-table-todo',
  templateUrl: './table-todo.component.html',
  styleUrls: ['./table-todo.component.scss']
})
export class TableTodoComponent implements OnInit {
  texto = '';

  /*texto?: String;

  constructor(){
    this.texto = undefined;
  }*/

  @Input()
  lista: Array<ItemTodo> = [];  

  @Input()
  minlength: number = 0;

  @Input()
  cor: string = 'danger';
  
  @Output()
  salvou: EventEmitter<ItemTodo> = new EventEmitter<ItemTodo>();

  addTarefa() {
    if (this.texto !== undefined && this.texto.length > this.minlength) {
      const item: ItemTodo = {
        feita: false,
        descricao: this.texto,
        id: this.lista.length + 1
      };

      this.lista.push(item);
      this.texto = '';

      //Emit para quem chamou
      this.salvou.emit(item);
    }
  }

  deleteTodo(item: ItemTodo) {
    const idx = this.lista.findIndex(i => i.id === item.id);

    this.lista.splice(idx,1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
