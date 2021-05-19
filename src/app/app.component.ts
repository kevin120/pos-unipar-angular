import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    
  minhaLista: Array<ItemTodo> = [];
  
  minhaLista2: Array<ItemTodo> = [];
  
  ngOnInit(): void {
    this.minhaLista = [
      {id: 1, descricao: 'teste inicial', feita: true} 
    ];
  }

  funSalvou(item: ItemTodo) {
    alert(item.descricao);
  }
  
  
}

export interface ItemTodo {
  //? quer dizer q o id pode ser nulo
  id?: number;
  descricao: String;
  feita: boolean;

}