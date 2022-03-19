import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos: ToDo[] = [];
  newTodo: string;
  descriptionTodo: string;
  infoToModal:any = {name:'', description:'', isCompleted: false};

  constructor() { }

  ngOnInit(): void {
  }

  saveToDo() {
    if (this.newTodo) {
      let todo = new ToDo();
      todo.name = this.newTodo;
      todo.description = this.descriptionTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Por favor ingresa una tarea');
    }
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id: number){
    this.todos = this.todos.filter((v,i)=> i !== id)
  }

  infoModal(info:ToDo){
    console.log(info);
    this.infoToModal.name = info.name
    this.infoToModal.description = info.description
    this.infoToModal.isCompleted = info.isCompleted
  }

}
