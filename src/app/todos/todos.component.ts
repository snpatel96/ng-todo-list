import { Component } from '@angular/core';
import { Todos } from '../todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todoName!: string;
  todos: Todos[] = [];

  onAdd() {
    if (!this.todoName) return;
    this.todos.push({ name: this.todoName, isCompleted: false });
    this.todoName = '';
  }
}
