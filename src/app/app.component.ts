import { Component } from '@angular/core';
import { Todos } from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App';
  todoName!: string;
  errMessage!: boolean;
  todos: Todos[] = [
    {
      name: 'learn Javascript',
      isCompleted: false,
    },
    {
      name: 'learn Angular',
      isCompleted: false,
    },
  ];

  onAdd() {
    if (!this.todoName) return;
    this.todos.push({ name: this.todoName, isCompleted: false });
    this.todoName = '';
  }

  onDelete(event: Event) {
    const todo = event.target as HTMLInputElement;
    const parent = todo.parentElement?.parentElement;
    parent?.remove();
  }
}
